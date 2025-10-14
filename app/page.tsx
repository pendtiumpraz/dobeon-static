'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import StructuredData from '@/components/StructuredData';
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
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 100}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/services" size="lg">
            Explore Our Services
          </Button>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section
        dark
        subtitle="Why Choose Dobeon"
        title="World-Class Expertise Meets Innovation"
        description="Our team brings together decades of experience from leading global healthcare organizations, technology companies, and academic institutions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              className="bg-gray-800 border-gray-700 hover:border-primary text-white"
              delay={index * 100}
            />
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section
        subtitle="Our Impact"
        title="Trusted by Industry Leaders"
        description="Our experts have worked with and advised leading organizations worldwide."
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
              className="bg-gray-50 border-gray-200 hover:border-primary opacity-70 hover:opacity-100 min-h-[120px] flex items-center justify-center"
              delay={index * 75}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className="max-w-3xl mx-auto text-center text-white relative z-10"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${getAnimationClasses('fadeIn', ctaInView)}`}>
            Ready to Transform Your Organization?
          </h2>
          <p className={`text-xl mb-8 text-white/90 ${getAnimationClasses('fadeIn', ctaInView)}`}
             style={{ transitionDelay: '100ms' }}>
            Let&apos;s discuss how we can help you become a company of the future.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${getAnimationClasses('slideUp', ctaInView)}`}
               style={{ transitionDelay: '200ms' }}>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Meet Our Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
