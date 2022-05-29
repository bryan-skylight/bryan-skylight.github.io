let TABLE_COUNTER = 1;
let FIELD_MAP = {
    "Capability Statement": {},
    "Structure Definition": {},
    "Implementation Guide": {},
    "Search Parameter": {},
    "Message Definition": {},
    "Operation Definition": {},
    "Compartment Definition": {},
    "Structure Map": {},
    "Graph Definition": {},
    "Example Scenario": {},
    "Code System": {},
    "Value Set": {},
    "Concept Map": {},
    "Naming System": {},
    "Terminology Capabilities": {},
    "Provenance": {},
    "Audit Event": {},
    "Consent": {},
    "Composition": {},
    "Document Manifest": {},
    "Document Reference": {},
    "Catalog Entry": {},
    "Basic": {},
    "Binary": {},
    "Bundle": {},
    "Linkage": {},
    "Message Header": {},
    "Operation Outcome": {},
    "Parameters": {},
    "Subscription": {},
    "Subscription Status": {},
    "Subscription Topic": {},
    "Patient": {
        "Identifier": "",
        "Active": "",
        "Name": "",
        "First Name": "",
        "Last Name": "",
        "Telecom": "",
        "Gender": "",
        "Birth Date": "",
        "Race": "",
        "Ethnicity": "",
        "Deceased": "",
        "Deceased Datetime": "",
        "Address": "",
        "Street": "",
        "City": "",
        "State": "",
        "Zip Code": "",
        "Country": "",
        "County": "",
        "Latitude": "",
        "Longitude": "",
        "Marital Status": "",
        "Multiple Birth": "",
        "Multiple Birth Integer": "",
        "Photo": "",
        "Contact": "",
        "Contact Relationship": "",
        "Contact Name": "",
        "Contact Telecom": "",
        "Contact Address": "",
        "Contact Gender": "",
        "Contact Organization": "",
        "Contact Period": "",
        "Communication Language": "",
        "Preferred Communication Language": "",
        "General Practitioner": "",
        "Managing Organization": "",
        "Link to Other": "",
        "Link Type": ""
    },
    "Practitioner": {
        "Identifier": "",
        "Active": "",
        "Name": "",
        "First Name": "",
        "Last Name": "",
        "Address": "",
        "Street": "",
        "City": "",
        "State": "",
        "Zip Code": "",
        "Country": "",
        "County": "",
        "Gender": "",
        "Birth Date": "",
        "Photo": "",
        "Qualification Identifier": "",
        "Qualification Code": "",
        "Qualification Period": "",
        "Qualification Issuer": "",
        "Communication": ""
    },
    "Practitioner Role": {},
    "Related Person": {
        "Identifier": "",
        "Active": "",
        "Patient": "",
        "Relationship": "",
        "Name": "",
        "First Name": "",
        "Last Name": "",
        "Telecom": "",
        "Gender": "",
        "Birth Date": "",
        "Address": "",
        "Street": "",
        "City": "",
        "State": "",
        "Zip Code": "",
        "Country": "",
        "County": "",
        "Photo": "",
        "Period": "",
        "Communication Language": "",
        "Preferred Communication Language": ""
    },
    "Person": {},
    "Group": {},
    "Organization": {
        "Identifier": "",
        "Active": "",
        "Type": "",
        "Name": "",
        "Alias": "",
        "Telecom": "",
        "Address": "",
        "Street": "",
        "City": "",
        "State": "",
        "Zip Code": "",
        "Country": "",
        "County": "",
        "Part Of": "",
        "Contact Type": "",
        "Contact Name": "",
        "Contact Telecom": "",
        "Contact Address": "",
        "Endpoint": ""
    },
    "Organization Affiliation": {},
    "Healthcare Service": {},
    "Endpoint": {
        "Identifier": "",
        "Status": "",
        "Connection Type": "",
        "Name": "",
        "Managing Organization": "",
        "Contact": "",
        "Period": "",
        "Payload Type": "",
        "Payload Mime Type": "",
        "Address": "",
        "Header": ""
    },
    "Location": {},
    "Substance": {},
    "Biologically Derived Product": {},
    "Device": {},
    "Device Metric": {},
    "Nutrition Product": {},
    "Task": {},
    "Appointment": {},
    "Appointment Response": {},
    "Schedule": {},
    "Slot": {},
    "Verification Result": {},
    "Encounter": {},
    "Episode of Care": {},
    "Flag": {},
    "List": {},
    "Library": {},
    "Allergy Intolerance": {},
    "Adverse Event": {},
    "Condition": {
        "Identifier": "",
        "Clinical Status": "",
        "Verification Status": "",
        "Category": "",
        "Severity": "",
        "Code": "",
        "Body Site": "",
        "Subject": "",
        "Encounter": "",
        "Onset Datetime": "",
        "Onset Age": "",
        "Onset Period": "",
        "Onset Range": "",
        "Onset String": "",
        "Abatement Datetime": "",
        "Abatement Age": "",
        "Abatement Period": "",
        "Abatement Range": "",
        "Abatement String": "",
        "Recorded Date": "",
        "Recorder": "",
        "Asserter": "",
        "Stage Summary": "",
        "Stage Assessment": "",
        "Stage Type": "",
        "Evidence Code": "",
        "Evidence Detail": "",
        "Note": ""
    },
    "Procedure": {},
    "Family Member History": {},
    "Clinical Impression": {},
    "Detected Issue": {},
    "Observation": {
        "Identifier": "",
        "Based On": "",
        "Part Of": "",
        "Status": "",
        "Category": "",
        "Code": "",
        "Subject": "",
        "Focus": "",
        "Encounter": "",
        "Effective Datetime": "",
        "Effective Period": "",
        "Effective Timing": "",
        "Effective Instant": "",
        "Issued": "",
        "Performer": "",
        "Value Quantity": "",
        "Value Codeable Concept": "",
        "Value String": "",
        "Value Boolean": "",
        "Value Integer": "",
        "Value Range": "",
        "Value Ratio": "",
        "Value Sasmpled Data": "",
        "Value Time": "",
        "Value Datetime": "",
        "Value Period": "",
        "Data Absent Reason": "",
        "Interpretation": "",
        "Note": "",
        "Body Site": "",
        "Method": "",
        "Specimen": "",
        "Device": "",
        "Reference Range Low": "",
        "Reference Range High": "",
        "Reference Range Type": "",
        "Reference Range Applies To": "",
        "Reference Range Age": "",
        "Reference Range Text": "",
        "Has Member": "",
        "Derived From": "",
        "Component Code": "",
        "Component Value Quantity": "",
        "Component Value Codeable Concept": "",
        "Component Value String": "",
        "Component Value Boolean": "",
        "Component Value Integer": "",
        "Component Value Range": "",
        "Component Value Ratio": "",
        "Component Value Sasmpled Data": "",
        "Component Value Time": "",
        "Component Value Datetime": "",
        "Component Value Period": "",
        "Component Date Absent Reason": "",
        "Component Interpretation": "",
        "Component Reference Range": ""
    },
    "Media": {},
    "Diagnostic Report": {
        "Identifier": "",
        "Based On": "",
        "Status": "",
        "Category": "",
        "Code": "",
        "Subject": "",
        "Encounter": "",
        "Effective Datetime": "",
        "Effective Period": "",
        "Issued": "",
        "Performer": "",
        "Results Interpreter": "",
        "Specimen": "",
        "Result": "",
        "Imaging Study": "",
        "Media Comment": "",
        "Media Link": "",
        "Conclusion Code": "",
        "Conclusion Presented Form": ""
    },
    "Specimen": {},
    "Body Structure": {},
    "Imaging Study": {},
    "Questionnaire Response": {},
    "Molecular Sequence": {},
    "Medication Request": {},
    "Medication Administration": {},
    "Medication Dispense": {},
    "Medication Statement": {},
    "Medication": {},
    "Medication Knowledge": {},
    "Immunization": {},
    "Immunization Evaluation": {},
    "Immunization Recommendation": {},
    "Care Plan": {},
    "Care Team": {},
    "Goal": {},
    "Service Request": {},
    "Nutrition Order": {},
    "Vision Prescription": {},
    "Risk Assessment": {},
    "Request Group": {},
    "Communication": {},
    "Communication Request": {},
    "Device Request": {},
    "Device User Statement": {},
    "Guidance Response": {},
    "Supply Request": {},
    "Supply Delivery": {},
    "Coverage": {},
    "Coverage Eligibility Request": {},
    "Coverage Eligibility Response": {},
    "Enrollment Request": {},
    "Enrollment Response": {},
    "Claim": {},
    "Claim Response": {},
    "Invoice": {},
    "Payment Notice": {},
    "Payment Reconcilliation": {},
    "Account": {},
    "Change Item": {},
    "Change Item Definition": {},
    "Contract": {},
    "Explanation of Benefit": {},
    "Insurance Plan": {},
    "Research Study": {},
    "Research Subject": {},
    "Activity Definition": {},
    "Device Definition": {},
    "Event Definition": {},
    "Observation Definition": {},
    "Plan Definition": {},
    "Questionnaire": {},
    "Specimen Definition": {},
    "Citation": {},
    "Evidence": {},
    "Evidence Report": {},
    "Evidence Variable": {},
    "Measure": {},
    "Measure Report": {},
    "Test Script": {},
    "Test Report": {},
    "Medicinal Produc tDefinition": {},
    "Packaged Product Definition": {},
    "Administrable Product Definition": {},
    "Manufactured Item Definition": {},
    "Ingredient": {},
    "Clinical Use Definition": {},
    "Regulated Authorization": {},
    "Substance Definition": {}
};

