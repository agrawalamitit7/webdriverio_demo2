describe("Alert handling", () => {
  it("Alert handling", async () => {
    await browser.url("https://qavbox.github.io/demo/alerts/");
    await browser.pause(2000)

    await (await $("input[value='Submit']")).click();
    console.log(await browser.getAlertText())
    await browser.acceptAlert()
    await browser.pause(3000)
  

    // await (await $("input[value='SubmitDelay']")).click();
    // console.log(await browser.getAlertText())
    // await browser.acceptAlert()

    await (await $("input[value='PromptMe']")).click();
    console.log(await browser.getAlertText())
    await browser.sendAlertText("Amit")
    await browser.acceptAlert()
    expect(await (await $("p[id = 'Parademo']")).getText()).toContain("Amit");
    await browser.pause(3000);
    console.log(await(await $("p[id = 'Parademo']")).getText());
    await browser.pause(3000);

    await(await $("input[value='Confirm']")).click();
    console.log(await browser.getAlertText());
    await browser.dismissAlert();
    expect(await (await $("p[id = 'Parademo']")).getText()).toContain("Cancel");
    await browser.pause(3000);

});
});

