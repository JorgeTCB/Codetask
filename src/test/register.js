import mainData from "../components/mainData";
import {customAlphabet} from 'nanoid';
import homePage from "../pages/homePage";
import signupPage from "../pages/signupPage";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

fixture('Register Tests')
    .page(mainData.url);

test('Register User', async t => {
    await t
        .click(homePage.signUp)
        .typeText(signupPage.userName, nanoid(8))
        .typeText(signupPage.passWord, nanoid(16))
        .setNativeDialogHandler(() => true)
        .click(signupPage.createButton)
});