
import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Users, Star, Award, Play, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const enrolledCourses = [
    {
      id: 1,
      title: 'React & TypeScript Masterclass',
      instructor: 'Sarah Johnson',
      progress: 65,
      nextSession: 'Today 3:00 PM',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Mike Chen',
      progress: 40,
      nextSession: 'Tomorrow 10:00 AM',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Dr. Emma Wilson',
      progress: 25,
      nextSession: 'Friday 2:00 PM',
      image: 'bg-gradient-to-br from-green-400 to-green-600'
    }
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: 'React Hooks Deep Dive',
      instructor: 'Sarah Johnson',
      time: '3:00 PM - 4:30 PM',
      date: 'Today',
      status: 'starting-soon'
    },
    {
      id: 2,
      title: 'Design System Workshop',
      instructor: 'Mike Chen',
      time: '10:00 AM - 11:30 AM',
      date: 'Tomorrow',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Data Visualization',
      instructor: 'Dr. Emma Wilson',
      time: '2:00 PM - 3:30 PM',
      date: 'Friday',
      status: 'upcoming'
    }
  ];

  const achievements = [
    { title: 'First Course Complete', icon: Award, earned: true },
    { title: 'Week Streak', icon: Calendar, earned: true },
    { title: 'Top Participant', icon: Star, earned: false },
    { title: 'Study Champion', icon: BookOpen, earned: false }
  ];

  const stats = [
    { label: 'Courses Enrolled', value: '3', icon: BookOpen },
    { label: 'Hours Learned', value: '47', icon: Clock },
    { label: 'Live Sessions', value: '12', icon: Users },
    { label: 'Certificates', value: '1', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Welcome back, 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> John!</span>
              </h1>
              <p className="text-gray-600">Continue your learning journey and achieve your goals.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enrolled Courses */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
                      <div className="flex items-center space-x-4">
                        <div className={`${course.image} w-16 h-16 rounded-lg flex items-center justify-center`}>
                          <BookOpen className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium">{course.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              Continue
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        achievement.earned 
                          ? 'border-yellow-300 bg-yellow-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          achievement.earned 
                            ? 'bg-yellow-400 text-yellow-900' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <span className={`font-medium ${
                          achievement.earned ? 'text-yellow-900' : 'text-gray-600'
                        }`}>
                          {achievement.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Upcoming Classes */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Classes</h2>
                <div className="space-y-4">
                  {upcomingClasses.map((classItem) => (
                    <div key={classItem.id} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm">{classItem.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          classItem.status === 'starting-soon' 
                            ? 'bg-orange-100 text-orange-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {classItem.status === 'starting-soon' ? 'Starting Soon' : 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">with {classItem.instructor}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          <p>{classItem.date}</p>
                          <p>{classItem.time}</p>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          <Play className="mr-1 h-3 w-3" />
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <BookOpen className="mr-3 h-4 w-4" />
                    Browse New Courses
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-200 text-blue-600 hover:bg-blue-50">
                    <Calendar className="mr-3 h-4 w-4" />
                    Schedule 1-on-1 Session
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-gray-200 text-gray-600 hover:bg-gray-50">
                    <Users className="mr-3 h-4 w-4" />
                    Join Study Group
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
