import mainData from "../components/mainData";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";

fixture("Login Tests")
    .page(mainData.url);

test("Succesfull Login - Valid Credentials", async t => {
    await t
        .click(homePage.loginButton)
        .typeText(loginPage.userName, mainData.validUser)
        .typeText(loginPage.passWord, mainData.validPwd)
        .click(loginPage.loginButton)
        .expect(homePage.logoutButton.exists).ok()
});

test("Unsuccesfull Login - Invalid Credentials", async t => {
    await t
        .click(homePage.loginButton)
        .typeText(loginPage.userName, mainData.invalidUser)
        .typeText(loginPage.passWord, mainData.invalidUser)
        .setNativeDialogHandler(() => true)
        .click(loginPage.loginButton)
});

test("Login Pop Up - Close Button", async t => {
    await t
        .click(homePage.loginButton)
        .click(loginPage.closeButton)
});

