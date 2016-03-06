import expect from 'expect.js';
import { complete } from '../../actions/navigation.js';

describe('navigation', () => {
  describe('#complete()', () => {
    it('should be a function', () => {
      expect(complete).to.be.a('function');
    });
    it('should return a NAVIGATION_COMPLETE action', () => {
      expect(complete('foo')).to.eql({
        type: 'NAVIGATION_COMPLETE',
        location: 'foo'
      });
    });
  });
});
