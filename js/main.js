let TABLE_COUNTER = 1;

function show_alert() {
    alert("This is working!")
}

function is_valid_name(name) {
    if (name === "") {
        return false
    }
    let valid_pattern = /[^A-Za-z_]/
    return !valid_pattern.test(name)
}

function handle_table_name_modal_cancel() {
    const warning = document.getElementById("table-name-warning");
    const table_input = document.getElementById("table-name");
    table_input.value = "";
    warning.style.display = "none";
    hide_modal("tableNameModal");
}

function handle_table_name_modal_submit() {
    const warning = document.getElementById("table-name-warning");
    const table_input = document.getElementById("table-name");
    let table_name = table_input.value;

    if (!is_valid_name(table_name)) {
        warning.style.display = "block";
    } else {
        add_table(table_input.value);
        warning.style.display = "none";
        table_input.value = "";
        hide_modal("tableNameModal");
    }
}

function create_table_card() {
    const table = document.createElement("div");
    table.classList.add("table-card");
    table.classList.add("col-md-10");
    table.classList.add("offset-md-1");
    table.id = "table-".concat(TABLE_COUNTER.toString());
    return table
}

function create_table_card_header() {
    const header = document.createElement("div");
    const header_col = document.createElement("div");
    const delete_button = document.createElement("button");
    const icon = document.createElement("img");

    header.classList.add("row");
    header_col.classList.add("col-md-1");
    header_col.classList.add("offset-md-10");
    delete_button.classList.add("delete-button");
    delete_button.title = "Remove this table from your schema. Cannot be undone.";
    //delete_button.onclick = "remove_table()";
    delete_button.id = "delete-button-".concat(TABLE_COUNTER.toString());
    icon.classList.add("delete-icon");
    icon.id = "delete-icon-".concat(TABLE_COUNTER.toString());
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

function add_table(name) {
    let table_card = create_table_card();
    let table_header = create_table_card_header();
    let table_body = create_table_card_body(name);
    table_card.appendChild(table_header);
    table_card.appendChild(table_body);
    document.getElementById("table-cards").appendChild(table_card);
    TABLE_COUNTER++;
}

function remove_table(elem_id) {
    let id = elem_id.split("-").slice(-1);
    const table_card = document.getElementById("table-".concat(id));
    table_card.remove();
    hide_modal("deleteTableModal");
}

// when a delete button is pressed, we want to remove the appropriate table, which
// requires knowing which button called the function. However, the delete buttons are
// dynamically added to the DOM, so we have to listen at the document level and drill
// down from there.
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-icon")) {
        confirm_deletion(event.target.id);
    }
})

// To ensure a user doesn't delete the table accidentally, we'll ask them to confirm
// their choice, and use a dynamically added function call to onclick for the submit
// button
function confirm_deletion(elem_id) {
    const submit_button = document.getElementById("confirm-delete");
    submit_button.setAttribute("onclick", `remove_table('${elem_id}')`);
    show_modal("deleteTableModal");
}

// When a user is entering the name of a new table, they should be able to hit enter
// to accept the new name
document.addEventListener("DOMContentLoaded", function () {
    const name_input = document.getElementById("table-name");
    name_input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("table-name-submit").click();
        }
    })
})

document.addEventListener("shown.bs.modal", function () {
    const name_input = document.getElementById("table-name");
    name_input.focus();
})

function show_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.show();
}

function hide_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.hide();
}
