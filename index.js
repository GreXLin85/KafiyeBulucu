const argv = require("yargs").argv
const { Builder, By } = require('selenium-webdriver');

(async function () {
    let driver = await new Builder().forBrowser('firefox').build();

    try {
        await driver.get(`https://www.kafiyem.com/kelime.php?kelime=${argv.kelime}`)
        let elements = await driver.findElements(By.tagName('li'));
        try {
            var i = 0
            var hey = []
            for (let e of elements) {
                try {
                    if (await e.getText() != "") {
                        hey.push(await e.getText());
                        i++
                    }
                } catch (error) {
                    break
                }
            }
            for (let i = 0; i <= 8; i++) {
                hey.pop()
            }
        } finally {
            console.log(hey)
        }
    } finally {
        await driver.quit()
    }
})();

