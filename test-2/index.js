let results = [];

const list = document.querySelector('.list');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uwJ01ZLnBAIiUKyNJXTe/scores/';
const yourName = document.getElementById('yourName');
const yourScore = document.getElementById('yourScore');
const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');

const generateResult = (results) => {
  const eleChildren = Array.from(document.querySelectorAll('.list ul'));
  eleChildren.forEach((el) => {
    el.remove();
  });
  results.forEach((result) => {
    const content = `${result.user}: ${result.score}`;

    const hello = document.createElement('div');
    hello.className = 'hellolist';
    hello.innerText = content;

    list.appendChild(list);
  });
};

const sendScores = async () => {
  const response = await (await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: yourName.value,
      score: yourScore.value,
    }),
  })).json();
  yourName.value = '';
  yourScore.value = '';
  return response;
};

const getScores = async () => {
  const response = await (await fetch(url)).json();
  results = response.result;
  generateResult(results);
};

getScores();

submit.addEventListener('click', () => {
  sendScores();
});

refresh.addEventListener('click', () => {
  document.querySelector('.list').innerHtml = '';
  getScores();
});
