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
  await expect(page.locator(".source-node")).toHaveCount(15);
  await expect(page.locator(".tool-card")).toHaveCount(1);
  await expect(page.locator("#tool-summary")).toContainText("AI callable");
  await expect(page.locator("#tool-summary")).toContainText("human wrapped");
  await expect(page.locator("#tool-summary")).toContainText("intent compiled");
  await expect(page.locator(".tool-card")).toContainText(/ai\s*verified/i);
  await expect(page.locator(".tool-card")).toContainText(/human\s*absent/i);
  await expect(page.locator(".tool-card")).toContainText(/intent\s*absent/i);
  await expect(page.getByLabel("Four AXM roots")).toContainText("Truth");
  await expect(page.getByLabel("Four AXM roots")).toContainText("Wisdom");
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

  await page.getByRole("button", { name: "Inspect tool & plan" }).click();
  const toolDialog = page.locator("#tool-dialog");
  await expect(toolDialog).toBeVisible();
  await expect(toolDialog.getByRole("heading", { name: "Building Materials Packet" })).toBeVisible();
  await expect(toolDialog).toContainText("Create-Me plans and reads receipts");
  await expect(toolDialog).toContainText("axm-building-design executes and retains authority");
  await expect(toolDialog).toContainText("0df875379df67d7d940accc98c61e6071b733a65");
  await expect(toolDialog).toContainText("structural");
  await page.screenshot({
    path: path.join(evidenceDir, `${testInfo.project.name}-tool-detail.png`),
    fullPage: false
  });
  await toolDialog.evaluate((element) => { element.scrollTop = element.scrollHeight; });
  await expect(toolDialog.getByRole("link", { name: "Open exact manifest ↗" })).toBeVisible();
  await expect(toolDialog.getByRole("link", { name: "Evidence run ↗" })).toBeVisible();
  await expect(toolDialog.getByRole("button", { name: "Copy source head" })).toBeVisible();
  await toolDialog.getByRole("button", { name: "Close tool details" }).click();
  await expect(toolDialog).toBeHidden();

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
      "15-node source constellation and four-root compass render",
      "one read-only specialist tool registry entry",
      "Building Materials tool detail exposes exact identity, execution boundary, layers, and plan",
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
