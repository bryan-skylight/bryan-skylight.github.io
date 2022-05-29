// Utility functions, including functionality for showing, hiding, and handling modals
// is contained in this file.

function is_valid_name(name) {
    if (name === "") {
        return false
    }
    let valid_pattern = /[^A-Za-z_]/
    return !valid_pattern.test(name)
}

function toggle_checkboxes() {
    const field_rows = document.getElementsByClassName("field-row");
    for (let i = 0; i < field_rows.length; i++) {
        field_rows[i].firstChild.firstChild.checked = !(field_rows[i].firstChild.firstChild.checked);
    }
}

// utility functions for handling modals
function show_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.show();
}

function hide_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.hide();
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
        save_table(table_input.value);
        warning.style.display = "none";
        table_input.value = "";
        hide_modal("tableNameModal");
    }
}