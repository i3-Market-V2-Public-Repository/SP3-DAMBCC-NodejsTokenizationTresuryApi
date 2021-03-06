/**
* Copyright (c) 2020-2022 in alphabetical order:
* GFT, Telesto Technologies
*
* This program and the accompanying materials are made
* available under the terms of the EUROPEAN UNION PUBLIC LICENCE v. 1.2
* which is available at https://gitlab.com/i3-market/code/wp3/t3.3/nodejs-tokenization-treasury-api/-/blob/master/LICENCE.md
*
* License-Identifier: EUPL-1.2
*
* Contributors:
*    Vangelis Giannakosian (Telesto Technologies)
*    Dimitris Kokolakis (Telesto Technologies)
*
*/

const express = require('express');
const router = express.Router();
const treasuryController = require('../controllers/treasuryController');

/**
* @swagger
* /api/v1/treasury/marketplaces/{address}:
*   get:
*     tags: [TokenizerController]
*     summary: Get the index of a registered marketplace
*     description: i3Treasury API endpoint to get the marketplace index. Add the address of the marketplace to the address path variable.
*     parameters:
*       - in: path
*         name: address
*         required: true
*         description: Address of the marketplace.
*         schema:
*           type: string
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 index:
*                   type: string
*                   description: Index of marketplace.
*                   example: 3
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Invalid address
*/
router.get('/marketplaces/:address', treasuryController.getMarketPlaceIndex)

/**
* @swagger
* /api/v1/treasury/balances/{address}:
*   get:
*     tags: [TokenizerController]
*     summary: Get the Balance for a specific account
*     description: i3Treasury API endpoint to get the balance given an account address. Add the address to the path variable.
*     parameters:
*       - in: path
*         name: address
*         required: true
*         description: Address of the marketplace.
*         schema:
*           type: string
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 balance:
*                   type: object
*                   description: Balances.
*                   example: ["0","0"]
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Invalid address
*/
router.get('/balances/:address', treasuryController.getAddressBalance)

/**
* @swagger
* /api/v1/treasury/transactions/{transactionHash}:
*   get:
*    tags: [TokenizerController]
*    summary: Get the Receipt of a transaction given a TransactionHash
*    description: i3Treasury endpoint to get the receipt of a transaction. Add the transaction hash in the path variables to get the receipt.
*    parameters:
*     - in: path
*       name: transactionHash
*       required: true
*       description: Address of the marketplace.
*       schema:
*         type: string
*    responses:
*      200:
*       content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                receipt:
*                  type: object
*                  description: The pending transaction hash.
*                  example: {"transactionHash": "0xa3586e3442d87eda95dff2ae4804d78f3b6d0b0945fba61ef1cc1b96650349c9",
*                           "transactionIndex": 0,
*                           "blockHash": "0xc410fc12a2c18918d9032e167362d7e0b47fff38938cd83645c3319d49300d5e",
*                           "blockNumber": 123,
*                           "from": "0xd94f3239185c27937367b9a1a17ab70f4f631005",
*                           "to": "0x2567d618a8bc5996ab447ecda3a2b0bf7b323840",
*                           "gasUsed": 60741,
*                           "cumulativeGasUsed": 60741,
*                           "contractAddress": null,
*                           "logs": [],
*                           "status": true,
*                           "logsBloom":
*                           "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
*                           00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
*                           0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
*                           }
*      404:
*       content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                receipt:
*                  type: object
*                  description: The pending transaction hash.
*                  example: null
*/
router.get('/transactions/:transactionHash', treasuryController.getTransactionReceipt)


/**
* @swagger
* /api/v1/treasury/token-transfers/{transferId}:
*   get:
*    tags: [TokenizerController]
*    summary: Get the Token Transfer given a TransferId
*    description: i3Treasury endpoint to get the receipt of a transaction. Add the transaction hash in the path variables to get the receipt.
*    parameters:
*     - in: path
*       name: transferId
*       required: true
*       description: Operation unique identifier.
*       schema:
*         type: string
*    responses:
*      200:
*       content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                transfer:
*                  type: object
*                  description: The pending transaction hash.
*                  example: {
*                        "0": "a8e70c41-3c76-5cb6-b0e9-07da49d94621",
*                        "1": "0x3bC438887726c79498c8a79CA3226e6e84d03458",
*                        "2": "0x6F0a2430CD784b871b9eB206B20a25b08351E3AE",
*                        "3": "100",
*                        "4": true,
*                        "5": "",
*                        "transferId": "a8e70c41-3c76-5cb6-b0e9-07da49d94621",
*                        "fromAddress": "0x3bC438887726c79498c8a79CA3226e6e84d03458",
*                        "toAddress": "0x6F0a2430CD784b871b9eB206B20a25b08351E3AE",
*                        "tokenAmount": "100",
*                       "isPaid": true,
*                       "transferCode": ""
*                     }
*      404:
*       content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                receipt:
*                  type: object
*                  description: The pending transaction hash.
*                  example: null
*/
router.get('/token-transfers/:transferId', treasuryController.getTransactionForTransferId)

