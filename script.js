function insert_Row() {
    // Get the table element
    let table = document.getElementById("sampleTable");
    
    // Insert a new row at the end of the table (default behavior of insertRow() without index)
    // To insert at the beginning (index 0), use: let newRow = table.insertRow(0);
    // Based on the error, inserting at the end (or implicitly at index -1) is safer.
    let newRow = table.insertRow(0); // Inserts at the last position

    // Insert the first cell (index 0)
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = "New Cell1";

    // Insert the second cell (index 1)
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = "New Cell2";
}