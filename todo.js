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
         input.id = "do";
     
         // Task content (as a label)
         const taskContent = document.createElement("label");
         taskContent.innerText = task;
         taskContent.htmlFor = "do";

         const icon = document.createElement("i");
         icon.classList.add("fa", "fa-trash");
     
         // Taks form content.
         form.appendChild(input);
         
         form.appendChild(taskContent);
         form.appendChild(icon);
         
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

const deleteTask = (aTask) => {
    tasks
};