Alright Sagar 💪 let’s finish strong with **🔥 Practical No. 6**
This one looks big, but it’s actually **very similar to Practical 5**, just slightly extended.

No Docker, no Remix — **only Node.js**.

---

# ✅ PRACTICAL NO. 6

## **Aim**

Build a web application that uses **blockchain concepts** to **track and trace member rewards**.

---

## 🧠 CONCEPT (EXAM FRIENDLY)

* Rewards are stored as **transactions**
* Each transaction is stored inside a **block**
* Blocks are linked using **hashes**
* Express is used to expose balance as an API

---

## 🪜 STEP-BY-STEP EXECUTION

---

## **STEP 1: Create Project Folder**

Open terminal / VS Code terminal:

```bash
mkdir member-rewards-blockchain
cd member-rewards-blockchain
```

---

## **STEP 2: Initialize Node Project**

```bash
npm init -y
```

✔ Creates `package.json`

---

## **STEP 3: Install Required Packages**

```bash
npm install crypto-js express
```

📌

* `crypto-js` → SHA256 hashing
* `express` → REST API

---

## **STEP 4: Create Main File**

Create a file named:

```text
index.js
```

---

## **STEP 5: WRITE THIS CODE (COPY EXACTLY)**

```js
const SHA256 = require('crypto-js/sha256');
const express = require('express');

class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.timestamp +
      JSON.stringify(this.transactions) +
      this.previousHash
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], "0");
  }

  addTransaction(transaction) {
    const newBlock = new Block(
      Date.now(),
      [transaction],
      this.chain[this.chain.length - 1].hash
    );
    this.chain.push(newBlock);
  }

  getBalance(memberId) {
    let balance = 0;
    for (const block of this.chain) {
      for (const tx of block.transactions) {
        if (tx.from === memberId) balance -= tx.amount;
        if (tx.to === memberId) balance += tx.amount;
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const previous = this.chain[i - 1];
      if (current.hash !== current.calculateHash()) return false;
      if (current.previousHash !== previous.hash) return false;
    }
    return true;
  }
}

// Create blockchain instance
const rewardChain = new Blockchain();

// Sample transactions (Rewards)
rewardChain.addTransaction({ from: null, to: "Alice", amount: 100 });
rewardChain.addTransaction({ from: "Alice", to: "Bob", amount: 30 });

// Console output
console.log("Blockchain Data:");
console.log(JSON.stringify(rewardChain, null, 2));
console.log("Alice Balance:", rewardChain.getBalance("Alice"));
console.log("Bob Balance:", rewardChain.getBalance("Bob"));

// Express API
const app = express();

app.get('/balance/:member', (req, res) => {
  const member = req.params.member;
  const balance = rewardChain.getBalance(member);
  res.json({ member, balance });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

---

## **STEP 6: Run the Program**

```bash
node index.js
```

✔ Terminal Output:

```
Alice Balance: 70
Bob Balance: 30
Server running on http://localhost:3000
```

---

## 🌐 STEP 7: Test in Browser

### ✅ Check Alice Balance

```
http://localhost:3000/balance/Alice
```

Output:

```json
{ "member": "Alice", "balance": 70 }
```

### ✅ Check Bob Balance

```
http://localhost:3000/balance/Bob
```

Output:

```json
{ "member": "Bob", "balance": 30 }
```

---

## 📝 OBSERVATION (WRITE THIS)

> A blockchain-based reward tracking system was implemented using Node.js. Member rewards were stored as blockchain transactions, and balances were retrieved using REST APIs.

---

## 🎯 VIVA QUESTIONS (VERY IMPORTANT)

**Q1. Difference between Practical 5 & 6?**
👉 P5 stores rewards directly in blocks, P6 stores **transactions inside blocks**.

**Q2. Why hashing is used?**
👉 To maintain immutability.

**Q3. What is Genesis Block?**
👉 First block in blockchain.

**Q4. Is Express mandatory?**
👉 No, but used for API access.

---

## 📸 SCREENSHOTS TO TAKE

1. `node index.js` terminal output
2. Browser output `/balance/Alice`
3. `/balance/Bob`

---

## ✅ CONGRATULATIONS 🎉

You’ve now completed **ALL PRACTICALS (1 → 6)** 💯

If you want next, I can:

* ✍️ Write **all practicals in journal format**
* 🧠 Prepare **last-minute viva answers**
* 📋 Give a **submission checklist**

Just tell me 👍
