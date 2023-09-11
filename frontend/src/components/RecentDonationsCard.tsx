import React from 'react';
import {
  Card,
  CardContent,
} from './ui/card';
import { Button } from "./ui/button";

interface RecentDonationsCardProps {
    donor: string;
    time: string;
    amount: string;
  }
  
  const RecentDonationsCard: React.FC<RecentDonationsCardProps> = ({
    donor,
    time,
    amount,
  }) => {
    return (
      // Add an onClick event to the Card div to handle the click event
      <div style={{ cursor: 'pointer' }}>
        <Card>
          <CardContent>
            <p className="text-black-400 font-semibold text-xs">
                Donor: {donor}
            </p>
            <p className="text-gray-400 font-semibold text-xs">
                Time: {time}
            </p>
            <p className="text-gray-400 font-semibold text-xs">
                Amount: {amount}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default RecentDonationsCard;
  