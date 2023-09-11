import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import CharityCard from '@/components/CharityCard';
import { campaignsStub } from '@/stubs/campaignCard';

const inter = Inter({ subsets: ['latin'] });

const ExploreCampaignsSegment = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="font-bold text-4xl">Explore Campaigns</h1>
      <div className="flex space-x-4">
        {campaignsStub.map(({ title, description, currentAmount, targetAmount }, index) => (
          <CharityCard
            key={index}
            title={title}
            description={description}
            currentAmount={currentAmount}
            targetAmount={targetAmount}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full">
        {/* Hero Image */}
        <div
          className="bg-center bg-no-repeat h-[300px]"
          style={{ backgroundImage: 'url(/flowers.png)' }}
        ></div>
        <div className="flex items-center">
          <ExploreCampaignsSegment/>
        </div>
      </div>
    </Layout>
  );
}
