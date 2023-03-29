describe("WaitUntil" ,()=>{

    it("Verify waitUntil a text appear",async()=>{
     browser.url("https://qavbox.github.io/demo/delay/");
     await browser.pause(2000)
     await (await $("input[name='commit1']")).click();
     let el = await $("#delay");

     await el.waitUntil(
       async function () {
         return (await this.getText()) != "";
       },
       {
         timeout: 3000,
         timeoutMsg: "text didnt appear for delay element",
       }
     );


     console.log("Message - "+ await el.getText());
     expect(await el.getText()).toContain("I appeared after 5 sec");
    })

        xit("Verify waitUntil no. of element appear", async () => {
          browser.url("https://qavbox.github.io/demo/");
          await browser.pause(2000);
          await $("=SignUp Form").click();
          
          await browser.waitUntil(
            async function () {
              return (await $$("input[type='text']")).length>3  },
            {
              timeout: 6000,
              timeoutMsg: "text didnt appear on screen",
            }
          );

         
          expect(await $$("input[type='text']").length).toBeGreaterThan(3);
        });
})