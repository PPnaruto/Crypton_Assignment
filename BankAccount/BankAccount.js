class BankAccount {
    constructor() {
      this.isOpen = false;
      this.details = {};
      this.ledger = [];
    }
  
    openAccount(
      name,
      gender,
      dob,
      email,
      mobile,
      address,
      initialBalance,
      adharNo,
      panNo
    ) {
      if (this.isOpen) {
        throw new Error("Account is already exists");
      }
  
      this.details = {
        name,
        gender,
        dob,
        email,
        mobile,
        address,
        balance: initialBalance,
        adharNo,
        panNo,
      };
      this.isOpen = true;

      this.ledger.push({
        type: 'OPEN_ACCOUNT',
        amount: initialBalance,
        balance: initialBalance,
      });
    }

    updateKYC(name, dob, email, mobile, adharNo, panNo) {
        if (!this.isOpen) {
          throw new Error("Account is not open");
        }
    
        this.details.name = name;
        this.details.dob = dob;
        this.details.email = email;
        this.details.mobile = mobile;
        this.details.adharNo = adharNo;
        this.details.panNo = panNo;

        this.ledger.push({
            type: 'KYC_UPDATE',
          });
      }

    depositMoney(amount) {
      if (!this.isOpen) {
        throw new Error("Account is not open");
      }
  
      this.details.balance += amount;
      this.ledger.push({
        type: "Deposit",
        amount,
        date: new Date(),
      });
    }

    withdrawMoney(amount) {
        if (!this.isOpen) {
          throw new Error("Account is not open");
        }
    
        if (this.details.balance < amount) {
          throw new Error("Insufficient balance");
        }
    
        this.details.balance -= amount;
        this.ledger.push({
          type: "Withdraw",
          amount,
          date: new Date(),
        });
    }

    transferMoney(toName, amount) {
      if (!this.isOpen) {
        throw new Error("Account is not open");
      }
  
      if (this.details.balance < amount) {
        throw new Error("Insufficient balance");
      }
  
      this.details.balance -= amount;
      this.ledger.push({
        type: "Transfer",
        to: toName,
        amount,
        date: new Date(),
      });
    }
  
    receiveMoney(fromName, amount) {
      if (!this.isOpen) {
        throw new Error("Account is not open");
      }
  
      this.details.balance += amount;
      this.ledger.push({
        type: "Receive",
        from: fromName,
        amount,
        date: new Date(),
      });
    }
}