import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="font-black">give.eth</div>
      <div className="flex space-x-2">
        <Button variant="outline">Connect MetaMask</Button>
        <Button>Charity Login</Button>
      </div>
    </div>
  );
};

export default Navbar;
