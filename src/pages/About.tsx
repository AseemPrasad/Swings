import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every piece of work we deliver, ensuring academic excellence and student satisfaction.'
    },
    {
      icon: Clock,
      title: 'Reliability & Timeliness',
      description: 'Consistent, dependable service with punctual delivery. Your deadlines are our commitments.'
    },
    {
      icon: Heart,
      title: 'Student-Centered Support',
      description: 'Every decision we make prioritizes student success, learning, and academic growth.'
    },
    {
      icon: Shield,
      title: 'Confidentiality & Trust',
      description: 'Absolute privacy protection and ethical practices in all our academic assistance services.'
    }
  ];

  const commitments = [
    {
      icon: Users,
      title: 'Expert Solver Network',
      description: 'Our solvers are carefully vetted professionals with advanced degrees and proven track records in their respective fields.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance Process',
      description: 'Multi-stage review process including content validation, plagiarism checks, and formatting verification before delivery.'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning Focus',
      description: 'We emphasize educational value in our services, helping students understand concepts and improve their academic skills.'
    },
    {
      icon: Award,
      title: 'Academic Integrity',
      description: 'Committed to ethical practices and promoting responsible use of academic assistance services.'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Served' },
    { number: '15000+', label: 'Projects Completed' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Swings
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering students to achieve academic success through expert guidance, quality assistance, and unwavering support.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To provide exceptional academic assistance that empowers students to manage their workload effectively, 
                reduce academic stress, and achieve their educational goals while maintaining the highest standards of 
                quality and academic integrity.
              </p>
              <p className="text-lg text-gray-600">
                We believe every student deserves access to expert guidance and support to help them navigate the 
                complexities of modern academic life and unlock their full potential.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To become the world's most trusted academic assistance platform, recognized for our commitment to 
                student success, ethical practices, and educational excellence.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where students worldwide have access to personalized academic support that 
                not only helps them complete their assignments but also enhances their learning experience and 
                academic capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100">
              Trusted by thousands of students worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built our reputation on delivering exceptional academic assistance through rigorous processes and unwavering dedication to student success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <commitment.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{commitment.title}</h3>
                  <p className="text-gray-600">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our success is driven by a diverse team of academic professionals, subject matter experts, and dedicated support staff who are passionate about student success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Specialists</h3>
              <p className="text-gray-600">PhD and Master's degree holders across various disciplines, ensuring expert knowledge in every subject area.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Experienced reviewers who ensure every piece of work meets our high standards before delivery.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Team</h3>
              <p className="text-gray-600">Dedicated customer support professionals available 24/7 to assist with your academic needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Students Choose Swings
          </h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Students:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Stress reduction and better work-life balance</li>
                  <li>• Access to expert knowledge and guidance</li>
                  <li>• Improved academic performance and understanding</li>
                  <li>• Time management and deadline assistance</li>
                  <li>• Learning opportunities through high-quality examples</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Differentiators:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rigorous solver vetting and quality control</li>
                  <li>• Transparent pricing and timeline communication</li>
                  <li>• 24/7 availability and rapid response times</li>
                  <li>• Commitment to academic integrity and ethics</li>
                  <li>• Comprehensive revision and satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Swings Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who trust us for their academic success.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Get Started Today</span>
          </a>
        </div>
      </section>

      {/* Academic Responsibility */}
      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment to Academic Responsibility</h3>
          <p className="text-gray-700">
            Swings is committed to supporting student learning and academic growth. We encourage the responsible use of our services as learning tools and reference materials. All students are expected to understand and comply with their institution's academic integrity policies. Our goal is to enhance your understanding and academic skills while supporting your educational journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;