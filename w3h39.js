"use strict";
const sortJson = require("sort-json");
const { json } = require("express/lib/response");
const { response } = require("express");

async function getGithub() {
  const result = await fetch(
    "https://api.github.com/search/repositories?q=language:javascript"
  );
  const json = await result.json();
  return json;
}
async function main() {
  const response = await getGithub();
  response.items.sort(function (a, b) {
    return b.forks_count - a.forks_count;
  });
  for (let key in response.items) {
    if (response.items.hasOwnProperty(key)) {
      console.log(
        `${response.items[key].forks_count}.${response.items[key].name}: ${response.items[key].description}`
      );
    }
  }
}
main();
