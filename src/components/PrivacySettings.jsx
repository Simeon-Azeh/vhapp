import React, { useState } from 'react';

const PrivacySettings = () => {
  const [profileVisibility, setProfileVisibility] = useState(true);
  const [shareData, setShareData] = useState(false);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Privacy Settings</h3>
      <div className="space-y-2 text-gray-500">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={profileVisibility}
            onChange={() => setProfileVisibility(!profileVisibility)}
          />
          <span>Profile Visibility</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={shareData}
            onChange={() => setShareData(!shareData)}
          />
          <span>Share Data with Third Parties</span>
        </label>
      </div>
    </div>
  );
};

export default PrivacySettings;
