<template>
	<section class="content">
		<form>
			<label>First name</label>
			<span class="error-message" v-show="errors.first_name.length">{{errors.first_name}}</span>
			<input  type="text" v-model="contact.first_name" class="form-field">

			<label>Last Name</label>
			<span class="error-message" v-show="errors.last_name.length">{{errors.last_name}}</span>
			<input type="text" v-model="contact.last_name" class="form-field">

			<label>Email</label>
			<span class="error-message" v-show="errors.email.length">{{errors.email}}</span>
			<input type="text" v-model="contact.email" class="form-field">

			<label>Country</label>
			<span class="error-message" v-show="errors.country.length">{{errors.country}}</span>
			<select-box v-bind:list-array="countries" v-on:item-selected="setCountry" 
				filter-field="name" v-bind:default="contact.country"></select-box>

			<div v-if="!isCreateForm()" class="buttons">
				<button v-on:click="saveChanges()" class="success">Update</button>
				<button v-on:click="deleteContact()" class="warning">Delete</button>
			</div>

			<div v-if="isCreateForm()" class="buttons">
				<button class="success" v-on:click="create()">Create contact</button>
			</div>
		</form>
	</section>
</template>

<script type="text/javascript">
	import { getContact, contactInstance, updateContact, createContact, deleteContact } from '../services/contactsService'
	import { countriesArray, findCountry } from '../services/countriesService'
	import SelectBox from './SelectBox.vue'

	export default {
	  created: function(){
	  	if (this.isCreateForm()){
	  		this.contact = contactInstance();
	  	}else {
	  		this.contact = getContact(this.$route.params.id);
	  	}
	  },
	  data () {
	    return {
	    	name: this.$route.name,
	    	contact: {},
	    	countries: countriesArray(),
	    	errors: {
	    		first_name: "",
	    		last_name: "",
	    		email: "",
	    		country: ""
	    	}
	    }
	  },
	  methods: {
	  	create(){
	  		if(this.validate()){
		  		createContact(this.contact);
		  		this.goTo('contacts');
	  		}
	  	},
	  	saveChanges(){
	  		let self = this;
	  		if(this.validate()){
			  	this.$dialog.confirm('Are you sure?')
			  		.then(function(){
			  			updateContact(self.contact);
				  		self.goTo('contacts');
			  		})
			  		.catch(()=>{return false;});
			  		
	  		}
	  	},
	  	goTo(route){
	  		this.$router.push({name: route});
	  	},
	  	deleteContact(){
	  		let self = this;
			this.$dialog.confirm('Are you sure?')
				.then(()=>{
			  		deleteContact(self.contact.id);
			  		self.$router.push({name:'contacts'});	
				})
		  		.catch(()=>{return false;});
	  	},
	  	isCreateForm(){
	  		return this.name === 'newcontact';
	  	},
	  	setCountry(country_code){
	  		this.contact.country = country_code;
	  	},
	    validEmail:function(email) {
	      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	      return re.test(email);
	    },
	  	validate(){
	  		this.resetErrors();
	  		let errors = false;
	  		let fields = this.contact;
	  		if(!fields.first_name.length){
	  			this.errors.first_name = 'First name required';
	  			errors = true;
	  		}
	  		if(!fields.last_name.length){ 
	  			this.errors.last_name = 'Last name required';
	  			errors = true;
	  		}
	  		if(!fields.email.length){ 
	  			this.errors.email = 'E-mail required';
	  			errors = true;
	  		}
	  		if(!fields.country.length){ 
	  			this.errors.country =  'A country is required';
	  			errors = true;
	  		}
	  		if(fields.email.length > 0){
	  			if(!this.validEmail(fields.email)){
	  				this.errors.email = 'Unexpected email format';
		  			errors = true;
		  		}
	  		}
	  		if(!errors){
	  			return true;
	  		}
	  	},
	    resetErrors(){
	    	this.errors = {
	    		first_name: "",
	    		last_name: "",
	    		email: "",
	    		country: ""
	    	}
	    }
	  },
	  components:{
	  	'select-box': SelectBox
	  }
	}

</script>

<style lang="sass" scoped>
	@import '../styles/colors';

	@keyframes showError{
		from{
			transform:translateX(40px);
			opacity:0;
		}
		to{
			opacity:1;
		}
	}

	section{
		font-weight:lighter;
		width:100%;
		display:block;
		position:relative;
		letter-spacing:0.3px;

		form{
			position:absolute;
			width:100%;
		}
		label{
			font-size:14px;
			margin-bottom:0;
			padding-bottom:0;
			line-height:30px;
			color:$orange;
		}

		.form-field{
			background-color:$grey;
			border:none;
			border-bottom:1px solid $orange;
			color:$light-grey;
		}
		.error-message{
			font-size:0.9rem;
			color:$light-grey;
			float:right;
			position: relative;
		    top: 9px;
		    right: 1%;
		    animation:showError 0.5s;
		}
		button{
			background-color:$dark-grey;
			transition: all 0.2s ease-in;
		}
		button:hover{
			cursor:pointer;
		}
		.success{
			background-color:$green;
			border:2px solid $green;
			color:$dark-grey;
		}
		.warning{
			border:2px solid $orange;
			color: $orange;
		}
		.success:hover{
			background-color:$green;
			border:2px solid $green;
			color: $dark-grey;
		}
		.warning:hover{
			background-color:$orange;
			border:2px solid $orange;
			color: $dark-grey;
		}

	}

</style>