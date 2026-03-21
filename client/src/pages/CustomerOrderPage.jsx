import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../AuthContext'; 

export default function CustomerOrderPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuth(); // Get logged in user details

  const API_URL = "/api/orders"; // Update to your Cloud IP if needed

  // Fetch only the orders belonging to this user
  const fetchMyOrders = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // Pass the userId as a query parameter
      const response = await fetch(`${API_URL}?userId=${user.id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      setOrders(data || []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      toast.error("Failed to load your orders.");
    }
    setLoading(false);
  };

  // Mock function to create a dummy order
  const createMockOrder = async () => {
    const dummyCart = {
      cart: [
        { product_id: "P123", product_name: "Wireless Mouse", quantity: 1, unit_price: 25.00 },
        { product_id: "P456", product_name: "Mechanical Keyboard", quantity: 1, unit_price: 75.00 }
      ]
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Sends the JWT to Go
        },
        body: JSON.stringify(dummyCart)
      });
      
      const data = await response.json();
      if (response.ok) {
        toast.success(data.payment_message || "Order placed successfully!");
        fetchMyOrders(); // Refresh the list
      } else {
        toast.error("Failed to place order.");
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  if (!user) {
    return <div className="p-8 text-center text-red-500">Please log in to view your orders.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Toaster position="top-right" />
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
          <button 
            onClick={createMockOrder}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            + Create Mock Order
          </button>
        </div>

        {loading ? (
          <p>Loading your orders...</p>
        ) : orders.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center text-gray-500">
            You haven't placed any orders yet.
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 border-b">Order ID</th>
                  <th className="p-4 border-b">Items</th>
                  <th className="p-4 border-b">Total Price</th>
                  <th className="p-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.order_id} className="hover:bg-gray-50 border-b">
                    <td className="p-4 font-semibold text-gray-700">{order.order_id}</td>
                    <td className="p-4 text-sm text-gray-600">
                      {order.cart.map((item, idx) => (
                        <div key={idx}>{item.quantity}x {item.product_name}</div>
                      ))}
                    </td>
                    <td className="p-4 font-bold text-green-600">${order.total_price.toFixed(2)}</td>
                    <td className="p-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">
                        {order.payment_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}