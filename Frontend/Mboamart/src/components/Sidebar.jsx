function Sidebar({ setActiveTab, activeTab }) {
  return (
    <div className="w-fit bg-white shadow-lg p-6">
      <h2 className="text-xl font-bold">Profile</h2>
      <ul className="mt-4 space-y-4">
        <li>
          <button
            className={`btn w-full ${
              activeTab === "viewed" ? "bg-sky-400 text-white" : ""
            }`}
            onClick={() => setActiveTab("viewed")}
          >
            Viewed Items
          </button>
        </li>
        <li>
          <button
            className={`btn w-full ${
              activeTab === "liked" ? "bg-sky-400 text-white" : ""
            }`}
            onClick={() => setActiveTab("liked")}
          >
            Liked Items
          </button>
        </li>
        <li>
          <button
            className={`btn w-full ${
              activeTab === "cart" ? "bg-sky-400 text-white" : ""
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Cart Reservations
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
