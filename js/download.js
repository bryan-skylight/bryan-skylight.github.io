// Functionality associated with downloading the saved tables as a JSON or YAML file

function saved_tables_exist() {
    return document.getElementById("table-cards").children.length > 0;
}

function check_for_saved_tables() {
    if (saved_tables_exist()) {
        show_modal("downloadModal");
    } else {
        show_modal("noSavedTablesModal");
    }
}

function download() {
    // extract inputs from modal
    const filename_input = document.getElementById("filename");
    const json_radio_button = document.getElementById("json");
    const yaml_radio_button = document.getElementById("yaml");
    const format = json_radio_button.checked ? "json" : "yaml";
    let filename = filename_input.value;

    // reset modal inputs and close the modal
    filename_input.value = "";
    json_radio_button.checked = true;
    yaml_radio_button.checked = false;
    hide_modal("downloadModal");

    // create variables that we'll need
    filename = filename === "" ? "phdi_generated_schema.".concat(format) : filename_input.value
    const data = JSON.stringify(SAVED_TABLES);
    const blob = new Blob([data], { type: `text/${format};charset=utf-8` })
    const url = URL.createObjectURL(blob);

    const element = document.createElement("a");
    element.setAttribute("href", url);
    element.setAttribute("download", filename)
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}