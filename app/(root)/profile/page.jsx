'use client'
import ProfileForm from '@/components/ProfileForm';
import { useUser } from '@clerk/nextjs'
import React from 'react'

const Profile = () => {
  const {user} = useUser();
  return (
    <>
    <ProfileForm user={user}/>
    </>
  )
}

export default Profile