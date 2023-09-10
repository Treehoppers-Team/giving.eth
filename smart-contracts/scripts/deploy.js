// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Replace with the address of the EntryPoint contract you want to use
  const entryPointAddress = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

  // Replace with the amount of ether you want to send along with deployment


  const SimpleAccount = await hre.ethers.deployContract("SimpleAccount",[entryPointAddress]);
  // const simpleAccount = await SimpleAccount.deploy(entryPointAddress);

  await SimpleAccount.waitForDeployment();

  console.log(`SimpleAccount deployed to: ${SimpleAccount.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
