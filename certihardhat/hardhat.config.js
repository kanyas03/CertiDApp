require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"localhost",
  solidity: "0.8.30",
  networks:{
    localhost:{
      url:" http://127.0.0.1:8545/"
    },
    hoodi:{
      url:`https://eth-hoodi.g.alchemy.com/v2/${process.env.HOODI_KEY}`,
      accounts:[process.env.PRIVATE_KEY]
    },
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/APzhthxxxVw7-boJ6VbeFixoc1M4olqr',
      accounts:["76ca9f5e18190a67618d0d36090939a871be186827033efbf91ac6219210e46f"]
    }
  }
};
