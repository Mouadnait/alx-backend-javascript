/**
 * @file Test suite for Express app using Chai for assertions and request for HTTP requests.
 */

const { expect } = require('chai');
const request = require('request');

const HOST = '127.0.0.1';
const PORT = '7865';

/**
 * Main test suite for the Express app.
 */
describe('Express app test suite', function() {
  
  /**
   * Test case to verify the home page response.
   * @param {function} done - Callback to signal the completion of the test.
   */
  it('should return home page', function(done) {
    request.get(`http://${HOST}:${PORT}/`, (error, res, body) => {
      if (error) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
      }
      done();
    });
  });
});
