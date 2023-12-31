# giving.eth
## Description
giving.eth is a project that aims to increase trust and transparency between Charities and Donors. Through the use of Account Abstraction, Charities can easily be onboarded and represented by a contract address. And in the contract address, we can set pre determined rules in how the Charities can spend the funds. This aims to create a trustless relationship between Charities and Donors, and in turn promote more contributions towards reputable Charities within the Crypto community. This project was built for Ethereum Singapore Hackathon 2023. 
<p align='center'>
<img src="imgs/intro_page.png"/>
</p>

## Process Flow
<p align='center'>
<img src="imgs/process_page.png"/>
</p>

1. Charity will join our platform
2. Once onboarded and verified the Charity can create a Campaign, a smart contract wallet will then be generated for them
3. Users who are interested in the Charity's Campaign can simply donate by sending them some Tokens
4. Once the Campaign is over, the Charity will fulfill their commitments to the beneficiary/suppliers
5. Anyone will be able to see taht the relevant transfers has been made by the Charity on the blockchain

# Technical Overview
<p align='center'>
<img src="imgs/tech_page.png"/>
</p>

For the frontend, we use NextJS for our web application. The backend setup is handled by NextJS's serverless functions. As for the database, we've set up a simple Firebase database, and we used Polygon to deploy our solidity smart contracts.
