export class MultiSelect {
  async getSelectedOptions(options) {
    let selectedText = [];
    for (let option of options) {
      if (await option.isSelected()) {
        selectedText.push(await option.getText());
        //break;
      }
    }
    return selectedText;
  }

  async getSelectedValues(options) {
    let selectedValue = [];
    for (let option of options) {
      if (await option.isSelected()) {
        selectedValue.push(await option.getValue());
        //break;
      }
    }
    return selectedValue;
  }
}

describe("Multiple Dropdown Options", () => {
  it("Test Multiple dropdown", async () => {
    // browser.newSession(capabilities);
    await browser.url("https://qavbox.github.io/demo/signup/");
    browser.maximizeWindow();
    let selectMultipleDropDown = await $("//select[@id='tools']");
    let options = await selectMultipleDropDown.$$("option");

    console.log("Items count - " + (await options.length));
    expect(options.length).toBe(10);

    await browser.pause(2000);

    await selectMultipleDropDown.selectByIndex(0);
    await browser.pause(2000);
    expect(await (await $("option[value='selenium']")).isSelected()).toBe(true);
    await selectMultipleDropDown.selectByVisibleText("Docker");
    await browser.pause(5000);
    expect(await (await $("option[value='docker']")).isSelected()).toBe(true);
    await selectMultipleDropDown.selectByAttribute("value", "codedui");
    await browser.pause(5000);

    expect(await new MultiSelect().getSelectedOptions(options)).toContain("Selenium")
    console.log(await new MultiSelect().getSelectedOptions(options))
  });
});
