# autocommit

[![npm version](https://badge.fury.io/js/@dobuki%2Fautocommit.svg)](https://www.npmjs.com/package/@dobuki/autocommit)

![](https://jacklehamster.github.io/autocommit/icon.png)

Bash script hooked up with npm for auto-committing changes into git. Just run one command, and all changes are committed immediately.

It comes up with a default non-descriptive message, so other devs get confused when they see your commit message with no context whatsoever.

Using autocommit in your project shows others that you're an 10x developer, who doesn't even bother wasting time manually committing your own code.

# usage

```bash
execute:
$ ./autocommit.sh     # This commits all your code.

or

$ npm run autocommit
```

# Run from npm dependency

First import dependency in your `package.json`:

```json
  "devDependencies": {
    "@dobuki/autocommit": "^1.0.3"
  }
```

Then add a script to execute it:

```json
  "scripts": {
    "tsc": "tsc",
    "autocommit": "npm explore @dobuki/autocommit -- npm run autocommit \"$(pwd)\"",
  }
```
