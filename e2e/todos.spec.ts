import { test, expect } from "@playwright/test";

test("Todos メニュークリックで todos ページへ遷移する", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Todos" }).click();
  await expect(page).toHaveURL("http://localhost:3000/todos");
});
