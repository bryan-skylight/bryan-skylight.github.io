// This file contains the resource and field mappings as specified by the FHIR
// specification. More information can be found here: https://www.hl7.org/fhir/resourcelist.html

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
    "Composition": {
        "Identifier": "Compoisition.id",
        "Patient ID": "Compoisition.subject.reference.where(startsWith('Patient/')).substring(8)",
        "Organization ID": "Compoisition.custodian.reference.where(startsWith('Organization/')).substring(13)"
    },
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
        "Identifier": "Patient.id",
        "Active": "",
        "Name": "",
        "First Name": "Patient.name.given",
        "Last Name": "Patient.name.family",
        "Email": "",
        "Phone Number": "Patient.telecom.where(system = 'phone')",
        "Gender": "Patient.gender",
        "Birth Date": "Patient.birthDate",
        "Race": "Patient.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-race').extension.where(url='ombCategory').valueCoding.where(system='urn:oid:2.16.840.1.113883.6.238').code",
        "Ethnicity": "Patient.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity').extension.where(url='ombCategory').valueCoding.where(system='urn:oid:2.16.840.1.113883.6.238').code",
        "Deceased": "",
        "Deceased Datetime": "",
        "Address": "",
        "Street": "Patient.address.where(use = 'home').line",
        "City": "Patient.address.where(use = 'home').city",
        "State": "Patient.address.where(use = 'home').state",
        "Zip Code": "Patient.address.where(use = 'home').postalCode",
        "Country": "Patient.address.where(use = 'home').country",
        "County": "",
        "Latitude": "Patient.address.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/geolocation').extension.where(url='latitude').valueDecimal",
        "Longitude": "Patient.address.extension.where(url = 'http://hl7.org/fhir/StructureDefinition/geolocation').extension.where(url='longitude').valueDecimal",
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
        "Identifier": "/resources/resource/entry/Practitioner/identifier",
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
        "Identifier": "/resources/resource/entry/Related-Person/identifier",
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
        "Identifier": "Organization.id",
        "Active": "",
        "Type": "",
        "Name": "Organization.name",
        "Alias": "",
        "Telecom": "",
        "Address": "",
        "Street": "Organization.address.line",
        "City": "Organization.address.city",
        "State": "Organization.address.state",
        "Zip Code": "Organization.address.postalCode",
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
        "Identifier": "/resources/resource/entry/Endpoint/identifier",
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
        "Identifier": "Condition.id",
        "Patient ID": "Condition.subject.reference.where(startsWith('Patient/')).substring(8)",
        "Clinical Status": "",
        "Verification Status": "",
        "Category": "",
        "Severity": "",
        "Code": "Condition.code.coding.code",
        "Code System": "Condition.code.coding.system",
        "Body Site": "",
        "Subject": "",
        "Encounter": "",
        "Onset Datetime": "Condition.onsetDateTime",
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
        "Identifier": "/resources/resource/entry/Observation/identifier",
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
        "Identifier": "/resources/resource/entry/Diagnostic-Report/identifier",
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
