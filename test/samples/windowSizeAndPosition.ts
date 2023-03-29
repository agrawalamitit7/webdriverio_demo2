describe("WindowSizeAndPosition", () => {
  it("WindowSizeAndPosition", async () => {
    await browser.url("https://qavbox.github.io/demo/signup/");
    //browser.maximizeWindow();
    console.log(await browser.getWindowRect());

    let position = await browser.getWindowRect(); //getWindowRect is webdriverio protocol
    console.log("X - " + position.x);
    console.log("Y - " + position.y);
    await browser.pause(5000);
    browser.setWindowRect(50, 50, 900, 600); //setWindowRect is webdriverio protocol
    await browser.pause(5000);
    browser.setWindowSize(1100, 600); //setWindowSize is browser method
    await browser.pause(5000);
  });
})