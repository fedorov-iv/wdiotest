const { Given } = require('cucumber');
const { Then } = require('cucumber');
const  assert  = require("assert");


Given(
    "I get the main page", function(){
        browser.url("/");
    });

Then(
    "Page contains title {string}", function (expected){
        let title = browser.getTitle();
        assert.strictEqual(title, expected);

    });