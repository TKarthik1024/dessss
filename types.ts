
// Fix: Import React to resolve "Cannot find namespace 'React'" error.
import type React from 'react';

export type Page = 'Home' | 'Skills' | 'Jobs' | 'Profile' | 'Privacy' | 'Terms' | 'Contact';

export interface Course {
  id: string;
  title: string;
  provider: string;
  type: 'Online' | 'Offline';
  duration: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  skill: string;
}

export interface SkillCategory {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  courses: Course[];
}

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}
