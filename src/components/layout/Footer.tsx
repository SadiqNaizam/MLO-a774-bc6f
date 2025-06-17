import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer component loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 text-muted-foreground py-6 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-2 md:mb-0">
          &copy; {currentYear} Your Application Name. All rights reserved.
        </p>
        <nav className="flex space-x-4">
          <Link
            to="/terms-of-service" // Placeholder route, update if actual page exists
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy" // Placeholder route, update if actual page exists
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;