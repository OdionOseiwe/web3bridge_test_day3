import { ethers } from "hardhat";

async function main() {


  const Nft = await ethers.getContractFactory("oseNft");
  const nft = await Nft.deploy();

  await nft.deployed();

    console.log(`oseiwe is deployed to ${nft.address}`);
    
    const main = await nft.safeMint("0x5D63564EeF4657F360343196A7bd86ae18d3a92A", "https://gateway.pinata.cloud/ipfs/QmW6cevk5BLSmMtsCMZrwaecV7VSt2wb4BcjmD1pfxekfV");
    console.log("minting tokens", main);


    const contractAddress_0n_rinkrby = "0x7600FC73cA5E69bcfDE8d0b6ca6824035429464E";

    const url = "https://testnets.opensea.io/assets/rinkeby/0x7600fc73ca5e69bcfde8d0b6ca6824035429464e/0";

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
