import "server-only";
import { serverConfig, emailEnabled } from "./config";

// Sends email through Resend's REST API. Without RESEND_API_KEY and
// EMAIL_FROM set, messages are printed to the server log instead, so the
// site keeps working (and is testable) before email is connected.

export interface EmailMessage {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: string; contentType?: string }[];
}

export async function sendEmail(message: EmailMessage): Promise<boolean> {
  const recipients = (Array.isArray(message.to) ? message.to : [message.to]).filter(Boolean);
  if (recipients.length === 0) {
    console.warn(`[email] No recipient for "${message.subject}" — set NOTIFY_EMAIL to receive notifications.`);
    return false;
  }

  if (!emailEnabled()) {
    console.info(
      `[email not configured] Would send "${message.subject}" to ${recipients.join(", ")}\n${message.text}`,
    );
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serverConfig.email.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: serverConfig.email.from,
        to: recipients,
        subject: message.subject,
        html: message.html,
        text: message.text,
        reply_to: message.replyTo,
        attachments: message.attachments?.map((attachment) => ({
          filename: attachment.filename,
          content: Buffer.from(attachment.content).toString("base64"),
          content_type: attachment.contentType,
        })),
      }),
    });
    if (!response.ok) {
      console.error(`[email] Resend rejected "${message.subject}": ${await response.text()}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`[email] Failed to send "${message.subject}"`, error);
    return false;
  }
}
