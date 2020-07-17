$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to Launch the application",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LaunchApp"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Launch the Application",
  "description": "",
  "id": "title-of-your-feature;launch-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to launch elearning url",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I want to enter username \"admin\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I want to enter password \"admin@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LaunchURL.i_want_to_launch_elearning_url()"
});
formatter.result({
  "duration": 9931675900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 26
    }
  ],
  "location": "LaunchURL.i_want_to_enter_username(String)"
});
formatter.result({
  "duration": 210503900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 26
    }
  ],
  "location": "LaunchURL.i_want_to_enter_password(String)"
});
formatter.result({
  "duration": 224766600,
  "status": "passed"
});
formatter.match({
  "location": "LaunchURL.i_click_on_login_button()"
});
formatter.result({
  "duration": 3440242200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Click on Administration tab",
  "description": "",
  "id": "title-of-your-feature;click-on-administration-tab",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@CreateUser"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I want to Add a user",
  "keyword": "Given "
});
formatter.match({
  "location": "LaunchURL.i_want_to_Add_a_user()"
});
formatter.result({
  "duration": 2809591000,
  "status": "passed"
});
});