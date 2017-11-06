const baseApi = "https://api.github.com/";
const token = "c0d774b014eca71291b3b9d98413bb5e1bcb1558";

function getIssues() {
  fetch(`${baseApi}repos/mattcrowe5/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  issueList = document.getElementById("issues");
  json.forEach(function(issue) {
    let iss = document.createElement("ul");
    iss.innerHTML = `<li> ${issue.title} </li><li> ${issue.body} </li>`;
    issueList.appendChild(iss);
  });
}

function createIssue() {
  const issue = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(`${baseApi}repos/mattcrowe5/javascript-fetch-lab/issues`, {
    method: "post",
    body: JSON.stringify(issue),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function showResults(json) {
  document.getElementById(
    "results"
  ).innerHTML = `<li><a href= ${json.url}> ${json.name} </a></li>`;
}

function forkRepo() {
  const repo = "learn-co-curriculum/javascript-fetch-lab";
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return "";
}
