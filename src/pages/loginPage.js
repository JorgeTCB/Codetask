import { Selector } from 'testcafe';

class loginPage {
    constructor () {
        this.userName = Selector('#loginusername');
        this.passWord = Selector('#loginpassword');
        this.loginButton = Selector('button').withText('Log in');
        this.closeButton = Selector('button').withText('Close');
    }
}

export default new loginPage();