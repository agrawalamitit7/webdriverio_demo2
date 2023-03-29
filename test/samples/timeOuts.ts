describe("WaitFor" ,()=>{

    it("should detect when element is visible on DOM",async()=>{
     browser.url("https://qavbox.github.io/demo/delay/");
     await browser.pause(2000)
     await (await $("input[name='commit1']")).click();
     await (await $("#delay")).waitForExist({timeout:6000})
     expect(await(await $("#delay")).getText()).toContain("I appeared after 5 sec");
    })

        it("verify waitfor not displayed", async () => {
          browser.url("https://qavbox.github.io/demo/delay/");
          await browser.pause(2000);
          await(await $("#loaderStart")).click();
          await (await $("#loader b")).waitForDisplayed({ timeout: 7000,reverse:true });//loader should be dissappeared within 7 second
          expect(await(await $("#loaderdelay")).getText()).toContain(
            "I appeared after 5 sec loading"
          );
        });
})