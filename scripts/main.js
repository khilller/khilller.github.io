let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/noun_ar_2300882.png'){
        myImage.setAttribute('src', 'images/noun_ar_2304389.png')
    } else {
        myImage.setAttribute('src','images/noun_ar_2300882.png')
    }
}

let myButton = doc.querySelector('button');
let myHeading = doc.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textcontent = 'XR is cool, ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textcontent = 'XR is cool ' + storedName;
}

myButton.onclick = function(){
    setUserName
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
    setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}