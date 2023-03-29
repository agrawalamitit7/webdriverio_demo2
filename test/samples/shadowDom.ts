describe("ShadowDOM",()=>{
    xit('verify shadowDom elements...',async()=>{

        browser.url("https://qavbox.github.io/demo/shadowDOM/");
        await browser.pause(2000)
        const shadowInput=await (await $("my-open-component")).shadow$("input")

        await shadowInput.setValue("amit");
    })

        it("verify nested shadowDom elements...", async () => {
          browser.url("https://shop.polymer-project.org/");
          await browser.pause(2000);
          const nestedShadowText = await(await $("[page='home']")).shadow$(
            ".iron-selected"
          ).shadow$("h2").getText();
         console.log("Nested shadow text - " +nestedShadowText)
          
        });
})