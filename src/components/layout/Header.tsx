import React from 'react';
import { Link } from 'react-router-dom';
import { MountainIcon } from 'lucide-react'; // Using a generic icon as a placeholder for a logo

const Header: React.FC = () => {
  console.log('Header component loaded');

  return (
    <header className="py-4 px-6 md:px-8 bg-background border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold hover:text-primary transition-colors">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span>MyApp</span>
        </Link>
        {/* No extensive navigation menus as per description */}
      </div>
    </header>
  );
};

export default Header;