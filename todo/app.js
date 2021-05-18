let input1 = "p";
let listarr = [];
while (input1 !== "quit") {
    input1 = prompt("What would you like to do ?");
    if (input1 === "new") {
        let item = prompt("Enter the list item");
        listarr.push(item);
        console.log(`${item} added to the list`);
    } else if (input1 === "list") {
        console.log("*****************");
        for (let items = 0; items < listarr.length; items++) {
            console.log(`${items}: ${listarr[items]}`);
        }
        console.log("*****************");
    } else if (input1 === "delete") {
        var del = prompt("Enter the index to be deleted");
        listarr.splice(del, 1);
        console.log(`${del} deleted from the list`);

    } else if (input1 === "quit") {
        console.log("OK You quit the app");
        break;
    } else {
        alert("Enter valid code");
    }
}
