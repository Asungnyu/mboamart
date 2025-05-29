import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ViewedItems from "../components/ViewedItems";
import LikedItems from "../components/LikedItems";
import CartReservations from "../components/CartReservations";

function Profile() {
  const [activeTab, setActiveTab] = useState("viewed"); // Default tab

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />

      <div className="flex-1 p-6">
        {activeTab === "viewed" && <ViewedItems />}
        {activeTab === "liked" && <LikedItems />}
        {activeTab === "cart" && <CartReservations />}
      </div>
    </div>
  );
}

export default Profile;
