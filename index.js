const btn = document.createElement('button');
btn.append('Click here!');
document.body.appendChild(btn);

//btn.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeyPress);

function handleClick() {
    getColoredFigure('green-square', document.body);
}

function handleKeyPress(event){
    if( event.key === 'f') {
        getColoredFigure('red-circle', document.body);
    }
}

function getColoredFigure(className, parentNode) {
    const coloredFigure = document.createElement('div');
    coloredFigure.classList.add(className); 
    parentNode.append(coloredFigure);
}

btn.addEventListener('click', getServerData);
function getServerData() {
   const resultOfRequest = fetch('https://jsonplaceholder.typicode.com/users');

   resultOfRequest
   .then(data => data.json())
   .then(readyData => console.log(readyData));
}


/* 
Отрендерить массив пользователей, которых мы получаем с сервера по запросу.
Формат рендеринга - на ваш вкус

*/