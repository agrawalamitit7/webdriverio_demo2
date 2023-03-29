describe("Loops or Filters FindElements",()=>{

    it("Fetch multiple elements by filters or loop",async()=>{
   // browser.newSession(capabilities);
    await browser.url("https://qavbox.github.io/demo/signup/");
    await browser.pause(2000)

    // console.log("Total textbox - " + await $$("input[type='text']").length)
    // await $$("input[type='text']").forEach(el=>{
    //     console.log(el.getAttribute("id"))
    // })
    //      await browser.pause(2000)
   
   
    let textboxItem= await $$("input[type='text']")
    let total=textboxItem.filter(el2=>{
        console.log(el2.getAttribute("id"));
    })

    //fecth specific element
     console.log(textboxItem[2].getAttribute("id"));

     //fetch value from tools dropdown

     let toolsDropdown = await $$("#tools option");
     console.log((toolsDropdown[1]).getText());

     await $$("a") //this will return all the link from current web page

    })
   
})