/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var registerRouter = express.Router();

  registerRouter.get('/', function(req, res) {
    res.send({
      'register': []
    });
  });

  registerRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  registerRouter.get('/:id', function(req, res) {
    res.send({
      'register': {
        id: req.params.id
      }
    });
  });

  registerRouter.put('/:id', function(req, res) {
    res.send({
      'register': {
        id: req.params.id
      }
    });
  });

  registerRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/register', require('body-parser').json());
  app.use('/api/register', registerRouter);
};
