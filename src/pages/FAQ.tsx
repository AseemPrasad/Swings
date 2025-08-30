import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Search } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I place an order?',
          answer: 'Getting started is simple! Contact us via WhatsApp with your assignment details, requirements, and deadline. We\'ll respond promptly with a personalized quote and timeline. Once you approve, we\'ll match you with the perfect solver and begin working on your task.'
        },
        {
          question: 'What information do I need to provide?',
          answer: 'Please provide: assignment instructions or files, academic level, subject area, deadline, length requirements, formatting style (APA, MLA, etc.), and any specific instructions from your professor. The more details you share, the better we can assist you.'
        },
        {
          question: 'How quickly can you respond to my inquiry?',
          answer: 'We typically respond to WhatsApp messages within 15-30 minutes during business hours and within 2-4 hours outside business hours. For urgent requests, we prioritize faster response times.'
        }
      ]
    },
    {
      title: 'Pricing & Payment',
      faqs: [
        {
          question: 'How is pricing determined?',
          answer: 'Our pricing is based on several factors: academic level, assignment complexity, length/scope of work, timeline urgency, research requirements, and subject specialization. We provide transparent, personalized quotes with no hidden fees.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various secure payment methods including bank transfers, digital wallets (PayPal, Wise), and online payment platforms. All transactions are processed securely with payment protection.'
        },
        {
          question: 'When do I need to pay?',
          answer: 'We typically use a milestone-based payment structure: 50% upfront to begin work, progress payments for larger projects, and final payment upon completion. This ensures security for both students and solvers.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we have a fair refund policy. If we cannot meet your requirements or deliver satisfactory work, we provide appropriate refunds based on the work completed and circumstances involved.'
        }
      ]
    },
    {
      title: 'Services & Quality',
      faqs: [
        {
          question: 'What types of assignments do you handle?',
          answer: 'We assist with essays, research papers, presentations, projects, lab reports, case studies, thesis chapters, dissertations, and more across all academic levels from high school to PhD.'
        },
        {
          question: 'What subjects do you cover?',
          answer: 'We cover virtually all academic subjects including Business, Literature, Sciences, Psychology, History, Economics, Engineering, Medicine, Law, and many more. Our diverse solver network ensures expertise in specialized areas.'
        },
        {
          question: 'How do you ensure quality?',
          answer: 'Our quality assurance process includes: expert solver matching, multi-stage review, plagiarism checking, formatting verification, and content accuracy validation before delivery. Every piece of work is thoroughly reviewed.'
        },
        {
          question: 'Is the work original?',
          answer: 'Absolutely. All work is created from scratch according to your specific requirements. We use plagiarism detection software to ensure 100% originality and provide plagiarism reports when requested.'
        }
      ]
    },
    {
      title: 'Deadlines & Delivery',
      faqs: [
        {
          question: 'Can you handle urgent deadlines?',
          answer: 'Yes, we offer rush services for urgent deadlines. Depending on the complexity and length, we can often deliver quality work within 24-48 hours. Contact us immediately for urgent requests.'
        },
        {
          question: 'What happens if you miss a deadline?',
          answer: 'We take deadlines seriously and have systems in place to ensure timely delivery. In the rare event of a delay, we communicate immediately, provide status updates, and offer appropriate compensation or solutions.'
        },
        {
          question: 'How will I receive my completed work?',
          answer: 'Completed work is delivered via WhatsApp in your preferred format (Word, PDF, PowerPoint, etc.). We also provide any source files, research materials, or additional documents as needed.'
        }
      ]
    },
    {
      title: 'Revisions & Support',
      faqs: [
        {
          question: 'Do you offer revisions?',
          answer: 'Yes, we provide revision support to ensure your complete satisfaction. Minor revisions based on the original requirements are included. We work with you until the work meets your expectations.'
        },
        {
          question: 'What if I need changes after delivery?',
          answer: 'Contact us immediately if you need changes. We offer revision support for reasonable modifications based on the original requirements. Additional charges may apply for significant scope changes.'
        },
        {
          question: 'Can I communicate with my assigned solver?',
          answer: 'Yes, we facilitate direct communication between you and your solver through our WhatsApp platform. This ensures clarity, allows for questions, and enables progress updates throughout the process.'
        }
      ]
    },
    {
      title: 'Privacy & Confidentiality',
      faqs: [
        {
          question: 'Is my information kept confidential?',
          answer: 'Absolutely. We maintain strict confidentiality regarding all personal information, academic details, and work provided. Your privacy is our top priority, and we never share information with third parties.'
        },
        {
          question: 'Will anyone know I used your service?',
          answer: 'No. Our service is completely confidential. We don\'t maintain public records of clients, and all communication is private and secure through WhatsApp.'
        },
        {
          question: 'How do you protect my data?',
          answer: 'We use secure communication channels, encrypted file storage, and strict access controls. Personal information is handled according to privacy best practices and is never shared without consent.'
        }
      ]
    },
    {
      title: 'Academic Integrity & Ethics',
      faqs: [
        {
          question: 'Is using your service ethical?',
          answer: 'Our services are designed as academic assistance and learning tools. We encourage students to use our work as reference material, learning aids, and examples to enhance their understanding. Students are responsible for following their institution\'s academic integrity policies.'
        },
        {
          question: 'How should I use the work you provide?',
          answer: 'The work we provide should be used as a reference, learning tool, or starting point for your own work. We recommend using it to understand concepts, structure, and academic standards while creating your own original submissions.'
        },
        {
          question: 'Do you promote academic dishonesty?',
          answer: 'No. We promote academic learning and skill development. Our goal is to help students understand complex topics, improve their academic skills, and manage their workload effectively while maintaining academic integrity.'
        },
        {
          question: 'What are your terms regarding academic honesty?',
          answer: 'We require all students to understand and follow their institution\'s academic integrity policies. Our services are provided for educational support, reference, and learning purposes. Students are responsible for how they use our assistance.'
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap((category, categoryIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      categoryTitle: category.title,
      globalIndex: categoryIndex * 1000 + faqIndex
    }))
  );

  const filteredFaqs = searchTerm
    ? allFaqs.filter(
        faq =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our academic assistance services, processes, and policies.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {searchTerm ? (
            // Search Results
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Search Results ({filteredFaqs?.length || 0})
              </h2>
              {filteredFaqs && filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <div key={faq.globalIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(faq.globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      >
                        <div>
                          <span className="text-sm text-blue-600 font-medium">{faq.categoryTitle}</span>
                          <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        </div>
                        {openIndex === faq.globalIndex ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {openIndex === faq.globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
          ) : (
            // Category View
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 1000 + faqIndex;
                      return (
                        <div key={faqIndex} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                          >
                            <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                            {openIndex === globalIndex ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </button>
                          {openIndex === globalIndex && (
                            <div className="px-6 pb-4 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find the answer you're looking for? Our support team is ready to help you with any questions about our academic assistance services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href="mailto:info@Swings.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notice</h3>
          <p className="text-gray-700">
            <strong>Academic Responsibility:</strong> All services provided by Swings are for educational assistance, 
            reference, and learning purposes. Students are responsible for understanding and adhering to their institution's 
            academic integrity policies. We encourage the responsible use of our services to enhance learning and academic skills.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;