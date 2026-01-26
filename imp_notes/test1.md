Perfect 👍
Let’s **restart Practical No. 1 from ZERO** and do it **cleanly, slowly, and exam-ready**.
I’ll give you **FULL instructions**, including **where to run what**, **why**, and **what to write in the practical file**.

Everything below is **exactly as per your Web3 Practical PDF (Practical 1)** 

---

# ✅ PRACTICAL NO. 1 (FULL & FINAL)

## **Aim**

To install and understand **Docker Container, Node.js, Java, Hyperledger Fabric, and Ethereum**, and verify their working on a local machine.

---

# 🧰 SYSTEM REQUIREMENTS

* Windows 10 / 11
* Internet connection
* Admin access

---

# 🔹 PART 1: DOCKER INSTALLATION & VERIFICATION

### **Step 1: Install Docker Desktop**

1. Go to: [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Download **Docker Desktop for Windows**
3. Install normally
4. When prompted → **Enable WSL 2**
5. Restart the system

---

### **Step 2: Verify Docker**

Open **Command Prompt / PowerShell**:

```bash
docker --version
```

✔ Expected Output:

```
Docker version xx.xx.x
```

Now test Docker:

```bash
docker run hello-world
```

✔ Output:

```
Hello from Docker!
```

✅ Docker installed successfully.

---

### 📝 **Write in Practical File**

> Docker Desktop was installed successfully and verified using docker commands.

---

# 🔹 PART 2: NODE.JS INSTALLATION & VERIFICATION

### **Step 3: Install Node.js**

1. Go to: [https://nodejs.org](https://nodejs.org)
2. Download **LTS version**
3. Install normally (Next → Next)

---

### **Step 4: Verify Node.js**

Open **CMD / PowerShell**:

```bash
node -v
npm -v
```

✔ Output:

```
v18.x.x
npm x.x.x
```

---

### 📝 **Write in Practical File**

> Node.js and npm were installed and verified successfully.

---

# 🔹 PART 3: JAVA INSTALLATION & VERIFICATION

### **Step 5: Install Java (JDK)**

1. Go to: [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)
2. Download **JDK 11 or JDK 17**
3. Install normally
4. JAVA_HOME is set automatically

---

### **Step 6: Verify Java**

```bash
java --version
```

✔ Output:

```
java 11.x / 17.x
```

---

### 📝 **Write in Practical File**

> Java Development Kit was installed successfully and verified.

---

# 🔹 PART 4: HYPERLEDGER FABRIC (IMPORTANT)

⚠️ **This part MUST be done in Ubuntu (WSL), NOT Windows CMD**

---

## ✅ Step 7: Install WSL (ONE TIME)

Open **PowerShell as Administrator**:

```powershell
wsl --install
```

✔ Restart system when asked
✔ Ubuntu will be installed automatically

---

## ✅ Step 8: Open Ubuntu (WSL)

* Open **Ubuntu** from Start Menu
* Create username & password
* You’ll see:

```
username@DESKTOP:~$
```

This means:

```
/home/username
```

---

## ✅ Step 9: Install required tools (inside Ubuntu)

```bash
sudo apt update
sudo apt install -y git curl
```

---

## ✅ Step 10: Clone Fabric Samples (INSIDE UBUNTU)

```bash
git clone https://github.com/hyperledger/fabric-samples.git
cd fabric-samples
```

Check directory:

```bash
pwd
```

✔ Output:

```
/home/username/fabric-samples
```

---

## ✅ Step 11: Download Fabric binaries & Docker images

👉 **RUN THIS ONLY HERE**

```bash
curl -sSL https://bit.ly/2ysbOFE | bash -s
```

⏳ This will download:

* Fabric binaries
* Docker images

---

## ✅ Step 12: Start Fabric Network

```bash
cd test-network
chmod +x network.sh
./network.sh up createChannel -ca
```

✔ Network starts successfully

---

## ✅ Step 13: Verify Fabric Network

Open **Windows CMD / PowerShell**:

```bash
docker ps
```

✔ You should see:

* peer container
* orderer container
* ca container

---

### 📝 **Write in Practical File**

> Hyperledger Fabric test network was successfully deployed using Docker containers in WSL.

---

# 🔹 PART 5: ETHEREUM SETUP

---

## ✅ Step 14: Install Hardhat (Ethereum Framework)

Open **CMD / PowerShell**:

```bash
npm install --global hardhat
```

---

## ✅ Step 15: Create Ethereum Project

```bash
mkdir eth-project
cd eth-project
npx hardhat
```

Choose:

* Create JavaScript project
* Accept defaults

---

## ✅ Step 16: Start Local Ethereum Blockchain

```bash
npx hardhat node
```

✔ Output:

* Localhost network started
* Accounts with ETH shown

---

### 📝 **Write in Practical File**

> Ethereum local blockchain was started using Hardhat.

---

# ✅ FINAL OBSERVATION (WRITE EXACTLY)

> Docker, Node.js, Java, Hyperledger Fabric, and Ethereum tools were installed and verified successfully. Hyperledger Fabric network and Ethereum local blockchain were executed successfully on the local machine.

---

# 🎯 VIVA QUESTIONS (IMPORTANT)

**Q1. Why Docker is required in Hyperledger Fabric?**
👉 Fabric components run as Docker containers.

**Q2. Difference between Ethereum and Hyperledger Fabric?**
👉 Ethereum is public, Fabric is permissioned.

**Q3. Why WSL is used?**
👉 Fabric requires Linux-based environment.

---

# 📸 SCREENSHOTS TO TAKE (VERY IMPORTANT)

1. `docker run hello-world`
2. `node -v`, `java --version`
3. Ubuntu terminal showing Fabric install
4. `docker ps`
5. Hardhat node running

---

If you want next:

* ✍️ **Full handwritten journal format**
* 🧠 **Only viva preparation**
* ▶️ **Re-run any step live**

Just tell me 👍
