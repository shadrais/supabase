import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'

function Profile() {
    const navigate = useNavigate()

    useEffect(() => {
        const session = supabase.auth.session()
        if (!session) {
            navigate('/login')
        }
    }, [])

    return (
        <div className="grid place-items-center h-screen w-screen">
            <div className="text-center">Profile</div>
        </div>
    )
}

export default Profile
