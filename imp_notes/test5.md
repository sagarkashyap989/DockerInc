Nice 👍 **Practical No. 5** is actually **one of the easiest and safest scoring practicals**.
You’ll do it **fully in Node.js** — no Remix, no Docker, no WSL.

Let’s go clean and exam-ready.

---

# ✅ PRACTICAL NO. 5

## **Aim**

Use blockchain concepts to **track fitness club rewards** using Node.js.

---

## 🧠 CONCEPT (1–2 lines for viva)

* Each workout reward is stored as a **block**
* Blocks are connected using **hashes**
* Rewards cannot be changed once added (immutability)

---

## 🪜 STEP-BY-STEP EXECUTION

### **STEP 1: Create Project Folder**

Open **VS Code terminal / CMD** and run:

```bash
mkdir fitness-blockchain-rewards
cd fitness-blockchain-rewards
```

---

### **STEP 2: Initialize Node Project**

```bash
npm init -y
```

✔ Creates `package.json`

---

### **STEP 3: Install Required Packages**

```bash
npm install crypto-js express
```

📌

* `crypto-js` → hashing (SHA256)
* `express` → API server

---

### **STEP 4: Create Main File**

Create a file named:

```text
index.js
```

---

### **STEP 5: WRITE THIS CODE (DON’T CHANGE)**

```js
const SHA256 = require("crypto-js/sha256");
const express = require("express");

/* -------- BLOCK -------- */
class Block {
  constructor(timestamp, data, previousHash = "") {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.timestamp +
      JSON.stringify(this.data) +
      this.previousHash
    ).toString();
  }
}

/* -------- BLOCKCHAIN -------- */
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(Date.now(), { info: "Genesis Block" }, "0");
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = new Block(Date.now(), data, lastBlock.hash);
    this.chain.push(newBlock);
  }

  getBalance(member) {
    let balance = 0;
    for (const block of this.chain) {
      if (block.data.member === member) {
        balance += block.data.reward || 0;
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

/* -------- FITNESS REWARDS LOGIC -------- */
const fitnessChain = new Blockchain();

function rewardForWorkout(member, workoutType, minutes) {
  const rewardPoints = minutes * 5;
  fitnessChain.addBlock({
    member,
    workoutType,
    minutes,
    reward: rewardPoints
  });
  return rewardPoints;
}

/* -------- SAMPLE DATA -------- */
rewardForWorkout("Alice", "Running", 30);
rewardForWorkout("Bob", "Cycling", 20);
rewardForWorkout("Alice", "Yoga", 40);

/* -------- EXPRESS SERVER -------- */
const app = express();

app.get("/balance/:member", (req, res) => {
  const member = req.params.member;
  res.json({
    member,
    balance: fitnessChain.getBalance(member)
  });
});

app.get("/blockchain", (req, res) => {
  res.json(fitnessChain);
});

app.listen(3000, () => {
  console.log("Fitness Rewards Blockchain running on http://localhost:3000");
});
```

---

### **STEP 6: Run the Project**

```bash
node index.js
```

✔ Output:

```
Fitness Rewards Blockchain running on http://localhost:3000
```

---

## 🌐 STEP 7: TEST IN BROWSER

### ✅ Check Member Balance

Open browser:

```
http://localhost:3000/balance/Alice
```

✔ Output:

```json
{
  "member": "Alice",
  "balance": 350
}
```

```
http://localhost:3000/balance/Bob
```

✔ Output:

```json
{
  "member": "Bob",
  "balance": 100
}
```

---

### ✅ View Full Blockchain

```
http://localhost:3000/blockchain
```

✔ You’ll see:

* Genesis block
* Workout reward blocks
* Hash + previousHash linking

---

## 📝 OBSERVATION (WRITE THIS)

> A blockchain-based fitness reward system was implemented using Node.js. Workout activities were recorded as blocks, and reward points were calculated and retrieved using REST APIs.

---

## 🎯 VIVA QUESTIONS (IMPORTANT)

**Q1. What is Genesis Block?**
👉 First block of blockchain.

**Q2. How rewards are secured?**
👉 Using cryptographic hashing.

**Q3. Can data be changed?**
👉 No, changing data breaks hash chain.

**Q4. Is this a real blockchain?**
👉 Conceptual / educational blockchain.

---

## 📸 SCREENSHOTS TO TAKE

1. `node index.js` running
2. Browser showing `/balance/Alice`
3. `/blockchain` output

---

If you want next:

* ✍️ **Full journal write-up**
* ▶️ **Practical 6**
* 🧠 **Viva-only preparation**

Just say **“next practical”** or **“write journal”** 👌
