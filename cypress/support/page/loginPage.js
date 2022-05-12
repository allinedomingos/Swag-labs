class loginPage{
 

    standardUser(){
        cy.fixture('users').then((data) => {
            cy.get('[data-test="username"]').type(data.standard.user);
            cy.get('[data-test="password"]').type(data.standard.password);          
        })   
    }

    submitLogin(){
            cy.get('[data-test="login-button"]').click();
    }

    validHome(){
            cy.get('.title').should('be.visible').contains('Products');
            cy.screenshot();

    }

    lockedUser(){
        cy.fixture('users').then((data) => {
            cy.get('[data-test="username"]').type(data.locked.user);
            cy.get('[data-test="password"]').type(data.locked.password);          
        })   
        
    }

    nonUser(){
        cy.fixture('users').then((data) => {
            cy.get('[data-test="username"]').type(data.non.user);
            cy.get('[data-test="password"]').type(data.non.password);          
        })  

    }

    errorMessage(){
        cy.get('[data-test="error"]').should('be.visible').invoke('text').then((errText => {
            expect(errText).to.be.oneOf([
                'Epic sadface: Sorry, this user has been locked out.',
                'Epic sadface: Username is required',
                'Epic sadface: Username and password do not match any user in this service',
                'Epic sadface: Password is required',
                'Epic sadface: Username is required'
    
            ]);
        }));

        cy.screenshot();
    }



} export default new loginPage;