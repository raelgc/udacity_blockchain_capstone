# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Libraries

- Truffle version: `v5.1.63`
- Truffle Wallet Prodiver: `1.0.17`
- Openzeppelin Solidity: `2.5.1`
- SolC: `0.5.17`
- SolC JS: `0.5.5`

## Requirements

If not installed, install `truffle` globally running the below command in a terminal:

    npm install -g truffle

## Install

Then install required packages, running a terminal:

    npm install

## Compile

In a terminal, go to folder `eth-contracts` and start truffle console in dev mode:

    truffle dev

Then in the truffle console run:

    compile

## Test

In a terminal, go to folder `eth-contracts` and start truffle console in dev mode:

    truffle dev

Then in the truffle console run:

    test

## Deploy to Rinkeby

First, create a `.secret` file in the `eth-contracts` folder with your MetaMask mnemonic.

Then, run in a terminal (in the same `eth-contracts` folder):

    truffle migrate --network rinkeby

## Rinkeby Contracts

After run `truffle migrate --network rinkeby`:

```
Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        8193412
   > block timestamp:     1615131231
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.91781564
   > gas used:            210237 (0x3353d)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00210237 ETH

   -------------------------------------
   > Total cost:          0.00210237 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > block number:        8193414
   > block timestamp:     1615131270
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.88985893
   > gas used:            2768308 (0x2a3db4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02768308 ETH


   Deploying 'Verifier'
   --------------------
   > block number:        8193415
   > block timestamp:     1615131289
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.88018262
   > gas used:            967631 (0xec3cf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967631 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        8193416
   > block timestamp:     1615131325
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.83769229
   > gas used:            4249033 (0x40d5c9)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04249033 ETH

   -------------------------------------
   > Total cost:          0.07984972 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.08195209 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 10000000 (0x989680)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x7eb4d51cab2368560e4c07aba6c375709ff78919f9a7d07161e0249a99b0764c
   > Blocks: 0            Seconds: 12
   > contract address:    0xc2b00d94b1a82f8DD2C020F87A39AddA4379E799
   > block number:        8193420
   > block timestamp:     1615131365
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.91766564
   > gas used:            225237 (0x36fd5)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00225237 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00225237 ETH


2_deploy_contracts.js
=====================

   Deploying 'ERC721Mintable'
   --------------------------
   > transaction hash:    0x37060c8849f6da16f0002ad5a8361c50a8a0c245dc24a0af320576cd5ee4bdc3
   > Blocks: 1            Seconds: 8
   > contract address:    0x11e9e003b6E12d5476934b17B21d448509c0D3Eb
   > block number:        8193422
   > block timestamp:     1615131395
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.88805893
   > gas used:            2918308 (0x2c87a4)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02918308 ETH


   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x0bb42187739479d8945cd59cf9d0961e770c817b3f8adfef92d96a42e946ec20
   > Blocks: 0            Seconds: 8
   > contract address:    0x1405b5A21355dF59a35adaf627Dc7916495A9f10
   > block number:        8193423
   > block timestamp:     1615131410
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.87838262
   > gas used:            967631 (0xec3cf)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00967631 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x71344c8a135d946012b89ed7d2eeb821acf2f64a7a8f6aee639cf7087a4c4d89
   > Blocks: 1            Seconds: 8
   > contract address:    0x29CD5e305B836270443369d59baB0e7C823d77ce
   > block number:        8193424
   > block timestamp:     1615131425
   > account:             0xA15AB1BfC16a008BA1A7594DB9Dc594A573A44aD
   > balance:             2.83424229
   > gas used:            4414033 (0x435a51)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04414033 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08299972 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.08525209 ETH

```


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
