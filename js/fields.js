// Functionality necessary to generate the list of fields for all of the resources, 
// as well as the functionality necessary to filter which fields are shown and which ones
// are. It also generates all of the DOM elements.

function generate_field_row(field, i) {
    const row = document.createElement("tr");
    row.classList.add("field-row");

    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    const cell5 = document.createElement("td");
    const cell6 = document.createElement("td");

    const checkbox1 = document.createElement("input");
    const checkbox2 = document.createElement("input");
    const checkbox3 = document.createElement("input");
    checkbox1.type = "checkbox";
    checkbox2.type = "checkbox";
    checkbox3.type = "checkbox";

    const dropdown = document.createElement("select");
    dropdown.name = "values";
    dropdown.id = "values-".concat(i.toString());

    let options = ["first", "last", "arbitrary", "all"];
    for (var val of options) {
        let option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        dropdown.appendChild(option);
    }
    const label = document.createElement("label");
    label.innerHTML = "Choose which value to use";
    label.htmlFor = "values-".concat(i.toString());

    const text = document.createElement("input");
    text.classList.add("name-override");
    text.type = "text";

    cell1.appendChild(checkbox1);
    cell2.innerHTML = field;
    cell3.appendChild(checkbox2);
    cell4.appendChild(checkbox3);
    cell5.appendChild(dropdown);
    cell6.appendChild(text);

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    return row;
}

function generate_field_table(resource) {
    let fields = FIELD_MAP[resource];
    let idx = 0;
    var row;

    const tbody = document.createElement("tbody");
    resource = resource.toLowercase().replace(" ", "-");
    tbody.id = resource.concat("-fields");
    tbody.classList.add("field-rows");

    for (var field of Object.keys(fields)) {
        row = generate_field_row(field, idx);
        const tr = document.createElement("tr");
        tr.appendChild(row);
        tbody.appendChild(tr);
        idx++;
    }
}

function generate_all_field_tables() {
    const table = document.getElementById("fields-table");

    for (var key of Object.keys(FIELD_MAP)) {

    }
}

function clear_fields() {
    const field_rows = document.getElementById("field-rows");
    while (field_rows.firstChild) {
        field_rows.removeChild(field_rows.firstChild);
    }
}
