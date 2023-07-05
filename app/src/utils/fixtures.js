const { expect } = require('@playwright/test')

exports.LoginPage = class LoginPage {
    constructor(page){
        this.page = page;
        this.user = page.locator('[formcontrolname="username"]');
        this.pass = page.locator('[formcontrolname="password"]');
        this.loginButton = page.getByText('Iniciar sesión');
    }
    async submitLoginForm(user, pass){
        await this.user.fill(user);
        await this.pass.fill(pass);
        await this.loginButton.click();
    }
}