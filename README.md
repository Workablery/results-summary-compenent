# **Results summary component** 

This project is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). 

Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## **Preview**

![](..\design\results-summary-compenent-overview.png)

## **Links**

- Solution URL: :floppy_disk: [GitHub Repository](https://github.com/gregorylocigno/results-summary-compenent)
- Live Site URL: :link: [Live Page](https://gregorylocigno.github.io/results-summary-compenent/)


## **The challenge**

- View the optimal layout for the interface depending on device's screen size
- See hover and focus states for all interactive elements on the page
- Display score from a json document

## **Built with**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## **Tools Used**



![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)

## What I learned

This was my first time fetching a JSON file.

Here's the gist of what I learned in Javascript:

```js
async function getJson() {
  const response = await fetch('/js/data.json');
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
```

## Author

<div>

<a href="https://github.com/gregorylocigno" target="_blank">
	<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
" alt="GitHub profil">
  </a> &nbsp;&nbsp;&nbsp;


</div>