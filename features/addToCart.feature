Feature: Product tests

  Background: 
    Given User navigates to the application
    And User clicks on the login link

  Scenario Outline: 
    Given the user enters the username as "<username>"
    And the user enters the password as "<password>"
    And the user clicks on the login button
    And the user searches for a "<book>"
    When the user adds the book to the cart
    Then the cart badge should get updated

    Examples: 
      | username | password   | book            |
      | samtest  | Samtest123 | Roomies         |
      | samtest  | Samtest123 | The Simple Wild |
