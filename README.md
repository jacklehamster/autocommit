# autocommit

[![npm version](https://badge.fury.io/js/@dobuki%2Fautocommit.svg)](https://www.npmjs.com/package/@dobuki/autocommit)

![icon](https://jacklehamster.github.io/autocommit/icon.png)

## description

This is the ultimate command for lazy developers who can't be bothered writing a description of their commits.

## usage

First, set an environment variable for your OpenAI key in your `~/.bash_profile` or `~/.zprofile`:

```bash
export OPENAI_API_KEY=sk-?????????
```

Then execute the NPX command:

```bash
# execute:
$ npx @dobuki/autocommit
```

Note: If you don't have an OpenAI key, it will just skip the descriptive comment and write something simple like:

```text
Files:
M src/auto-commit.js

Committed using auto-commit: Sun Jun 09 2024 01:00:35 GMT-0700 (Pacific Daylight Time)
Autocommit project: https://www.npmjs.com/package/@dobuki/autocommit
```
