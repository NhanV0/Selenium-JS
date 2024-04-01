const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function example() {
  //launch the browser
  let driver = await new Builder().forBrowser("firefox").build();
  //navigate to out application
  await driver.get("http://lambdatest.github.io/sample-todo-app/");
  //add a todo
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("Learn Selenium", Key.RETURN);
  // assert
  let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (value) {
      return value;
    });

  //assert using node assertion
  assert.strictEqual(todoText, "Learn JS");

  //close the browser
  await driver.quit();
}

example();
