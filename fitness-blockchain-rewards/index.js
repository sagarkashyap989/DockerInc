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
