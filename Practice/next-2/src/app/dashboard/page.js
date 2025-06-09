"use client";
import { useState, useEffect, createContext, useContext } from "react";
// Importing icons from lucide-react for a modern and clean look
import {
  Sun,
  Moon,
  Menu,
  X,
  Filter,
  Plus,
  User,
  Users,
  Briefcase,
  Mail,
  Phone,
  Home,
  Clock,
  TrendingUp,
  DollarSign,
  Award,
  Grid,
  LayoutDashboard,
} from "lucide-react";
import config from "@/config/env";
import Image from "next/image";

// --- Theme Context ---
// Creates a React context to manage the global theme (light/dark) state.
const ThemeContext = createContext();

// ThemeProvider Component: Wraps the entire application to provide theme state and toggle functionality.
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Initialize with a default 'light' theme for SSR compatibility

  // useEffect to initialize theme from localStorage on client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running in browser
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []); // Empty dependency array ensures this runs once on client mount

  // useEffect to apply the theme class to the document's root element (<html>)
  // and persist the theme choice in localStorage whenever 'theme' state changes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running in browser
      // Remove existing theme classes to avoid conflicts
      document.documentElement.classList.remove("light", "dark");
      // Add the current theme class to the html element
      document.documentElement.classList.add(theme);
      // Save the current theme to localStorage
      localStorage.setItem("theme", theme);
    }
  }, [theme]); // Dependency array: runs whenever 'theme' changes

  console.log("Current theme:", theme); // Log the current theme for debugging

  // Function to toggle between 'light' and 'dark' themes.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provides the 'theme' state and 'toggleTheme' function to all consuming components.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// --- Navbar Component ---
// Top navigation bar containing app title, theme toggle, and sidebar toggle for mobile.
function Navbar({ toggleSidebar }) {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume theme context

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 bg-white dark:bg-gray-800 shadow-lg p-4 flex items-center justify-between transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center">
        {/* Hamburger menu button for mobile screens (hidden on large screens) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-700 dark:text-gray-200 focus:outline-none mr-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
        {/* Application title/logo with a vibrant icon */}
        <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center">
         <Image src="https://cdn-icons-png.flaticon.com/128/4725/4725681.png" width={20} priority
  height={20} alt="icon" className="mr-1"/>
          HR Dashboard
        </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        {/* Admin User Display */}
        <div className="flex items-center text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-3 py-2 rounded-full shadow-sm">
          <User size={18} className="mr-2" />
          <span className="font-medium text-sm hidden sm:block">
            Admin User
          </span>
        </div>
      </div>
    </nav>
  );
}

