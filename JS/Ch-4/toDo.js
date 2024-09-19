let input = prompt("Enter Input");
let toDo = [];

while (true) {
    if (input === 'quit') {
        console.log("You are quitting.");
        break;
    }

    if (input === 'list') {
        console.log("To-Do List:");
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`);
        }
    } else if (input === 'add') {
        let task = prompt("Enter the task you want to add");
        toDo.push(task);   
        console.log("Task added.");
    } else if (input === 'delete') {
        let idx = parseInt(prompt("Enter the index you want to delete"));
        toDo.splice(idx, 1);   
        console.log("Task deleted.");
    } else {
        console.log("Wrong input.");
    }

    input = prompt("Enter Input");
}
 