'use strict';

require('zone.js/dist/zone-node');
require('reflect-metadata');

const http = require('http');
const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');


function angularRouter(req, res) {
  console.log('My Log:'+req.headers.host);
  if (req.headers.host=='www.java-lovers.com' || req.headers.host=='13.232.20.112'
  || req.headers.host=='localhost') {
    res.render('index', {req, res});
  } else {
    res.send('Redirect to this site is illegal!')
  }
}

const app = express();

app.engine('html', ngUniversal.ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));
app.set('view engine', 'html');
app.set('views', 'dist');

app.get('/', angularRouter);

app.use(express.static(`${__dirname}/dist`));

app.get('*', angularRouter);

app.listen(80, () => {
  console.log('Listening on port 80');
});
