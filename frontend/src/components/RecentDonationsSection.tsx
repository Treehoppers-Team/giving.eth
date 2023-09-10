// RecentDonationsSection.tsx
import React from "react";

interface RecentDonationsSectionProps {
  donations: string[];
}

const RecentDonationsSection: React.FC<RecentDonationsSectionProps> = ({
  donations,
}) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-2">Recent Donations</h2>
      <ul className="list-disc list-inside">
        {donations.map((donor, index) => (
          <li key={index}>{donor}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecentDonationsSection;
