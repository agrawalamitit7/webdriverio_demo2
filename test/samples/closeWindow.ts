describe("Close windows" ,()=>{

    it("verify close windows...",async()=>{
     browser.url("https://qavbox.github.io/demo/links/");
     await browser.pause(2000)
     let parentWindow=await browser.getWindowHandle()
     await(await $("input[name='multiple']")).click();

     let windows = await browser.getWindowHandles();
     for (let window of windows) {
       if (parentWindow != window) {
         await browser.switchToWindow(window);
         console.log(await browser.getTitle())
         await browser.closeWindow()
       }
     }
       await browser.switchToWindow(parentWindow);
       console.log(await browser.getTitle());
    })
})