function ViewedItems() {
  const viewedItems = [
    { id: 1, name: "Product A", price: "$20" },
    { id: 2, name: "Product B", price: "$35" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Viewed Items</h2>
      <ul>
        {viewedItems.map((item) => (
          <li key={item.id} className="p-4 border-b">
            <span className="font-semibold">{item.name}</span> - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewedItems;
