import { createRequire } from "module";
const require = createRequire(import.meta.url);
let variable = require("./calcUtil");

import multi, { add, substract, url,browser } from "./calcUtil.js";

console.log(add(20, 10));
console.log(multi(20, 10));
console.log(substract(20, 10));
console.log(url);
console.log(browser)
console.log(variable.browser);
