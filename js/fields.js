// Functionality necessary to generate the list of fields for all of the resources, 
// as well as the functionality necessary to filter which fields are shown and which ones
// are. It also generates all of the DOM elements.

function generate_checkbox(class_name = "") {
    const cell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // for the checkbox in the first cell, we want to append
    // a class name so that only the checkboxes for a specific
    // resource can be targeted by the toggle_checkmarks() function.
    if (class_name !== "") {
        checkbox.classList.add(class_name);
    }

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

function generate_field_row(resource, field) {
    const row = document.createElement("tr");
    row.classList.add("field-row");

    let class_name = generate_id_from_string(resource, "checkbox");
    let include_field = generate_checkbox(class_name);
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

function generate_field_table_header(resource) {
    const thead = document.createElement("thead");
    const header = document.createElement("tr");
    header.classList.add("field-header");

    // select all checkbox
    const select_all = document.createElement("th");
    select_all.title = "Select or deselect all fields";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = generate_id_from_string(resource, "select-all");
    select_all.append(checkbox);

    // rest of the header fields
    const field_name = document.createElement("th");
    field_name.title = "The name of the field according to the FHIR specification";
    field_name.innerHTML = "Field<br />Name";

    const include_nulls = document.createElement("th");
    include_nulls.title = "Should records with missing values in this field be included?";
    include_nulls.innerHTML = "Include<br />Nulls";

    const include_unknowns = document.createElement("th");
    include_unknowns.title = "Should values of 'UNKNOWN' be treated as valid data?";
    include_unknowns.innerHTML = "Include<br />Unknowns";

    const value = document.createElement("th");
    value.title = "If the field contains multiple values, which value should be returned?";
    value.innerHTML = "Value"

    const new_name = document.createElement("th");
    new_name.title = "Enter how the name should appear in your new table. If left blank, the default name will be used.";
    new_name.innerHTML = "New<br />Name";

    header.appendChild(select_all);
    header.appendChild(field_name);
    header.appendChild(include_nulls);
    header.appendChild(include_unknowns);
    header.appendChild(value);
    header.appendChild(new_name);
    thead.appendChild(header);

    return thead
}

function generate_field_table_body(resource) {
    let fields = FIELD_MAP[resource];
    var row;

    const body = document.createElement("tbody");
    body.id = generate_id_from_string(resource, suffix = "fields");
    body.classList.add("field-rows");

    for (var field of Object.keys(fields)) {
        row = generate_field_row(resource, field);
        body.appendChild(row);
    }

    return body;
}

function generate_field_table(resource) {
    const table = document.createElement("table");
    table.id = generate_id_from_string(resource, "table");
    table.style.display = "none";

    let header = generate_field_table_header(resource);
    let body = generate_field_table_body(resource);

    table.appendChild(header);
    table.appendChild(body);
    return table
}

function generate_all_field_tables() {
    const table_container = document.getElementById("fields");

    for (var key of Object.keys(FIELD_MAP)) {
        let table = generate_field_table(key);
        table_container.appendChild(table);
    }
}

function hide_all_tables() {
    const tables = document.getElementById("fields").children;
    for (let i = 0; i < tables.length; i++) {
        tables[i].style.display = "none";
    }
}

function show_table(_id) {
    const table = document.getElementById(_id);
    table.style.display = "";
}