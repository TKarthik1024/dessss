
import React from 'react';
import type { Page } from '../types';
import CareerGuidanceChatbot from './CareerGuidanceChatbot';
import SkillsIcon from './icons/SkillsIcon';
import JobsIcon from './icons/JobsIcon';
import ChatIcon from './icons/ChatIcon';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 tracking-tight">
          Welcome to SkillUp India
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your journey to a brighter future starts here. We bridge the gap between education and employment for a stronger India.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onNavigate('Skills')}
            className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1"
          >
            <SkillsIcon className="w-5 h-5 mr-2" />
            Explore Skills
          </button>
          <button
            onClick={() => onNavigate('Jobs')}
            className="flex items-center justify-center px-8 py-3 bg-white text-blue-600 border border-blue-200 rounded-full font-semibold shadow-sm hover:bg-blue-50 transition-transform transform hover:-translate-y-1"
          >
            <JobsIcon className="w-5 h-5 mr-2" />
            Find Jobs
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">The Challenge Ahead</h2>
          <p className="text-gray-600 leading-relaxed">
            India faces a significant challenge in bridging the gap between education and employment.
            Millions of young individuals need the right skills to enter the modern workforce. SkillUp India is our
            commitment to tackling this by providing accessible training and job opportunities.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
           <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-2 rounded-lg mr-4">
               <ChatIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Career Guidance Chatbot</h2>
              <p className="text-sm text-gray-500">Ask 'Saksham' for advice</p>
            </div>
          </div>
          <CareerGuidanceChatbot />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
