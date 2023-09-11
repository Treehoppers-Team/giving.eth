import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import CharityCard from "@/components/CharityCard";
import { campaignsStub } from "@/stubs/campaignCard";
import CharityAvatar from "@/components/CharityAvatar";

const inter = Inter({ subsets: ["latin"] });

const ExploreCampaignsSegment = () => {
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="font-bold text-4xl">Explore Campaigns</h1>
      <div className="flex space-x-4">
        {campaignsStub.map(
          (
            { title, description, currentAmount, targetAmount } // mapping the campagins data to the charity card, feeding it with data
          ) => (
            <CharityCard
              title={title}
              description={description}
              currentAmount={currentAmount}
              targetAmount={targetAmount}
            />
          )
        )}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <div>
        <CharityAvatar
          name="Charity XX"
          imageUrl="https://th.bing.com/th/id/OIP.IWkbOf-SXGMxFfACHnLX9QHaHa?pid=ImgDet&rs=1"
        />
        <div className="flex min-h-[30vh] items-center">
          <ExploreCampaignsSegment />
        </div>
      </div>
    </Layout>
  );
}
