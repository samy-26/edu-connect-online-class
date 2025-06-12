
import React from 'react';
import { Users, Award, Globe, Target, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const About = () => {
  const stats = [
    { label: 'Active Students', value: '50,000+', icon: Users },
    { label: 'Expert Instructors', value: '500+', icon: Award },
    { label: 'Countries Served', value: '120+', icon: Globe },
    { label: 'Success Rate', value: '95%', icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Student-Centric',
      description: 'We put our students first, ensuring every learning experience is tailored to their needs and goals.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our platform with cutting-edge technology to enhance the learning experience.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in course quality, instructor expertise, and student support.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We believe quality education should be accessible to everyone, everywhere, at any time.'
    }
  ];

  const team = [
    {
      name: 'Emma Thompson',
      role: 'CEO & Founder',
      avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
      bio: 'Former educator with 15+ years in EdTech innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      avatar: 'bg-gradient-to-br from-green-400 to-green-600',
      bio: 'Tech visionary with expertise in scalable platforms.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of Education',
      avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
      bio: 'Learning specialist focused on curriculum excellence.'
    },
    {
      name: 'David Park',
      role: 'Head of Growth',
      avatar: 'bg-gradient-to-br from-orange-400 to-orange-600',
      bio: 'Growth strategist passionate about global education access.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transforming Education
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Through Technology
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              EduLive is revolutionizing online education by connecting passionate learners with world-class 
              instructors through immersive live video experiences. We believe that quality education should 
              be accessible, engaging, and transformative.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 mb-20 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To democratize access to high-quality education by creating an interactive platform 
                  where learners can connect with expert instructors in real-time, fostering genuine 
                  human connections that enhance the learning experience.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a world where geographical boundaries don't limit educational opportunities, 
                  and where every learner has access to personalized, expert-led instruction that adapts 
                  to their unique learning style and pace.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose EduLive?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Live, interactive learning experiences</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Verified industry expert instructors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Personalized learning paths</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Global community of learners</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>24/7 support and resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape the culture of our platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover-scale"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate educators and technologists working together to transform online learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover-scale"
                >
                  <div className={`${member.avatar} w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already transforming their careers with EduLive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              >
                Start Learning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium"
              >
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
