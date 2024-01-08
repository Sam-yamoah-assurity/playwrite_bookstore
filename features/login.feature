Feature: User Authentication tests

Background:
    Given User navigates to the application
    And User clicks on the login link

Scenario: Successful Login
    Given the user enters the username as "samtest"
    And the user enters the password as "Samtest123"
    When the user clicks on the login button
    Then the login should be successful

Scenario: Unsuccessful Login
    Given the user enters the username as "samtest"
    And the user enters the password as "Samtest"
    When the user clicks on the login button
    But the login should be unsuccessful 

