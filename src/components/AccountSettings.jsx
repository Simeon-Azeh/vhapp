import React, { useState, useEffect } from 'react';
import { getAuth, updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';

const AccountSettings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email);
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      if (user) {
        const db = getFirestore();
        const userRef = doc(db, 'users', user.uid);

        // Update username in Firestore and Firebase Auth
        if (username) {
          await updateProfile(user, { displayName: username });
          await updateDoc(userRef, { username });
        }

        // Update email in Firebase Auth and Firestore
        if (email && email !== user.email) {
          await updateEmail(user, email);
          await updateDoc(userRef, { email });
        }

        // Update password in Firebase Auth
        if (password) {
          await updatePassword(user, password);
        }

        setSuccess('Account settings updated successfully.');
      }
    } catch (error) {
      setError('Failed to update account settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Account Settings</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 text-gray-800 bg-white border rounded outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 text-gray-800 bg-white border rounded outline-none"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 text-gray-800 bg-white border rounded outline-none"
        />
        <button onClick={handleSave} className="bg-[#8cd836] text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        {success && <p className="mt-2 text-xs text-green-500">{success}</p>}
      </div>
    </div>
  );
};

export default AccountSettings;