import '@/app/globals.css'; // Import global styles
// ...existing code...
export default function DashboardLayout({ children }) {
  return (
  <html lang="en">
     <body>
     <div className=" min-h-screen bg-gray-100">


     {/* // Sidebar */}
        <div className="w-64 bg-white shadow-md p-4">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

          </div>

       
       {/* AdminNavbar */}
        <nav className="bg-white shadow-md mb-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/dashboard" className="text-blue-600 hover:underline">Home</a>
            </li>    
            <li>
              <a href="/dashboard/settings" className="text-blue-600 hover:underline">Settings</a>
            </li>
            <li>
              <a href="/dashboard/profile" className="text-blue-600 hover:underline">Profile</a>
            </li>
          </ul>
          </nav>
      

        <main>{children}</main> {/* Nested routes render here */}

        <div className="flex-1 p-6 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-red-600">Dashboard Footer</h1>
            <p className="text-gray-700">This is where your dashboard content will go.</p>
        </div>    
  
    </div>
   </body>
    </html>
  )
}
