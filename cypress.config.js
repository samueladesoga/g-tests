const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pr0000.gappdev.com/customer-management-software',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
