import React, { useEffect } from 'react';
import { useStore } from '../useStore'
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);
  useEffect(() => {
    const session = supabase.auth.session()
    if (!session) {
      navigate('/login')
    }
  }, [])

  return (
    <div className="grid place-items-center h-screen w-screen">
      {user && <div className="text-center">
        <span className="text-2xl">Welcome Back </span>
        <span className='text-2xl text-stone-700'>{user?.user_metadata?.name}</span>
      </div>}
    </div>
  );
}

export default Home;
