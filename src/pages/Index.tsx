
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CoursePreview from '../components/CoursePreview';
import Stats from '../components/Stats';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <CoursePreview />
    </div>
  );
};

export default Index;
