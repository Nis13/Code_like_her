var contact_array = [];

// display the table when page loads
window.onload = function () {
  updateContactTable();
};

function addContact() {
  // values from form
  const contact_name = document.getElementById("Name").value;
  const phone_no = document.getElementById("Phone-number").value;
  const email = document.getElementById("Email").value;
  const address = document.getElementById("Address").value;

  // checks all the fields
  if (!contact_name || !phone_no || !email || !address) {
    alert("Please fill all the fields.");
    return;
  }

  // create unique id
  const contact_id = new Date().getTime();

  //object to store info
  const info_object = {
    id: contact_id,
    name: contact_name,
    phone_no: phone_no,
    email: email,
    address: address,
  };

  // Retrieve existing contacts
  const saved_contacts = getContactsfromStorage();
  saved_contacts.push(info_object);

  //save contacts in local storage
  saveContacts(saved_contacts);

  //update the display table
  updateContactTable();

  //reset the inputs
  document.getElementById("form").reset();
}

function getContactsfromStorage() {
  return JSON.parse(localStorage.getItem("contacts")) || [];
}

function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function updateContactTable() {
  const table = document.getElementById("table");
  const contacts = getContactsfromStorage();
  // console.log(contacts);

  //add heading row
  table.innerHTML =
    "<tr><th>Id</th><th>Name</th><th>Phone Number</th><th>Email</th><th>Address</th><th></th></tr>";

  // Add new rows with contact information
  contacts.forEach((contact, index) => {
    const row = document.createElement("tr");
    row.className = "row";
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${contact.name}</td>
            <td>${contact.phone_no}</td>
            <td>${contact.email}</td>
            <td>${contact.address}</td>
            <td class= 'delete-btn'><button class='delete-btn' onclick =" deleteContact(${
              contact.id
            })">Delete</button></td>`;

    table.appendChild(row);
  });
}

// to delete the choosen info
function deleteContact(contactId) {
  const savedContacts = getContactsfromStorage();

  //to find the index of the contact
  const contactIndex = savedContacts.findIndex(
    (contact) => contact.id === contactId
  );

  // to remove the contact from the array
  savedContacts.splice(contactIndex, 1);

  // Save the updated array
  saveContacts(savedContacts);

  // Update the table to show changes
  updateContactTable();
}
