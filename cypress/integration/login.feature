Feature: Login


    Background: 
        Given I'm on the login screen
    
    Scenario: login successfully
        When I provide valid credentials
        Then I'm logged into the system

    Scenario: login unsuccessfully
        When I provide invalid credentials
        Then I see error message in the screen

    Scenario: empty login
        When I don't provide credentials
        Then I see error message in the screen

    Scenario: non-existing user
        When I provide non-existing credentials
        Then I see error message in the screen



