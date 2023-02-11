import { Selector } from 'testcafe';

class homePage {
    constructor () {
        this.loginButton = Selector('#login2');
        this.logoutButton = Selector('#logout2');
        this.signUp = Selector('#signin2');
        
    }
}

export default new homePage();