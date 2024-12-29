import { test, expect } from "@playwright/test";

test("Todos メニュークリックで todos ページへ遷移する", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Todos" }).click();
  await expect(page).toHaveURL("http://localhost:3000/todos");
});

test("Todo の新規登録ができる", async ({ page }) => {
  await page.goto("http://localhost:3000/todos");
  await page.getByLabel("Add new todo").click();
  await page.getByPlaceholder("No Title").click();
  await page.getByPlaceholder("No Title").fill("new todo");
  await page.getByPlaceholder("description").click();
  await page.getByPlaceholder("description").fill("new todo description");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByRole("cell").nth(1)).toContainText("new todo");
});
