import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Web3 from 'web3';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { getUser } from '@/lib/api';

import LoginModalForm from './LoginModalForm';

const Navbar: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigateToProfile = (e: React.MouseEvent) => {
    router.push('/profile');
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    signOut();
  };

  const handleNavigateToCreateCampaign = () => {
    router.push('/create');
  };

  useEffect(() => {
    const fetchUser = async (email: string) => {
      const user = await getUser(email);
      console.log('FETCHED USER!!!!!!!!!!');
      console.log(user);

      if (!user.isKyc) {
        router.push({
          pathname: 'kyc',
          query: { email },
        });
      }
    };

    if (session && session.user && session.user.email) {
      fetchUser(session.user.email);
    }
  }, [session]);

  // web3
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
          !session && (
            <Button variant="outline" onClick={handleConnectMetaMask}>
              Connect MetaMask
            </Button>
          )
        )}
        {session ? (
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost">Profile</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleNavigateToProfile}>
                  Campaigns
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={handleNavigateToCreateCampaign}>
              Create a Campaign
            </Button>
          </div>
        ) : (
          <LoginModalForm />
        )}
      </div>
    </div>
  );
};

export default Navbar;
