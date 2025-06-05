export const metadata = {
title: 'HR Management System',
keywords: 'HR Management, Dashboard, Home Page, Employee Management, Human Resources',
description: 'Welcome to the HR Management System dashboard',
};

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, Admin</h1>
      <p>Here your dashboard overview.</p>
    </div>
  )
}