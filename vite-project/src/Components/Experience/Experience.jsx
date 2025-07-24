import React from 'react';

export default function Experience() {
  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-center text-2xl font-bold mb-6">Experience</h1>

      
      
        {/* Hartron Training Center */}
        <div className="border-2 border-gray-300 rounded-xl p-4 shadow-md mb-4">
          <h2 className="text-xl font-semibold">Hartron Skill Center, Assandh</h2>
          <p className="text-sm text-gray-600 mb-2">2024 - Present</p>
          <p>
            Currently working in the reception position, handling student coordination,
            documentation, and support services at the center.
          </p>
        </div>

        {/* Amazon */}
        <div className="border-2 border-gray-300 rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold">Amazon</h2>
          <p className="text-sm text-gray-600 mb-2">2023 - 2024</p>
          <p>
            Worked as an Auditor focused on quality assurance, data accuracy,
            compliance checks, and process improvement within operational teams.
          </p>
        </div>

      </div>
    </div>
  );
}
