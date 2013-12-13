describe("camel", function () {
  it("handles base cases", function () {
    expect(camel("")).to.equal("");
    expect(camel("single")).to.equal("single");
  });
  it("handles dashed cases", function () {
    expect(camel("a-b-c")).to.equal("aBC");
    expect(camel("one-two")).to.equal("oneTwo");
  });
});
