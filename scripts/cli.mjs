#!/usr/bin/env tsx

import { run } from "@scriptbot/cli";
import { $ } from "zx";

run({
  async release(option) {
    const { semver = "patch" } = option;
    await $`pnpm -r clean`;
    await $`pnpm -r build`;
    await $`lerna version ${semver} --conventional-commits --no-commit-hooks -y`;
    await $`pnpm -r publish ----report-summary`;
  },
});
