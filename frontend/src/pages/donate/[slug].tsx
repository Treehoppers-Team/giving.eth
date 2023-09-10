// pages/donate/[slug].tsx
import React from "react";
import { useRouter } from "next/router";
import { campaignsStub } from "../../stubs/campaignCard"; // Import your campaign data here
import Layout from "@/components/Layout";
import RecentDonationsSection from "@/components/RecentDonationsSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import CharityProgressSection from "@/components/CharityProgressSection";

interface CampaignProps {
  campaign: {
    title: string;
    description: string;
    currentAmount: number;
    targetAmount: number;
    commitment: string[];
    charity: string;
    start: string;
    end: string;
  };
}

const CampaignPage: React.FC<CampaignProps> = ({ campaign }) => {
  const router = useRouter();

  const start = new Date(campaign.start)
  const end = new Date(campaign.end)
  
  const timeDifference = end.getTime() - start.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  const progressValue = (campaign.currentAmount / campaign.targetAmount) * 100;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="w-2/3 p-6 mt-8">
        <h1 className="text-4xl font-bold mb-4">{campaign.title}</h1>
        <div className="mb-4">
          <img
            src="/box.jpg" // Replace with the actual image path
            alt="Campaign Image"
            className="w-2/3 h-auto rounded-md"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{campaign.description}</p>
        </div>
        <CommitmentsSection commitment={campaign.commitment} />
      </div>

      <div className="w-1/3 p-6 mt-8">
        <CharityProgressSection
          progressValue={progressValue}
          currentAmount={campaign.currentAmount}
          targetAmount={campaign.targetAmount}
          daysRemaining={daysRemaining}
          charity={campaign.charity}
        />
        <RecentDonationsSection donations={["Donor 1", "Donor 2", "Donor 3"]} />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = campaignsStub.map((campaign) => ({
    params: { slug: campaign.title.replace(/\s+/g, "-").toLowerCase() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const campaign = campaignsStub.find(
    (campaign) =>
      campaign.title.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!campaign) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      campaign,
    },
  };
}

export default CampaignPage;
