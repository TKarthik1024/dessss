
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
      <div className="space-y-4 text-gray-600">
        <p className="text-sm text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Agreement to Terms</h2>
          <p>By accessing our website 'SkillUp India', you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these terms, you are prohibited from using or accessing this site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on SkillUp India's website for personal, non-commercial transitory viewing only.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">3. User Conduct</h2>
          <p>Users are expected to use the platform responsibly. You agree not to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Use the service for any illegal purpose.</li>
            <li>Harass, abuse, or harm another person.</li>
            <li>Provide false or misleading information in your profile or job applications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Job Listings and Course Content</h2>
          <p>SkillUp India acts as a bridge between users, educational providers, and employers. We do not guarantee the accuracy of job listings or the quality of courses provided by third parties, although we strive to verify them.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
