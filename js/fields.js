// Functionality necessary to generate the list of fields for all of the resources, 
// as well as the functionality necessary to filter which fields are shown and which ones
// are. It also generates all of the DOM elements.

function generate_checkbox() {
    const cell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell.appendChild(checkbox);

    return cell;
}

function generate_field_name(field) {
    const field_name = document.createElement("td");
    field_name.innerHTML = field;

    return field_name
}

function generate_value_dropdown() {
    const uuid = generate_uuid();

    const cell = document.createElement("td");
    const dropdown = document.createElement("select");
    dropdown.name = "values";
    dropdown.id = uuid;

    let options = ["first", "last", "arbitrary", "all"];
    for (var val of options) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        dropdown.appendChild(option);
    }
    cell.appendChild(dropdown)

    return cell
}

function generate_new_name_input() {
    const cell = document.createElement("td");
    const text_input = document.createElement("input");
    text_input.type = "text";
    text_input.classList.add("name-override");
    cell.appendChild(text_input);

    return cell
}

function generate_field_row(field) {
    const row = document.createElement("tr");
    row.classList.add("field-row");

    let include_field = generate_checkbox();
    let field_name = generate_field_name(field);
    let include_nulls = generate_checkbox();
    let include_unknowns = generate_checkbox();
    let value = generate_value_dropdown();
    let new_name_input = generate_new_name_input();
    row.appendChild(include_field);
    row.appendChild(field_name);
    row.appendChild(include_nulls);
    row.appendChild(include_unknowns);
    row.appendChild(value);
    row.appendChild(new_name_input);

    return row;
}

function generate_field_table(resource) {
    let fields = FIELD_MAP[resource];
    var row;

    const table = document.createElement("tbody");
    table.id = generate_id_from_string(resource, suffix = "fields");
    table.classList.add("field-rows");
    table.style.display = "none";

    for (var field of Object.keys(fields)) {
        row = generate_field_row(field);
        table.appendChild(row);
    }

    return table;
}

function generate_all_field_tables() {
    const table_container = document.getElementById("fields-table");

    for (var key of Object.keys(FIELD_MAP)) {
        let table = generate_field_table(key);
        table_container.appendChild(table);
    }
}

function hide_all_tables() {
    const tables = document.getElementsByClassName("field-rows");
    for (let i = 0; i < tables.length; i++) {
        tables[i].style.display = "none";
    }
}

function show_table(_id) {
    const table = document.getElementById(_id);
    table.style.display = "";
}