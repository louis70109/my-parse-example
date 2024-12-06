const fs = require('fs');
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const path = require('path');

const app = express();

const options = { 
  allowInsecureHTTP: false 
};

const config = require('./parse-dashboard-config.js');
const dashboard = new ParseDashboard(config, options);

const server = new ParseServer({
  databaseURI: process.env.DATABASE_URL || 'mongodb://localhost:27017/testdb', // 連接到你的 MongoDB 伺服器
  appId: process.env.APP_ID || 'nijiaappid',
  cloud: path.join(__dirname, '/cloud/main.js'), 
  masterKey: 'nijiakey', // 請確保這個值的安全性
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse', // 你的 Parse Server 網址
  readOnlyMasterKey: 'readkey',
  encodeParseObjectInCloudFunction: false,
  verbose: true,
  masterKeyIps: ['0.0.0.0/0','::/0'],
  allowOrigin: '*',
  
});


server.start();
app.use('/parse', server.app);
app.use('/dashboard', dashboard);

app.listen(1337, function () {
  console.log(`Parse Server running on ${process.env.SERVER_URL}`);
});
