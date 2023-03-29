

describe("Text vs value",()=>{


  xit("Verify Textbox",async()=>{
    browser.url("https://qavbox.github.io/demo/");
    browser.pause(2000);

    await $("*=SignUp").click();//any element that contains text SignUp
    browser.pause(2000);

    await $("#username").setValue("amit")

   console.log("getValue of username entered - " + await $("#username").getValue()); 
   //getAttribute("value") // we can use to get value
    expect(await $("#username").getValue()).toEqual("amit");
   
    await $("#username").clearValue()
    expect(await $("#username").getValue()).toEqual("");

    })

    xit("Verify Radio button", async () => {
      browser.url("https://qavbox.github.io/demo/");
      browser.pause(2000);

      await $("*=SignUp").click(); //any element that contains text SignUp
      browser.pause(2000);
      
      let exps= await $$("input[name='experience']")
      expect(exps.length).toEqual(8)
      exps.filter(async el=>{
        if(await el.getValue()==="three"){
           await el.click()
           expect(await el.isSelected()).toBe(true)
           
        }
      })
               await browser.pause(2000);

              await $("input[name='experience'][value='four']").click();
              expect(await $("input[name='experience'][value='four']").isSelected()).toBe(true);
              
              await browser.pause(2000);
    });

    it("Verify Checbox", async () => {
      browser.url("https://qavbox.github.io/demo/");
      browser.pause(2000);

      await $("*=SignUp").click(); //any element that contains text SignUp
      browser.pause(2000);
      let exps = await $$("input[name='language']");
      expect(exps.length).toEqual(7);
      exps.filter(async (el) => {
        if ((await el.getValue()).includes("testing")) {
          await el.click();
          expect(await el.isSelected()).toBe(true);
        }
      });
      await browser.pause(2000);

      await $("input[name='language'][value='testng']").click();
      expect(
        await $("input[name='language'][value='testng']").isSelected()
      ).toBe(true);

      await browser.pause(2000);
    });

})