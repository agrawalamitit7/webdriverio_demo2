import locators from "./locators.js"

describe("Selectors",()=>{


//   it("Containing Text",async()=>{
//     browser.url("https://qavbox.github.io/demo/");
//     browser.pause(2000);

//     //await $("=SignUp Form").click();// "=SignUp Form" means any element that has text SignUp Form
//     await $("*=SignUp").click();//any element that contains text SignUp
//     browser.pause(2000);

//     //In above case it will search for any tag which is having or containing text.But in below case it will explicitly search for label tag which is having or containing text

//     console.log(await (await $('label=Full Name')).getAttribute("id"));
//     console.log(await(await $("label*=Full")).getAttribute("id"));
//     await browser.pause(2000);

//     await $("h3").getText(); //using tag name
//      await $("<h3>").getText(); //using tag name

//      await $('#username') //using id 
//      await $('.EnterText') //using className
//      console.log(await $$('[role=link]').length) //it will give result 6 as link tage also consider in it along with role as link
//      console.log(await $$('<a>').length)//it will give 4 as it will consider only a tag
//     })

  
// it("CSS selector and Xpath", async () => {
//     browser.url("https://qavbox.github.io/demo/");
//     //browser.pause(2000);
//     await $("=WebTable").click();
//     browser.pause(2000);
//     console.log(
//       "GetText of element from CSS Selector: ",
//       await $(
//         "table[id='table01'] tbody tr:nth-child(1) td:nth-child(2)"
//       ).getText()
//     ); //Css selector
//     await browser.pause(2000);
//     console.log(
//       "GetText of element from Xpath: ",
//       await (await $("//table[@id='table01']//tbody//tr[1]/td[2]")).getText()
//     ); //Xpath
//   });

    // it("CSS selector with locator utility 1", async () => {
    //   browser.url("https://qavbox.github.io/demo/");
    //   //browser.pause(2000);
      
    //   await $("=WebTable").click();
    //   browser.pause(2000);
    //   await (await locators.getTableData(1,2)).getText(); //Css selector
    //   browser.pause(2000);
    //   });

          it("CSS selector with locator utility 2", async () => {
            browser.url("https://qavbox.github.io/demo/");
            //browser.pause(2000);

           await $("*=SignUp").click();
            browser.pause(2000);
           await (await locators.getTextBoxIndex(2)).setValue("amit");
            await browser.pause(2000);
          });

})
