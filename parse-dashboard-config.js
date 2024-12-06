const serverURL = process.env.SERVER_URL || "http://localhost:1337/parse";

module.exports = {
  apps: [
    {
      serverURL: serverURL,
      appId: "nijiaappid",
      masterKey: "nijiakey",
      readOnlyMasterKey: "readkey",
      appName: "nijiapp"
    },
  ],
  users: [
    {
      user: "admin",
      pass: "admin"
    },
    {
      user: "user1",
      pass: "user1pass"
    }
  ]
};