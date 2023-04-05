class BankAccount {
    constructor() {
      this.isOpen = false;
      this.details = {};
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
      }
}