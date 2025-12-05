
import type { Job, SkillCategory } from './types';
import { ComputerDesktopIcon, BoltIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'AI & Data Science',
    icon: ComputerDesktopIcon,
    courses: [
      { id: 'ai1', title: 'Generative AI Fundamentals', provider: 'Google Cloud Skills', type: 'Online', duration: '2 Months' },
      { id: 'ai2', title: 'Data Analytics with Python', provider: 'IIT Madras (NPTEL)', type: 'Online', duration: '3 Months' },
      { id: 'ai3', title: 'Machine Learning Engineering', provider: 'Simplilearn', type: 'Online', duration: '6 Months' },
    ],
  },
  {
    name: 'Green Technology',
    icon: BoltIcon,
    courses: [
      { id: 'ev1', title: 'Electric Vehicle Maintenance', provider: 'NSDC Skill India', type: 'Offline', duration: '3 Months' },
      { id: 'ev2', title: 'Solar Panel Installation', provider: 'Suryamitra Program', type: 'Offline', duration: '3 Months' },
    ],
  },
  {
    name: 'Digital Business',
    icon: GlobeAltIcon,
    courses: [
      { id: 'dm1', title: 'Digital Marketing Specialist', provider: 'Google Digital Garage', type: 'Online', duration: '2 Months' },
      { id: 'dm2', title: 'E-commerce Management', provider: 'Amazon ATO', type: 'Online', duration: '4 Months' },
    ],
  },
  {
    name: 'Healthcare & Wellness',
    icon: HeartIcon,
    courses: [
      { id: 'hc1', title: 'General Duty Assistant', provider: 'Healthcare Sector Skill Council', type: 'Offline', duration: '4 Months' },
      { id: 'hc2', title: 'Certified Yoga Instructor', provider: 'AYUSH Ministry', type: 'Offline', duration: '3 Months' },
    ],
  },
];

export const JOBS: Job[] = [
  { id: 'job1', title: 'Junior AI Engineer', company: 'TechInno Solutions', location: 'Bangalore', skill: 'AI & Data Science' },
  { id: 'job2', title: 'EV Service Technician', company: 'Tata Motors Service', location: 'Pune', skill: 'Green Technology' },
  { id: 'job3', title: 'Solar Site Engineer', company: 'Adani Green Energy', location: 'Ahmedabad', skill: 'Green Technology' },
  { id: 'job4', title: 'Digital Marketing Associate', company: 'Flipkart', location: 'Bangalore', skill: 'Digital Business' },
  { id: 'job5', title: 'Healthcare Assistant', company: 'Apollo Hospitals', location: 'Hyderabad', skill: 'Healthcare & Wellness' },
  { id: 'job6', title: 'Data Analyst', company: 'Deloitte India', location: 'Gurugram', skill: 'AI & Data Science' },
  { id: 'job7', title: 'E-commerce Logistics Mgr', company: 'Delhivery', location: 'Delhi', skill: 'Digital Business' },
  { id: 'job8', title: 'Prompt Engineer', company: 'Fractal Analytics', location: 'Mumbai', skill: 'AI & Data Science' },
];

export const USER_PROFILE = {
  name: 'Aarav Sharma',
  skills: ['Python', 'Data Analysis', 'Digital Marketing'],
  completedCourses: ['Data Analytics with Python', 'Digital Marketing Specialist'],
  jobPreferences: ['AI & Data Science in Bangalore', 'Digital Business in Mumbai'],
};
