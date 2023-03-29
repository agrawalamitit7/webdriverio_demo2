import WebTableUtil from "../util/webTableUtil.js"

describe("WebTable", () => {
  it("WebTable", async () => {

    await browser.url("https://qavbox.github.io/demo/webtable/");
    browser.pause(2000)

    // console.log("Total rows in 1st table - " +await $$("#table01 tbody tr").length); 
    // console.log(
    //   "Total no. of column in 1st rows in 1st table - " +
    //     (await $$("#table01 tbody tr:nth-child(2) td").length)); 

    let table=new WebTableUtil("#table01")
    await browser.pause(3000)

    expect(await table.getRowsCount()).toBe(3)
    console.log("Total row" +await table.getAllRows());

    expect(await table.getColumnCount(1)).toBe(5);

    await table.deleteRowHavingText("Selenium")
    await browser.pause(5000);
    await table.clickOnCell(1,1)
    await browser.pause(5000);

  })
})