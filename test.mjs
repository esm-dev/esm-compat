import { getBuildTargetFromUA } from "./dist/compat.js";

const testData = {
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.0.0 Safari/537.36": "es2021",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.0.0 Safari/537.36": "es2023",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36": "es2023",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36": "es2024",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15": "es2021",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.6 Safari/605.1.1": "es2023",
  "HeadlessChrome/109": "es2023",
  "ES/2022": "es2022",
  "Deno/1.33.1": "deno",
  "Deno/1.33.2": "denonext",
  "Node.js/20.0.0": "node",
  "undici": "node",
};

for (const [ua, expected] of Object.entries(testData)) {
  const actual = getBuildTargetFromUA(ua);
  if (actual !== expected) {
    console.error(`UA ${ua} should have been ${expected} but was ${actual}`);
    process.exit(1);
  }
}

console.log("✅ All tests passed");
