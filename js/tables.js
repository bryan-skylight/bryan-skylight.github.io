// Functionality necessary to handle the persistance of defined schemas. The code to 
// save and delete schemas, as well as reading previously-defined schemas all live here. 
// This file also contains the necessary functionality to generate the DOM elements
// to display the list of saved tables.

let UNIQ_TABLE_ID = 1;

function save_table(name) {
    const table_card_row = document.createElement("div");
    let table_card = create_table_card();
    let table_header = create_table_card_header();
    let table_body = create_table_card_body(name);

    table_card_row.classList.add("row");
    table_card.appendChild(table_header);
    table_card.appendChild(table_body);
    table_card_row.appendChild(table_card);
    document.getElementById("table-cards").appendChild(table_card_row);
    UNIQ_TABLE_ID++;
}

function delete_table(elem_id) {
    console.log(elem_id);
    let id = elem_id.split("-").slice(-1);
    const table_card = document.getElementById("table-".concat(id));
    table_card.remove();
    hide_modal("deleteTableModal");
}

// To ensure a user doesn't delete the table accidentally, we'll ask them to confirm
// their choice, and use a dynamically added function call to onclick for the submit
// button
function confirm_deletion(elem_id) {
    const submit_button = document.getElementById("confirm-delete");
    submit_button.setAttribute("onclick", `delete_table('${elem_id}')`);
    show_modal("deleteTableModal");
}

// DOM element generation code
function create_table_card() {
    const table = document.createElement("div");
    table.classList.add("table-card");
    table.classList.add("col-md-10");
    table.classList.add("offset-md-1");
    table.id = "table-".concat(UNIQ_TABLE_ID.toString());
    return table
}

function create_table_card_header() {
    const header = document.createElement("div");
    const header_col = document.createElement("div");
    const delete_button = document.createElement("button");
    const icon = document.createElement("img");

    header.classList.add("row");
    header_col.classList.add("col-md-2");
    header_col.classList.add("offset-md-10");
    header_col.classList.add("table-header");
    delete_button.classList.add("delete-button");
    delete_button.title = "Remove this table from your schema. Cannot be undone.";
    delete_button.id = "delete-button-".concat(UNIQ_TABLE_ID.toString());
    icon.classList.add("delete-icon");
    icon.id = "delete-icon-".concat(UNIQ_TABLE_ID.toString());
    icon.src = "assets/trash3.svg";
    icon.alt = "Trash Icon";

    delete_button.appendChild(icon);
    header_col.appendChild(delete_button);
    header.appendChild(header_col);
    return header
}

function create_table_card_body(text) {
    const body = document.createElement("div");
    const body_col = document.createElement("div");
    const table_name = document.createElement("p");
    table_name.innerHTML = text;
    body.classList.add("row");
    body_col.classList.add("col-md-12");
    table_name.classList.add("table-name");
    body_col.appendChild(table_name);
    body.appendChild(body_col);
    return body
}