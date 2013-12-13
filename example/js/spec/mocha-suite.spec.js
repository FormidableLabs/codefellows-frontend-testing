describe("single level", function () {
  it("should test something");
});

describe("top-level", function () {
  describe("nested", function () {
    it("is slow and async", function (done) {
      setTimeout(function () { done(); }, 300);
    });
  });
});