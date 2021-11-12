const Summon = artifacts.require("Summon");
const Hero = artifacts.require("Hero");
const MockToken = artifacts.require("MockToken");

module.exports = async function(deployer) {
    const tokenInstance = await MockToken.deployed();
    const heroInstance = await Hero.deployed();

    if(heroInstance && tokenInstance) {
        const fee = new web3.utils.BN(99);
        await deployer.deploy(Summon, fee, tokenInstance.address, heroInstance.address);
        const summonInstance = await Summon.deployed();

        if(summonInstance) {
            console.log("Summon contract successfully deployed.")
            console.log(`Summon contract address: ${summonInstance.address}`);

            await heroInstance.setMinterRole(summonInstance.address);
        }
    }
}
