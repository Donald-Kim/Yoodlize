//yoodalize objects
var yoodCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },

    createUser: function (field) {

        this
            .clickText('Sign up')
            .waitForElementPresent('.modal-title', 5000)
            .clickText('Sign up with Email')
            .waitForElementPresent('.control-label', 5000)

            // fill user info
            .setValue('@firstName', 'Tim')
            .setValue('@lastName', 'Granger')
            .setValue('@email', 'woof@cat.com')
            .setValue('@password', '12345678')
            .setValue('@month', '8')
            .setValue('@day', '31')
            .setValue('@year', '1952')

            // submit info and verify account created
            .click('@login')
            .waitForElementPresent('@userMenus', 5000)


        return this
    },
    userLogin: function (userLogin) {
        //The set up
        this
            .clickText('Log in')
            .waitForElementPresent('h4.modal-title', 5000)
            .waitForElementVisible('body', 1000)

            //The action
            .setValue('@email', 'woof@cat.com')
            .setValue('@password', '12345678')
            .click('@login')

            //The Verification
            .waitForElementPresent('@userMenus')

        return this
    },
    userLogout: function (userLogout) {
        // The set up
        this
            .waitForElementPresent('@userMenus')
            .click('@userMenus')
            .waitForElementPresent('@dropDown')

        //The action
        this.api.useXpath()
        this.click('@logout')
        this.api.useCss()

        //The varification
        this.waitForElementNotPresent('@userMenus')
        return this
    },

}
//Page Objects
module.exports = {
    url: "https://alpha.yoodlize.com/",
    commands: [yoodCommands],
    elements: {

        homepage: '[class="Header-brand-2oS_y Header-brandImg-1BgQy navbar-brand"]',
        login: 'button[type="submit"]',
        dropDown: '.dropdown-menu',
        password: 'input[name="password"]',
        email: 'input[name="email"]',
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        gender: 'select[name="gender"]',
        month: 'select[name="month"]',
        day: 'select[name="day"]',
        year: 'select[name="year"]',
        location: 'input[name="location"]',
        describe: '[name=info]',
        file: 'input[type="file"]',
        userMenus: '#basic-nav-dropdown',
        Search: '.form-control',
        address1: 'input[name="address1"]',
        city: 'input[name="city"]',
        state: 'input[name="state"]',
        zip: 'input[name="zipcode"]',
        defaultPayout: 'span[class="label label-success"]',
        paypal: 'input[value="1"]',
        

        logout: {
            selector: '(//button[@class="btn btn-link"])[2]',
            locateStrategy: 'xpath'
        },
        photoTrash: {
            selector: '(//i)[4]',
            locateStrategy: 'xpath'
        },
        addDocument: {
            selector: '(//button)[7]',
            locateStrategy: 'xpath'
        },
        next: {
            selector: '(//button[@type="submit"])[3]',
            locateStrategy: 'xpath'
        },
        back: {
            selector: '(//button[@type="submit"])[3]',
            locateStrategy: 'xpath'
        },

        payout: {
            selector: '(//a[@class="AccountSettingsSideMenu-sideNavitem-hFcOX"])[1]',
            locateStrategy: 'xpath'
        },

        trustMenu: {
            selector: '(//div[@class="sc-jqCOkK hRBjNq sc-gqjmRU kYEOFd"])[3]',
            locateStrategy: 'xpath'
        },
        photoMenu: {
            selector: '(//div[@class="sc-jqCOkK hRBjNq sc-gqjmRU kYEOFd"])[2]',
            locateStrategy: 'xpath'
        },
     
        //xpath selectors for catergories
        kitchen: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[7]',
            locateStrategy: 'xpath'
        },
        lawn: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[9]',
            locateStrategy: 'xpath'
        },
        experts: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[13]',
            locateStrategy: 'xpath'
        },
        experiences: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[14]',
            locateStrategy: 'xpath'
        },
        vehicles: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[5]',
            locateStrategy: 'xpath'
        },
        venues: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[12]',
            locateStrategy: 'xpath'
        },
        tools: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[1]',
            locateStrategy: 'xpath'
        },
        outgear: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[2]',
            locateStrategy: 'xpath'
        },
        electronics: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[3]',
            locateStrategy: 'xpath'
        },
        party: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[4]',
            locateStrategy: 'xpath'
        },
        clothing: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[6]',
            locateStrategy: 'xpath'
        },
        toys: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[8]',
            locateStrategy: 'xpath'
        },
        sports: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[10]',
            locateStrategy: 'xpath'
        },
        business: {
            selector: '(//div[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[11]',
            locateStrategy: 'xpath'
        },
        
        
    }
}
