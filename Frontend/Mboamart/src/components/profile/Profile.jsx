import { useState } from "react";
import Sidebar from "./Sidebar";
import ViewedItems from "./ViewedItems";
import LikedItems from "./LikedItems";
import CartReservations from "./CartReservations";

function Profile() {
  const [activeTab, setActiveTab] = useState("viewed"); // Default tab

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* Main content area */}
      <div className="flex-1 p-6">
        {activeTab === "viewed" && <ViewedItems />}
        {activeTab === "liked" && <LikedItems />}
        {activeTab === "cart" && <CartReservations />}
      </div>
    </div>
  );
}

export default Profile;
