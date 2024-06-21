/**
 * @file Test suite for getPaymentTokenFromAPI method using Chai for assertions.
 */

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/**
 * Main test suite for getPaymentTokenFromAPI function.
 */
describe('getPaymentTokenFromAPI', function() {

  /**
   * Test suite for asynchronous behavior.
   */
  describe('#Async test', function() {

    /**
     * Test case to verify the response from the payment API.
     * @param {function} done - Callback to signal the completion of the test.
     */
    it('should test response from payment API', function(done) {
      getPaymentTokenFromAPI(true)
        .then((res) => {
          expect(res).to.be.an('object')
            .with.property('data', 'Successful response from the API');
          done();
        })
        .catch(done); // Add catch to handle any unexpected errors
    });
  });
});
