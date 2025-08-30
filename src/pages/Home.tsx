import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, CheckCircle, Users, Shield, BookOpen, Presentation as PresentationChart, FolderOpen, Star, ArrowRight, MessageCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Custom Assignment Writing',
      description: 'High-quality, original assignments tailored to your requirements and academic standards.',
      features: ['Original content', 'Academic formatting', 'Research-based']
    },
    {
      icon: PresentationChart,
      title: 'PowerPoint Presentations',
      description: 'Professional, engaging presentations with compelling content and visual design.',
      features: ['Visual design', 'Content creation', 'Research support']
    },
    {
      icon: FolderOpen,
      title: 'Project Assistance',
      description: 'Comprehensive support for complex projects across various academic disciplines.',
      features: ['Multi-format delivery', 'Expert guidance', 'Quality assurance']
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      description: 'Contact us via WhatsApp with your assignment details, requirements, and deadline.'
    },
    {
      number: '02',
      title: 'Get Quote & Solver Match',
      description: 'Receive a transparent quote and get matched with the perfect solver for your task.'
    },
    {
      number: '03',
      title: 'Receive Quality Work',
      description: 'Get your completed work delivered on time with quality guarantee and revision support.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      program: 'Business Administration',
      rating: 5,
      text: 'Swings helped me manage my workload during finals week. The quality exceeded my expectations!'
    },
    {
      name: 'David L.',
      program: 'Computer Science',
      rating: 5,
      text: 'Professional service and timely delivery. The presentation was exactly what I needed for my project.'
    },
    {
      name: 'Maria R.',
      program: 'Psychology',
      rating: 5,
      text: 'Great support throughout the process. They helped me understand complex concepts while delivering quality work.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Focus on other priorities while we handle your academic tasks efficiently.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every piece of work undergoes thorough quality checks before delivery.'
    },
    {
      icon: Users,
      title: 'Expert Solvers',
      description: 'Work with experienced professionals in your field of study.'
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      description: 'Your privacy and academic information are completely secure with us.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ace Your Academics,
              <span className="block text-yellow-300">Stress-Free!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in academic success. Connect with expert solvers for assignments, presentations, and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/9062677839"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Get Started on WhatsApp</span>
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Challenges, Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the academic pressures students face. From tight deadlines to complex assignments, we're here to help you succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Student Struggles:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Overwhelming workload and tight deadlines</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Lack of specific skills or resources for complex tasks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Balancing academics with work and personal life</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Need for high-quality work to maintain academic standards</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Solution:</h3>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Swings connects you with experienced solvers who can help you manage your academic workload effectively while maintaining quality standards.
                </p>
                <p className="text-gray-700">
                  Focus on learning and other priorities while we provide the academic support you need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive academic assistance across all disciplines
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Swings?
            </h2>
            <p className="text-xl text-gray-600">
              Your success is our priority
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See what our students have to say
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I place an order?</h3>
              <p className="text-gray-600">Simply contact us via WhatsApp with your assignment details, and we'll guide you through the process.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my information kept confidential?</h3>
              <p className="text-gray-600">Absolutely. We maintain strict confidentiality and never share your personal or academic information.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I need revisions?</h3>
              <p className="text-gray-600">We offer revision support to ensure your complete satisfaction with the delivered work.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center space-x-2"
            >
              <span>View All FAQs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Excel in Your Academics?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who trust Swings for their academic success.
          </p>
          <a
            href="https://wa.me/9062677839"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Get Started Now</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;