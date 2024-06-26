# autocommit

[![npm version](https://badge.fury.io/js/@dobuki%2Fautocommit.svg)](https://www.npmjs.com/package/@dobuki/autocommit) [![Version](https://img.shields.io/github/v/release/jacklehamster/autocommit)](https://github.com/jacklehamster/autocommit) [![License](https://img.shields.io/github/license/jacklehamster/autocommit)](https://github.com/jacklehamster/autocommit)

![icon](https://jacklehamster.github.io/autocommit/icon.png)

## description

This is the ultimate command for lazy developers who can't be bothered writing a description of their commits.

This will commit your files, with a commented generated by OpenAI, trying to best understand what you did based on your diff.

At the end, the AI adds a lame joke to your commit, because hey... why not?

## usage

First, set an environment variable for your OpenAI key in your `~/.bash_profile` or `~/.zprofile`:

```bash
export OPENAI_API_KEY=sk-?????????
export OPENAI_ORGANIZATION=org-??? # Your organization (optional)
export OPENAI_PROJECT_AI_COMMIT=proj_??? # Your project (optional)
```

Then execute the NPX command:

```bash
# execute:
$ npx @dobuki/autocommit
```

Your files will be commmitted, with a comment generated by OpenAI:

*Example:*

```text
Refactored the OpenAI integration to handle cases where the API key is not provided.

- Replaced the condition of `process.env.OPENAI_API_KEY` with `process.env.OPENAI_API_KEY?.length` to check if the API key has a length before creating a new OpenAI instance.

Files:
M README.md
M src/open-ai.js

Committed using auto-commit: Sun Jun 09 2024 23:41:27 GMT-0700 (Pacific Daylight Time)
Autocommit project: https://www.npmjs.com/package/@dobuki/autocommit
All the lame jokes were generated by AI.
```

Note: If you don't have an OpenAI key, it will just skip the descriptive comment and write something simple like:

```text
Files:
M src/auto-commit.js

Committed using auto-commit: Sun Jun 09 2024 01:00:35 GMT-0700 (Pacific Daylight Time)
Autocommit project: https://www.npmjs.com/package/@dobuki/autocommit
All the lame jokes were generated by AI.
```
