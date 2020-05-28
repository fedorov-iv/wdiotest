Feature: Main Page
  @basetest
  Scenario: Open Main Page
    Given I get the main page
    Then Page contains title "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
