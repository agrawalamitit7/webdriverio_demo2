//it will read data from appData.json based on the requirement
//import * as data  from "../../data/appData.json" assert { type: "json" };
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require('../../data/appData.json');

 

export default class appData {
  getEnv() {
    return process.env.Env;
  }

  getUrl() {
    console.log("environment - " + this.getEnv());
    return data.urls[this.getEnv()];
  }

  //   getCredential() {
  //     let username, password;

  //     data.users.forEach((user) => {
  //       if (user.env.includes(this.getEnv())) {
  //         username = user.username;
  //         password = user.password;
  //       }
  //     });

  //     return [{ username, password }];
  //   }
  //Above getCredential method is not working so writting separate method for username and password

  getUsername() {
    let username;

    data.users.forEach((user) => {
      if (user.env.includes(this.getEnv())) {
        username = user.username;
      }
    });

    return username;
  }

  getPassword() {
    let password;

    data.users.forEach((user) => {
      if (user.env.includes(this.getEnv())) {
        password = user.password;
      }
    });

    return password;
  }
}
