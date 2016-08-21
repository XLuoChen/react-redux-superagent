const reducer = require('../client/js/reducers/reducer');
const expect = require('chai').expect;

describe('reducer', function () {
  it('get', function () {
    const state = {value: ''};
    const action = {type: "GETTVALUE", value: 'world'};
    expect(reducer(state, action)).to.be.deep.equal({value: 'world'});
  });
});

