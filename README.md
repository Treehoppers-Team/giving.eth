<p align='center'>
<img width="600" alt="image" src="https://github.com/crustyapples/giving.eth/assets/24990448/13fa18c8-d9b2-488a-9897-b694ad971e1f">
</p>

<h2 align="center">giving.eth</h2>

<p align="center">
    <a href="https://github.com/crustyapples/giving.eth/tree/main/frontend">Frontend</a>
    |
    <a href="https://github.com/crustyapples/giving.eth/tree/main/smart-contracts">Smart-Contracts</a>
</p>


## Description
giving.eth is a project that aims to increase trust and transparency between Charities and Donors. Through the use of Account Abstraction, Charities can easily be onboarded and represented by a contract address. And in the contract address, we can set pre determined rules in how the Charities can spend the funds. This aims to create a trustless relationship between Charities and Donors, and in turn promote more contributions towards reputable Charities within the Crypto community. This project was built for Ethereum Singapore Hackathon 2023. 
<p align='center'>

  ![image](https://github.com/crustyapples/giving.eth/assets/24990448/1dc66cb0-48f3-49f3-bb5d-5ad4bddde214)

</p>

## Process Flow
<p align='center'>

  ![image](https://github.com/crustyapples/giving.eth/assets/24990448/641007a6-90fa-43e0-98a9-f6715eb25e1b)

</p>

1. Charity will join our platform
2. Once onboarded and verified the Charity can create a Campaign, a smart contract wallet will then be generated for them
3. Users who are interested in the Charity's Campaign can simply donate by sending them some Tokens
4. Once the Campaign is over, the Charity will fulfill their commitments to the beneficiary/suppliers
5. Anyone will be able to see taht the relevant transfers has been made by the Charity on the blockchain

# Technical Overview
<p align='center'>

  ![image](https://github.com/crustyapples/giving.eth/assets/24990448/483ac3f8-d0ae-47e1-973d-3b86b7b4eaba)

</p>

For the frontend, we use NextJS for our web application. The backend setup is handled by NextJS's serverless functions. As for the database, we've set up a simple Firebase database, and we used Polygon to deploy our solidity smart contracts.
