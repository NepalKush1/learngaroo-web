import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import {
  formatPrice,
  getActiveConsultations,
  type ConsultationService,
} from "@/data/consultations";

export function ServiceList({
  selectedId,
  onSelect,
}: {
  selectedId?: string;
  onSelect: (service: ConsultationService) => void;
}) {
  const services = getActiveConsultations();

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md">
      {services.map((service) => {
        const isSelected = service.id === selectedId;

        return (
          <div
            key={service.id}
            className={`flex flex-col gap-6 p-7 transition-colors sm:flex-row sm:items-center sm:justify-between ${
              isSelected ? "bg-brand-surface" : "hover:bg-brand-surface/60"
            }`}
          >
            <div className="flex min-w-0 items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue text-white shadow-sm">
                <ServiceIcon slug={service.slug} className="h-7 w-7" />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-brand-navy">
                    {service.title}
                  </h3>
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary px-2.5 py-1 text-xs font-semibold text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Selected
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {service.bookingNotice && (
                  <p className="mt-3 max-w-xl rounded-xl bg-brand-surface px-3.5 py-2.5 text-sm text-gray-500">
                    {service.bookingNotice}
                  </p>
                )}
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-4 pl-[76px] sm:items-end sm:gap-3 sm:pl-0">
              <div className="sm:text-right">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  {service.currency}
                </p>
                <p className="font-heading text-3xl font-bold text-brand-navy">
                  {formatPrice(service.priceInCents, service.currency)}
                </p>
                <span className="mt-1 inline-block rounded-full bg-brand-surface px-3.5 py-1 text-sm font-medium text-brand-navy">
                  {service.durationMinutes} min
                </span>
              </div>

              <Button
                type="button"
                onClick={() => onSelect(service)}
                aria-label={`Book ${service.title}`}
                size="lg"
                track="booking_start"
                className="w-full sm:w-auto sm:px-8"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
