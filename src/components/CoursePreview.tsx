
import React from 'react';
import { Star, Clock, Users, Play, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoursePreview = () => {
  const courses = [
    {
      id: 1,
      title: 'React & TypeScript Masterclass',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 2847,
      duration: '12 hours',
      price: '$89',
      originalPrice: '$129',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      category: 'Development',
      isLive: true,
      nextSession: 'Today 3:00 PM'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Mike Chen',
      rating: 4.8,
      students: 1923,
      duration: '8 hours',
      price: '$67',
      originalPrice: '$95',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      category: 'Design',
      isLive: false,
      nextSession: 'Tomorrow 10:00 AM'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Dr. Emma Wilson',
      rating: 4.9,
      students: 3156,
      duration: '15 hours',
      price: '$99',
      originalPrice: '$149',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      category: 'Data Science',
      isLive: true,
      nextSession: 'In 2 hours'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of students in our most popular live courses taught by industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-scale"
            >
              {/* Course Image */}
              <div className={`${course.image} h-48 relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {course.isLive && (
                    <div className="flex items-center space-x-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.students})</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">{course.price}</div>
                    <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4">by {course.instructor}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-blue-700 font-medium">
                      Next session: {course.nextSession}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 px-8"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
