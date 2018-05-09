var countries = require('country-list')();

function listCountries (){
	return countries.getCodeList()
}

function countriesArray (){
	return countries.getData()
}

function findCountry(country_code){
	return countries.getName(country_code);
}

function queryCountries(country_string){
	return countriesArray().filter((item)=>{
		return item.name.indexOf(country_string) !== -1;
	})
}

export { countriesArray, listCountries, findCountry, queryCountries };