describe("Accessibility Selector" ,()=>{

xit("verify Accessibility Selector", async () => {
  browser.url("https://www.saucedemo.com/");
  browser.maximizeWindow();
  await browser.pause(2000);
  await (await $("aria/Username")).setValue("standard_user")
  await(await $("aria/Password")).setValue("secret_sauce")
 // await(await $("aria/Login")).click() //this is not working so instead of taking accessibility selector ,we will take cssselector/xpath
  await (await $("//input[@id='login-button']")).click();
  await browser.pause(3000);
});

it("verify Accessibility Selector2", async () => {
  browser.url("https://www.google.com/");
  browser.maximizeWindow();
  await browser.pause(2000);
  await(await $("aria/Search")).setValue("standard_user");
  await browser.pause(1000);
  await(await $("aria/Google Search")).click();
  await browser.pause(3000);
});

})