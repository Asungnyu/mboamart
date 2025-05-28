import React, { useState, useEffect } from "react";

const mockData = [
  {
    id: 1,
    category: "Men",
    url: "https://source.unsplash.com/400x300/?nature",
  },
  {
    id: 2,
    category: "Women",
    url: "https://source.unsplash.com/400x300/?city",
  },
  {
    id: 3,
    category: "Kids",
    url: "https://source.unsplash.com/400x300/?animal",
  },
  {
    id: 4,
    category: "Gadgets",
    url: "https://source.unsplash.com/400x300/?forest",
  },
  {
    id: 5,
    category: "Beauty",
    url: "https://source.unsplash.com/400x300/?building",
  },
  {
    id: 6,
    category: "Fashion",
    url: "https://source.unsplash.com/400x300/?building",
  },
  {
    id: 7,
    category: "Deco",
    url: "https://source.unsplash.com/400x300/?building",
  },

  {
    id: 8,
    category: "Food",
    url: "https://source.unsplash.com/400x300/?building",
  },
];

const CategoryFilter = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    // Placeholder for fetching from an endpoint
    // fetch("YOUR_API_URL").then(res => res.json()).then(data => { setData(data); setFiltered(data); });

    setData(mockData);
    setFiltered(mockData);
  }, []);

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setFiltered(data);
    } else {
      setFiltered(data.filter((item) => item.category === cat));
    }
  };

  const categories = ["All", ...new Set(data.map((item) => item.category))];

  return (
    <div className="bg-white p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-5 text-[#0B081D]">
        Sort based on needs
      </h1>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleFilter(cat)}
            className={`px-5 py-2 rounded-full border transition 
          ${
            category === cat
              ? "bg-[#C8D3CD] text-[#0B081D] border-[#AEB7B3] shadow-md"
              : "bg-white text-[#646C6F] border-[#E1EFE6] hover:bg-[#E1EFE6] hover:text-[#0B081D]"
          }
          focus:outline-none focus:ring-2 focus:ring-[#AEB7B3] focus:ring-offset-1`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.url}
              alt={item.category}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="text-base text-[#0B081D] font-medium">
                {item.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
