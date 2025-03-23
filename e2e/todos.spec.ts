import { test, expect } from "@playwright/test";

test("存在ないURLにアクセスすると/homeに遷移する", async ({ page }) => {
  await page.goto("http://localhost:3000/example");
  await expect(page).toHaveURL("http://localhost:3000/home");
});
test("Todos メニュークリックで todos ページへ遷移する", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Todos" }).click();
  await expect(page).toHaveURL("http://localhost:3000/todos");
});
