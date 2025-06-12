
import React from 'react';
import { Star, Users, BookOpen, Award, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior React Developer',
      company: 'Google',
      rating: 4.9,
      students: 15420,
      courses: 12,
      experience: '8+ years',
      location: 'San Francisco, CA',
      avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
      specialties: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      bio: 'Passionate developer with extensive experience in building scalable web applications. Former tech lead at major Silicon Valley companies.',
      nextSession: 'Today 3:00 PM',
      hourlyRate: '$150'
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Senior UX Designer',
      company: 'Apple',
      rating: 4.8,
      students: 9876,
      courses: 8,
      experience: '6+ years',
      location: 'New York, NY',
      avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
      specialties: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      bio: 'Award-winning designer focused on creating intuitive and beautiful user experiences. Published author and design consultant.',
      nextSession: 'Tomorrow 10:00 AM',
      hourlyRate: '$120'
    },
    {
      id: 3,
      name: 'Dr. Emma Wilson',
      title: 'Data Science Director',
      company: 'Microsoft',
      rating: 4.9,
      students: 12543,
      courses: 15,
      experience: '10+ years',
      location: 'Seattle, WA',
      avatar: 'bg-gradient-to-br from-green-400 to-green-600',
      specialties: ['Python', 'Machine Learning', 'Data Analytics', 'AI'],
      bio: 'PhD in Computer Science with expertise in machine learning and artificial intelligence. Leading data science teams for over a decade.',
      nextSession: 'In 2 hours',
      hourlyRate: '$200'
    },
    {
      id: 4,
      name: 'Alex Rodriguez',
      title: 'Digital Marketing Manager',
      company: 'Meta',
      rating: 4.7,
      students: 8765,
      courses: 6,
      experience: '5+ years',
      location: 'Austin, TX',
      avatar: 'bg-gradient-to-br from-orange-400 to-red-500',
      specialties: ['Digital Marketing', 'SEO', 'Social Media', 'Analytics'],
      bio: 'Results-driven marketer with proven track record of growing businesses through digital channels. Certified in Google and Facebook advertising.',
      nextSession: 'Monday 2:00 PM',
      hourlyRate: '$100'
    },
    {
      id: 5,
      name: 'Jennifer Lee',
      title: 'Business Intelligence Lead',
      company: 'Amazon',
      rating: 4.8,
      students: 6543,
      courses: 9,
      experience: '7+ years',
      location: 'Boston, MA',
      avatar: 'bg-gradient-to-br from-indigo-400 to-blue-500',
      specialties: ['Business Analytics', 'SQL', 'Tableau', 'Power BI'],
      bio: 'Strategic business analyst with expertise in transforming data into actionable insights. Former consultant for Fortune 500 companies.',
      nextSession: 'Wednesday 11:00 AM',
      hourlyRate: '$130'
    },
    {
      id: 6,
      name: 'David Park',
      title: 'Full Stack Engineer',
      company: 'Netflix',
      rating: 4.9,
      students: 11234,
      courses: 11,
      experience: '9+ years',
      location: 'Los Angeles, CA',
      avatar: 'bg-gradient-to-br from-yellow-400 to-orange-500',
      specialties: ['JavaScript', 'Node.js', 'React', 'Cloud Architecture'],
      bio: 'Versatile engineer with experience across the full technology stack. Passionate about mentoring and sharing knowledge with the next generation.',
      nextSession: 'Friday 4:00 PM',
      hourlyRate: '$160'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expert Instructors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals who have worked at top companies and are passionate about teaching.
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div 
                key={instructor.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-scale"
              >
                {/* Instructor Avatar */}
                <div className="p-6 text-center">
                  <div className={`${instructor.avatar} w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{instructor.title}</p>
                  <p className="text-sm text-gray-500 mb-3">at {instructor.company}</p>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{instructor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{instructor.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{instructor.courses}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{instructor.location}</span>
                    <span>•</span>
                    <Award className="h-4 w-4" />
                    <span>{instructor.experience}</span>
                  </div>
                </div>

                {/* Instructor Details */}
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {instructor.bio}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-700 font-medium">
                          Next: {instructor.nextSession}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-blue-700">
                        {instructor.hourlyRate}/hr
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Book 1-on-1 Session
                    </Button>
                    <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                      View Courses
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