// --- Sidebar Component ---
// Side navigation bar, collapsible on mobile, always visible and integrated on larger screens.
function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay for mobile view when sidebar is open: covers content and closes sidebar on click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-xl z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:w-64 lg:flex-shrink-0 lg:shadow-none lg:border-r lg:border-gray-200 dark:border-gray-700`}
      >
        {/* Sidebar content area, adjusted padding for fixed navbar */}
        <div className="p-6 pt-20 lg:pt-8 flex flex-col h-full">
          {" "}
          {/* Adjusted top padding for mobile to clear fixed navbar */}
          {/* Close button for mobile sidebar (hidden on large screens) */}
          <div className="flex justify-between items-center mb-8 lg:hidden">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Portal
            </span>
            <button
              onClick={toggleSidebar}
              className="text-gray-700 dark:text-gray-200 focus:outline-none p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
          </div>
          {/* Navigation links */}
          <nav className="flex-1">
            {" "}
            {/* Flex-1 to push footer to bottom */}
            <ul>
              <li className="mb-3">
                <a
                  href="#" // In a real application, use client-side routing (e.g., Next.js Link)
                  className="flex items-center p-3 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-gray-700 rounded-lg font-semibold hover:bg-indigo-100 dark:hover:bg-gray-600 transition duration-200 shadow-sm"
                >
                  <Home size={20} className="mr-3" />
                  <span>Dashboard Overview</span>
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-semibold transition duration-200"
                >
                  <Users size={20} className="mr-3" />
                  <span>Employee Directory</span>
                </a>
              </li>
              {/* Add more navigation links here as needed */}
              <li className="mb-3">
                <a
                  href="#"
                  className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-semibold transition duration-200"
                >
                  <Grid size={20} className="mr-3" />
                  <span>Departments</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Sidebar Footer/Info (Optional) */}
          <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
            <p>Version 1.0.1</p>
            <p>&copy; {new Date().getFullYear()} VIP Dashboard</p>
          </div>
        </div>
      </aside>
    </>
  );
}

// --- Footer Component ---
// Bottom section of the page with copyright information.
function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 shadow-inner p-4 text-center text-gray-600 dark:text-gray-300 text-sm border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      &copy; {new Date().getFullYear()} VIP Employee Dashboard. All rights
      reserved.
    </footer>
  );
}

// --- Add Employee Modal Component ---
// A modal form for adding new employee details.
function AddEmployeeModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    avatarUrl: "",
    phone: "",
  });

  // Updates form data state on input changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission, calls parent's onAdd function.
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData); // Pass form data to the parent's add handler
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center p-4 z-50 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 sm:p-4 w-full max-w-lg transform transition-all duration-300 scale-100 text-gray-900 dark:text-gray-50">
        <div className="flex justify-between items-center mb-3 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Add New Employee
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-3xl font-light leading-none transition-colors"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="avatarUrl"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Avatar URL (Optional)
            </label>
            <input
              type="url"
              id="avatarUrl"
              name="avatarUrl"
              value={formData.avatarUrl}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 transform hover:scale-105"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Reusable StatCard Component for overview statistics ---
function StatCard({ title, value, icon: Icon, bgColor, textColor }) {
  return (
    <div
      className={`flex items-center p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105
        ${bgColor || "bg-white dark:bg-gray-800"}
        ${textColor || "text-gray-900 dark:text-white"}
        border border-gray-200 dark:border-gray-700`}
    >
      <div
        className={`p-4 rounded-full mr-4 ${
          bgColor
            ? `${bgColor.replace("bg-", "bg-")} dark:${bgColor.replace(
                "bg-",
                "bg-"
              )}/70`
            : "bg-indigo-100 dark:bg-indigo-900"
        } text-indigo-600 dark:text-indigo-300`}
      >
        {Icon && <Icon size={28} />}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </p>
        <p className="text-3xl font-bold mt-1">{value}</p>
      </div>
    </div>
  );
}

// --- Reusable ActivityItem Component for recent activity ---
function ActivityItem({ title, description, time, icon: Icon }) {
  return (
    <div className="flex items-start mb-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div className="mr-3 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-indigo-500 dark:text-indigo-300">
        {Icon && <Icon size={20} />}
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800 dark:text-white">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
}

// --- DashboardMainContent Component ---
// This component encapsulates the main dashboard functionalities: employee list, filters, and add employee logic.
function DashboardMainContent() {
  const [employees, setEmployees] = useState([]); // Stores all employee data fetched from API
  const [filteredEmployees, setFilteredEmployees] = useState([]); // Stores employees after applying filters
  const [filters, setFilters] = useState({
    name: "",
    department: "",
    designation: "",
  }); // State for filter input values
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false); // Controls the visibility of the Add Employee modal
  const [loading, setLoading] = useState(true); // Indicates if employee data is currently being loaded
  const [error, setError] = useState(null); // Stores any error messages during API calls
    // Static/Mock Data for demo purposes
  const totalEmployees = employees ? employees.length : 'loading';
  const activeDepartments = employees ? new Set(employees.map((emp) => emp.department))
    .size : 'loading';
  // const activeDepartments = employees ? new Set(employees.map((emp) => emp.department))
  //   .size : 'loading';
  
  const recentActivities = [
    {
      id: 1,
      title: "New Employee Onboarded",
      description: "John Doe joined the Sales team.",
      time: "2 hours ago",
      icon: User,
    },
    {
      id: 2,
      title: "Department Update",
      description: "Marketing department expanded.",
      time: "Yesterday",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Performance Review",
      description: "Sarah Lee's annual review completed.",
      time: "3 days ago",
      icon: TrendingUp,
    },
  ];

  // useEffect hook to fetch employee data when the component mounts.
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true); // Set loading state to true before API call
      setError(null); // Clear any previous errors
      try {
        const response = await fetch(`${config.apiUrl}/employees`); // Fetch data from the /api/employees endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        
        const data = await response.json();
        console.log("Fetched employees:", data); // Log the fetched employee data for debugging
        
        setEmployees(data.employees); // Update the main list of employees
        setFilteredEmployees(data.employees); // Initialize the filtered list with all employees

        console.log(employees);
        
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError("Failed to fetch employees. Please try again later."); // Set a user-friendly error message
      } finally {
        setLoading(false); // Set loading state to false after the API call finishes (success or error)
      }
    };



    fetchEmployees(); // Call the fetch function
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  // useEffect hook to apply filters whenever filter criteria or the main employees list changes.
  useEffect(() => {
    const applyFilters = () => {
      const { name, department, designation } = filters;
      // Filter the employees array based on case-insensitive matching for name, department, and designation.
      const filtered = employees.filter(
        (emp) =>
          emp.name.toLowerCase().includes(name.toLowerCase()) &&
          emp.department.toLowerCase().includes(department.toLowerCase()) &&
          emp.designation.toLowerCase().includes(designation.toLowerCase())
      );
      setFilteredEmployees(filtered); // Update the state with the newly filtered list
    };
    applyFilters(); // Call the apply filters function
  }, [filters, employees]); // Dependencies: 'filters' state and 'employees' data

  // Handler for changes in the filter input fields.
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value })); // Update the specific filter value
  };

  // Handler for adding a new employee. Sends data to the API and updates the UI.
  const handleAddEmployee = async (newEmployeeData) => {
    try {
      const response = await fetch(`${config.apiUrl}/employees/register`  , {
        // POST request to the /api/employees/register endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployeeData), // Send the new employee data as JSON
      });

      if (!response.ok) {
        // Attempt to parse a more specific error message from the backend response
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const addedEmployee = await response.json();

      console.log(addedEmployee); // Log the newly added employee data for debugging
      
      setEmployees((prevEmployees) => [...prevEmployees, addedEmployee]); // Add the newly added employee to the main list
      setShowAddEmployeeModal(false); // Close the modal after successful addition
      console.log("Employee added successfully:", addedEmployee); // Log success
      // In a real application, consider showing a user-friendly success notification (e.g., toast)
    } catch (err) {
      console.error("Error adding employee:", err);
      console.log(`Failed to add employee: ${err.message}`); // Log error
      // In a real application, consider showing a user-friendly error notification
    }
  };

  return (
    // Main content area for the dashboard, with responsive padding and background
    <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto rounded-xl shadow-xl p-6 sm:p-8 lg:p-10 transition-colors duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center border-b pb-4 border-gray-200 dark:border-gray-700">
          <span className="text-indigo-600 dark:text-indigo-400">
            Executive
          </span>{" "}
          Overview
        </h1>

        {/* Dashboard Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Overview Statistics Section */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatCard
              title="Total Employees"
              value={totalEmployees? totalEmployees : "Loading..."}
              icon={Users}
              bgColor="bg-blue-50 dark:bg-blue-900"
              textColor="text-blue-600 dark:text-blue-300"
            />
            <StatCard
              title="Active Departments"
              value={activeDepartments ? activeDepartments : "Loading..."}
              icon={Briefcase}
              bgColor="bg-green-50 dark:bg-green-900"
              textColor="text-green-600 dark:text-green-300"
            />
            {/* Placeholder for more stats */}
            <StatCard
              title="Avg. Tenure (Years)"
              value="5.2"
              icon={Clock}
              bgColor="bg-purple-50 dark:bg-purple-900"
              textColor="text-purple-600 dark:text-purple-300"
            />
            <StatCard
              title="New Hires (Month)"
              value="8"
              icon={Plus}
              bgColor="bg-yellow-50 dark:bg-yellow-900"
              textColor="text-yellow-600 dark:text-yellow-300"
            />
          </div>

          {/* Recent Activity Section */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  title={activity.title}
                  description={activity.description}
                  time={activity.time}
                  icon={activity.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filters and Add Employee Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
            Employee Directory & Quick Actions
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 lg:gap-6">
            <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Filter by Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Filter by Name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-200 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
                />
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
                />
              </div>
              {/* Filter by Department */}
              <div className="relative">
                <input
                  type="text"
                  name="department"
                  placeholder="Filter by Department"
                  value={filters.department}
                  onChange={handleFilterChange}
                  className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-200 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
                />
                <Briefcase
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
                />
              </div>
              {/* Filter by Designation */}
              <div className="relative">
                <input
                  type="text"
                  name="designation"
                  placeholder="Filter by Designation"
                  value={filters.designation}
                  onChange={handleFilterChange}
                  className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition duration-200 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500"
                />
                <Users
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-400"
                />
              </div>
            </div>
            {/* Add New Employee Button */}
            <button
              onClick={() => setShowAddEmployeeModal(true)}
              className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Add New Employee
            </button>
          </div>
        </div>

        {/* Conditional Rendering: Loading, Error, Empty State, or Employee Table */}
        {loading ? (
          <div className="text-center text-lg text-indigo-700 dark:text-indigo-300 py-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-700 dark:border-indigo-300 mx-auto mb-4"></div>
            Loading employee data...
          </div>
        ) : error ? (
          <div className="text-center text-red-600 dark:text-red-400 py-10 text-lg font-medium bg-red-50 dark:bg-red-900 rounded-lg border border-red-200 dark:border-red-700 p-4">
            Error: {error}
          </div>
        ) : filteredEmployees.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-10 text-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            No employees found matching your criteria. Try adjusting filters or
            add a new employee.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider rounded-tl-lg">
                    Avatar
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Designation
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider rounded-tr-lg">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 text-gray-900 dark:text-gray-50">
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    <td className="px-4 py-3 whitespace-nowrap">
                      <img
                        className="h-10 w-10 rounded-full object-cover border-2 border-indigo-200 dark:border-indigo-700"
                        src={
                          employee.avatarUrl ||
                          `https://placehold.co/40x40/cbd5e1/4b5563?text=${employee.name
                            .charAt(0)
                            .toUpperCase()}`
                        }
                        alt={employee.name}
                        // Fallback for broken image URLs: displays initial if image fails to load
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/40x40/cbd5e1/4b5563?text=${employee.name
                            .charAt(0)
                            .toUpperCase()}`;
                        }}
                      />
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                      {employee.name}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      <Mail
                        size={14}
                        className="inline-block mr-1 text-gray-400 dark:text-gray-500"
                      />
                      {employee.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {employee.department}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {employee.designation}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      <Phone
                        size={14}
                        className="inline-block mr-1 text-gray-400 dark:text-gray-500"
                      />
                      {employee.phone}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Employee Modal (conditionally rendered when showAddEmployeeModal is true) */}
      {showAddEmployeeModal && (
        <AddEmployeeModal
          onClose={() => setShowAddEmployeeModal(false)}
          onAdd={handleAddEmployee}
        />
      )}
    </div>
  );
}

// --- Main App Component (Root of the entire application) ---
// This component sets up the overall structure, including the theme, navbar, sidebar, and main content area.
function App() {
  // State to control the visibility of the sidebar, especially for mobile view.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar's open/close state.
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    // ThemeProvider wraps the entire application to apply global theme styles and context.
    <ThemeProvider>
      {/* Main layout container: flex column for header, main content, and footer */}
      <div className="relative flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-50 transition-colors duration-300">
        {/* Navbar component fixed at the top */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Main content area below the navbar. Uses flex for sidebar and main content layout. */}
        {/* Added mt-16 to push content below the fixed navbar */}
        <div className="flex flex-1 mt-16">
          {/* Sidebar component */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content section, takes remaining horizontal space and enables vertical scrolling */}
          <main className="flex-1 overflow-y-auto">
            <DashboardMainContent />
          </main>
        </div>

        {/* Footer component at the bottom */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
