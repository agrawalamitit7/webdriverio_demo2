
export class Select{
    async getSelectedOption(options){
        let selectedText=""
        for(let option of options){
            if(await option.isSelected()){
                selectedText=await option.getText()
                break
            }
        }
        return selectedText;
    }
}



describe("Dropdown Or Select Options",()=>{

    it("Test dropdown",async()=>{
   // browser.newSession(capabilities);
    await browser.url("https://qavbox.github.io/demo/signup/");
    browser.maximizeWindow()
    await browser.scroll(0,200)
    await browser.pause(2000)
    let selectG = await $("select[name='sgender']");
    let options=await selectG.$$("option")

    console.log("Total dropdown option - " + options.length)
    expect(options.length).toBe(4);

    await selectG.selectByIndex(1)
  //  expect(await (await $("option[value='male']")).isSelected()).toBe(true)
     //or
     expect(await new Select().getSelectedOption(options)).toBe("Male");
    await browser.pause(3000)
    await selectG.selectByVisibleText("Female")
    expect(await(await $("option[value='female']")).isSelected()).toBe(true);
    await browser.pause(3000)
    await selectG.selectByAttribute("value","na")
    await browser.pause(3000);

    })
})