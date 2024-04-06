const { Client, Bank, FT } = require("coreum-js");

// Replace the issuerMnemonic with your own. You can generate it at https://docs.coreum.dev/tools-ecosystem/faucet.html
// Caution: do not hardcode your production mnemonic here, otherwise your funds might be stolen.
const issuerMnemonic =
    "luggage enter prison case stage celery enroll sudden nest scan tongue spot original robot trick obey pumpkin riot practice tent put father settle hunt";

const network = "testnet";

// We need another address to send tokens to. You can replace it with your own:
const receiver = "testcore1400kz7w4955tptdq0ww03mkw8aggl243uk5wv9"

// Wallet Address: testcore1400kz7w4955tptdq0ww03mkw8aggl243uk5wv9
// Wallet Mnemonic: luggage enter prison case stage celery enroll sudden nest scan tongue spot original robot trick obey pumpkin riot practice tent put father settle hunt

async function main() {
    try {
        // INIT SECTION
        // Init the client and target the testnet network:
        const coreum = new Client({ network:  network}); // Other values are "devnet" and "mainnet"

        // Access the private key of the mnemonic.
        await coreum.connectWithMnemonic(issuerMnemonic);

        // Let's store the mnemonic bank address to the variable(the Client instance saves the address of the connected account for easy access)
        const issuer = coreum.address;

        // Let's define the modules we are going to use:
        const { bank, ft } = coreum.queryClients;

        const receiverBalancesFirst = await bank.allBalances(receiver);
        console.log(`receiverBalances: `, receiverBalancesFirst);

        return receiverBalancesFirst;

    } catch (e) {
        console.log(e);
    }
}