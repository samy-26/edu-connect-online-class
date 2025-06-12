
import React, { useState } from 'react';
import { Menu, X, Play, BookOpen, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduLive
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Instructors
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Live Classes
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Courses
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Instructors
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Live Classes
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
