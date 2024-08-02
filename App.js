
// Dom menupulation : Selecting and Manupulating Elements



function Hello () {
  const NewText = document.getElementById('m')
  NewText.textContent = 'hhhh'
}

function mmmm() {

  const elements = document.getElementsByClassName('mm');


  for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = 'red';
  }
}

// Appending elements

const newDiv = document.createElement('div');
newDiv.textContent = 'Hi, My name is Diganta Gowala and i have to focus myself';
document.body.append(newDiv)


const ulList = document.querySelector('ul')
const liList = document.createElement('li')

liList.textContent ='This ready to action..';

ulList.appendChild(liList)

// Removing Elements

const NewBack = document.getElementById('container');
const lastchild = NewBack.lastElementChild;
if(lastchild){
  NewBack.removeChild(lastchild)
}

// Modifying Attriutes and classes

function changeImageSource() {
 
    const imageElement = document.getElementById('myImage');

   
    imageElement.setAttribute('src', 'second.img.jpg')



    console.log("Image replaced with:", imageElement.getAttribute('src'));
}
function addClass() {
    const element = document.getElementById('hell');
    element.classList.add('body');
}

function removeClass() {
    const element = document.getElementById('hell');
    element.classList.remove('body');
}


let borderColor = document.getElementById('h');
borderColor.addEventListener('mouseover', function(){
    borderColor.style.border = 'red'
})


// Text Content Manupulation script

function Text() {
    const two = document.getElementById('p');
    two.textContent = 'I think its change'
}


// Element Creation Script
function name() {
    const newone = document.getElementById('oo');
    body.appendChild(newone)  
}


// Element Removal Script
const bbb = document.getElementById('op');
bbb.remove()

