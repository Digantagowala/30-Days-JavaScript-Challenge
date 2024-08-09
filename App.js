// Basic Event handling

function changeOne() {
    const elementOne = document.getElementById('Para');
    elementOne.addEventListener('click', function(){
        elementOne.textContent = 'Text Changed'
    })
    
}

// Mouse Event 

const bgChange = document.getElementById('mousevent');

bgChange.addEventListener('mouseover', function() {
    bgChange.style.backgroundColor = 'red';
});

bgChange.addEventListener('mouseout', function() {
    bgChange.style.backgroundColor = 'black';
});


// Keyboard event

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function(event) {
  
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.code);
  
});


const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

inputField.addEventListener('keyup', function(){
    console.log('Input Value:', inputField.value);
    output.textContent = 'Current Input : ' + inputField.value;

})

Form Events
 document.getElementById('dataForm').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log(`Name :`,name);
    console.log(`Email:`, email)


 })
  

document.getElementById('fruitSelect').addEventListener('change', function(event){
    const selectedFruit = event.target.value;

    const inPara = document.getElementById('selectedFruit');
    inPara.textContent = selectedFruit ? `You Selected : ${selectedFruit}` : ""

})


// Event Delegation

document.getElementById('fruitList').addEventListener('click', function(event) {
  
    if (event.target && event.target.nodeName === 'LI') {
      
      console.log('Clicked item:', event.target.textContent);
    }
  });
  


document.getElementById('taskList').addEventListener('click', function(event) {
  
  if (event.target && event.target.nodeName === 'LI') {
    console.log('Completed task:', event.target.textContent);
    event.target.remove(); 
  }

});

document.getElementById('addTaskButton').addEventListener('click', function(event){
   const taskInput = document.getElementById('newTaskInput');
   const newTaskText = taskInput.value; 

   if (newTaskText.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = newTaskText;
    document.getElementById('taskList').appendChild(newTask);
    taskInput.value = ''; 
  }
})

// Click Event Script:- question 1

const buttnChanges = document.getElementById('btn');
buttnChanges.addEventListener('click', function(){
  buttnChanges.textContent = 'Hello im here'
})
//  mouse events script
const mouseevents = document.getElementById('box1');

mouseevents.addEventListener('mouseover',function(){
  mouseevents.style.backgroundColor = "green"  
});
 mouseevents.addEventListener('mouseout', function(){
  mouseevents.style.backgroundColor = "black"
 })

  // Keyboard events script
  const keybrdaevents = document.getElementById('in');
  keybrdaevents.addEventListener('keypress', function(event){
    console.log(`Key Pressed :`, event.key);
    console.log(`Key Up :`, event.code)
  })

  //Form events script:
  function handleSubmit(event) {
    
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log('Employee Information Submitted:', data);
    alert('Employee information submitted successfully!');
}


function handleSelectChange(event) {
    const selectedValue = event.target.value;
    console.log('Department changed to:', selectedValue);
    alert(`Selected Department: ${selectedValue}`);
}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

    const dropdown = document.querySelector('select');
    dropdown.addEventListener('change', handleSelectChange);
});

// Event delegation script
document.getElementById('myList').addEventListener('click', function(event){
  if(event.target.tagName === 'LI'){
    console.log(`Right Clicked :`, event.target.textContent);
    alert( `Target are successfully Right`)

  }
})



