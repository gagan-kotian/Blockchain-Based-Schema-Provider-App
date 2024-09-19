# Blockchain Based Schema Provider App

This innovative application enables students to securely prove their academic credentials and request schema solutions for specific question papers. By leveraging blockchain technology, students can send Ether to teachers as payment for their expertise. Teachers can then verify and provide the required schema, ensuring transparency and trust in the transaction. The app facilitates a seamless connection between students and educators, promoting a decentralized approach to academic support and information verification.

Index
- [Features](#Features)
- [Installation](#installation)
- [Run Locally](##RunLocally)
- [Environment Variables](##Environmentalvariables)
- [Screenshots](#Screenshots)
  

## Features

-Student Registration:

Students prove their identity and register on the platform by providing verified personal information (e.g., using decentralized identity standards like DID or storing a hashed version of data on-chain).
This information can be stored off-chain with a reference on the blockchain, or directly on-chain depending on privacy and gas fees.

-Schema Request:

Students submit a request for a schema or solution for a particular question paper, providing the necessary information.
They also send some Ether as payment for the teacher’s services.
Smart Contract for Payment and Verification:

A smart contract handles the interaction between students and teachers. When students send Ether to the contract, it locks the payment.
The smart contract holds the payment in escrow until the teacher submits proof of the schema.

-Teacher Verification:

The teacher reviews the student’s request and provides proof of the schema for the question paper.
Once the schema is verified by both the student (or some automated system) and the teacher, the Ether payment is released to the teacher.

-Feedback & Finalization:

The student confirms that they’ve received the correct schema.
After the confirmation, the smart contract releases the payment to the teacher, and the transaction is recorded on the blockchain.

## Screenshots

![App Screenshot](https://i.postimg.cc/26v9cYt4/schema.png)

![App Screenshot](https://i.postimg.cc/9Qm3DDns/schema2.png)

![App Screenshot](https://i.postimg.cc/jjBk42Mx/Meta-Mask-27-05-2024-22-07-53.png)

![App Screenshot](https://i.postimg.cc/9Qm3DDns/schema2.png)

![App Screenshot](https://i.postimg.cc/prQWtgmj/aaetherscan2.png)

![App Screenshot](https://i.postimg.cc/ZnN9v7CY/aaetherscan1.png)

![App Screenshot](https://i.postimg.cc/MHPwYKZ6/aaetherscan3.png)

## Installation

Install my-project with npm

```bash
  npm install
  cd client
  npm install
```
## Metamask Installation

This project utilizes blockchain technology and smart contracts, requiring the installation of Metamask for Ethereum wallet functionality. Follow these steps to set up Metamask:

1. **Install Metamask:**

   If you haven't already, install Metamask as a browser extension for your preferred browser (Chrome, Firefox, Brave, etc.). You can find Metamask and installation instructions at [metamask.io](https://metamask.io/).

2. **Set up Metamask:**

   - Create a new wallet or import an existing one.
   - Connect Metamask to the Ethereum Mainnet or any other network your project interacts with.

3. **Configure your wallet:**

   Ensure your wallet is funded with the appropriate Ethereum (ETH) or tokens required for interacting with this application's smart contracts.

4. **Connect Metamask to the application:**

   Once Metamask is installed and set up, connect it to the application to enable blockchain interactions.

For detailed instructions on using Metamask, refer to the [Metamask User Guide](https://metamask.zendesk.com/hc/en-us/categories/360001824191).

## Run Locally

Clone the project

```bash
  git clone https://github.com/gagan-kotian/Blockchain-based-Electoral-Bond-Web-App.git
```

Go to the project directory

```bash
  cd Blockchain-based-Electoral-Bond-Web-App
```

Install dependencies

```bash
  npm install
```
Deploy Smart contract
```bash
  npx hardhat run --network goerli scripts/finaldeploy.js
```
copy and paste the deployed contract address in App.js
```bash
  const contractAddress = "0x0e32839B72AD8589F633F1Ce9ad94d13D1438630";
```

Frontend install

```bash
  cd client
  npm install
```

Start the server

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

GOERLI_URL=ADD RPC url

PRIVATE_KEY=ADD Private key of wallet

## Tech Stack

ReactJS,
Ethereum,
Sepolia,
Hardhat
