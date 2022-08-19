import { ethers } from "hardhat";

async function main() {
  console.log("deploying....");
  
  const Nft = await ethers.getContractFactory("MyTestNFT");
  const nft = await Nft.deploy("tokens","Fn","https://oseiwe.s3.filebase.com/swap2.png");

  await nft.deployed();
   
    console.log("address...",nft.address);
    
    const mint = await nft.mint("0x5D63564EeF4657F360343196A7bd86ae18d3a92A");
    console.log("minting tokens", mint);
    
    ///////////////////contract address on rinkeby//////////////////////
    
    const contractAddress = "0xa21657c9DB37f64f3dFc0fee21c8c5AE6A1f0055";


    //////////////////nft addresss//////////////////////////////////

    const nft_address = "https://testnets.opensea.io/assets/rinkeby/0xa21657c9db37f64f3dfc0fee21c8c5ae6a1f0055/0";
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});