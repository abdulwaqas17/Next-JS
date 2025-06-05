export default function OrdersPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      {/* Table or list of orders */}
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">Order ID</th>
            <th className="py-2 px-4 border-b">Customer Name</th>
            <th className="py-2 px-4 border-b">Total Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample data */}
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">#12345</td>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">$99.99</td>
            <td className="py-2 px-4 border-b">Shipped</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b">#12346</td>
            <td className="py-2 px-4 border-b">Jane Smith</td>
            <td className="py-2 px-4 border-b">$49.99</td>
            <td className="py-2 px-4 border-b">Processing</td>
          </tr>
        </tbody>
    </table>
    </div>
  )
}
