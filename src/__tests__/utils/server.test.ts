describe("msw response test", () => {
  it("should return a mocked response", async () => {
    const response = await fetch("/todos");
    const json = await response.json();
    expect(json.data).toHaveLength(10);
  });
});
