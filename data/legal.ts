// ─────────────────────────────────────────────────────────────────────────
// POLICY SETTINGS used by the Terms (/terms) and Privacy (/privacy) pages.
//
// These pages are a starting draft. Have them reviewed by a qualified
// legal adviser before relying on them, and update `lastUpdated` whenever
// you change the wording or these values.
// ─────────────────────────────────────────────────────────────────────────

export const legal = {
  lastUpdated: "10 October 2026",

  // Free rescheduling / cancellation if the client gives at least this much
  // notice before the appointment.
  cancellationNoticeHours: 24,

  // Refund of the consultation fee (less the payment provider's processing
  // fee) when cancelled with enough notice.
  refundWithNotice: true,

  // How long client records are kept (OMARA Code of Conduct requires
  // records to be kept for at least 7 years).
  recordRetentionYears: 7,
};
