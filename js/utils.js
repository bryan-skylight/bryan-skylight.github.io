// Utility functions, including functionality for showing, hiding, and handling modals
// is contained in this file.
let TOGGLE_STATE = false;

function is_valid_name(name) {
    if (name === "") {
        return false
    }
    let valid_pattern = /[^A-Za-z_]/
    return !valid_pattern.test(name)
}

function title_case(str) {
    return str.replace(/\w\S*/g, word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}

function toggle_checkboxes(resource) {
    let class_name = resource.concat("-checkbox");
    const checkboxes = document.getElementsByClassName(class_name);
    TOGGLE_STATE = !TOGGLE_STATE;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked != TOGGLE_STATE) {
            checkboxes[i].click();
        }
    }
}

// making this a function so that it's more clear what it's doing in the code
function generate_uuid() {
    return crypto.randomUUID();
}

function generate_id_from_string(string, suffix = "") {
    let uid = string.toLowerCase().replace(/ /g, "-");
    uid = suffix != "" ? uid + "-" + suffix : uid;
    return uid
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