const url =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });
