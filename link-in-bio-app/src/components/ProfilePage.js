import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProfilePage = () => {
  const { username } = useParams();
  console.log(username)
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*, links(*)')
        .eq('username', username);

      if (error) {
        console.error(error);
      } else {
        setProfile(data[0]);
      }
    };

    fetchProfile();
  }, [username]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.username}'s Profile</h1>
      <p>{profile.bio}</p>
      <img src={profile.avatar_url} alt={profile.username} />
      <ul>
        {profile.links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;