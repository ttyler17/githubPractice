module.exports = {
    beforeEach: browser => {
        browser
            .url('https://www.google.com/')
            .waitForElementVisible('body')

    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
            .setValue('input[title="Search"]', ['Utah Jazz', browser.Keys.Enter])
            .verify.containsText('#res', 'Utah Jazz')
            .pause(30000)

    }
}