function CartReservations() {
  const cartItems = [
    { id: 1, name: "Reserved Product 1", price: "$30", status: "Pending" },
    { id: 2, name: "Reserved Product 2", price: "$50", status: "Confirmed" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart Reservations</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="p-4 border-b">
            <span className="font-semibold">{item.name}</span> - {item.price}
            <span
              className={`ml-2 ${
                item.status === "Confirmed"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartReservations;
