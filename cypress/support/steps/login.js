import loginPage from "../page/loginPage";

Given("I'm on the login screen", () => {
	cy.openBrowser();

});

When("I provide valid credentials", () => {
    loginPage.standardUser();
    loginPage.submitLogin();

});

Then("I'm logged into the system", () => {
    loginPage.validHome();
	
});

When("I provide invalid credentials", () => {
    loginPage.lockedUser();
    loginPage.submitLogin();

});

When("I don't provide credentials", () => {
    loginPage.submitLogin();

});

When("I provide non-existing credentials", () => {
	loginPage.nonUser();
    loginPage.submitLogin();

});

Then("I see error message in the screen", () => {
    loginPage.errorMessage();
});
