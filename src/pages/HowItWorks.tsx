import React from 'react';
import { 
  MessageCircle, 
  FileText, 
  DollarSign, 
  Users, 
  CheckCircle, 
  Clock,
  Shield,
  RefreshCw
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: 'Submit Your Inquiry',
      description: 'Contact us via WhatsApp with your assignment details, requirements, deadline, and any specific instructions.',
      details: [
        'Share assignment instructions or files',
        'Specify academic level and subject',
        'Provide deadline and urgency level',
        'Mention any formatting requirements'
      ]
    },
    {
      number: 2,
      icon: DollarSign,
      title: 'Get Quote & Timeline',
      description: 'Receive a transparent quote based on your requirements along with a realistic timeline for completion.',
      details: [
        'Personalized pricing based on complexity',
        'Clear timeline with milestone dates',
        'Payment options and schedule',
        'Terms and conditions overview'
      ]
    },
    {
      number: 3,
      icon: Users,
      title: 'Solver Assignment',
      description: 'Get matched with an expert solver who specializes in your subject area and academic level.',
      details: [
        'Expert matching based on subject expertise',
        'Academic level compatibility',
        'Availability and timeline alignment',
        'Quality track record consideration'
      ]
    },
    {
      number: 4,
      icon: FileText,
      title: 'Work in Progress',
      description: 'Your assigned solver begins working on your task with regular progress updates and communication.',
      details: [
        'Regular progress updates via WhatsApp',
        'Opportunity for feedback and adjustments',
        'Direct communication with your solver',
        'Milestone-based work completion'
      ]
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Quality Review',
      description: 'Completed work undergoes thorough quality checks, plagiarism screening, and formatting review.',
      details: [
        'Comprehensive quality assessment',
        'Plagiarism detection and verification',
        'Formatting and citation review',
        'Content accuracy and completeness check'
      ]
    },
    {
      number: 6,
      icon: Clock,
      title: 'Delivery & Support',
      description: 'Receive your completed work on time with revision support and satisfaction guarantee.',
      details: [
        'Timely delivery as per agreed schedule',
        'Multiple format options if needed',
        'Revision support for adjustments',
        'Satisfaction guarantee and follow-up'
      ]
    }
  ];

  const paymentProcess = [
    {
      step: 'Initial Payment',
      description: 'Secure partial payment to begin work (typically 50%)'
    },
    {
      step: 'Progress Milestone',
      description: 'Additional payment upon reaching agreed milestones'
    },
    {
      step: 'Final Payment',
      description: 'Remaining balance upon satisfactory completion and delivery'
    }
  ];

  const qualityFeatures = [
    {
      icon: Shield,
      title: 'Confidentiality',
      description: 'Your personal and academic information remains completely secure and private.'
    },
    {
      icon: RefreshCw,
      title: 'Revision Support',
      description: 'Free revisions to ensure the work meets your expectations and requirements.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Every piece of work is thoroughly reviewed before delivery to ensure high standards.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Swings Works
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            A simple, transparent process designed to connect you with expert academic assistance quickly and efficiently.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Six-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From inquiry to delivery, we make academic assistance straightforward
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                      {step.number}
                    </div>
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 p-8 rounded-lg">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                      <step.icon className="h-24 w-24 text-blue-600 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            WhatsApp - Your Direct Line to Success
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We use WhatsApp for all communication to ensure fast, secure, and convenient interaction throughout your academic assistance journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why WhatsApp?</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Instant communication and updates</li>
                <li>• Secure file sharing and document exchange</li>
                <li>• Easy progress tracking and milestone updates</li>
                <li>• Direct communication with your assigned solver</li>
                <li>• Quick question resolution and support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <ol className="text-left space-y-2 text-gray-600">
                <li>1. Click the WhatsApp button on our website</li>
                <li>2. Introduce yourself and your academic needs</li>
                <li>3. Share your assignment details and requirements</li>
                <li>4. Receive your personalized quote and timeline</li>
                <li>5. Begin your academic assistance journey</li>
              </ol>
            </div>
          </div>

          <a
            href="https://wa.me/1234567890?text=Hi! I'm interested in academic assistance services. I'd like to get started."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            <span>Start on WhatsApp Now</span>
          </a>
        </div>
      </section>

      {/* Payment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Payment Process
            </h2>
            <p className="text-lg text-gray-600">
              Our flexible payment structure ensures security for both students and solvers
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {paymentProcess.map((payment, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{payment.step}</h3>
                  <p className="text-gray-600">{payment.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment Methods</h3>
              <p className="text-gray-600">
                We accept various secure payment methods including bank transfers, digital wallets, and online payment platforms. 
                All transactions are processed securely with full payment protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality Assurance & Support
            </h2>
            <p className="text-lg text-gray-600">
              Your satisfaction is our top priority
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Timelines
            </h2>
            <p className="text-lg text-gray-600">
              Understanding our delivery timelines for different types of work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Essays</h3>
              <div className="space-y-2 text-gray-600">
                <p>• 2-5 pages: 2-3 days</p>
                <p>• 6-10 pages: 4-5 days</p>
                <p>• 11+ pages: 6-8 days</p>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Presentations</h3>
              <div className="space-y-2 text-gray-600">
                <p>• 10-15 slides: 2-3 days</p>
                <p>• 16-25 slides: 3-4 days</p>
                <p>• 26+ slides: 5-6 days</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complex Projects</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Research projects: 7-14 days</p>
                <p>• Thesis chapters: 10-21 days</p>
                <p>• Capstone projects: 14-30 days</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              <strong>Rush orders available:</strong> Contact us for urgent deadlines with expedited service options.
            </p>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Discuss Your Timeline</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;