let CATEGORY_MAP = {
    "conformance": [
        "Capability Statement",
        "Structure Definition",
        "Implementation Guide",
        "Search Parameter",
        "Message Definition",
        "Operation Definition",
        "Compartment Definition",
        "Structure Map",
        "Graph Definition",
        "Example Scenario"
    ],
    "terminology": [
        "Code System",
        "Value Set",
        "Concept Map",
        "Naming System",
        "Terminology Capabilities"
    ],
    "security": [
        "Provenance",
        "Audit Event",
        "Consent"
    ],
    "documents": [
        "Composition",
        "Document Manifest",
        "Document Reference",
        "Catalog Entry"
    ],
    "other": [
        "Basic",
        "Binary",
        "Bundle",
        "Linkage",
        "Message Header",
        "Operation Outcome",
        "Parameters",
        "Subscription",
        "Subscription Status",
        "Subscription Topic"
    ],
    "individuals": [
        "Patient",
        "Practitioner",
        "Practitioner Role",
        "Related Person",
        "Person",
        "Group"
    ],
    "entities-1": [
        "Organization",
        "Organization Affiliation",
        "Healthcare Service",
        "Endpoint",
        "Location"
    ],
    "entities-2": [
        "Substance",
        "Biologically Derived Product",
        "Device",
        "Device Metric",
        "Nutrition Product"
    ],
    "workflow": [
        "Task",
        "Appointment",
        "Appointment Response",
        "Schedule",
        "Slot",
        "Verification Result"
    ],
    "management": [
        "Encounter",
        "Episode of Care",
        "Flag",
        "List",
        "Library"
    ],
    "summary": [
        "Allergy Intolerance",
        "Adverse Event",
        "Condition",
        "Procedure",
        "Family Member History",
        "Clinical Impression",
        "Detected Issue"
    ],
    "diagnostics": [
        "Observation",
        "Media",
        "Diagnostic Report",
        "Specimen",
        "Body Structure",
        "Imaging Study",
        "Questionnaire Response",
        "Molecular Sequence"
    ],
    "medications": [
        "Medication Request",
        "Medication Administration",
        "Medication Dispense",
        "Medication Statement",
        "Medication",
        "Medication Knowledge",
        "Immunization",
        "Immunization Evaluation",
        "Immunization Recommendation"
    ],
    "care-provision": [
        "Care Plan",
        "Care Team",
        "Goal",
        "Service Request",
        "Nutrition Order",
        "Vision Prescription",
        "Risk Assessment",
        "Request Group"
    ],
    "request-response": [
        "Communication",
        "Communication Request",
        "Device Request",
        "Device User Statement",
        "Guidance Response",
        "Supply Request",
        "Supply Delivery"
    ],
    "support": [
        "Coverage",
        "Coverage Eligibility Request",
        "Coverage Eligibility Response",
        "Enrollment Request",
        "Enrollment Response"
    ],
    "billing": [
        "Claim",
        "Claim Response",
        "Invoice"
    ],
    "payment": [
        "Payment Notice",
        "Payment Reconcilliation"
    ],
    "general": [
        "Account",
        "Change Item",
        "Change Item Definition",
        "Contract",
        "Explanation of Benefit",
        "Insurance Plan"
    ],
    "public-health-research": [
        "Research Study",
        "Research Subject"
    ],
    "definitional-artifacts": [
        "Activity Definition",
        "Device Definition",
        "Event Definition",
        "Observation Definition",
        "Plan Definition",
        "Questionnaire",
        "Specimen Definition"
    ],
    "evidence-based-medicine": [
        "Citation",
        "Evidence",
        "Evidence Report",
        "Evidence Variable"
    ],
    "quality-reporting-testing": [
        "Measure",
        "Measure Report",
        "Test Script",
        "Test Report"
    ],
    "medication-definition": [
        "Medicinal Product Definition",
        "Packaged Product Definition",
        "Administrable Product Definition",
        "Manufactured Item Definition",
        "Ingredient",
        "Clinical Use Definition",
        "Regulated Authorization",
        "Substance Definition"
    ]
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
    header_col.classList.add("col-md-2");
    header_col.classList.add("offset-md-10");
    header_col.classList.add("table-header");
    delete_button.classList.add("delete-button");
    delete_button.title = "Remove this table from your schema. Cannot be undone.";
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
    const table_card_row = document.createElement("div");
    let table_card = create_table_card();
    let table_header = create_table_card_header();
    let table_body = create_table_card_body(name);

    table_card_row.classList.add("row");
    table_card.appendChild(table_header);
    table_card.appendChild(table_body);
    table_card_row.appendChild(table_card);
    document.getElementById("table-cards").appendChild(table_card_row);
    TABLE_COUNTER++;
}

