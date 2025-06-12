
import React from 'react';
import { Users, BookOpen, Award, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Students',
      description: 'Learning worldwide'
    },
    {
      icon: BookOpen,
      value: '1,200+',
      label: 'Premium Courses',
      description: 'Expert-led content'
    },
    {
      icon: Award,
      value: '500+',
      label: 'Certified Instructors',
      description: 'Industry professionals'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Live Support',
      description: 'Always here to help'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover-scale"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
