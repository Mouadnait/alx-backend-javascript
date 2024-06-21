/**
 * @file Test suite for sendPaymentRequestToAPi method using Sinon for spies and Chai for assertions.
 */

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPi = require('./5-payment');

/**
 * Main test suite for sendPaymentRequestToAPi function.
 */
describe('sendPaymentRequestToApi', function() {

  /**
   * Test suite for logging the result of Utils.calculateNumber() called within sendPaymentRequestToApi.
   */
  describe('#pys Utils.calculateNumber()', function() {
    let spy;

    /**
     * Setup a spy on console.log before each test.
     * @function
     */
    beforeEach(function() {
      spy = sinon.spy(console, 'log');
    });

    /**
     * Restore the spy on console.log after each test.
     * @function
     */
    afterEach(function() {
      spy.restore();
    });

    /**
     * Test case to verify that sendPaymentRequestToAPI logs 'The total is: 120' when called with (100, 20).
     */
    it('should be return 120 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(100, 20);
      expect(spy.calledWith('The total is: 120')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });

    /**
     * Test case to verify that sendPaymentRequestToAPI logs 'The total is: 20' when called with (10, 10).
     */
    it('should be return 20 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(10, 10);
      expect(spy.calledWith('The total is: 20')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
