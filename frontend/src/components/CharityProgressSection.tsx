// CharityProgressSection.tsx
import React from "react";
import { Progress } from "./ui/progress";

interface CharityProgressSectionProps {
  progressValue: number;
  currentAmount: number;
  targetAmount: number;
  daysRemaining: number;
  charity: string;
}

const CharityProgressSection: React.FC<CharityProgressSectionProps> = ({
  progressValue,
  currentAmount,
  targetAmount,
  daysRemaining,
  charity,
}) => {
  return (
    <section>
      <Progress value={progressValue} className="mb-4" />

      <div className="mb-4">
        <h2 className="text-2xl font-bold">${currentAmount}</h2>
        <p>Pledged out of ${targetAmount} goal</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{daysRemaining}</h2>
        <p className="text-gray-600">Days Remaining</p>
      </div>
      <section className="mb-4">
        <h2 className="text-3xl font-semibold mb-2">Charity</h2>
        <p className="text-gray-600">{charity}</p>
      </section>
    </section>
  );
};

export default CharityProgressSection;
