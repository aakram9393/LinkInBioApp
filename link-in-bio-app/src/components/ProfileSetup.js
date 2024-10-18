import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const navigate = useNavigate();  

  const createProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .insert([{ username, bio, avatar_url: avatarUrl }]);

    if (error) {
      console.error(error);
    } else {
      console.log('Profile created', data);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Setup your profile</h1>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Bio" onChange={(e) => setBio(e.target.value)} />
      <input placeholder="Avatar URL" onChange={(e) => setAvatarUrl(e.target.value)} />
      <button onClick={createProfile}>Save Profile</button>
    </div>
  );
};

export default ProfileSetup;