describe("Browser.execute" ,()=>{

it("verify browser.execute method",async()=>{
     browser.url("https://qavbox.github.io/demo/signup/");
     browser.maximizeWindow()
     await browser.pause(2000)

     let url=await browser.execute(()=>{
        return document.URL
     })
     let pageStatus = await browser.execute(() => {
       return document.readyState;
     });
     console.log(url);
     console.log(pageStatus);

     await browser.pause(3000);

     await browser.execute(()=>{
        const style="border:2px solid red;background-color:yellow"
        var el=document.getElementById("username");
        el.setAttribute("style",style)
     })
      await browser.pause(3000);
    })
   

    
})