function compare(a, b) {
	if (a.first_name.toLowerCase() < b.first_name.toLowerCase())
		return -1;
	if (a.first_name.toLowerCase() > b.first_name.toLowerCase())
		return 1;
	return 0;
}

function contains(queryString, filterString) {
	return queryString.toLowerCase().indexOf(filterString.toLowerCase()) > -1;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export {compare, contains, validateEmail}