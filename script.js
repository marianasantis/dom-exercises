const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const contPara = document.createElement('p');
contPara.textContent = 'Hey I\'m red!';
contPara.style.color = 'red';
container.appendChild(contPara);

const contTitle = document.createElement('h3');
contTitle.textContent = 'I\'m a blue h3!';
contTitle.style.color = 'blue';
container.appendChild(contTitle);

const section = document.createElement('div');
section.style.border = 'solid';
section.style.backgroundColor = 'pink';

const divTitle = document.createElement('h1');
divTitle.textContent = 'I\'m in a div!';
section.appendChild(divTitle);

const divPara = document.createElement('p');
divPara.textContent = 'ME TOO!'
section.appendChild(divPara);

container.appendChild(section);

btn.addEventListener("click", function (e) {
  console.log(e);
});