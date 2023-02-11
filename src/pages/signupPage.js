import { Selector } from 'testcafe';

class signupPage {
    constructor () {
        this.userName = Selector('#sign-username');
        this.passWord = Selector('#sign-password');
        this.createButton = Selector('button').withText('Sign up');
        this.closeButton = Selector('button').withText('Close');
    }
}

export default new signupPage();