import React from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import RecentDonationsSection from "@/components/RecentDonationsSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import CharityProgressSection from "@/components/CharityProgressSection";

export default function DonationsPage() {
  // Sample data for the components
  const recentDonations = ["Donor 1", "Donor 2", "Donor 3"];
  const commitments = ["Commitment 1", "Commitment 2", "Commitment 3"];
  const progressValue = 33;
  const pledgedAmount = 3333;
  const goalAmount = 10000;
  const daysRemaining = 13;
  const charityInfo = "Information about the charity goes here.";
  const imagePath = "/box.jpg"; // Replace with the actual image path
  const imageAlt = "Your Image";
  const description = "Your description content goes here.";

  return (
    <Layout>
      {/* Left Side */}
      <div className="w-2/3 p-6 mt-8">
        <h1 className="text-4xl font-bold mb-4">Left Aligned Title</h1>
        <div className="mb-4">
          <img
            src={imagePath}
            alt={imageAlt}
            className="w-2/3 h-auto rounded-md"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <CommitmentsSection commitments={commitments} />
      </div>

      {/* Right Side */}
      <div className="w-1/3 p-6 mt-8">
        <CharityProgressSection
          progressValue={progressValue}
          pledgedAmount={pledgedAmount}
          goalAmount={goalAmount}
          daysRemaining={daysRemaining}
          charityInfo={charityInfo}
        />
        <RecentDonationsSection donations={recentDonations} />
      </div>
    </Layout>
  );
}
