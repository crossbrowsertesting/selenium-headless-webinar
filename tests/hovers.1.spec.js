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

  it('hovers', async function() {
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Hovers")).click()
    let element = await driver.findElement(By.css(".figure:nth-child(3) > img"))
    await driver.actions({ bridge: true }).move({origin: element}).perform()
    element = await driver.findElement(By.css(".figure:nth-child(4) > img"))
    await driver.actions({ bridge: true }).move({origin: element}).perform()
    element = await driver.findElement(By.css(".figure:nth-child(5) > img"))
    await driver.actions({ bridge: true }).move({origin: element}).perform()
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Shifting Content")).click()
    await driver.findElement(By.linkText("Example 1: Menu Element")).click()
    await driver.findElement(By.linkText("Home")).click()
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Inputs")).click()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("99999")
    await driver.findElement(By.css("input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("input")).clear()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("99999")
    await driver.findElement(By.css("input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("input")).clear()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("99999")
    await driver.findElement(By.css("input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("input")).clear()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("99999")
    await driver.findElement(By.css("input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("input")).clear()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("99999")
    await driver.findElement(By.css("input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("input")).clear()
    await driver.findElement(By.css("input")).click()
    await driver.findElement(By.css("input")).sendKeys("99999")
    await driver.findElement(By.css("input")).sendKeys(Key.ENTER)
    await driver.findElement(By.css("input")).clear()

  })

})