function remove_table(elem_id) {
    let id = elem_id.split("-").slice(-1);
    const table_card = document.getElementById("table-".concat(id));
    table_card.remove();
    hide_modal("deleteTableModal");
}

function add_resources() {
    let resource_lists = document.getElementsByClassName("resource-list");
    for (let i = 0; i < resource_lists.length; i++) {
        let list_id = resource_lists[i].id;
        let fields = CATEGORY_MAP[list_id];
        fields.sort();
        for (let j = 0; j < fields.length; j++) {
            let list_item = document.createElement("li");
            list_item.classList.add("resource");
            list_item.title = fields[j];

            let list_link = document.createElement("a");
            list_link.classList.add("resource-link");
            list_link.href = "#";
            list_link.title = fields[j];
            list_link.innerText = fields[j];

            list_item.appendChild(list_link);
            resource_lists[i].appendChild(list_item);
        }
    }
}

function add_field_row(field, i) {
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
    document.getElementById("field-rows").appendChild(row);
}

function load_fields(resource) {
    let fields = FIELD_MAP[resource];
    let idx = 0;
    for (var field of Object.keys(fields)) {
        add_field_row(field, idx);
        idx++;
    }
}

function clear_fields() {
    const field_rows = document.getElementById("field-rows");
    while (field_rows.firstChild) {
        field_rows.removeChild(field_rows.firstChild);
    }
}

document.addEventListener("click", function (event) {
    // when a delete button is pressed, we want to remove the appropriate table, which
    // requires knowing which button called the function. However, the delete buttons are
    // dynamically added to the DOM, so we have to listen at the document level and drill
    // down from there.
    if (event.target.classList.contains("delete-icon")) {
        confirm_deletion(event.target);
    }

    // when a resource is clicked, we want to display all of the fields available
    // in that resource
    if (event.target.classList.contains("resource-link")) {
        clear_fields();
        load_fields(event.target.title);
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

    add_resources();
})

// when the table name modal is shown, the input box should automatically be focused
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
