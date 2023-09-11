import { ethers } from "ethers";
import { campaignAccountFactoryABI } from "../../abis/abi"
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../../../firebaseConfig"
import { NextApiRequest, NextApiResponse } from "next";

const db = getFirestore(firebaseApp)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
        if (req.method === "GET") {
          const response = await getAddress("0x9c34Da6D6B50D1f0271699798a1DD1C053Db30d1", "0x567dcbCC0Ded4Bd654485ba4675D5c27BfEB6F36", BigInt(1), ['0x567dcbCC0Ded4Bd654485ba4675D5c27BfEB6F36']);
          res.status(200).json(response);
      } 
    }catch (error) {
        console.error("Error fetching campaigns:", error);
        res.status(500).json({ error: "Server error" });
      }
    }


/** ERC4337 METHODS **/

// BuildAndSignOp needs to have BuildOp method, getUserOpHash and Sign
// then Append the signature to the Op

// BuildOp needs to generate the Generate4337Initcode, and BuilcOpCallData

// GenerateInitCode
function generate4337Initcode(factoryAddress: string, owner: string, salt: bigint, suppliers: string[]): Uint8Array {
    const parsedABI = new ethers.utils.Interface(campaignAccountFactoryABI);

    // Encode the function data
    const data = parsedABI.encodeFunctionData("createAccount", [owner, salt, suppliers]);

    // Convert factory address and data to bytes
    const factoryAddressBytes = ethers.utils.arrayify(factoryAddress);
    const concatBytes = ethers.utils.concat([factoryAddressBytes, data]);

    console.log("InitCode:", ethers.utils.hexlify(concatBytes));
    return concatBytes;
}
function encodeStringArray(array: string[]): string {
    return array.join(";");
}

/* Contract Methods*/

// This method should call our factory to get a counterfactual address
async function getAddress(
  factoryAddress: string,
  owner: string,
  salt: bigint,
  suppliers: string[]
): Promise<string> {
  // Connect to an Ethereum provider
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);

  // Create an instance of your smart contract
  const factoryContract = new ethers.Contract(factoryAddress, campaignAccountFactoryABI, provider);

  try {
    // Call the getAddress function on the smart contract
    const address = await factoryContract.getAddress(
      owner,
      salt,
      suppliers
    );

    // Convert the address to a string
    return ethers.utils.getAddress(address);
  } catch (error) {
    // Handle any errors here
    console.error("Error calling getAddress:", error);
    throw error;
  }
}