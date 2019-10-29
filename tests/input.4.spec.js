const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

const testHelper = require('./testHelper')

describe('headless-example', function() {
  this.timeout(30000)
  let driver
  let vars
  before(async function() {
      driver = await testHelper.before()
  })
  after(async function() {
    await driver.quit();
  })
  beforeEach(async function() {
  })
  afterEach(async function() {
  })

  it('input events', async function(){
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Key Presses")).click()
    await driver.findElement(By.id("target")).click()
    await driver.findElement(By.id("target")).sendKeys("abcxyz123789")
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Horizontal Slider")).click()
    let element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).press().release().perform()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).perform()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).release().perform()
    await driver.findElement(By.css("input")).sendKeys("3")
    await driver.findElement(By.css("input")).click()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).press().release().perform()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).perform()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).release().perform()
    await driver.findElement(By.css("input")).sendKeys("4.5")
    await driver.findElement(By.css("input")).click()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).press().release().perform()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).perform()
    element = await driver.findElement(By.css("input"))
    await driver.actions({ bridge: true }).move({origin: element}).release().perform()
    await driver.findElement(By.css("input")).sendKeys("1.5")
    await driver.findElement(By.css("input")).click()
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Form Authentication")).click()
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("bad")
    await driver.findElement(By.id("password")).sendKeys("bad")
    await driver.findElement(By.css(".fa")).click()
    await driver.findElement(By.id("username")).click()
    await driver.findElement(By.id("username")).sendKeys("tomsmith")
    await driver.findElement(By.id("password")).sendKeys("SuperSecretPassword!")
    await driver.findElement(By.css(".fa")).click()
  })

})
