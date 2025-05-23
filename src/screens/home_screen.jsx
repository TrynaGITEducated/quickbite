import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orderItem, setOrderItem] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      const snapshot = await getDocs(collection(db, "menu"));
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMenuItems(items);
    };
    fetchMenu();
  }, []);

  const placeOrder = async () => {
    if (!orderItem) return alert("Select an item to order.");
    await addDoc(collection(db, "orders"), {
      item: orderItem,
      timestamp: new Date(),
    });
    alert("Order placed!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4 font-semibold">Today’s Menu</h2>
      <ul className="mb-4">
        {menuItems.map(item => (
          <li key={item.id} className="mb-2">
            <label>
              <input
                type="radio"
                name="order"
                value={item.name}
                onChange={e => setOrderItem(e.target.value)}
              />{" "}
              {item.name} - R{item.price}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={placeOrder}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default HomeScreen;
