describe("camel", function () {
  it("spies upper case", function () {
    var spy = sinon.spy(String.prototype, "toUpperCase");

    expect(spy.callCount).to.equal(0);
    expect(camel("a-b")).to.equal("aB");
    expect(spy.callCount).to.equal(1);
    expect(spy.firstCall.returnValue).to.equal("B");

    spy.restore();
  });
});
