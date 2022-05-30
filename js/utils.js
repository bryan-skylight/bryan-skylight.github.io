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

function download() {
    const data = JSON.stringify(SAVED_TABLES);
    const blob = new Blob([data], { type: "text/json;charset=utf-8" })
    const url = URL.createObjectURL(blob);

    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", "phdi_generated_schema.json")
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function show_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.show();
}

function hide_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.hide();
}
