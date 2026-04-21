import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    username: 'Global Investor',
    body: 'The attention to detail in LUMA properties is unparalleled. A truly world-class residence.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    country: '🇬🇧 UK',
  },
  {
    name: 'Rajesh Khanna',
    username: 'Tech Entrepreneur',
    body: 'Found my dream sanctuary in the heart of Hyderabad. The smart home integration is flawless.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    country: '🇮🇳 India',
  },
  {
    name: 'Elena Rodriguez',
    username: 'Interior Architect',
    body: 'As a designer, I appreciate the minimalist luxury and high-quality materials used throughout.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
    country: '🇪🇸 Spain',
  },
  {
    name: 'Michael Chen',
    username: 'Fortune 500 Exec',
    body: 'LUMA doesn’t just build houses; they curate a lifestyle. The private viewing was a masterclass.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    country: '🇸🇬 Singapore',
  },
  {
    name: 'Al-Farabi',
    username: 'Real Estate Developer',
    body: 'The architectural vision behind LUMA is setting new benchmarks for luxury living in Asia.',
    img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=150&auto=format&fit=crop',
    country: '🇦🇪 UAE',
  },
  {
    name: 'Sophia Laurent',
    username: 'Luxury Travel Blogger',
    body: 'Staying at a LUMA managed property felt like being in a 7-star resort. Simply divine.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    country: '🇫🇷 France',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-[420px] bg-white border-accent/5 shadow-2xl shadow-black/[0.03] hover:shadow-accent/5 transition-all duration-700">
      <CardContent className="pt-8 px-8 pb-8">
        <div className="flex items-center gap-4">
          <Avatar className="size-12 border border-accent/20">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-secondary text-accent text-lg">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-base font-display font-medium text-primary flex items-center gap-2">
              {name} <span className="text-xs opacity-60">{country}</span>
            </figcaption>
            <p className="text-[12px] font-body text-accent tracking-widest uppercase">{username}</p>
          </div>
        </div>
        <blockquote className="mt-6 text-[17px] leading-[1.6] text-muted italic font-body">
          "{body}"
        </blockquote>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mb-16 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-body text-[11px] tracking-[0.4em] uppercase mb-4"
        >
          Voices of Excellence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display italic text-[42px] md:text-[56px] text-primary"
        >
          Perspective from our Residents
        </motion.h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden [perspective:1200px]">
        <div
          className="flex flex-row items-center gap-6 py-12"
          style={{
            transform: 'rotateX(15deg) translateY(-20px)',
          }}
        >
          {/* First Row of Testimonials */}
          <Marquee pauseOnHover className="[--duration:50s] [--gap:1.5rem]">
            {testimonials.map((review) => (
              <TestimonialCard key={review.name} {...review} />
            ))}
          </Marquee>
        </div>

        <div
          className="flex flex-row items-center gap-6 pb-24"
          style={{
            transform: 'rotateX(-15deg) translateY(20px)',
          }}
        >
          {/* Second Row of Testimonials (Reversed) */}
          <Marquee reverse pauseOnHover className="[--duration:60s] [--gap:1.5rem]">
            {testimonials.slice().reverse().map((review) => (
              <TestimonialCard key={review.name + '-rev'} {...review} />
            ))}
          </Marquee>
        </div>

        {/* Cinematic gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary z-10"></div>
      </div>
    </section>
  );
}
