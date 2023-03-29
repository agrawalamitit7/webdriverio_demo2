describe("Different type of scrolling" ,()=>{

    it("verify scroll",async()=>{
     browser.url("https://qavbox.github.io/demo/webtable/");
     browser.maximizeWindow()
     await browser.pause(5000)
     await $("#table02").scrollIntoView();
     await browser.pause(3000);

     console.log(await(await $("td=Lael Greer")).isDisplayed());
     console.log(await(await $("td=Lael Greer")).isDisplayedInViewport());

     function scrollInside(selector,scrollAmount){
      browser.execute(
        (selector, scrollAmount) => {
          var el = document.querySelector(`${selector}`);
          el.scrollTop = el.scrollTop + parseInt(`${scrollAmount}`); //In scrollTop,scroll will go down and content will go up
        },
        selector,scrollAmount);

     }
    

     while (!await(await $("td=Lael Greer")).isDisplayedInViewport()) {
       // await browser.execute(() => {
       //    var el = document.querySelector("#table02");
       //    el.scrollTop = el.scrollTop + 120; //In scrollTop,scroll will go down and content will go up
       //  });

       scrollInside("#table02", 120);
     }
      console.log(await(await $("td=Lael Greer")).isDisplayedInViewport());

      await browser.pause(4000)

    })
})