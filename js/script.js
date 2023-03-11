'use strict';

/*element selectors*/
const reactionScore = document.getElementById('reaction-score');
const memoryScore = document.getElementById('memory-score');
const verbalScore = document.getElementById('verbal-score');
const visualScore = document.getElementById('visual-score');

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = '/js/data.json';
const apiUrl = proxyUrl + url;

async function getJson() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const reactionObject = data[0];
  const memoryObject = data[1];
  const verbalObject = data[2];
  const visualObject = data[3]
  reactionScore.innerHTML = reactionObject.score;
  memoryScore.innerHTML = memoryObject.score;
  verbalScore.innerHTML = verbalObject.score;
  visualScore.innerHTML = visualObject.score;
}

getJson();



