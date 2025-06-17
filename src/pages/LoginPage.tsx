import React from 'react';
import Header from '@/components/layout/Header'; // Custom component
import Footer from '@/components/layout/Footer'; // Custom component
import LoginForm from '@/components/LoginForm'; // Custom component

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* 
          The page_type_info mentions: "It contains input fields for username/email and password, 
          a submit button, and links for password recovery and account registration."
          The layout_info lists: ['Header', 'Card', 'LoginForm', 'Button', 'Input', 'Label', 'Checkbox', 'Alert', 'Footer']
          The LoginForm custom component already encapsulates the Card, Input, Button, Label, Checkbox, and Alert functionalities 
          for the login form itself.
        */}
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;