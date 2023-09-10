import React from "react";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <Layout>
      {/* Left Side */}
      <div className="w-2/3 p-6">
        <h1 className="text-4xl font-bold mb-4">Left Aligned Title</h1>
        <div className="mb-4">
          <img
            src="/your-image.jpg" // Replace with the actual image path
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-600">Your description content goes here.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Commitments</h2>
          <ul className="list-disc list-inside">
            <li>Commitment 1</li>
            <li>Commitment 2</li>
            <li>Commitment 3</li>
            {/* Add more commitments as needed */}
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/3 p-6">
        <Progress value={33} className="mb-4" />

        <div className="mb-4">
          <h2 className="text-2xl font-bold">$3333</h2>
          <p>Pledged out of $10000 goal</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">13</h2>
          <p className="text-gray-600">Days Remaining</p>
        </div>
        <section className="mb-4">
          <h2 className="text-3xl font-semibold mb-2">Charity</h2>
          <p className="text-gray-600">
            Information about the charity goes here.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-2">Recent Donations</h2>
          <ul className="list-disc list-inside">
            <li>Donor 1</li>
            <li>Donor 2</li>
            <li>Donor 3</li>
            {/* Add more donations as needed */}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
