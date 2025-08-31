import React from 'react';
import { BookOpen, Presentation as PresentationChart, FolderOpen, CheckCircle, Clock, Users, MessageCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Custom Assignment Writing',
      description: 'Professional academic writing services tailored to your specific requirements and academic standards.',
      features: [
        'Research-based content with credible sources',
        'Original work with plagiarism checks',
        'Proper academic formatting (APA, MLA, Chicago, etc.)',
        'In-depth analysis and critical thinking',
        'Timely delivery with revision support',
        'All academic levels (High School to PhD)'
      ],
      subjects: [
        'Business & Management', 'Literature & English', 'History & Social Sciences',
        'Psychology', 'Economics', 'Political Science', 'Philosophy', 'Sociology'
      ],
      process: [
        'Submit assignment requirements via WhatsApp',
        'Receive quote and timeline confirmation',
        'Expert writer begins research and writing',
        'Quality review and plagiarism check',
        'Delivery with revision guarantee'
      ]
    },
    {
      icon: PresentationChart,
      title: 'PowerPoint Presentation Creation',
      description: 'Engaging, professional presentations that effectively communicate your ideas and research.',
      features: [
        'Custom design templates and layouts',
        'Compelling content development',
        'Visual elements and infographics',
        'Speaker notes and presentation tips',
        'Interactive elements when needed',
        'Multiple format delivery options'
      ],
      subjects: [
        'Business Presentations', 'Academic Research', 'Project Proposals',
        'Case Study Analysis', 'Marketing Plans', 'Scientific Research', 'Thesis Defense'
      ],
      process: [
        'Share presentation topic and requirements',
        'Discuss design preferences and content scope',
        'Content research and slide development',
        'Design implementation with visual elements',
        'Final review and delivery in preferred format'
      ]
    },
    {
      icon: FolderOpen,
      title: 'Project Assistance',
      description: 'Comprehensive support for complex academic projects across various disciplines and formats.',
      features: [
        'Multi-component project coordination',
        'Research and data analysis support',
        'Physical and digital deliverables',
        'Timeline management and milestone tracking',
        'Expert guidance throughout the process',
        'Quality assurance at every stage'
      ],
      subjects: [
        'Capstone Projects', 'Research Projects', 'Lab Reports',
        'Case Studies', 'Group Projects', 'Thesis Work', 'Dissertation Chapters'
      ],
      process: [
        'Detailed project scope discussion',
        'Timeline and milestone planning',
        'Resource allocation and expert assignment',
        'Regular progress updates and check-ins',
        'Final compilation and quality review'
      ]
    }
  ];

  const guarantees = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your deadlines and ensure timely delivery of all work.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every piece of work undergoes thorough quality checks and review.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with experienced professionals in your specific field of study.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Academic Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive academic assistance designed to help you excel in your studies and manage your workload effectively.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                    <service.icon className="h-12 w-12 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Subjects & Areas:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                      {service.subjects.map((subject, subjectIndex) => (
                        <div key={subjectIndex} className="bg-white px-3 py-2 rounded-md text-sm text-gray-700 border">
                          {subject}
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Process:</h3>
                    <ol className="space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-3">
                          <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <a
                        href="https://wa.me/7439633071"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Get Started</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Guarantees</h2>
            <p className="text-lg text-gray-600">Your success is our commitment</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <guarantee.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Our pricing is based on several factors to ensure fairness and quality:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-gray-600 mb-6">
              <li>• Academic level and complexity</li>
              <li>• Length and scope of work</li>
              <li>• Timeline and urgency</li>
              <li>• Research requirements</li>
              <li>• Specialized subject matter</li>
            </ul>
            <p className="text-lg text-gray-700 mb-6">
              Contact us for a personalized quote based on your specific requirements.
            </p>
            <a
              href="https://wa.me/7439633071"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get Your Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Academic Integrity Notice */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Integrity Statement</h3>
            <p className="text-gray-700">
              All work provided by Swings is intended for reference, learning, and guidance purposes. 
              Students are responsible for understanding and adhering to their institution's academic integrity policies. 
              We encourage the use of our services as learning tools to enhance understanding and academic skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;