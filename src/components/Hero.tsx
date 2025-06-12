
import React from 'react';
import { Play, Star, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                <span>Join 50,000+ Students Learning Live</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Learn Live with
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                  Expert Instructors
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience interactive learning through live video sessions, real-time collaboration, 
                and personalized instruction from verified experts worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Learning Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Browse Courses
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Live Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                {/* Mock Video Interface */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Live: React Masterclass</div>
                      <div className="text-sm text-gray-500">with Sarah Johnson</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-red-500">LIVE</span>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Play className="h-12 w-12 text-blue-600 mx-auto" />
                    <p className="text-gray-600">Interactive Learning Session</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">47 students joined</span>
                  </div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                🎉 30% Off Today!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                ✓ Money Back Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
