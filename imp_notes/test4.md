Alright Sagar 😄 let’s jump straight into **🔥 Practical No. 4**
This one is **easy + scoring**, and you **don’t need Docker/WSL here**.

---

# ✅ PRACTICAL NO. 4

### **Aim**

Deploy an **Asset Transfer** application using blockchain and understand smart contract–based asset ownership.

---

## 🧰 TOOLS USED

* **Remix IDE (online)**
* **Solidity**
* **Ethereum Virtual Machine (Remix VM – London)**

👉 No local setup required.

---

## 🪜 STEP-BY-STEP EXECUTION

---

## **STEP 1: Open Remix IDE**

Open browser and go to:
👉 [https://remix.ethereum.org](https://remix.ethereum.org)

Wait till Remix loads completely.

---

## **STEP 2: Create Solidity File**

* In **File Explorer (left panel)**
* Click **➕ New File**
* Name it exactly:

```text
AssetTransfer.sol
```

---

## **STEP 3: WRITE THIS CODE (VERY IMPORTANT – DON’T CHANGE)**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssetTransfer {

    address public owner;
    uint256 public nextAssetId = 1;

    mapping(uint256 => address) public assetOwners;

    event Transfer(uint256 assetId, address from, address to);
    event Mint(uint256 assetId, address to);

    constructor() {
        owner = msg.sender;

        // Mint 5 assets to owner initially
        for (uint i = 0; i < 5; i++) {
            assetOwners[nextAssetId] = owner;
            emit Mint(nextAssetId, owner);
            nextAssetId++;
        }
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner allowed");
        _;
    }

    function mint(address to) public onlyOwner {
        assetOwners[nextAssetId] = to;
        emit Mint(nextAssetId, to);
        nextAssetId++;
    }

    function transferAsset(address to, uint256 assetId) public {
        require(assetOwners[assetId] == msg.sender, "Not asset owner");
        assetOwners[assetId] = to;
        emit Transfer(assetId, msg.sender, to);
    }

    function ownerOf(uint256 assetId) public view returns (address) {
        require(assetOwners[assetId] != address(0), "Invalid asset");
        return assetOwners[assetId];
    }

    function balanceOf(address user) public view returns (uint256) {
        uint256 count = 0;
        for (uint256 i = 1; i < nextAssetId; i++) {
            if (assetOwners[i] == user) {
                count++;
            }
        }
        return count;
    }
}
```

---

## **STEP 4: Compile the Contract**

* Go to **Solidity Compiler** tab
* Compiler version: **0.8.0 or higher**
* Click **Compile AssetTransfer.sol**

✅ Green tick = compiled successfully

---

## **STEP 5: Deploy the Contract**

* Go to **Deploy & Run Transactions**
* Environment: **Remix VM (London)**
* Account: leave default
* Contract: **AssetTransfer**
* Click **Deploy**

🎉 Contract appears under **Deployed Contracts**

---

## **STEP 6: PERFORM PRACTICAL OPERATIONS**

### 🔹 1️⃣ Check Initial Assets

Call:

```text
balanceOf(<deployer_address>)
```

✔ Output:

```text
5
```

👉 Owner has 5 assets initially.

---

### 🔹 2️⃣ Mint New Asset

Call:

```text
mint(0xReceiverAddress)
```

✔ New asset created
✔ Asset ID increases

---

### 🔹 3️⃣ Transfer Asset

Call:

```text
transferAsset(0xReceiverAddress, 1)
```

✔ Asset ID `1` transferred successfully

---

### 🔹 4️⃣ Verify Owner

Call:

```text
ownerOf(1)
```

✔ Shows **new owner address**

---

### 🔹 5️⃣ Check Balances

```text
balanceOf(sender)
balanceOf(receiver)
```

✔ Asset counts updated correctly

---

## 📝 OBSERVATION (WRITE THIS IN JOURNAL)

> The Asset Transfer smart contract was successfully deployed using Remix IDE. Assets were minted, transferred, and ownership was verified using smart contract functions.

---

## 🎯 VIVA QUESTIONS (VERY IMPORTANT)

**Q1. What is mapping used for?**
👉 To store asset ownership using asset ID.

**Q2. What is `msg.sender`?**
👉 Address of the caller.

**Q3. Why modifier is used?**
👉 To restrict access (only owner can mint).

**Q4. Is this public or private blockchain?**
👉 Public (Ethereum – simulated via Remix VM).

---

## 📸 SCREENSHOTS TO TAKE

1. Code in Remix
2. Compile success (green tick)
3. Deploy screen
4. balanceOf output = 5
5. transferAsset execution
6. ownerOf output

---

If you want, next I can:

* ✔️ Write **Practical 4 in exam-ready format**
* ▶️ Start **Practical 5**
* 🧠 Help with **viva answers only**

Just say **“next practical”** or **“write journal”** 💪
