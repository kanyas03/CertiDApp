# 🎓 Certi DApp - Certificate Issuing Decentralized Application

Certi DApp is a blockchain-based decentralized application (DApp) built on the Ethereum network. It provides a secure and transparent platform to **issue**, **view**, and **search** academic or professional certificates.

---

## 🚀 Features

- ✅ Issue certificates on the Ethereum blockchain
- 🔍 View certificates by unique certificate ID
- 📄 Search certificates by recipient details (name, course, etc.)
- 🛡️ Ensures authenticity and immutability using smart contracts

---

## 🛠️ Tech Stack

- **Frontend**: React.js (with Vite)
- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Development Framework**: Hardhat
- **Wallet Integration**: MetaMask
- **Storage**: Blockchain (no off-chain DB)

---

## ⚙️ How to Run Locally

### Prerequisites

- Node.js and npm
- MetaMask browser extension
- Hardhat

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/certi-dapp.git
cd certi-dapp
2. Install Dependencies
Backend / Smart Contract

bash
Copy
Edit
npm install
npx hardhat compile
Frontend

bash
Copy
Edit
cd frontend
npm install
npm run dev
3. Deploy the Smart Contract
bash
Copy
Edit
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
Update the contract address in your frontend after deployment.

🧪 Testing
You can write unit tests in the test/ folder using Hardhat + Mocha.

bash
Copy
Edit
npx hardhat test
🔐 Security
Certificates once issued are immutable and publicly verifiable.

All data is recorded on-chain, removing the risk of tampering or forgery.

🙌 Acknowledgments
Ethereum & Solidity Documentation

Hardhat Team

MetaMask for Web3 Wallet Integration

📜 License
This project is licensed under the MIT License.

