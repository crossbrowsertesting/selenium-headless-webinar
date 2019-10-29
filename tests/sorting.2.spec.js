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


  it('sortable data tables', async function(){
    await driver.get("http://the-internet.herokuapp.com/")
    await driver.findElement(By.linkText("Sortable Data Tables")).click()
    await driver.findElement(By.css("#table1 .header:nth-child(1) > span")).click()
    await driver.findElement(By.css(".headerSortDown > span")).click()
    await driver.findElement(By.css("#table1 .header:nth-child(2) > span")).click()
    await driver.findElement(By.css(".headerSortDown > span")).click()
    await driver.findElement(By.css("#table1 .header:nth-child(3) > span")).click()
    await driver.findElement(By.css(".headerSortDown > span")).click()
    // {
    //   const element = await driver.findElement(By.css(".headerSortDown > span"))
    //   await driver.actions({ bridge: true}).doubleClick(element).perform()
    // }
    // await driver.findElement(By.css("#table1 .header:nth-child(4) > span")).click()
    // await driver.findElement(By.css(".headerSortDown > span")).click()
    // {
    //   const element = await driver.findElement(By.css(".headerSortDown > span"))
    //   await driver.actions({ bridge: true}).doubleClick(element).perform()
    // }
    // await driver.findElement(By.css("#table1 .header:nth-child(5) > span")).click()
    // await driver.findElement(By.css(".headerSortDown > span")).click()
    // {
    //   const element = await driver.findElement(By.css(".headerSortDown > span"))
    //   await driver.actions({ bridge: true}).doubleClick(element).perform()
    // }
    await driver.findElement(By.linkText("delete")).click()
    await driver.findElement(By.css("#table1 tr:nth-child(2) a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(1) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(2) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(3) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(4) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("#table1 tr:nth-child(2) a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(1) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(2) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(3) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(4) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("#table1 tr:nth-child(2) a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(1) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(2) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(3) > .action > a:nth-child(1)")).click()
    await driver.findElement(By.css("tr:nth-child(4) > .action > a:nth-child(1)")).click()
  })

})
