describe("camel", function () {
  it("stubs upper case", function () {
    var stub = sinon.stub(String.prototype, "toUpperCase",
      function () { return "FOO"; });

    expect(camel("a-b")).to.equal("aFOO");
    expect(stub.callCount).to.equal(1);

    stub.restore();
  });
});
