Awesome 😄
Let’s do **✅ Practical No. 2** cleanly and **exam-perfect**, step by step.

---

# ✅ PRACTICAL NO. 2

## **Aim**

Develop a **Voting Application** using **Ethereum smart contract** and deploy it using **Remix IDE**.

---

## 🧰 TOOLS REQUIRED

* **Browser**
* **Remix IDE**
* **Solidity**
* **Remix VM (London)**

👉 No Docker, no Node.js, no WSL needed.

---

## 🔹 STEP 1: Open Remix IDE

Open your browser and go to:

```
https://remix.ethereum.org
```

Wait until Remix fully loads.

---

## 🔹 STEP 2: Create Solidity File

1. In the **File Explorer (left panel)**
2. Click **➕ New File**
3. Name the file:

```text
Voting.sol
```

---

## 🔹 STEP 3: WRITE THE SMART CONTRACT CODE

⚠️ **Copy exactly — do not change anything**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {

    address public chairperson;
    uint public candidateCount;

    struct Candidate {
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;

    event CandidateRegistered(uint candidateId, string name);
    event Voted(address voter, uint candidateId);

    constructor() {
        chairperson = msg.sender;
        candidateCount = 0;
    }

    modifier onlyChairperson() {
        require(msg.sender == chairperson, "Only chairperson allowed");
        _;
    }

    function registerCandidate(string memory _name) public onlyChairperson {
        candidateCount++;
        candidates[candidateCount] = Candidate(_name, 0);
        emit CandidateRegistered(candidateCount, _name);
    }

    function vote(uint _candidateId) public {
        require(!hasVoted[msg.sender], "Already voted");
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate");

        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        emit Voted(msg.sender, _candidateId);
    }

    function getCandidate(uint _candidateId) public view returns (string memory, uint) {
        require(_candidateId > 0 && _candidateId <= candidateCount, "Invalid candidate");
        return (candidates[_candidateId].name, candidates[_candidateId].voteCount);
    }

    function getCandidateCount() public view returns (uint) {
        return candidateCount;
    }

    function getWinner() public view returns (string memory, uint) {
        require(candidateCount > 0, "No candidates");
        uint winningVoteCount = 0;
        uint winnerId = 0;

        for (uint i = 1; i <= candidateCount; i++) {
            if (candidates[i].voteCount > winningVoteCount) {
                winningVoteCount = candidates[i].voteCount;
                winnerId = i;
            }
        }
        return (candidates[winnerId].name, winningVoteCount);
    }
}
```

---

## 🔹 STEP 4: Compile the Contract

1. Go to **Solidity Compiler** tab
2. Compiler version: **0.8.0 or higher**
3. Click **Compile Voting.sol**

✅ Green tick = compiled successfully

---

## 🔹 STEP 5: Deploy the Contract

1. Go to **Deploy & Run Transactions**
2. Environment: **Remix VM (London)**
3. Account: leave default
4. Contract: **Voting**
5. Click **Deploy**

✔ Contract appears under **Deployed Contracts**

---

## 🔹 STEP 6: RUN PRACTICAL OPERATIONS

### ✅ 1️⃣ Register Candidates

(Only chairperson can do this)

Call:

```text
registerCandidate("Alice")
registerCandidate("Bob")
```

Check:

```text
getCandidateCount()
```

✔ Output:

```
2
```

---

### ✅ 2️⃣ Vote

Call:

```text
vote(1)
```

Try voting again:

```text
vote(1)
```

❌ Error:

```
Already voted
```

✔ Double voting prevented

---

### ✅ 3️⃣ View Candidate

Call:

```text
getCandidate(1)
```

✔ Output:

```
Alice , 1
```

---

### ✅ 4️⃣ Get Winner

Call:

```text
getWinner()
```

✔ Output:

```
Alice , 1
```

---

## 📝 OBSERVATION (WRITE THIS)

> A voting smart contract was developed and deployed using Solidity. Candidates were registered, votes were cast securely, and double voting was prevented using smart contract logic.

---

## 🎯 VIVA QUESTIONS (VERY IMPORTANT)

**Q1. Who is chairperson?**
👉 The deployer of the contract.

**Q2. How is double voting prevented?**
👉 Using `hasVoted` mapping.

**Q3. What is `msg.sender`?**
👉 Address of the function caller.

**Q4. Is this secure?**
👉 Yes, logic enforced by smart contract.

---

## 📸 SCREENSHOTS TO TAKE

1. Voting.sol code
2. Compile success (green tick)
3. Deploy screen
4. registerCandidate execution
5. vote() + error message
6. getWinner output

---

If you want next:

* 🧠 **Viva-only revision**
* ✍️ **Journal writing format**
* ▶️ **Practical 3**

Just say **“next practical”** 👍
