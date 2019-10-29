const { Builder, By, Key, until } = require('selenium-webdriver')

async function before(){

    let capabilities = {
        "record_video": true, 
        // "platform": "windows", 
        "platform": "headless", 
        "name": "headless webinar" }

    let email = "johnreese.vt%40gmail.com"
    let auth = "u0af4e32dc4fb29d"

    driver = await new Builder()
      .usingServer(`https://${email}:${auth}@hub-cloud.crossbrowsertesting.com/wd/hub`)
      // .usingServer(`https://${email}:${auth}@hub-cloud.crossbrowsertesting.com/wd/hub`)
      .withCapabilities(capabilities)
      .forBrowser('chrome')
      .build()

    vars = {}
    return driver
}

module.exports = {before}
