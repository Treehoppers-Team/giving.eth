require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "matic", 
  networks: {
    hardhat: {
    }, 
    matic: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY]
    }, 
    etherscan: {
      apiKey: POLYGONSCAN_API_KEY
    }
  }
};