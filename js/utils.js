// Utility functions, including functionality for showing, hiding, and handling modals
// is contained in this file.
function is_valid_name(name) {
    if (name === "") {
        return false
    }
    let valid_pattern = /[^A-Za-z_]/
    return !valid_pattern.test(name)
}

function make_valid_name(name) {
    return name.toLowerCase().replace(/ /g, "_");
}

function title_case(str) {
    str = str.replace(/-/g, " ");
    return str.replace(/\w\S*/g, word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}

function extract_elements_from_id(_id, filter_words, get_resource = true, get_row_num = true) {
    let id_elements = _id.split("-");
    let filtered_elements = id_elements.filter(function (value, index, arr) {
        return !(filter_words.includes(value));
    });
    let resource = filtered_elements.slice(0, -1).join("-");
    let row_num = filtered_elements.slice(-1);

    output = [];
    if (get_resource) {
        output.push(resource);
    }

    if (get_row_num) {
        output.push(row_num);
    }

    return output
}

function toggle_checkboxes(resource) {
    let toggle_state = document.getElementById(resource.concat("-select-all")).checked;
    let class_name = resource.concat("-checkbox");
    const checkboxes = document.getElementsByClassName(class_name);

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked != toggle_state) {
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

function show_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.show();
}

function hide_modal(modal_id) {
    let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById(modal_id));
    modal.hide();
}
