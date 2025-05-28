function LikedItems() {
  const likedItems = [
    { id: 1, name: "Item X", price: "$25" },
    { id: 2, name: "Item Y", price: "$40" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Liked Items</h2>
      <ul>
        {likedItems.map((item) => (
          <li key={item.id} className="p-4 border-b">
            <span className="font-semibold">{item.name}</span> - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LikedItems;
