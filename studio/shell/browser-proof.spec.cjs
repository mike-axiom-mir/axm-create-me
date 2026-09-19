const { test, expect } = require("@playwright/test");
const fs = require("node:fs/promises");
const path = require("node:path");

const evidenceDir = path.join(__dirname, "evidence");

test("renders and exercises the bounded studio shell", async ({ page }, testInfo) => {
  const browserErrors = [];
  page.on("pageerror", (error) => browserErrors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(`console: ${message.text()}`);
  });

  await fs.mkdir(evidenceDir, { recursive: true });
  await page.goto("/studio/shell/");
  await expect(page).toHaveTitle("AXM 3D Studio · Create-Me Shell");
  await expect(page.locator(".domain-card")).toHaveCount(15);
  await expect(page.locator("#status-breakdown")).toContainText("2accepted");
  await expect(page.locator("#status-breakdown")).toContainText("6held");
  const visibleImageHealth = await page.locator("img:visible").evaluateAll((images) =>
    images.map((image) => ({ src: image.getAttribute("src"), complete: image.complete, width: image.naturalWidth }))
  );
  expect(visibleImageHealth).not.toContainEqual(expect.objectContaining({ complete: false }));
  expect(visibleImageHealth).not.toContainEqual(expect.objectContaining({ width: 0 }));
  await page.screenshot({
    path: path.join(evidenceDir, `${testInfo.project.name}-top.png`),
    fullPage: false
  });

  await page.getByRole("button", { name: "Accepted", exact: true }).click();
  await expect(page.locator(".domain-card")).toHaveCount(2);
  await page.getByRole("button", { name: "All", exact: true }).click();

  const search = page.getByPlaceholder("Find a specialist…");
  await search.fill("axm-nature-design");
  await expect(page.locator(".domain-card")).toHaveCount(1);
  await expect(page.getByRole("button", { name: /Inspect Nature/ })).toBeVisible();
  await search.fill("");
  await expect(page.locator(".domain-card")).toHaveCount(15);

  await page.getByRole("button", { name: /Inspect Character/ }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading", { name: "Character" })).toBeVisible();
  await expect(dialog).toContainText("5513ab66372ee06ce53788f5097ede230ca2fc6b");
  await page.screenshot({
    path: path.join(evidenceDir, `${testInfo.project.name}-character-detail.png`),
    fullPage: false
  });
  await dialog.evaluate((element) => { element.scrollTop = element.scrollHeight; });
  await expect(dialog.getByRole("link", { name: "Open exact source ↗" })).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Copy identity" })).toBeVisible();
  await page.screenshot({
    path: path.join(evidenceDir, `${testInfo.project.name}-character-detail-bottom.png`),
    fullPage: false
  });
  await dialog.getByRole("button", { name: "Close specialist details" }).click();
  await expect(dialog).toBeHidden();

  await page.locator("#top").scrollIntoViewIfNeeded();
  await page.screenshot({
    path: path.join(evidenceDir, `${testInfo.project.name}-overview.png`),
    fullPage: true
  });

  const observation = {
    revision: process.env.AXM_PR_HEAD || process.env.GITHUB_SHA || "local",
    project: testInfo.project.name,
    viewport: testInfo.project.use.viewport,
    checked: [
      "initial 15-card render",
      "all visible images loaded",
      "accepted filter returns 2 cards",
      "axm-nature-design search returns 1 card",
      "Character dialog exposes exact identity and source actions",
      "dialog closes"
    ],
    browserErrors
  };
  await fs.writeFile(
    path.join(evidenceDir, `${testInfo.project.name}-observation.json`),
    `${JSON.stringify(observation, null, 2)}\n`,
    "utf8"
  );
  expect(browserErrors).toEqual([]);
});
