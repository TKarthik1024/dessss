
import React, { useState, useMemo } from 'react';
import { JOBS } from '../constants';
import { MapPinIcon, WrenchScrewdriverIcon, BuildingOfficeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const JobsPage: React.FC = () => {
  const [regionFilter, setRegionFilter] = useState('All');
  const [skillFilter, setSkillFilter] = useState('All');
  const [appliedJobs, setAppliedJobs] = useState<Set<string>>(new Set());

  const uniqueRegions = useMemo(() => ['All', ...new Set(JOBS.map(j => j.location))], []);
  const uniqueSkills = useMemo(() => ['All', ...new Set(JOBS.map(j => j.skill))], []);

  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      const regionMatch = regionFilter === 'All' || job.location === regionFilter;
      const skillMatch = skillFilter === 'All' || job.skill === skillFilter;
      return regionMatch && skillMatch;
    });
  }, [regionFilter, skillFilter]);

  const handleApply = (jobId: string, jobTitle: string) => {
    if (confirm(`Are you sure you want to apply for ${jobTitle}?`)) {
      setAppliedJobs(prev => {
        const newSet = new Set(prev);
        newSet.add(jobId);
        return newSet;
      });
      // In a real app, this would be an API call
    }
  };

  return (
    <div className="space-y-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Job Opportunities</h1>
        <p className="text-gray-600 mt-3">Find jobs that match your skills and preferences.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar / Filters */}
        <aside className="w-full lg:w-1/4">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 sticky top-24">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-2">Region</label>
                <div className="relative">
                  <select
                    id="region"
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-gray-700"
                  >
                    {uniqueRegions.map(region => <option key={region} value={region}>{region}</option>)}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="skill" className="block text-sm font-semibold text-gray-700 mb-2">Skill Type</label>
                <div className="relative">
                  <select
                    id="skill"
                    value={skillFilter}
                    onChange={(e) => setSkillFilter(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none text-gray-700"
                  >
                    {uniqueSkills.map(skill => <option key={skill} value={skill}>{skill}</option>)}
                  </select>
                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Job List */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => {
                const isApplied = appliedJobs.has(job.id);
                return (
                  <div key={job.id} className={`bg-white p-6 rounded-2xl shadow-sm border transition-all duration-300 flex flex-col justify-between h-full ${isApplied ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:shadow-md'}`}>
                    <div>
                      <div className="flex justify-between items-start">
                         <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                         {isApplied && <CheckCircleIcon className="w-6 h-6 text-green-500" />}
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                         <BuildingOfficeIcon className="w-4 h-4 mr-1" />
                         <span className="text-sm">{job.company}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500 bg-white p-2 rounded-lg border border-gray-100">
                        <MapPinIcon className="w-4 h-4 mr-2 text-orange-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 bg-white p-2 rounded-lg border border-gray-100">
                        <WrenchScrewdriverIcon className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{job.skill}</span>
                      </div>
                      <button 
                        onClick={() => handleApply(job.id, job.title)}
                        disabled={isApplied}
                        className={`w-full mt-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                            isApplied 
                            ? 'bg-green-100 text-green-700 border border-green-200 cursor-default'
                            : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 active:bg-blue-100'
                        }`}
                      >
                        {isApplied ? 'Application Sent' : 'Apply Now'}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                <button 
                  onClick={() => {setRegionFilter('All'); setSkillFilter('All');}}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
