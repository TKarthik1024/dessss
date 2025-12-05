
import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';
import type { SkillCategory, Course } from '../types';
import { ChevronDownIcon, ChevronUpIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-blue-300 transition-all flex flex-col justify-between h-full group">
    <div>
        <h3 className="font-bold text-gray-800 text-lg mb-1">{course.title}</h3>
        <p className="text-sm text-gray-500 font-medium">{course.provider}</p>
        <div className="flex gap-2 mt-3 text-xs font-semibold">
        <span className={`px-2 py-1 rounded-md ${course.type === 'Online' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
            {course.type}
        </span>
        <span className="text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">{course.duration}</span>
        </div>
    </div>
    
    <button 
        onClick={() => alert(`Redirecting you to ${course.provider} enrollment portal...`)}
        className="mt-4 w-full py-2 bg-white text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-semibold flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-200"
    >
        View Details <ArrowRightIcon className="w-3 h-3 ml-2" />
    </button>
  </div>
);

const CategoryCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, icon: Icon, courses } = category;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
      >
        <div className="flex items-center">
          <div className="bg-blue-50 p-3 rounded-xl mr-4 text-blue-600">
             <Icon className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-400" />
        )}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="p-6 pt-0">
          <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Develop Your Skills</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Choose a category to find the right training program for you and take the next step in your career.</p>
      </header>
      <div className="grid grid-cols-1 gap-6">
        {SKILL_CATEGORIES.map(category => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
