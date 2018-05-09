import { contains } from '../tools.js'
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
		return contains(item.name,country_string);
	})
}

export { countriesArray, listCountries, findCountry, queryCountries };