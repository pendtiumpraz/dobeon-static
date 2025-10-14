'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import StructuredData from '@/components/StructuredData';
import FloatingShapes from '@/components/FloatingShapes';
import ParticleBackground from '@/components/ParticleBackground';
import WaveDivider from '@/components/WaveDivider';
import GlassCard from '@/components/GlassCard';
import StatCounter from '@/components/StatCounter';
import { organizationSchema } from '@/lib/structured-data';
import { useInView, getAnimationClasses } from '@/lib/animations';

export default function Home() {
  const { ref: ctaRef, isInView: ctaInView } = useInView();
  const services = [
    {
      title: 'Assess Readiness',
      description: 'Comprehensive evaluation of your organization\'s digital maturity, infrastructure capabilities, and readiness for transformation into a company of the future.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      ),
    },
    {
      title: 'Identify Gaps',
      description: 'Expert analysis to pinpoint critical gaps in technology, processes, skills, and organizational structure that prevent you from achieving your transformation goals.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      ),
    },
    {
      title: 'Close Gaps',
      description: 'Strategic implementation roadmap and hands-on support to bridge identified gaps through proven methodologies, cutting-edge technology, and expert guidance.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
    },
  ];

  const features = [
    {
      title: 'Healthcare Innovation',
      description: 'Digital therapeutics, precision medicine, and healthcare interoperability solutions powered by industry-leading expertise.',
    },
    {
      title: 'Enterprise Data & AI',
      description: 'Advanced analytics, AI/ML implementation, and enterprise data management solutions for data-driven decision making.',
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end transformation strategy from assessment to implementation, leveraging global best practices.',
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and modern architecture design for future-ready technology infrastructure.',
    },
  ];

  return (
    <>
      <StructuredData data={organizationSchema} />
      {/* Hero Section */}
      <Hero
        subtitle="Healthcare & IT Consulting"
        title="Transform Your Organization Into a Company of the Future"
        description="Expert consulting services combining healthcare innovation, digital transformation, and cutting-edge technology to prepare your organization for tomorrow's challenges."
        ctaText="Start Your Journey"
        ctaLink="/contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />

      {/* Services Overview */}
      <Section
        id="services"
        subtitle="Our Approach"
        title="Three-Step Transformation Framework"
        description="We guide organizations through a proven methodology to achieve sustainable transformation and lasting competitive advantage."
        className="relative"
      >
        {/* Floating decorative shapes */}
        <FloatingShapes count={6} colors={['#0066ff', '#7C3AED', '#00D9FF']} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => {
            const gradients: ('blue' | 'purple' | 'cyan')[] = ['blue', 'purple', 'cyan'];
            return (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={gradients[index]}
                delay={index * 100}
              />
            );
          })}
        </div>
        <div className="text-center mt-12 relative z-10">
          <Button href="/services" size="lg">
            Explore Our Services
          </Button>
        </div>
      </Section>

      {/* Wave Divider */}
      <WaveDivider color="#1f2937" />

      {/* Value Proposition */}
      <Section
        dark
        subtitle="Why Choose Dobeon"
        title="World-Class Expertise Meets Innovation"
        description="Our team brings together decades of experience from leading global healthcare organizations, technology companies, and academic institutions."
        className="relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl blob-shape"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl blob-shape" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {features.map((feature, index) => {
            const glassGradients: ('blue' | 'purple' | 'orange' | 'cyan')[] = ['blue', 'purple', 'orange', 'cyan'];
            return (
              <GlassCard
                key={index}
                gradient={glassGradients[index]}
                variant="dark"
                delay={index * 100}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="leading-relaxed text-white/80">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </Section>

      {/* Wave Divider */}
      <WaveDivider color="#ffffff" flip />

      {/* Stats Section with Animated Counters */}
      <Section
        subtitle="Our Impact in Numbers"
        title="Measurable Results, Real Transformation"
        description="Data-driven outcomes that demonstrate our commitment to excellence"
        className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <FloatingShapes count={5} colors={['#0066ff', '#EC4899', '#7C3AED']} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <StatCounter
            end={100}
            suffix="+"
            label="Years Combined Experience"
            description="In healthcare transformation, AI implementation, and digital health innovation"
            gradient="blue"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            }
          />
          <StatCounter
            end={9}
            label="Industry Leaders"
            description="From Harvard, Google, Deloitte, Gavi, and leading healthcare systems"
            gradient="purple"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            }
          />
          <StatCounter
            end={50}
            suffix="+"
            label="Global Organizations"
            description="Partnered with Fortune 500 companies and government agencies worldwide"
            gradient="pink"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            }
          />
        </div>
      </Section>

      {/* Social Proof */}
      <Section
        subtitle="Our Impact"
        title="Trusted by Industry Leaders"
        description="Our experts have worked with and advised leading organizations worldwide."
        className="relative"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            'Harvard Medical School',
            'Boston Children\'s Hospital',
            'Bio Farma',
            'Deloitte',
            'Google',
            'IBM',
            'Novo Nordisk',
            'White House',
          ].map((org, index) => (
            <Card
              key={index}
              title={org}
              description=""
              hover={true}
              className="bg-gray-50 border-gray-200 hover:border-primary opacity-70 hover:opacity-100 min-h-[120px] flex items-center justify-center card-gradient-border"
              delay={index * 75}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="gradient-vibrant relative overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground count={40} color="#ffffff" />

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-3xl blob-shape"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl blob-shape" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl blob-shape" style={{ animationDelay: '3s' }}></div>
        </div>

        <FloatingShapes count={8} colors={['#ffffff', '#fef3c7', '#fbcfe8', '#ddd6fe']} />

        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className="max-w-3xl mx-auto text-center text-white relative z-10"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${getAnimationClasses('fadeIn', ctaInView)}`}>
            Ready to Transform Your Organization?
          </h2>
          <p className={`text-xl md:text-2xl mb-10 text-white/95 ${getAnimationClasses('fadeIn', ctaInView)}`}
             style={{ transitionDelay: '100ms' }}>
            Let&apos;s discuss how we can help you become a company of the future.
          </p>
          <div className={`flex flex-col sm:flex-row gap-6 justify-center ${getAnimationClasses('slideUp', ctaInView)}`}
               style={{ transitionDelay: '200ms' }}>
            <Button href="/contact" variant="secondary" size="lg" className="shadow-2xl hover:shadow-white/50">
              Get in Touch
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl">
              Meet Our Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
