import { exec } from 'child_process';
import tmp from "tmp"
import fs from "fs"
import { generateComments } from './open-ai.js';

/**
 * @param {string[]} commands
 */
async function executeCommands(commands) {
  const results = [];
  const data = { results };
  for (let command of commands) {
      if (typeof(command) === "string") {
          const result = await new Promise((resolve, reject) => {
              exec(command, (err, stdout, stderr) => {
                  if(err != null) {
                      reject(err);
                  } else if(typeof(stderr) != "string") {
                      reject(new Error(stderr));
                  } else {
                      resolve(stdout);
                  }
              });
          });
          results.push(result);
      } else {
          const result = await command(data);
          results.push(result);
      }
  }
  return results;
}

export async function autoCommit() {
  tmp.setGracefulCleanup();

  const COMMANDS = [
      `git add .`,
      `git diff --staged`,
      async (data) => {
        const diff = data.results[data.results.length-1];
        const comments = await generateComments(diff);
        data.comments = comments;
      },
      `git status --porcelain`,
      async (data) => {
          const path = await new Promise((resolve, reject) => tmp.file((err, path) => {
              if (err) reject(err);
              resolve(path);
            }));
          const fileList = data.results[data.results.length-1];
          fs.writeFileSync(path, `${data.comments}
  
              Files:
              ${fileList}

              Committed using auto-commit: ${new Date().toString()}
              Autocommit project: https://www.npmjs.com/package/@dobuki/autocommit
          `.split("\n").map(a => a.trim()).join("\n"));
          data.path = path;
      },
      async (data) => {
          executeCommands([`git commit -F "${data.path}"`]);
      },
  ];
  
  executeCommands(COMMANDS);
  
}
