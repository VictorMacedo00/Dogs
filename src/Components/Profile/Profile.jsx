import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import ProfilePhotoPost from './ProfilePhotoPost/ProfilePhotoPost'
import Statistics from './Statistics/Statistics'

export const Profile = () => {
  return (
    <section className="container">
      <ProfileHeader />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/posting' element={<ProfilePhotoPost />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
      Profile
    </section>
  )
}
