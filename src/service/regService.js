let regModels = require("../models/regModels.js");
class regService {
  aceptRegData(name, email, contact) {
    console.log(email);

    let index = email.indexOf("@gmail.com");
    if (index != -1) {
      let ab = regModels.saveUser(name, email, contact);
      return ab;
    } else {
      return "sss";
    }
  }
  // save
  saveReg(username, email, password, role) {
    console.log(email);

    let index = email.indexOf("@gmail.com");
    if (index != -1) {
      let ab = regModels.registraionsave(username, email, password, role);
      console.log(ab);
      return ab;
    } else {
      return "Email Not Valid";
    }
  }

  // login

  // login(email, password) {
  //   console.log(email);

  //   let index = email.indexOf("@gmail.com");
  //   if (index != -1) {
  //     let ab = regModels.login(username, email, password, role);
  //     console.log(ab);
  //     return ab;
  //   } else {
  //     return "Email Not Valid";
  //   }
  // }

  //ls

  async login(email, password) {
    console.log("Login attempt with:", email);
    const role = await regModels.login(email, password);
    return role; //ll
  }
}
module.exports = new regService();
