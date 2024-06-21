/**
 * @file Test suite for the calculateNumber function using Chai for assertions.
 */

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

/**
 * Main test suite for calculateNumber function.
 */
describe('calculateNumber chai test suite', function() {

  /**
   * Test suite for SUM operation.
   */
  describe('#SUM operation', function() {
    /**
     * Test case to verify the sum of rounded arguments.
     */
    it('should return the sum of its rounded arguments', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
  });

  /**
   * Test suite for SUBTRACT operation.
   */
  describe('#SUBTRACT operation', function() {
    /**
     * Test case to verify the subtraction of rounded arguments.
     */
    it('should return the subtraction of its rounded arguments', function() {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
    });
  });

  /**
   * Test suite for DIVIDE operation.
   */
  describe('#DIVIDE operation', function() {
    /**
     * Test case to verify the quotient of rounded arguments or 'Error' for division by zero.
     */
    it('should return the quotient from the division its rounded arguments', function() {
      expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
      expect(calculateNumber('DIVIDE', 3.1, 1.5)).to.equal(1.5);
      expect(calculateNumber('DIVIDE', 6.5, 1.5)).to.equal(3.5);
      expect(calculateNumber('DIVIDE', -3.7, -1.5)).to.equal(4);
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
  });

  /**
   * Test suite for invalid operations.
   */
  describe('#INVALID operation', function() {
    /**
     * Test case to verify that an exception is thrown for invalid operation types.
     */
    it('should throw an exception for invalid type', function() {
      expect(calculateNumber.bind(null, 'MULTIPLY', 1, 3)).to.throw();
      expect(calculateNumber.bind(null, false, 1, 2)).to.throw();
    });
  });
});
