const MockToken = artifacts.require("MockToken");

module.exports = async function (deployer) {
    if (deployer.network == 'dev' || deployer.network == 'testnet') {
        await deployer.deploy(MockToken, "Kingdom Raids Token", "KRS");
        const Token = await MockToken.deployed();
        if(Token) {
            console.log("Token contract successfully deployed.")
            console.log(`Token contract address: ${Token.address}`);
        }
    }
}
