// Functionality necessary to handle the persistance of defined schemas. The code to 
// save and delete schemas, as well as reading previously-defined schemas all live here. 
// This file also contains the necessary functionality to generate the DOM elements
// to display the list of saved tables.

let UNIQ_TABLE_ID = 1;
var SAVED_TABLES = {};
var CURRENT_TABLE = {};

function check_for_changes() {
    if (Object.keys(CURRENT_TABLE).length > 0) {
        show_modal("tableNameModal");
    } else {
        show_modal("unchangedDataModal");
    }
}

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
    let id = elem_id.split("-").slice(-1);
    const table_card = document.getElementById("table-".concat(id));
    table_card.remove();
    hide_modal("deleteTableModal");
}

function add_field_to_table(resource, row_num) {
    const all_rows = document.getElementById(resource.concat("-fields")).children;
    const row = all_rows.item(row_num - 1);
    const fields = row.children;
    const fhir_name = fields[1].textContent;
    const new_name = fields[5].firstChild.textContent;

    let parameters = {
        "include_nulls": fields[2].firstChild.checked,
        "include_unknowns": fields[3].firstChild.checked,
        "value": fields[4].firstChild.value,
        "new_name": is_valid_name(new_name) ? new_name : fhir_name.toLowerCase()
    };

    resource = title_case(resource);
    if (!(resource in CURRENT_TABLE)) {
        CURRENT_TABLE[resource] = {};
    }
    CURRENT_TABLE[resource][fhir_name] = parameters;
}

function remove_field_from_table(resource, row_num) {
    const all_rows = document.getElementById(resource.concat("-fields")).children;
    const row = all_rows.item(row_num - 1);
    const fields = row.children;
    const fhir_name = fields[1].textContent;

    resource = title_case(resource);
    delete CURRENT_TABLE[resource][fhir_name];
}

function modify_table_fields(is_checked, resource, row_num) {
    if (is_checked) {
        add_field_to_table(resource, row_num);
    } else {
        remove_field_from_table(resource, row_num);
    }
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
    const delete_col = document.createElement("div");
    const delete_button = document.createElement("button");
    const delete_icon = document.createElement("img");
    const edit_col = document.createElement("div");
    const edit_button = document.createElement("button");
    const edit_icon = document.createElement("img");

    header.classList.add("row");

    // add the edit button
    edit_col.classList.add("col-md-2");
    edit_col.classList.add("offset-md-8");
    edit_button.classList.add("edit-button");
    edit_button.title = "Make changes to this table.";
    edit_button.id = "edit-button-".concat(UNIQ_TABLE_ID.toString());
    edit_icon.classList.add("edit-icon");
    edit_icon.id = "edit-icon-".concat(UNIQ_TABLE_ID.toString());
    edit_icon.src = "assets/pencil.svg";
    edit_icon.alt = "Penicl Icon";

    edit_button.appendChild(edit_icon);
    edit_col.appendChild(edit_button);
    header.appendChild(edit_col);

    // add the delete button
    delete_col.classList.add("col-md-2");
    delete_col.classList.add("table-header");
    delete_button.classList.add("delete-button");
    delete_button.title = "Remove this table from your schema. Cannot be undone.";
    delete_button.id = "delete-button-".concat(UNIQ_TABLE_ID.toString());
    delete_icon.classList.add("delete-icon");
    delete_icon.id = "delete-icon-".concat(UNIQ_TABLE_ID.toString());
    delete_icon.src = "assets/trash3.svg";
    delete_icon.alt = "Trash Icon";

    delete_button.appendChild(delete_icon);
    delete_col.appendChild(delete_button);
    header.appendChild(delete_col);

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
