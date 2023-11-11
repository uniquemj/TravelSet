const {ethers} = require("hardhat")

const main = async() =>{
  const contract = await ethers.getContractFactory("Review")
  const transactionResponse = await contract.deploy()
  console.log(`Review deployed at ${transactionResponse.target}`)
}

main()
.then(()=>process.exit(0))
.catch((e)=>{
  console.error(e)
  process.exit(1)
})