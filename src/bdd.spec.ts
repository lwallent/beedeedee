import { one, zero } from './bdd';

import * as chai from "chai";

let expect = chai.expect;

export var test = describe('Simple BDD can be created', function() {

    it('one is one and not zero', function() {
        var x = one();
        expect(x.isOne()).to.be.true;
        expect(x.isZero()).to.be.false;
    });

     it('zero is zero and not one', function() {
        var x = zero();
        expect(x.isOne()).to.be.false;
        expect(x.isZero()).to.be.true;
    });
});