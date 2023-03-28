const { readFileSync, writeFileSync, readFile } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// 새로 생기는 부분 ! a	파일을 추가(내용을 덧붙이기). 파일이 존재하지 않으면 생성
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);
