import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

interface CommitmentCardProps {
  supplier: string;
  percentage: string;
  fulfilled: string;
}

const CommitmentCard: React.FC<CommitmentCardProps> = ({
  supplier,
  percentage,
  fulfilled,
}) => {
  const bgColor = fulfilled === "true" ? "bg-[#bdf1c3]" : "bg-[#f2a4a4]";
  const borderStyle = "border-none"; // Add this to remove the border
  const opacity = fulfilled === "true" ? "opacity-100" : "opacity-80"; // Adjust opacity as needed

  return (
    <Card
      className={`m-1 w-1/2 ${bgColor} ${borderStyle} ${opacity} hover:scale-105 transform transition-transform duration-300 ease-in-out`}
    >
      <div className="flex p-4 items-center justify-between">
        <div className="text-lg font-semibold">
          {percentage} {supplier}
        </div>
        {/* <div className="text-lg font-semibold">
          {fulfilled === "true" ? "Fulfilled!" : "Not Fulfilled"}
        </div> */}
        <Button>
          {fulfilled === "true" ? "Fulfilled!" : "Fulfill Now"}
        </Button>
      </div>
    </Card>
  );
};

export default CommitmentCard;
