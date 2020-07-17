@LaunchApp
Feature: Title of your feature
  I want to Launch the application

  @Login
  Scenario: Launch the Application
    Given I want to launch elearning url
    Then I want to enter username "admin"
    And I want to enter password "admin@123"
    When I click on login button
    
 @CreateUser
 	Scenario: Add User on Administration tab
 	 Given I want to Add a user
 	 Then Enter credentials in Fname "manzoor" and Lname "mehadi"
 	 And Enter credentials in Email 'manzoor@gmail.com" and Phone "9876543210"
	 And Enter 
