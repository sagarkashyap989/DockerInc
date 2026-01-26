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
