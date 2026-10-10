import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Client stories"
            title="In our clients' words"
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name + index} delay={index * 80}>
              <figure className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-brand-green" aria-hidden="true">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-gray-100 pt-4">
                  <span className="block font-bold text-brand-navy">{testimonial.name}</span>
                  {testimonial.detail && <span className="text-sm text-gray-500">{testimonial.detail}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-gray-500">
          Individual outcomes depend on each person&apos;s circumstances.
        </p>
      </Container>
    </section>
  );
}
