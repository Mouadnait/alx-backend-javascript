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
   * Test suite for the root path.
   */
  describe('/', function() {
    
    /**
     * Test case to verify the home page response.
     * @param {function} done - Callback to signal the completion of the test.
     */
    it('should return home page', function(done) {
      request.get(`http://${HOST}:${PORT}/`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  /**
   * Test suite for the /cart/:id path.
   */
  describe('/cart/:id', function() {
    
    /**
     * Test case to verify the cart page response with a valid cart ID.
     * @param {function} done - Callback to signal the completion of the test.
     */
    it('should return cart page with cart id', function(done) {
      request.get(`http://${HOST}:${PORT}/cart/14`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 14');
        done();
      });
    });

    /**
     * Test case to verify the response when the cart ID is not a number.
     * @param {function} done - Callback to signal the completion of the test.
     */
    it('should return an error if :id parameter is not a number', function(done) {
      request.get(`http://${HOST}:${PORT}/cart/ae`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  /**
   * Test suite for the /available_payments path.
   */
  describe('/available_payments', function() {
    
    /**
     * Test case to verify the available payment methods response.
     * @param {function} done - Callback to signal the completion of the test.
     */
    it('should get the available payment methods', function(done) {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      request.get(`http://${HOST}:${PORT}/available_payments`, (error, res, body) => {
        if (error) expect(res.statusCode).to.not.equal(200);
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal(JSON.stringify(expectedResponse));
        done();
      });
    });
  });

  /**
   * Test suite for the /login path.
   */
  describe('/login', function() {
    
    /**
     * Test case to verify the login response.
     * @param {function} done - Callback to signal the completion of the test.
     */
    it('should return a welcome message for the user', function(done) {
      const userName = 'Tester';
      request.post({ url: `http://${HOST}:${PORT}/login`, form: { userName } },
        (error, res, body) => {
          if (error) expect(res.statusCode).to.not.equal(200);
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal(`Welcome ${userName}`);
          done();
        });
    });
  });
});
