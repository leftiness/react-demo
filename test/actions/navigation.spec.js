import expect from 'expect.js';
import { complete } from '../../actions/navigation.js';

describe('navigation', () => {
  describe('#complete()', () => {
    it('should be a function', () => {
      expect(complete).to.be.a('function');
    });

    it('should return a NAVIGATION_COMPLETE action', () => {
      const name = 'foo';
      const options = {};
      expect(complete(name, undefined)).to.eql({
        type: 'NAVIGATION_COMPLETE',
        location: { name, options }
      });
    });

    it('should support options', () => {
      const name = 'foo';
      const options = { bar: 'buzz' };
      expect(complete(name, options)).to.eql({
        type: 'NAVIGATION_COMPLETE',
        location: { name, options }
      });
    });
  });
});
