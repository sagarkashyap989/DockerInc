// const Web3 = require('web3');
// // Connect to Ganache
// const {web3} = new Web3('http://127.0.0.1:7545');

const { Web3 } = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

// Ganache account details
const sender = '0x8643eF7E9974206974558D5E2386caF0129180A8';
const privateKey =    '0x80e8cfde9f3d4240492f5c0d74c189ea40ad0c856300f5409b6227d6410be674';
const receiver = '0xb1358454Fb2273B52254b9dA45f9c14C48a6Cb36';
async function sendTransaction() {
    const nonce = await web3.eth.getTransactionCount(sender);
    const txObject = {
        from: sender,
        to: receiver,
        value: web3.utils.toWei('1', 'ether'),
        gas: 21000,
        gasPrice: web3.utils.toWei('10', 'gwei'),
        nonce: nonce
    };
    // Sign transaction
    const signedTx = await web3.eth.accounts.signTransaction(
        txObject,
        privateKey
    );
    // Broadcast transaction
    const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
    );
    console.log("Transaction successful!");
    console.log("Transaction Hash:", receipt.transactionHash);
}
sendTransaction();