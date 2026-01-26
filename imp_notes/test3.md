Perfect 👍
Let’s do **✅ Practical No. 3** step-by-step, **slow and clean**, exactly the way your examiner expects.

---

# ✅ PRACTICAL NO. 3

## **Aim**

Interact with a blockchain network and execute transactions by creating a **Node.js application**.

---

## 🧰 TOOLS REQUIRED

* **Ganache (Local Ethereum blockchain)**
* **Node.js**
* **web3.js**

👉 No Remix, no Docker, no WSL here.

---

## 🔹 STEP 1: Install & Open Ganache

1. Download Ganache from:
   👉 [https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/)
2. Install and open Ganache
3. Click **“Quickstart Ethereum”**

✔ A local blockchain starts

You will see:

* RPC Server: `http://127.0.0.1:7545`
* 10 accounts with ETH
* Private keys

---

## 🔹 STEP 2: Copy Details from Ganache

From Ganache UI:

* Copy **RPC Server URL**
* Copy **ONE Account Address** → Sender
* Copy its **Private Key**
* Copy **another Account Address** → Receiver

⚠️ Safe because Ganache is LOCAL.

---

## 🔹 STEP 3: Create Node.js Project

Open **VS Code terminal / CMD**:

```bash
mkdir blockchain-transaction
cd blockchain-transaction
npm init -y
```

---

## 🔹 STEP 4: Install web3 Library

```bash
npm install web3
```

---

## 🔹 STEP 5: Create JavaScript File

Create a file named:

```text
sendTransaction.js
```

---

## 🔹 STEP 6: WRITE THIS CODE

⚠️ Replace addresses & private key with **YOUR Ganache values**

```js
const Web3 = require('web3');

// Connect to Ganache
const web3 = new Web3('http://127.0.0.1:7545');

// Ganache account details
const sender = '0xYOUR_SENDER_ADDRESS';
const privateKey = '0xYOUR_PRIVATE_KEY';
const receiver = '0xYOUR_RECEIVER_ADDRESS';

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
```

---

## 🔹 STEP 7: Run the Program

```bash
node sendTransaction.js
```

✔ Expected Output:

```
Transaction successful!
Transaction Hash: 0xabc123...
```

---

## 🔹 STEP 8: Verify in Ganache

* Go back to Ganache
* Check **Transactions tab**
* Check balances → Sender ↓, Receiver ↑

✔ Transaction executed successfully

---

## 📝 OBSERVATION (WRITE THIS)

> A Node.js application was created to interact with a local Ethereum blockchain using web3.js. A signed transaction was successfully executed and verified using Ganache.

---

## 🎯 VIVA QUESTIONS (VERY IMPORTANT)

**Q1. What is Ganache?**
👉 Local Ethereum blockchain for testing.

**Q2. Why private key is needed?**
👉 To sign transactions securely.

**Q3. What is nonce?**
👉 Transaction count for sender account.

**Q4. Is this a real blockchain?**
👉 Local simulation (test blockchain).

---

## 📸 SCREENSHOTS TO TAKE

1. Ganache running (accounts visible)
2. sendTransaction.js code
3. Terminal output (transaction hash)
4. Ganache transaction history

---

If you want next:

* ▶️ **Practical 4** (Asset Transfer – Remix)
* ✍️ **Journal format for Practical 3**
* 🧠 **Viva-only questions**

Just say **“next practical”** 👍
