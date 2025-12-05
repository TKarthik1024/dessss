
import React, { useState } from 'react';
import { USER_PROFILE } from '../constants';
import { PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(USER_PROFILE);
  const [tempProfile, setTempProfile] = useState(USER_PROFILE);

  const handleEdit = () => {
    setIsEditing(true);
    setTempProfile(profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempProfile(profile);
  };

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
    // In a real app, this would send data to backend
  };

  const handleChange = (field: keyof typeof USER_PROFILE, value: string) => {
      // For simple string fields
      setTempProfile({ ...tempProfile, [field]: value });
  };
  
  // Helper for array fields (simplified for comma separated input)
  const handleArrayChange = (field: keyof typeof USER_PROFILE, value: string) => {
      const arrayValue = value.split(',').map(s => s.trim());
      setTempProfile({ ...tempProfile, [field]: arrayValue });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Profile Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="relative">
            <img
            src={`https://picsum.photos/seed/${profile.name}/150/150`}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
        </div>
        
        <div className="text-center md:text-left flex-grow w-full">
            {isEditing ? (
                 <div className="space-y-2">
                     <input 
                        type="text" 
                        value={tempProfile.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="text-3xl font-bold text-gray-800 border-b border-blue-500 focus:outline-none w-full text-center md:text-left"
                     />
                     <p className="text-gray-500 text-lg">Aspiring Professional</p>
                 </div>
            ) : (
                <>
                    <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                    <p className="text-gray-500 text-lg mt-1">Aspiring Professional</p>
                </>
            )}
            
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-3">
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Looking for Jobs</span>
            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">Open to Relocate</span>
          </div>
        </div>
        
        <div className="flex-shrink-0 flex space-x-2">
             {isEditing ? (
                 <>
                    <button onClick={handleSave} className="px-4 py-2 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors shadow-lg flex items-center">
                        <CheckIcon className="w-5 h-5 mr-1" /> Save
                    </button>
                    <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition-colors shadow-lg flex items-center">
                        <XMarkIcon className="w-5 h-5 mr-1" /> Cancel
                    </button>
                 </>
             ) : (
                 <button onClick={handleEdit} className="px-6 py-2 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg flex items-center">
                    <PencilSquareIcon className="w-5 h-5 mr-2" />
                     Edit Profile
                 </button>
             )}
        </div>
      </div>
      
      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-full">
                <h2 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">My Skills</h2>
                {isEditing ? (
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        value={tempProfile.skills.join(', ')}
                        onChange={(e) => handleArrayChange('skills', e.target.value)}
                        placeholder="Comma separated skills..."
                        rows={3}
                    />
                ) : (
                    <ul className="space-y-3">
                    {profile.skills.map((item, index) => (
                        <li key={index} className="flex items-center text-gray-700 font-medium">
                        <svg className="h-2 w-2 bg-blue-600 rounded-full mr-3" viewBox="0 0 24 24"></svg>
                        {item}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-full">
            <h2 className="text-lg font-bold text-green-600 mb-4 border-b pb-2">Completed Courses</h2>
             {isEditing ? (
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                        value={tempProfile.completedCourses.join(', ')}
                        onChange={(e) => handleArrayChange('completedCourses', e.target.value)}
                        placeholder="Comma separated courses..."
                        rows={4}
                    />
                ) : (
                <ul className="space-y-3">
                {profile.completedCourses.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 font-medium">
                    <svg className="h-2 w-2 bg-green-600 rounded-full mr-3" viewBox="0 0 24 24"></svg>
                    {item}
                    </li>
                ))}
                </ul>
            )}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-full">
            <h2 className="text-lg font-bold text-orange-600 mb-4 border-b pb-2">Job Preferences</h2>
            {isEditing ? (
                    <textarea 
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                        value={tempProfile.jobPreferences.join(', ')}
                        onChange={(e) => handleArrayChange('jobPreferences', e.target.value)}
                        placeholder="Comma separated preferences..."
                        rows={4}
                    />
                ) : (
                <ul className="space-y-3">
                {profile.jobPreferences.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700 font-medium">
                    <svg className="h-2 w-2 bg-orange-600 rounded-full mr-3" viewBox="0 0 24 24"></svg>
                    {item}
                    </li>
                ))}
                </ul>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
