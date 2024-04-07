import { render } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("unit testing of Button", () => {
  it("renders with the correct label", () => {
    const label = "Click me";
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText(label)).toBeTruthy();
  });

  it("calls the onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    await userEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
