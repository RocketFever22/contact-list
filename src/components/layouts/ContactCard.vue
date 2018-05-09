<template>
	<router-link  :to="{ name:'contact', params: { id:contact.id } }" >
		<span class="fav"><i class="fas fa-user-astronaut"></i></span>
		<h2>{{contact.first_name}} {{contact.last_name}}
			<p>{{contact.email}} | {{getCountry(contact.country)}}</p>
		</h2>
	</router-link>
</template>

<script type="text/javascript">
	import { findCountry } from '../../services/countriesService'
	export default {
	  name: 'ContactCard',
	  props: ['contact','filterString'],
	  data () {
	    return {
	      contacts: []
	    }
	  },
	  watch:{
	  	filterString: function(){
	  		this.notFiltered()
	  	}
	  },
	  methods: {
	  	getCountry(country_code){
	  		return findCountry(country_code)
	  	}
	  }
	}
</script>

<style lang="sass" scoped>
	@import '../../styles/colors';

	a{
		display:inline-block;
		background-color:$grey;
		width:99%;
		margin:3px 0px 0px 0px;
		transition:all 0.4s ease-in;
	}
	a:hover{
		background-color:$middle-grey;
		transition:all 0.4s ease-in;
	}
	h2{
		font-size:18px;
		font-weight:200;
		margin:0;
		padding:5px;
		position:relative;
		float:left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width:81%;
	}
	h2 p{
		font-size:14px;
		font-weight:lighter;
		margin:0;
		position:relative;
		margin-top:0px;
		color:#9f9f9f;
	}
	.fav{
		font-size:22px;
		float:left;
		position:relative;
		padding:10px;
	}
</style>