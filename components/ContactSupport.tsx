
import React, { useState } from 'react';

const ContactSupport: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
        <p className="text-gray-600">Thank you for reaching out. Our support team will get back to you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Contact Support</h1>
        <p className="text-gray-600 mt-2">Have a question? We're here to help you.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              <option value="">Select a topic</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Course Issues">Course Related Issues</option>
              <option value="Job Application">Job Application Issues</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="How can we assist you today?"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="mt-10 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
                <h3 className="text-sm font-bold text-gray-900">Email Us</h3>
                <p className="text-sm text-gray-500 mt-1">support@skillupindia.in</p>
            </div>
             <div>
                <h3 className="text-sm font-bold text-gray-900">Call Us</h3>
                <p className="text-sm text-gray-500 mt-1">+91 1800-123-4567</p>
            </div>
             <div>
                <h3 className="text-sm font-bold text-gray-900">Visit Us</h3>
                <p className="text-sm text-gray-500 mt-1">Tech Park, Bangalore</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
