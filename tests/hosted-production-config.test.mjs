import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { loadConfigFromFile } from "vite";

const configFile = path.resolve("vite.config.mts");

async function loadProductionConfig(apiBaseUrl) {
  const previous = {
    apiBaseUrl: process.env.VITE_API_BASE_URL,
    browserTraining: process.env.VITE_XOCOMPASS_BROWSER_TRAINING,
    vercelEnvironment: process.env.VERCEL_ENV,
  };

  process.env.VERCEL_ENV = "production";
  process.env.VITE_API_BASE_URL = apiBaseUrl;
  delete process.env.VITE_XOCOMPASS_BROWSER_TRAINING;

  try {
    const loaded = await loadConfigFromFile(
      { command: "build", mode: "production" },
      configFile,
    );
    return loaded.config.define;
  } finally {
    if (previous.apiBaseUrl === undefined) delete process.env.VITE_API_BASE_URL;
    else process.env.VITE_API_BASE_URL = previous.apiBaseUrl;

    if (previous.browserTraining === undefined) delete process.env.VITE_XOCOMPASS_BROWSER_TRAINING;
    else process.env.VITE_XOCOMPASS_BROWSER_TRAINING = previous.browserTraining;

    if (previous.vercelEnvironment === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = previous.vercelEnvironment;
  }
}

test("Vercel Production enables the hosted viewer only for the same-origin backend", async () => {
  const hosted = await loadProductionConfig("/backend");
  assert.equal(hosted["import.meta.env.XOCOMPASS_HOSTED_PREVIEW"], "true");
  assert.equal(hosted["import.meta.env.VITE_XOCOMPASS_BROWSER_TRAINING"], '"1"');

  const native = await loadProductionConfig("http://127.0.0.1:8000");
  assert.equal(native["import.meta.env.XOCOMPASS_HOSTED_PREVIEW"], "false");
  assert.equal(native["import.meta.env.VITE_XOCOMPASS_BROWSER_TRAINING"], '"0"');
});
