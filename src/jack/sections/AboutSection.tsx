import { FadeIn } from '../components/FadeIn'
import { AnimatedText } from '../components/AnimatedText'
import { ContactButton } from '../components/ContactButton'
import { ABOUT_DECOR, ABOUT_TEXT, PERSON } from '../data'

export const AboutSection = () => (
  <section
    id="about"
    className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20"
  >
    {/* Decorative 3D objects in the corners */}
    <FadeIn
      delay={0.1}
      x={-80}
      y={0}
      duration={0.9}
      className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
    >
      <img src={ABOUT_DECOR.moon} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
    </FadeIn>
    <FadeIn
      delay={0.15}
      x={80}
      y={0}
      duration={0.9}
      className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
    >
      <img src={ABOUT_DECOR.lego} alt="" className="w-[120px] sm:w-[160px] md:w-[210px]" />
    </FadeIn>
    <FadeIn
      delay={0.25}
      x={-80}
      y={0}
      duration={0.9}
      className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
    >
      <img src={ABOUT_DECOR.object} alt="" className="w-[100px] sm:w-[140px] md:w-[180px]" />
    </FadeIn>
    <FadeIn
      delay={0.3}
      x={80}
      y={0}
      duration={0.9}
      className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
    >
      <img src={ABOUT_DECOR.group} alt="" className="w-[130px] sm:w-[170px] md:w-[220px]" />
    </FadeIn>

    <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn
          as="h1"
          delay={0}
          y={40}
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </FadeIn>
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-center font-medium leading-relaxed text-[#D7E2EA] max-w-[560px]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>
      <FadeIn delay={0.2}>
        <ContactButton href={`mailto:${PERSON.email}`} />
      </FadeIn>
    </div>
  </section>
)
