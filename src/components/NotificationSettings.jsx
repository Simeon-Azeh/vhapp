import React, { useState } from 'react';

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Notification Settings</h3>
      <div className=" text-gray-500">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          <span>Email Notifications</span>
        </label>
        <p className='mb-4 text-gray-400 text-sm'>Send me products, updates and discounts to my email</p>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
          />
          <span>SMS Notifications</span>
        </label>
        <p className='mb-4 text-gray-400 text-sm'>Send me products, updates and discounts to my phone number</p>
      </div>
    </div>
  );
};

export default NotificationSettings;
