import { siteConfig, whatsappLink } from "@/lib/site-config";

// Phone / email / address / hours / ABN list. Values left empty in
// lib/site-config.ts are skipped, so nothing unconfirmed is ever shown.
export function ContactDetails({
  className = "",
  linkClassName = "",
}: {
  className?: string;
  linkClassName?: string;
}) {
  const { phone, email, address, hours, whatsappDisplay } = siteConfig.contact;
  const whatsappHref = whatsappLink();

  return (
    <ul className={className}>
      {phone && (
        <li>
          <a href={`tel:${phone.replace(/\s+/g, "")}`} className={linkClassName}>
            {phone}
          </a>
        </li>
      )}
      {whatsappHref && (
        <li>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="contact" className={linkClassName}>
            WhatsApp {whatsappDisplay}
          </a>
        </li>
      )}
      {email && (
        <li>
          <a href={`mailto:${email}`} className={linkClassName}>
            {email}
          </a>
        </li>
      )}
      {address && <li>{address}</li>}
      {hours && <li>{hours}</li>}
      <li>ABN {siteConfig.abn}</li>
    </ul>
  );
}
