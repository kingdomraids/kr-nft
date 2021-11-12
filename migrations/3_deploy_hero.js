const Hero = artifacts.require("Hero");

module.exports = async function(deployer) {
    await deployer.deploy(Hero);
    const hero = await Hero.deployed();
    if(hero) {
        await hero.setBaseURI("https://api.kingdomraids.io/v1/hero/");
        console.log("Hero successfully deployed.")
        console.log(`Hero address: ${hero.address}`);
    }
}
