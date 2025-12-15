import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShoppingBag, Code2, Zap, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

interface HomeProps {
  onOpenDrawer: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export const Home: React.FC<HomeProps> = ({ onOpenDrawer }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 py-24 md:py-32 lg:py-40 overflow-hidden min-h-[90vh] flex flex-col justify-center">
        {/* Background Elements - Parallax */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-[120px] rounded-full opacity-70" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 blur-[100px] rounded-full opacity-70" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ opacity: contentOpacity, y: contentY }}
            className="max-w-4xl"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting new Shopify projects for Q4
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-white mb-8 leading-[0.9]"
            >
              Building the future <br />
              of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">digital commerce.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
            >
              We are a specialized agency crafting bespoke Shopify solutions.
              From headless architecture to high-conversion themes, we engineer
              e-commerce experiences that scale.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button onClick={onOpenDrawer} size="lg" className="bg-white text-black hover:bg-zinc-200 text-base h-14 px-8 transition-transform hover:scale-105 active:scale-95">
                Start your project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 text-base h-14 px-8 transition-transform hover:scale-105 active:scale-95">
                View our work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section (Work) */}
      <motion.section
        id="work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 py-24 bg-zinc-900/30 border-y border-white/5 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Expertise</h2>
              <p className="text-zinc-400 max-w-md">Comprehensive Shopify solutions tailored to your brand's unique needs and growth trajectory.</p>
            </div>
            <Button variant="link" className="text-white p-0 h-auto group">
              View all services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Headless Commerce"
              description="Decoupled front-ends using Hydrogen or Next.js for ultimate performance and flexibility."
              delay={0.1}
            />
            <ServiceCard
              icon={<Code2 className="h-6 w-6" />}
              title="Custom App Development"
              description="Bespoke private and public apps to extend Shopify's native functionality."
              delay={0.2}
            />
            <ServiceCard
              icon={<Zap className="h-6 w-6" />}
              title="Performance Optimization"
              description="Core Web Vitals enhancement and code auditing for lightning-fast stores."
              delay={0.3}
            />
            <ServiceCard
              icon={<Smartphone className="h-6 w-6" />}
              title="Mobile-First Themes"
              description="Pixel-perfect Liquid theme development focusing on mobile conversion."
              delay={0.4}
            />
            <ServiceCard
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Migration Services"
              description="Seamless data migration from Magento, WooCommerce, or BigCommerce to Shopify Plus."
              delay={0.5}
            />
            <ServiceCard
              icon={<Code2 className="h-6 w-6" />}
              title="API Integration"
              description="Connecting your ERP, CRM, and PIM systems for unified business operations."
              delay={0.6}
            />
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section id="process" className="px-6 py-24 border-b border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How We Work</h2>
            <p className="text-zinc-400">A transparent, agile process designed for velocity and quality.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "Discovery",
                desc: "We dive deep into your business metrics and technical requirements to build a solid architectural foundation.",
                step: "01"
              },
              {
                title: "Development",
                desc: "Agile sprints with bi-weekly demos. You see progress in real-time as we build your custom solution.",
                step: "02"
              },
              {
                title: "Launch & Scale",
                desc: "Rigorous QA testing followed by a seamless deployment. We stick around to help you grow.",
                step: "03"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pt-8 pl-8 md:pl-0 md:pt-12"
              >
                <div className="text-7xl md:text-8xl font-display font-bold text-zinc-900 absolute top-0 left-0 z-0 select-none opacity-50 md:opacity-100">
                  {item.step}
                </div>
                <div className="relative z-10 md:ml-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="px-6 py-24"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by inappcadogrouptive brands</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale">
            {['Acme Co.', 'Lumina', 'FocalPoint', 'Vertex', 'Horizon'].map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="text-2xl font-display font-bold text-white hover:text-zinc-300 transition-colors cursor-default"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay?: number }> = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
  >
    <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-3 font-display">{title}</h3>
    <p className="text-zinc-400 leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);