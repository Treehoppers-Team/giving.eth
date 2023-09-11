import { BigNumber, ethers } from "ethers";
import { createHash } from 'crypto';
import { campaignAccountFactoryABI, campaignAccountABI, erc20ABI } from "../../abis/abi"
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../../../firebaseConfig"
import { NextApiRequest, NextApiResponse } from "next";
import { getAddress } from "./blockchain"
require('dotenv').config();

const db = getFirestore(firebaseApp)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
        if (req.method === "GET") {
          const {id} = req.query;
          const response = await getCampaignAddress(id);
          res.status(200).json(response);
      } 
    }catch (error) {
        console.error("Error fetching campaigns:", error);
        res.status(500).json({ error: "Server error" });
      }
    }

async function getCampaignAddress(id: any){
    // convert string to bigInt
    const hash = createHash('sha256').update(id).digest('hex');

    // Convert the hexadecimal hash to a decimal number
    const decimalNumber = parseInt(hash, 16);

    // Create a BigInt from the decimal number
    const salt = BigInt(decimalNumber);
    // fetch owner and factory address
    const owner = process.env.OWNER_ADDRESS;
    const factory = process.env.CAMPAIGN_ACCOUNT_FACTORY_ADDRESS;
    // fetch suppliers based on id

    // pass into getAddress
    const campaignAddress = await getAddress(factory, owner, salt, ["suppliers"])
    return campaignAddress;
}