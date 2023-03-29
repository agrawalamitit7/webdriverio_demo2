import appData from "../util/appData.js";


describe("baseUrl bases on env",()=>{

    it("test diff urls based on env",async()=>{
   // browser.newSession(capabilities);
   await browser.url("/");
   // await browser.url('/demo');//this is for when we need to append path after baseUrl
    browser.maximizeWindow()
    await browser.pause(3000)
    //console.log("Get Credential - " + new appData().getCredential());
    console.log("Username - " + new appData().getUsername());
    console.log("Password - " + new appData().getPassword());
    console.log("Get URL - " + new appData().getUrl());

    await(await $("#user-name")).setValue(new appData().getUsername());
    await(await $("#password")).setValue(new appData().getPassword());
    await (await $("#login-button")).click();

    await browser.pause(3000);

    })
})