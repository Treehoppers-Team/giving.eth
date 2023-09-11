import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Web3 from 'web3';
import { useRouter } from 'next/router';

import Link from 'next/link';
import LoginModalForm from './LoginModalForm';

const Navbar: React.FC = () => {
  const router = useRouter();
  const handleLoginModalOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [web3, setWeb3] = useState<any>(null); // Web3 instance
  const [account, setAccount] = useState<string | null>(null); // User's Ethereum account

  // Initialize Web3 when the component mounts
  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          // Request access to MetaMask wallet
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Get the user's Ethereum account
          const accounts = await web3Instance.eth.getAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      } else {
        console.error('MetaMask extension not detected.');
      }
    };

    initWeb3();
  }, []);

  // Handle MetaMask connection
  const handleConnectMetaMask = async () => {
    if (!web3) {
      console.error('Web3 instance not initialized.');
      return;
    }

    try {
      // Request access to MetaMask wallet
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the user's Ethereum account
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <div className="flex justify-between w-full">
      <div className="font-black">
        <Link href="/">give.eth</Link>
      </div>
      <div className="flex space-x-2">
        {account ? (
          <button>Connected: {account.substring(0, 5)}</button>
        ) : (
          <Button variant="outline" onClick={handleConnectMetaMask}>
            Connect MetaMask
          </Button>
        )}
        <LoginModalForm />
      </div>
    </div>
  );
};

export default Navbar;
