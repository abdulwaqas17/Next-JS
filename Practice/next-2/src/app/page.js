'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { User, Lock, Mail, LogIn, Shield } from 'lucide-react'; // Importing icons for a modern UI
import config from '@/config/env'; // Importing configuration for API URL

// AdminLoginPage Component: Handles user login functionality
function AdminLoginPage() {
  // State to store form data (email and password)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter(); // Assuming you have a navigation function to redirect users
  // State to manage loading status during API calls
  const [loading, setLoading] = useState(false);
  // State to store any error messages from API calls or form validation
  const [error, setError] = useState(null);
  // State to store success messages after actions
  const [success, setSuccess] = useState(null);

  // Handles changes in form input fields, updating the formData state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error/success messages on input change for a better UX
    setError(null);
    setSuccess(null);
  };

  // Handles the form submission for login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);   // Set loading state to true
    setError(null);     // Clear previous errors
    setSuccess(null);   // Clear previous success messages

    const { email, password } = formData;

    // Basic client-side validation
    if (!email || !password) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    try {
     
      const body = { email, password };

      const response = await fetch(`${config.apiUrl}/auth/admin-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      console.log(data);
      
      
      if (!response.ok) {
        // If response is not OK, it means there was an API error
        // Display the error message from the backend, or a generic one
        throw new Error(data.message || 'Login failed. Please check your credentials.');
      }
      
      // If login is successful, set success message and clear form fields
      setSuccess('Login successful! Redirecting to dashboard...');
      router.push('/dashboard'); // Redirect to the dashboard or another page
      setFormData({ email: '', password: '' }); // Clear form fields on success

      // In a real application, you would handle token storage and redirection here:
      // localStorage.setItem('authToken', data.token); // Store authentication token
      // window.location.href = '/dashboard'; // Redirect to dashboard, for example

      // console.log('Login API Response:', data); // Log the successful response for debugging
      // setTimeout(() => { window.location.href = '/dashboard'; }, 1500); // Example redirection after a delay

    } catch (err) {
      console.error('Login error:', err.message);
      setError(err.message); // Display error message to the user
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 font-sans">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 space-y-6 border border-gray-200 dark:border-gray-700 transform transition-all duration-300 ">
        <div className="text-center">
          <Shield size={60} className="mx-auto text-indigo-600 dark:text-indigo-400 mb-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Admin Login
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Access your dashboard
          </p>
        </div>

        {/* Error and Success Messages */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg relative text-sm" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {success && (
          <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg relative text-sm" role="alert">
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div className="relative">
            <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 transition duration-200"
              required
              disabled={loading} // Disable input during loading
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 transition duration-200"
              required
              disabled={loading} // Disable input during loading
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            disabled={loading} // Disable button during loading
          >
            {loading ? (
              // Loading spinner
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              // Login icon and text
              <>
                <LogIn size={20} />
                Log In
              </>
            )}
          </button>
        </form>

        {/* Optional: Link to a signup page if it exists */}
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4">
          Don't have an account? {' '}
          <a
            href="/admin/signup" // Adjust this path to your actual signup page route
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium focus:outline-none"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default AdminLoginPage;
