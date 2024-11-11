import React, { useState } from 'react';

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Save logic
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Account Settings</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Junior234"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded bg-white outline-none text-gray-800"
        />
        <input
          type="email"
          placeholder="junior@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded bg-white outline-none text-gray-800"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded bg-white outline-none text-gray-800"
        />
        <button onClick={handleSave} className="bg-[#8cd836] text-white px-4 py-2 rounded ">
          Save
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
