describe("getText and getValue",()=>{


  it("Verify getText and getValue",async()=>{
    browser.url("https://qavbox.github.io/demo/");
    browser.pause(2000);

    await $("*=SignUp").click(); //any element that contains text SignUp
    browser.pause(2000);

    await $("#username").setValue("amit");

    console.log(
      "getValue of username entered - " + (await $("#username").getValue())
    );


    console.log(
      "getText of username entered - " + (await $("#username").getText())
    );//it will not print anything

        console.log(
          "getText of Fullname label - " + (await $("#lblname").getText())
        );
    
  })
})