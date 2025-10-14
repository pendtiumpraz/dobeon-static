import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Services - Dobeon',
  description: 'Comprehensive healthcare and IT consulting services to transform your organization into a company of the future.',
};

export default function Services() {
  const coreServices = [
    {
      id: 'assess',
      title: 'Assess Readiness',
      tagline: 'Understanding Your Current State',
      description: 'Comprehensive evaluation to determine your organization\'s readiness for digital transformation.',
      details: [
        'Digital maturity assessment across all business functions',
        'Technology infrastructure and architecture review',
        'Process and workflow analysis',
        'Skills and competency gap identification',
        'Organizational culture and change readiness evaluation',
        'Competitive benchmarking and market positioning',
      ],
      outcomes: [
        'Clear understanding of current capabilities',
        'Prioritized list of transformation opportunities',
        'Risk assessment and mitigation strategies',
        'Comprehensive readiness scorecard',
      ],
    },
    {
      id: 'identify',
      title: 'Identify Gaps',
      tagline: 'Pinpointing Critical Improvement Areas',
      description: 'Expert analysis to identify specific gaps preventing you from achieving your strategic objectives.',
      details: [
        'Technology stack and integration gap analysis',
        'Data architecture and governance assessment',
        'Security and compliance gap identification',
        'Talent and skills gap mapping',
        'Process efficiency and automation opportunities',
        'Customer experience and engagement gaps',
      ],
      outcomes: [
        'Detailed gap analysis report with priorities',
        'Root cause analysis for identified gaps',
        'Impact assessment of each gap',
        'Strategic recommendations for gap closure',
      ],
    },
    {
      id: 'close',
      title: 'Close Gaps',
      tagline: 'Implementing Strategic Solutions',
      description: 'Strategic implementation roadmap and hands-on support to bridge identified gaps and achieve transformation.',
      details: [
        'Custom transformation roadmap development',
        'Technology implementation and integration',
        'Process redesign and automation',
        'Change management and training programs',
        'Talent development and upskilling initiatives',
        'Ongoing support and optimization',
      ],
      outcomes: [
        'Fully implemented transformation initiatives',
        'Measurable improvements in key metrics',
        'Enhanced organizational capabilities',
        'Sustainable competitive advantages',
      ],
    },
  ];

  const specializations = [
    {
      title: 'Healthcare Innovation',
      description: 'Digital health solutions, precision medicine platforms, and healthcare interoperability.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
    },
    {
      title: 'Enterprise Data & AI',
      description: 'Advanced analytics, machine learning, and AI-powered decision support systems.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end transformation strategy, execution, and change management.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      ),
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable cloud infrastructure, migration strategies, and modern architecture design.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
        </svg>
      ),
    },
    {
      title: 'Cyber Security & Governance',
      description: 'Security risk assessment, compliance frameworks, and governance structures.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
    },
    {
      title: 'Global Health Solutions',
      description: 'Public health surveillance, vaccine programs, and infectious disease preparedness.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
  ];

  const industries = [
    'Healthcare Providers',
    'Pharmaceutical Companies',
    'Medical Device Manufacturers',
    'Health Insurance',
    'Biotechnology',
    'Government Health Agencies',
    'Healthcare IT Companies',
    'Life Sciences',
  ];

  return (
    <>
      <Hero
        subtitle="Our Services"
        title="Comprehensive Transformation Services for Healthcare & Technology Leaders"
        description="From assessment to implementation, we provide end-to-end consulting services to transform your organization into a company of the future."
        ctaText="Start Your Transformation"
        ctaLink="/contact"
      />

      {/* Core Services Framework */}
      <Section
        subtitle="Our Framework"
        title="Three-Step Transformation Methodology"
        description="Our proven approach guides organizations through every stage of their transformation journey."
      >
        <div className="space-y-16">
          {coreServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4">
                  Step {index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-xl text-primary mb-4">{service.tagline}</p>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Expected Outcomes:</h4>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex} className="flex items-start">
                        <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-12 text-white shadow-2xl">
                  <div className="text-6xl font-bold mb-4">{index + 1}</div>
                  <div className="text-2xl font-bold mb-2">{service.title}</div>
                  <div className="text-primary-light text-lg">{service.tagline}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Specializations */}
      <Section
        dark
        subtitle="Areas of Expertise"
        title="Deep Domain Specializations"
        description="Our team brings specialized expertise across critical domains in healthcare and technology."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-primary transition-all"
            >
              <div className="text-primary mb-4">{spec.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{spec.title}</h3>
              <p className="text-gray-300">{spec.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries Served */}
      <Section
        subtitle="Industries We Serve"
        title="Healthcare & Life Sciences Expertise"
        description="We work with organizations across the healthcare and life sciences ecosystem."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-white border-2 border-gray-200 rounded-lg text-center hover:border-primary hover:shadow-lg transition-all"
            >
              <span className="font-semibold text-gray-900">{industry}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary to-primary-light">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Transformation Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how our services can help you achieve your strategic objectives.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Section>
    </>
  );
}
