
import React, { useState } from 'react';
import { Search, Filter, Clock, Users, Star, Play, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', 'Data Science', 'Business', 'Marketing'];

  const courses = [
    {
      id: 1,
      title: 'Complete React & TypeScript Bootcamp',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 2847,
      duration: '24 hours',
      price: 89,
      originalPrice: 129,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      category: 'Development',
      level: 'Intermediate',
      description: 'Master React and TypeScript with hands-on projects and real-world applications.',
      nextSession: 'Today 3:00 PM'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Mike Chen',
      rating: 4.8,
      students: 1923,
      duration: '18 hours',
      price: 67,
      originalPrice: 95,
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      category: 'Design',
      level: 'Beginner',
      description: 'Learn design principles, user research, and create stunning interfaces.',
      nextSession: 'Tomorrow 10:00 AM'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Dr. Emma Wilson',
      rating: 4.9,
      students: 3156,
      duration: '32 hours',
      price: 99,
      originalPrice: 149,
      image: 'bg-gradient-to-br from-green-400 to-green-600',
      category: 'Data Science',
      level: 'Advanced',
      description: 'Comprehensive data science course covering machine learning and analytics.',
      nextSession: 'In 2 hours'
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      instructor: 'Alex Rodriguez',
      rating: 4.7,
      students: 1456,
      duration: '16 hours',
      price: 75,
      originalPrice: 110,
      image: 'bg-gradient-to-br from-orange-400 to-red-500',
      category: 'Marketing',
      level: 'Intermediate',
      description: 'Learn modern digital marketing techniques and grow your business online.',
      nextSession: 'Monday 2:00 PM'
    },
    {
      id: 5,
      title: 'Business Analytics & Intelligence',
      instructor: 'Jennifer Lee',
      rating: 4.8,
      students: 987,
      duration: '20 hours',
      price: 85,
      originalPrice: 120,
      image: 'bg-gradient-to-br from-indigo-400 to-blue-500',
      category: 'Business',
      level: 'Intermediate',
      description: 'Transform data into actionable business insights and drive strategic decisions.',
      nextSession: 'Wednesday 11:00 AM'
    },
    {
      id: 6,
      title: 'Advanced JavaScript & Node.js',
      instructor: 'David Park',
      rating: 4.9,
      students: 2234,
      duration: '28 hours',
      price: 95,
      originalPrice: 140,
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      category: 'Development',
      level: 'Advanced',
      description: 'Deep dive into JavaScript concepts and build scalable backend applications.',
      nextSession: 'Friday 4:00 PM'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Discover 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Premium Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts through live interactive sessions and hands-on projects.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search courses or instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-scale"
              >
                {/* Course Image */}
                <div className={`${course.image} h-48 relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
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
                      <div className="text-lg font-bold text-gray-900">${course.price}</div>
                      <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-2">by {course.instructor}</p>
                  <p className="text-sm text-gray-500 mb-4">{course.description}</p>

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

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">No courses found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
