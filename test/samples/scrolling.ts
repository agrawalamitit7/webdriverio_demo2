describe("Different type of scrolling" ,()=>{

    xit("verify scroll",async()=>{
     browser.url("https://qavbox.github.io/demo/signup/");
     browser.maximizeWindow()
     await browser.pause(5000)
     await (await $("=Tutorials!")).scrollIntoView();
     //await(await $("=Tutorials!")).scrollIntoView({behavior:"smooth"});
     await browser.pause(2000);
    })

        it("verify scroll",async()=>{
     browser.url("https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView");
     browser.maximizeWindow();
     await browser.pause(2000)
     await (await $('//h2[@id=\'examples\']')).scrollIntoView(false);
     
     await browser.pause(2000);
    })

    
})