var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter youe name');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;

}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storeName;
}

myButton.onclick = function(){
    setUserName
}


