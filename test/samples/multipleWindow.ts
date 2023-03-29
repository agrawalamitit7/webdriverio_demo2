describe("Multiple windows or popups" ,()=>{

    it("verify multiple windows...",async()=>{
     browser.url("https://qavbox.github.io/demo/links/");
     await browser.pause(2000)
     let parentWindow=await browser.getWindowHandle()
     await (await $("input[name='multiple']")).click();
    
     await browser.pause(5000);

    //  await browser.switchWindow("QAVBOX Demo");
    //  expect(await $$("a").length).toBe(13);

    let windows = await browser.getWindowHandles()
    for(let window of windows){
      if(parentWindow!=window){
              await browser.switchToWindow(window);
              if (await(await browser.getTitle()).includes("QAVBOX")) {
                expect(await $$("a").length).toBe(13);
              }
      }
  
    }
    await browser.switchToWindow(parentWindow);
     
    })
})