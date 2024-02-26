//for access and interaction with file system (most methods are async by default)
//for async with promise instead of callback, use require('fs/promises');
const fs = require("fs");
const fsPromise = require("node:fs/promises");
//for dealing with file path
const path = require("path");

let filePath = path.resolve(__dirname, `../data/test.txt`);

function writeFileExample() {
  const content = "Example content";

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file written successfully");
    }
  });
}

function writeFileSynchronouslyExample() {
  const content = "Some content!";
  try {
    fs.writeFileSync(filePath, content);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

async function writeFileWithPromisesExample() {
  try {
    const content = "Example content";
    await fsPromise.writeFile(filePath, content);
  } catch (err) {
    console.error(err);
  }
}

function appendFileExample() {
  const content = "Some content!";
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("file append successfully");
    }
  });
}

async function appendFileWithPromiseExample() {
  try {
    const content = "Some content!";
    await fsPromise.appendFile(filePath, content);
  } catch (err) {
    console.log(err);
  }
}

function readFileExample() {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

function readFileSynchronouslyExample() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

async function readFileWithPromisesExample() {
  try {
    const data = await fsPromise.readFile(filePath, { encoding: "utf8" });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  writeFileExample,
  writeFileSynchronouslyExample,
  writeFileWithPromisesExample,
  appendFileExample,
  appendFileWithPromiseExample,
  readFileExample,
  readFileSynchronouslyExample,
  readFileWithPromisesExample,
};
