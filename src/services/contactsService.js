/* PRIVATE METHODS */
function storeArray(arrayList){
	let contacts = JSON.stringify(arrayList);
	localStorage.setItem('contactList', contacts);
}
function getHighest(arrayList, field){
	return arrayList.reduce((prev, current) => (prev[field] > current[field]) ? prev : current)
}

/* PUBLIC METHODS */
function init(){
	console.log(getList());
	if(getList() === null){
		const contacts = [];
		localStorage.setItem('contactList', JSON.stringify(contacts));
	}
	return getList();
}

function getList(){
	return JSON.parse(localStorage.getItem('contactList'));
}

function addContact(contact){
	let contacts = getList();
	contacts.push(contact);
	storeArray(contacts);
	return JSON.parse(localStorage.getItem('contactList'));
}

function getContact(contact_id){
	let contacts = getList();
	let contact = contacts.filter((item)=>{
		return item.id === contact_id
	})

	return contact[0];
}

function updateContact(contact){
	let contacts = getList();
	contacts.map((item)=>{
		if(item.id === contact.id){
			item.country = contact.country;
			item.last_name = contact.last_name;
			item.first_name = contact.first_name;
			item.email = contact.email;
		}
	})
	storeArray(contacts);

	return contact[0];
}

function createContact(contact){
	let contacts = getList();
	if(contacts.length > 0){
		contact.id = getHighest(contacts,'id').id + 1;
	} else {
		contact.id = 1;
	}
	addContact(contact);

	return contact[0];
}

function deleteContact(contact_id){
	let contacts = getList();
	contacts = contacts.filter((item)=>{
		return item.id !== contact_id;
	})
	storeArray(contacts);

	return contacts;
}

function contactInstance(){
	return {first_name:'', last_name:'', email:'', country:''}
}
export { init, getList, addContact, getContact, updateContact, contactInstance, createContact, deleteContact };