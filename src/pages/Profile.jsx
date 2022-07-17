import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../client'
function Profile() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const session = supabase.auth.session()
        if (!session) {
            navigate('/login')
        }
        else {
            const user = supabase.auth.user()
            setUser(user)
        }
    }, [])

    return (
        <div className="mt-24 h-screen w-screen">
            {user && <div className="ml-4">hi {user.user_metadata.name} </div>}
        </div>
    )
}

export default Profile
