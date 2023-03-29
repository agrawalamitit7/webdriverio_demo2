describe("Browsers windows or popups" ,()=>{

    it("verify Browser windows...",async()=>{
     browser.url("https://qavbox.github.io/demo/links/");
     await browser.pause(2000)
     console.log("Parent window Title -" +await browser.getTitle())
     let parentWindow=await browser.getWindowHandle()
     await browser.newWindow("https://qavalidation.com/");
     await browser.pause(5000);
     console.log("New window Title -" + await browser.getTitle());
    // await browser.switchToWindow(parentWindow)
    await browser.switchWindow("Browser") //matcher of title,url or window name
     await browser.pause(5000);
     console.log("Switching back to Parent window Title -" + (await browser.getTitle()));
     await browser.pause(5000);


    })
})