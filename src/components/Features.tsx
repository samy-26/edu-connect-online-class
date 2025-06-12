
import React from 'react';
import { Video, CreditCard, Calendar, MessageSquare, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: 'Live Video Classes',
      description: 'Join interactive sessions with HD video quality, screen sharing, and real-time collaboration tools.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with Stripe. Multiple payment options and instant access.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Book classes that fit your schedule. Get reminders and never miss an important session.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageSquare,
      title: 'Interactive Chat',
      description: 'Engage with instructors and peers through live chat, Q&A sessions, and discussion forums.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Verified Instructors',
      description: 'Learn from certified professionals and industry experts who are thoroughly vetted.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Instant Access',
      description: 'Start learning immediately after enrollment. Download materials and access recordings anytime.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> EduLive?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of online education with cutting-edge technology and personalized learning paths.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/20 shadow-sm hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
