import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
//import JasmineExpect from "@wdio/jasmine-framework";
import allureReporter from "@wdio/allure-reporter";


describe('My Login application', () => {

    it('should login with valid credentials', async () => {

        allureReporter.addStep("Open the Application")
        allureReporter.addFeature("Valid Login")
        allureReporter.addSeverity("critical")
        allureReporter.addDescription("<b>Login into App. with valid credential</b>","html")
        allureReporter.addArgument("platform","Window")
        await LoginPage.open();
        await browser.pause(3000)
       console.log("Page url --- " + await LoginPage.getUrl())

        allureReporter.addStep("Login into the Application");
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        console.log("Page url --- " + (await SecurePage.getUrl()));
        await browser.pause(2000)
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
          //expect(SecurePage.flashAlert).toContain('You logged into a secure area!')
             await browser.pause(2000);
             
    });

        it("should login with valid invalid username", async () => {
            allureReporter.addFeature("Invalid Login");
            allureReporter.addSeverity("minor");
          await LoginPage.open();
          await browser.pause(2000);
          console.log("Page url --- " + (await LoginPage.getUrl()));

          await LoginPage.login("tom", "SuperSecretPassword!");
          console.log("Page url --- " + (await SecurePage.getUrl()));
          await browser.pause(2000);
          await expect(SecurePage.flashAlert).toBeExisting();
          await expect(SecurePage.flashAlert).toHaveTextContaining(
            "You logged into a secure area!"
          );
          //expect(SecurePage.flashAlert).toContain('You logged into a secure area!')
          await browser.pause(2000);
        });

            it("should login with invalid password", async () => {
                    allureReporter.addFeature("Invalid Login");
                    allureReporter.addSeverity("minor");
              await LoginPage.open();
              await browser.pause(2000);
              console.log("Page url --- " + (await LoginPage.getUrl()));

              await LoginPage.login("tomsmith", "SuperSecret");
              console.log("Page url --- " + (await SecurePage.getUrl()));
              await browser.pause(2000);
              await expect(SecurePage.flashAlert).toBeExisting();
              await expect(SecurePage.flashAlert).toHaveTextContaining(
                "Your password is invalid!"
              );
              //expect(SecurePage.flashAlert).toContain('You logged into a secure area!')
              await browser.pause(2000);
            });
});


