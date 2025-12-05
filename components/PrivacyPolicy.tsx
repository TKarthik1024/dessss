
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-gray-600">
        <p className="text-sm text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
          <p>Welcome to SkillUp India. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Identity Data includes first name, last name, username or similar identifier.</li>
            <li>Contact Data includes email address and telephone numbers.</li>
            <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li>Usage Data includes information about how you use our website, products and services (e.g., courses viewed, jobs applied for).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
           <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>To facilitate your enrollment in skill development courses.</li>
            <li>To match you with potential job opportunities.</li>
            <li>To provide career guidance via our AI services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
