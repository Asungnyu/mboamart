import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "@components/profile/Profile.jsx";

function ProfileRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/profile" replace />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </>
    );
}

export default ProfileRoute;