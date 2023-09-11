import { BigNumber, ethers } from "ethers";
import { createHash } from "crypto";
import {
  campaignAccountFactoryABI,
  campaignAccountABI,
  erc20ABI,
} from "../../abis/abi";
import {
  DocumentReference,
  Timestamp,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import firebaseApp from "../../../firebaseConfig";
import { NextApiRequest, NextApiResponse } from "next";
import { getAddress } from "./blockchain";
import { json } from "stream/consumers";
require("dotenv").config();

const db = getFirestore(firebaseApp);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;
      const response = await getCampaignAddress(id);
      res.status(200).json(response);
    }
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).json({ error: "Server error" });
  }
}

type Campaign = {
  id: string; // document ID
  title: string;
  description: string;
  category: string;
  start: Timestamp;
  end: Timestamp;
  targetAmount: Number;
  currentAmount: Number;
  commitment: Object[];
  charity: DocumentReference;
};

async function getCampaignAddress(id: any) {
  // convert string to bigInt
  const hash = createHash("sha256").update(id).digest("hex");

  // Convert the hexadecimal hash to a decimal number
  const decimalNumber = parseInt(hash, 16);

  // Create a BigInt from the decimal number
  const salt = BigInt(decimalNumber);
  // fetch owner and factory address
  const owner = process.env.OWNER_ADDRESS;
  const factory = process.env.CAMPAIGN_ACCOUNT_FACTORY_ADDRESS;

  // fetch suppliers based on id
  const campaignRef = doc(db, "campaigns", id);
  const campaignDoc = await getDoc(campaignRef);

  if (campaignDoc.exists()) {
    const campaignData = campaignDoc.data() as Campaign;
    console.log(campaignData);
    const commitmentArray = campaignData.commitment;

    const supplierDetails = [];

    console.log(commitmentArray[0]);
    console.log(typeof commitmentArray);

    for (const commitmentKey in commitmentArray) {
      if (commitmentArray.hasOwnProperty(commitmentKey)) {
        const commitment = commitmentArray[commitmentKey];

        const supplierRef = commitment.supplier;

        console.log("Supplier: " + supplierRef);
        console.log(typeof supplierRef);

        const supplierDoc = await getDoc(supplierRef);

        if (supplierDoc.exists()) {
          // Access supplier fields and add them to the supplierDetails array
          const supplierData = supplierDoc.data();
          supplierDetails.push(supplierData.wid);
        }
      }
      // return supplierDetails;
    }


    const campaignAddress = await getAddress(
      factory,
      owner,
      salt,
      supplierDetails
    );
    return campaignAddress;
  }
}
