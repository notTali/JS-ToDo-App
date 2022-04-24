const tasks = [

];

const span = document.querySelector("span");

// Form submit event lister
const addTaskForm = document.getElementById("add-task");
// console.log(addTaskForm);
addTaskForm.addEventListener( 'submit', (event) => { 
    event.preventDefault();

    const task = document.getElementById('task').value;
    

    if (task !== '') {
        // console.log(task);
        addTask(task);

        const index = tasks.length;

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
         input.id = "do" + index;

         // Task content (as a label)
         const taskContent = document.createElement("label");
         taskContent.innerText = task;
         taskContent.htmlFor = "do" + index;

         input.addEventListener("click", event => {
            if (input.checked == true){
                   taskContent.style.textDecorationLine = "line-through";
            }else{
                taskContent.style.textDecorationLine = "none";
            }
        });

         const icon = document.createElement("i");
         icon.classList.add("fa", "fa-trash");

         icon.addEventListener("click",(event) => {
             tasks.splice(index-1); //Remove task from list
             ul.removeChild(li); // Remove list item.
             span.innerText = tasks.length; //Update count
         });
     
         // Taks form content.
         form.appendChild(input);
         
         form.appendChild(taskContent);
         form.appendChild(icon);
         
         // Add the form to the list
         li.appendChild(form);
     
         // Display the list in the ul tag
         ul.appendChild(li)

         // Display the  number of tasks...
        
        span.innerText = tasks.length;


    } else {
        console.log("Provide and item!");
    }
    
});


const addTask = (aTask) => {
    tasks.push(aTask);
    
};

// const deleteTask = (aTask) => {
//     tasks
// };