/**
* @swagger
* /api/v1/treasury/marketplaces:
*   post:
*     tags: [TokenizerController]
*     summary: Register a marketplace
*     description: Call add marketplace i3Treasury API to add a marketplace.
*                  In the body you need to pass a "senderAddress" and a "marketplaceAddress" in a JSON format. The two addresses need to be the same.
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               senderAddress:
*                 type: string
*                 description: The address of the sender.
*                 example: "0x79CD92CD7c1e380c1a6Ba5E9EF09D2F7c4820C6d"
*               marketplaceAddress:
*                 type: string
*                 description: The address of the marketpace.
*                 example: "0x79CD92CD7c1e380c1a6Ba5E9EF09D2F7c4820C6d"
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transactionObject:
*                   type: string
*                   description: The pending transaction object.
*                   example: {
*                             "chainId": 1,
*                             "nonce": 1,
*                             "gasLimit": 6721975,
*                             "gasPrice": 201966,
*                             "to": "0x5780262041318FD9fc8E345F665bEc7684E15C75",
*                             "from": "0xb3a0ED21c54196E4B446D79b7925766aa86BC196",
*                             "data": "0x909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f3d15f97bf1b55b486486de2d819649bc92fff6b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002438646265373434372d333637362d353262632d623439312d30393638653735626134663400000000000000000000000000000000000000000000000000000000"
*                           }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/marketplaces', treasuryController.addMarketPlace)

/**
* @swagger
* /api/v1/treasury/transactions/exchange-in:
*   post:
*     tags: [TokenizerController]
*     summary: Exchange fiat money for tokens
*     description: Call exchange-in endpoint in order to exchange an amount of fiat money into tokens from a Marketplace.
*                  Pass a "senderAddress", a "userAddress" and a "tokens" which is the amount of tokens to exchange.

*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               senderAddress:
*                 type: string
*                 description: The address of the marketpace.
*                 example: "0xD94f3239185C27937367B9A1A17aB70f4F631005"
*               userAddress:
*                 type: string
*                 description: The address of the Data consumer.
*                 example: "0xb8E0101259550765a5f1287d0F680Ee9B09b42B3"
*               tokens:
*                 type: string
*                 description: The amount of tokens.
*                 example: 10
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transferId:
*                   type: string
*                   description: The unique transfer id generated for this transaction.
*                   example: "6fa4973b-11ce-56d8-8544-660e1a334b92"
*                 transactionObject:
*                   type: string
*                   description: The pending transaction hash.
*                   example: {
*                             "chainId": 1,
*                             "nonce": 1,
*                             "gasLimit": 6721975,
*                             "gasPrice": 201966,
*                             "to": "0x5780262041318FD9fc8E345F665bEc7684E15C75",
*                             "from": "0xb3a0ED21c54196E4B446D79b7925766aa86BC196",
*                             "data": "0x909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f3d15f97bf1b55b486486de2d819649bc92fff6b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002438646265373434372d333637362d353262632d623439312d30393638653735626134663400000000000000000000000000000000000000000000000000000000"
*                           }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/transactions/exchange-in', treasuryController.exchangeIn)

/**
* @swagger
* /api/v1/treasury/transactions/payment:
*   post:
*     tags: [TokenizerController]
*     description: Call payment API to transfer the right amount of tokens to a Data Provider. Pass a "senderAddress", a "providerAddress" and an "amount" of tokens to transfer to the Data Provider.
*     summary: Pay the Data Provider
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               senderAddress:
*                 type: string
*                 description: The address of the sender.
*                 example: "0xb8E0101259550765a5f1287d0F680Ee9B09b42B3"
*               providerAddress:
*                 type: string
*                 description: The address of the Data Provider.
*                 example: "0xb13894b969ad9A69108684dA8004E53A32c6deC6"
*               amount:
*                 type: string
*                 description: The amount of tokens.
*                 example: 10
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transferId:
*                   type: string
*                   description: The unique transfer id generated for this transaction.
*                   example: "6fa4973b-11ce-56d8-8544-660e1a334b92"
*                 transactionObject:
*                   type: string
*                   description: The pending transaction hash.
*                   example: {
*                             "chainId": 1,
*                             "nonce": 1,
*                             "gasLimit": 6721975,
*                             "gasPrice": 201966,
*                             "to": "0x5780262041318FD9fc8E345F665bEc7684E15C75",
*                             "from": "0xb3a0ED21c54196E4B446D79b7925766aa86BC196",
*                             "data": "0x909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f3d15f97bf1b55b486486de2d819649bc92fff6b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002438646265373434372d333637362d353262632d623439312d30393638653735626134663400000000000000000000000000000000000000000000000000000000"
*                           }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/transactions/payment', treasuryController.payment)

/**
* @swagger
* /api/v1/treasury/transactions/exchange-out:
*   post:
*     tags: [TokenizerController]
*     description: Call exchange-out endpoint in order to exchange the right amount of tokens available with money from a Data Marketplace.
*     summary: Exchange tokens for money
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               senderAddress:
*                 type: string
*                 description: The address of the sender.
*                 example: "0xD94f3239185C27937367B9A1A17aB70f4F631005"
*               marketplaceAddress:
*                 type: string
*                 description: The address of the the marketplace.
*                 example: "0xb8E0101259550765a5f1287d0F680Ee9B09b42B3"
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transferId:
*                   type: string
*                   description: The unique transfer id generated for this transaction.
*                   example: "6fa4973b-11ce-56d8-8544-660e1a334b92"
*                 transactionObject:
*                   type: string
*                   description: The transaction hash of the exchange.
*                   example: {
*                             "chainId": 1,
*                             "nonce": 1,
*                             "gasLimit": 6721975,
*                             "gasPrice": 201966,
*                             "to": "0x5780262041318FD9fc8E345F665bEc7684E15C75",
*                             "from": "0xb3a0ED21c54196E4B446D79b7925766aa86BC196",
*                             "data": "0x909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f3d15f97bf1b55b486486de2d819649bc92fff6b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002438646265373434372d333637362d353262632d623439312d30393638653735626134663400000000000000000000000000000000000000000000000000000000"
*                           }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/transactions/exchange-out', treasuryController.exchangeOut)

/**
* @swagger
* /api/v1/treasury/transactions/clearing:
*   post:
*     tags: [TokenizerController]
*     description: Call clearing endpoint in order to clear the balance of a Data Marketplace.
*     summary: Crear the balance
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               senderAddress:
*                 type: string
*                 description: The address of the marketplace.
*                 example: "0x79CD92CD7c1e380c1a6Ba5E9EF09D2F7c4820C6d"
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transferId:
*                   type: string
*                   description: The unique transfer id generated for this transaction.
*                   example: "6fa4973b-11ce-56d8-8544-660e1a334b92"
*                 transactionObject:
*                   type: string
*                   description: The transaction hash of the exchange.
*                   example: {
*                             "chainId": 1,
*                             "nonce": 1,
*                             "gasLimit": 6721975,
*                             "gasPrice": 201966,
*                             "to": "0x5780262041318FD9fc8E345F665bEc7684E15C75",
*                             "from": "0xb3a0ED21c54196E4B446D79b7925766aa86BC196",
*                             "data": "0x909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f3d15f97bf1b55b486486de2d819649bc92fff6b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002438646265373434372d333637362d353262632d623439312d30393638653735626134663400000000000000000000000000000000000000000000000000000000"
*                           }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/transactions/clearing', treasuryController.clearing)


/**
* @swagger
* /api/v1/treasury/transactions/set-paid:
*   post:
*     tags: [TokenizerController]
*     description: Call set-paid endpoint in order to mark a token transfer as paid.
*     summary: Set isPaid as true to a specified Token Transfer
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               senderAddress:
*                 type: string
*                 description: The address of the message sender.
*                 example: "0x79CD92CD7c1e380c1a6Ba5E9EF09D2F7c4820C6d"
*               transferId:
*                 type: string
*                 description: The transfer's unique identifier
*                 example: "6fa4973b-11ce-56d8-8544-660e1a334b92"
*               transferCode:
*                 type: string
*                 description: The fiat money transfer's unique identifier
*                 example: "GR99203205004989123456"
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transactionObject:
*                   type: string
*                   description: The transaction hash generated for this block.
*                   example: {
*                             "chainId": 1,
*                             "nonce": 1,
*                             "gasLimit": 6721975,
*                             "gasPrice": 201966,
*                             "to": "0x5780262041318FD9fc8E345F665bEc7684E15C75",
*                             "from": "0xb3a0ED21c54196E4B446D79b7925766aa86BC196",
*                             "data": "0x909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000f3d15f97bf1b55b486486de2d819649bc92fff6b000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002438646265373434372d333637362d353262632d623439312d30393638653735626134663400000000000000000000000000000000000000000000000000000000"
*                           }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/transactions/set-paid', treasuryController.setPaid)

/**
* @swagger
* /api/v1/treasury/transactions/deploy-signed-transaction:
*   post:
*     tags: [TokenizerController]
*     description: Deploy contract to blockchain
*     summary: Deploy a signed transaction
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               serializedTx:
*                 type: string
*                 description: The address of the message sender.
*                 example: "0xf90127148302e34683bebc209483a99f8170a0ba72fbcb2bd4eb739de96460385480b8c4909770870000000000000000000000000000000000000000000000000000000000000060000000000000000000000000ff8eab3673c32559b63ff391772aa300121a94d4000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000002433646461623465312d373866612d353935342d616639372d353732323436346431316337000000000000000000000000000000000000000000000000000000001ba0d6cc284f4d4ca9a737ea9ec39805f811a35905b615a02089fb667d181d9ed5899f431803a8ceb119c451da83120df97c977d67c240ccec275fac92aa1f2c0ca2"
*     responses:
*       200:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 transactionObject:
*                   type: string
*                   description: The transaction hash generated for this block.
*                   example: {
*                             "blockHash": "0xe3e80f60a730e5d24d7299c917edeb3fd4d224fcfa802184d498c73c03d18320",
*                             "blockNumber": 51532,
*                             "contractAddress": null,
*                             "cumulativeGasUsed": 186954,
*                             "from": "0xa067e6b09b77f027b1c8e024469d820ca75dd2bf",
*                             "gasUsed": 186954,
*                             "logs": [
*                               {
*                                 "address": "0x83a99f8170a0ba72fbCb2bD4eB739de964603854",
*                                 "topics": [
*                                   "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
*                                   "0x000000000000000000000000a067e6b09b77f027b1c8e024469d820ca75dd2bf",
*                                   "0x0000000000000000000000000000000000000000000000000000000000000000",
*                                   "0x000000000000000000000000ff8eab3673c32559b63ff391772aa300121a94d4"
*                                 ],
*                                 "data": "0x0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a",
*                                 "blockNumber": 51532,
*                                 "transactionHash": "0x89a7ec9974fcdd99bd1427c410da48fb9e51f74c57837b38be3b43e9f3d8a32f",
*                                 "transactionIndex": 0,
*                                 "blockHash": "0xe3e80f60a730e5d24d7299c917edeb3fd4d224fcfa802184d498c73c03d18320",
*                                 "logIndex": 0,
*                                 "removed": false,
*                                 "id": "log_008b8257"
*                               },
*                               {
*                                 "address": "0x83a99f8170a0ba72fbCb2bD4eB739de964603854",
*                                 "topics": [
*                                   "0xdc51063e5ef77d99943e8395b0bb76177d3959e8bf37a0e41937bdd9e99fc8ff"
*                                 ],
*                                 "data": "0x000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000ff8eab3673c32559b63ff391772aa300121a94d4000000000000000000000000000000000000000000000000000000000000002433646461623465312d373866612d353935342d616639372d35373232343634643131633700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b65786368616e67655f696e000000000000000000000000000000000000000000",
*                                 "blockNumber": 51532,
*                                 "transactionHash": "0x89a7ec9974fcdd99bd1427c410da48fb9e51f74c57837b38be3b43e9f3d8a32f",
*                                 "transactionIndex": 0,
*                                 "blockHash": "0xe3e80f60a730e5d24d7299c917edeb3fd4d224fcfa802184d498c73c03d18320",
*                                 "logIndex": 1,
*                                 "removed": false,
*                                 "id": "log_4b6bbe14"
*                               }
*                             ],
*                             "logsBloom": "0x00000000000000000800000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000040000000000000000010000000000000000000000000000000000000000000020000000000000400000800000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000008000002000000000000000000400000000000000000000000000000000000000000000000000000000000000000000000008000000000000000020000000000000000040000040000000000000000010000000000000080000000000",
*                             "status": true,
*                             "to": "0x83a99f8170a0ba72fbcb2bd4eb739de964603854",
*                             "transactionHash": "0x89a7ec9974fcdd99bd1427c410da48fb9e51f74c57837b38be3b43e9f3d8a32f",
*                             "transactionIndex": 0
*                              }
*       400:
*        content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: error
*                 message:
*                   type: string
*                   example: Reverted reason
*/
router.post('/transactions/deploy-signed-transaction', treasuryController.deploySignedTransaction)


module.exports = router;