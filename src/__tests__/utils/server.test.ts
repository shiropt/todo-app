describe("msw response test", () => {
  it("should return a mocked response", async () => {
    const response = await fetch("/todos");
    const data = await response.json();
    expect(data).toHaveLength(100);
  });
});
