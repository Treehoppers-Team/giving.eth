// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

// npx hardhat run scripts/deployCampaignAccountFactory.js --network matic
// npx hardhat verify --network matic <SIMPLE_ACCOUNT_FACTORY_ADDRESS> 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Replace with the address of the EntryPoint contract you want to use
  const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

  const CampaignAccountFactory = await hre.ethers.deployContract("CampaignAccountFactory",[entryPointAddress]);

  await CampaignAccountFactory.waitForDeployment();

  console.log(`CampaignAccountFactory deployed to: ${CampaignAccountFactory.target}`);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});