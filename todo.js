const tasks = [

];



// Form submit event lister
const addTaskForm = document.getElementById("add-task");
// console.log(addTaskForm);
addTaskForm.addEventListener( 'submit', (event) => { 
    event.preventDefault();

    const task = document.getElementById('task').value;
    

    if (task !== '') {
        // console.log(task);
        addTask(task);



        // console.log(userTask.value);
        const ul = document.querySelector(".all-tasks");

         // Task list item.
         const li = document.createElement("li");
        
         // Createa form 
         const form = document.createElement("form");
         form.classList.add("list-container");
         
         // create a form input field of type checkbox.
         const input = document.createElement("input");
         input.type = "checkbox";
         input.name = "do";
     
         // Task content (as a label)
         const taskContent = document.createElement("label");
         taskContent.innerText = task;
     
         // Taks form content.
         form.appendChild(input);
         form.appendChild(taskContent);
         
         // Add the form to the list
         li.appendChild(form);
     
         // Display the list in the ul tag
         ul.appendChild(li)

         // Display the  number of tasks...
        const span = document.querySelector("span");
        span.innerText = tasks.length;


    } else {
        console.log("Provide and item!");
    }
    
});


const addTask = (aTask) => {
    tasks.push(aTask);
    
};


// let userTask = document.getElementById("task");

// console.log(userTask.value);
// const ul = document.querySelector(".all-tasks");






// console.log(ul);

// const displayTask = () => {
//     tasks.forEach( task => {
    
//         // Task list item.
//         const li = document.createElement("li");
        
//         // Createa form 
//         const form = document.createElement("form");
//         form.classList.add("list-container");
        
//         // create a form input field of type checkbox.
//         const input = document.createElement("input");
//         input.type = "checkbox";
//         input.name = "do";
    
//         // Task content (as a label)
//         const taskContent = document.createElement("label");
//         taskContent.innerText = task;
    
//         // Taks form content.
//         form.appendChild(input);
//         form.appendChild(taskContent);
        
//         // Add the form to the list
//         li.appendChild(form);
    
//         // Display the list in the ul tag
//         ul.appendChild(li)
    
//     });
// };

// displayTask();





