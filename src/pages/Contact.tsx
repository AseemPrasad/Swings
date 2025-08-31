import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin, 
  Phone,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp (Primary)',
      description: 'For orders and immediate assistance',
      contact: '+1 (234) 567-8900',
      action: 'Chat Now',
      link: 'https://wa.me/7439633071',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'For general inquiries and information',
      contact: 'info@Swings.com',
      action: 'Send Email',
      link: 'mailto:info@Swings.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'For urgent matters and consultations',
      contact: '+1 7439633071',
      action: 'Call Now',
      link: 'tel:+17439633071',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 8:00 PM EST' },
    { day: 'Sunday', hours: '12:00 PM - 6:00 PM EST' },
    { day: 'WhatsApp Support', hours: '24/7 Available' }
  ];

  const commonInquiries = [
    {
      title: 'Place an Order',
      description: 'Ready to get started with your assignment?',
      action: 'Contact via WhatsApp for fastest service'
    },
    {
      title: 'Get a Quote',
      description: 'Need pricing information for your project?',
      action: 'Send details via WhatsApp for instant quote'
    },
    {
      title: 'Track Progress',
      description: 'Want updates on your ongoing work?',
      action: 'Message your assigned solver directly'
    },
    {
      title: 'Technical Support',
      description: 'Having issues with files or delivery?',
      action: 'Email us or contact via WhatsApp'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Swings
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our academic assistance team. We're here to help you succeed in your studies.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach us based on your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
                <div className={`${method.color} p-4 rounded-full w-fit mx-auto mb-4`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-lg font-medium text-gray-900 mb-4">{method.contact}</p>
                <a
                  href={method.link}
                  target={method.title === 'WhatsApp (Primary)' ? '_blank' : undefined}
                  rel={method.title === 'WhatsApp (Primary)' ? 'noopener noreferrer' : undefined}
                  className={`${method.color} text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block`}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>

          {/* Preferred Contact Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
            <div className="flex items-start space-x-3">
              <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">WhatsApp - Our Preferred Contact Method</h3>
                <p className="text-green-700">
                  For the fastest response and seamless order processing, we recommend contacting us via WhatsApp. 
                  This allows for instant communication, easy file sharing, and real-time updates on your projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                For non-urgent inquiries or general questions, you can use the form below. 
                For orders and immediate assistance, please use WhatsApp.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="pricing">Pricing Questions</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback & Suggestions</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              {/* Operating Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Operating Hours</h3>
                </div>
                <div className="space-y-2">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-600">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Common Inquiries */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Inquiries</h3>
                <div className="space-y-4">
                  {commonInquiries.map((inquiry, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{inquiry.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{inquiry.description}</p>
                      <p className="text-sm text-blue-600">{inquiry.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Note */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Global Service</h3>
                    <p className="text-blue-700">
                      Swings operates as a digital platform serving students worldwide. 
                      Our team of expert solvers is distributed globally, allowing us to provide 
                      24/7 support and expertise across different time zones and academic systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait - contact us now for immediate academic assistance and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/7439633071?text=Hi! I need academic assistance and would like to get started."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start on WhatsApp</span>
            </a>
            <a
              href="mailto:info@Swings.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Clock className="h-5 w-5" />
            <span>
              <strong>Response Times:</strong> WhatsApp: 15-30 minutes | Email: 2-24 hours | Phone: Immediate
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;