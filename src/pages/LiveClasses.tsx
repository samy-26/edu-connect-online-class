
import React, { useState } from 'react';
import { Calendar, Clock, Users, Video, Bell, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const LiveClasses = () => {
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const liveClasses = [
    {
      id: 1,
      title: 'React Hooks Deep Dive',
      instructor: 'Sarah Johnson',
      time: '3:00 PM - 4:30 PM',
      date: 'Today',
      participants: 47,
      maxParticipants: 50,
      category: 'Development',
      duration: '90 min',
      status: 'starting-soon',
      description: 'Master React Hooks with practical examples and best practices.',
      avatar: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Design System Workshop',
      instructor: 'Mike Chen',
      time: '10:00 AM - 11:30 AM',
      date: 'Tomorrow',
      participants: 32,
      maxParticipants: 40,
      category: 'Design',
      duration: '90 min',
      status: 'upcoming',
      description: 'Build scalable design systems for modern applications.',
      avatar: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      id: 3,
      title: 'Data Visualization with Python',
      instructor: 'Dr. Emma Wilson',
      time: '6:00 PM - 7:30 PM',
      date: 'Today',
      participants: 38,
      maxParticipants: 45,
      category: 'Data Science',
      duration: '90 min',
      status: 'live',
      description: 'Create stunning visualizations using matplotlib and seaborn.',
      avatar: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    {
      id: 4,
      title: 'SEO Optimization Strategies',
      instructor: 'Alex Rodriguez',
      time: '2:00 PM - 3:00 PM',
      date: 'Monday',
      participants: 28,
      maxParticipants: 35,
      category: 'Marketing',
      duration: '60 min',
      status: 'upcoming',
      description: 'Boost your website rankings with proven SEO techniques.',
      avatar: 'bg-gradient-to-br from-orange-400 to-red-500'
    },
    {
      id: 5,
      title: 'SQL for Business Analytics',
      instructor: 'Jennifer Lee',
      time: '11:00 AM - 12:30 PM',
      date: 'Wednesday',
      participants: 25,
      maxParticipants: 30,
      category: 'Business',
      duration: '90 min',
      status: 'upcoming',
      description: 'Learn advanced SQL queries for data analysis and reporting.',
      avatar: 'bg-gradient-to-br from-indigo-400 to-blue-500'
    },
    {
      id: 6,
      title: 'Node.js Performance Optimization',
      instructor: 'David Park',
      time: '4:00 PM - 5:30 PM',
      date: 'Friday',
      participants: 41,
      maxParticipants: 50,
      category: 'Development',
      duration: '90 min',
      status: 'upcoming',
      description: 'Optimize your Node.js applications for maximum performance.',
      avatar: 'bg-gradient-to-br from-yellow-400 to-orange-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-red-500 text-white';
      case 'starting-soon': return 'bg-orange-500 text-white';
      case 'upcoming': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live': return 'LIVE NOW';
      case 'starting-soon': return 'STARTING SOON';
      case 'upcoming': return 'UPCOMING';
      default: return 'SCHEDULED';
    }
  };

  const filteredClasses = liveClasses.filter(classItem => {
    const matchesDate = selectedDate === 'all' || 
                       (selectedDate === 'today' && classItem.date === 'Today') ||
                       (selectedDate === 'tomorrow' && classItem.date === 'Tomorrow') ||
                       (selectedDate === 'week' && ['Today', 'Tomorrow', 'Monday', 'Wednesday', 'Friday'].includes(classItem.date));
    const matchesCategory = selectedCategory === 'all' || classItem.category.toLowerCase() === selectedCategory;
    return matchesDate && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Live 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Interactive Classes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join real-time learning sessions with expert instructors and fellow students from around the world.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-gray-500" />
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                  <option value="week">This Week</option>
                </select>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="data science">Data Science</option>
                  <option value="marketing">Marketing</option>
                  <option value="business">Business</option>
                </select>
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Bell className="mr-2 h-4 w-4" />
                Set Reminders
              </Button>
            </div>
          </div>

          {/* Live Classes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((classItem) => (
              <div 
                key={classItem.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-scale"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(classItem.status)}`}>
                      {getStatusText(classItem.status)}
                    </span>
                    <span className="text-sm text-gray-500">{classItem.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {classItem.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">{classItem.description}</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`${classItem.avatar} w-10 h-10 rounded-full flex items-center justify-center`}>
                      <span className="text-sm font-bold text-white">
                        {classItem.instructor.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{classItem.instructor}</p>
                      <p className="text-sm text-gray-500">Instructor</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{classItem.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{classItem.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Participants</span>
                      <span className="text-sm text-gray-600">
                        {classItem.participants}/{classItem.maxParticipants}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        style={{ width: `${(classItem.participants / classItem.maxParticipants) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Video className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-blue-700 font-medium">
                        {classItem.time}
                      </span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    disabled={classItem.participants >= classItem.maxParticipants}
                  >
                    {classItem.status === 'live' ? 'Join Now' : 
                     classItem.status === 'starting-soon' ? 'Get Ready' : 
                     classItem.participants >= classItem.maxParticipants ? 'Class Full' : 'Reserve Spot'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredClasses.length === 0 && (
            <div className="text-center py-12">
              <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">No live classes found</h3>
              <p className="text-gray-400">Try adjusting your filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveClasses;
