import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import StructuredData from '@/components/StructuredData';
import { organizationSchema } from '@/lib/structured-data';

export default function Home() {
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
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Social Proof */}
      <Section
        subtitle="Our Impact"
        title="Trusted by Industry Leaders"
        description="Our experts have worked with and advised leading organizations worldwide."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
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
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg"
            >
              <span className="text-lg font-semibold text-gray-700 text-center">{org}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let&apos;s discuss how we can help you become a company of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
