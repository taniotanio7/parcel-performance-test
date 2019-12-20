module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/cypress/"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  snapshotSerializers: ["jest-emotion"]
};
