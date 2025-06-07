const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o4zbon',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
