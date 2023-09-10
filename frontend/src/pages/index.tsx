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
        {campaignsStub.map(({ title, preview, fundedAmount, goalAmount }) => (
          <CharityCard
            title={title}
            preview={preview}
            fundedAmount={fundedAmount}
            goalAmount={goalAmount}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center">
        <ExploreCampaignsSegment />
      </div>
    </Layout>
  );
}
