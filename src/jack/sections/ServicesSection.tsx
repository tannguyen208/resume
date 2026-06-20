import { FadeIn } from '../components/FadeIn'
import { EXPERTISE } from '../data'

export const ServicesSection = () => (
  <section
    id="expertise"
    className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
  >
    <h2
      className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28"
      style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
    >
      Expertise
    </h2>

    <div className="mx-auto max-w-5xl">
      {EXPERTISE.map((item, i) => (
        <FadeIn
          key={item.num}
          delay={i * 0.1}
          className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
          style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
        >
          <span
            className="font-black leading-none text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {item.num}
          </span>
          <div className="pt-1 sm:pt-2">
            <h3
              className="font-medium uppercase text-[#0C0C0C]"
              style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
            >
              {item.name}
            </h3>
            <p
              className="font-light leading-relaxed max-w-2xl mt-2"
              style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', color: '#0C0C0C', opacity: 0.6 }}
            >
              {item.desc}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
)
