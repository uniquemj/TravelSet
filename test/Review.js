const {ethers, getNamedAccounts} = require('hardhat');
const {assert} = require('chai');

describe("Review", ()=>{
    let deployer, reviewContract, contract
    beforeEach(async()=>{
        contract = await ethers.getContractFactory('Review')
        reviewContract = await contract.deploy()

        deployer = (await getNamedAccounts()).deployer
    })

    it("adds place with review", async ()=>{
        let name = "KFC"
        let location = "Baneshwor"
        let rating = "3"
        let review = "Good"
        let transactionResponse = await reviewContract.addPlace(name, location, rating, review)
        await transactionResponse.wait(1)
        
        const place = await reviewContract.places(0)
    
        assert.equal(place[0], name)
        assert.equal(place[1], location)
        assert.equal(place[2].toString(), rating)
        assert.equal(place[3], review)
    })

    it("checks place with user address", async()=>{
        let name = "KFC"
        let location = "Baneshwor"
        let rating = "3"
        let review = "Good"
        let transactionResponse = await reviewContract.addPlace(name, location, rating, review)
        await transactionResponse.wait(1)

        console.log(await reviewContract.placeAddedByUser(deployer))

    })
})