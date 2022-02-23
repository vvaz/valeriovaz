#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: pkgJSON.name,
  tagLine: `WordPress Frontend developer`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});


console.log(`
Valerio Vaz

Is a WordPress frontend developer. Works as a Maintenance Team Lead at Valet.io and teaches open-source stuff at courses.valeriovaz.dev

Twitter: https://twitter.com/vvaz
Github:  https://github.com/vvaz
Blog:    https://valeriovaz.dev
Email:   mail@valeriovaz.dev

`);