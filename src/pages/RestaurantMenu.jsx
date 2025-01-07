import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const mockMenuData = {
  name: "Sample Restaurant",
  items: [
    { id: 1, name: "Dish 1", price: 200, description: "Delicious dish 1" },
    { id: 2, name: "Dish 2", price: 300, description: "Tasty dish 2" },
    { id: 3, name: "Dish 3", price: 150, description: "Yummy dish 3" },
    { id: 4, name: "Dish 4", price: 250, description: "Savory dish 4" },
  ],
};

const RestaurantMenuPage = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [menuData, setMenuData] = useState(mockMenuData); // Use mock data

  // If you want to simulate fetching data based on the ID, you can do that here
  useEffect(() => {
    // Simulate fetching data based on the restaurant ID
    // For now, we are using mock data directly
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Menu for {menuData.name}</h1>
      <div className="space-y-4">
        {menuData.items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm flex justify-between">
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <div className="text-sm">₹{item.price}</div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </div>
            <button className="px-4 py-2 text-green-600 font-semibold border border-green-600 rounded-md">
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenuPage;