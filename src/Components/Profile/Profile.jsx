import React, { useContext } from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/Feed";
import ProfilePhotoPost from "./ProfilePhotoPost/ProfilePhotoPost";
import { UserContext } from "../../Contexts/UserContext";
import Statistics from "./Statistics/Statistics";
import NotFound from "../Pages/NotFound";

export const Profile = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <ProfileHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="posting" element={<ProfilePhotoPost />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
