# autocommit
Bash script hooked up with npm for auto-committing changes into git. Just run one command, and all changes are committed immediately.

It comes up with a default non-descriptive message, so other devs get confused when they see your commit message with no context whatsoever.

Using autocommit in your project shows others that you're an 10x developer, who doesn't even bother wasting time manually committing your own code.

# usage

```bash
execute:
$ ./autocommit.sh     # This commits all your code.

or

$ npm run autocommit      # This also commits all your code, and can be run from npm

or

$ bun run autocommit      # I'm sure in the future, nobody will use slowass npm anymore and everyone will be using bun!
```

# Run from npm dependency

First import dependency in your `package.json`

```json
  "devDependencies": {
    "@dobuki/autocommit": "^1.0.0"
  }
```

Then add a script to execute it:

```json
  "scripts": {
    "tsc": "tsc",
    "autocommit": "bun run @dobuki/autocommit:autocommit",
    "autocommit-using-slowass-npm": "npm run @dobuki/autocommit:autocommit"
  }
```
