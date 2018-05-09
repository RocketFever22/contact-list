<template>
	<nav class="fixed" :title="sectionName">
		<section class="container">
	        <router-link to="/" v-show="!newContact()">
	        	<i class="far fa-arrow-alt-circle-left"></i>
	        </router-link>
	        <router-link class="right-align"to="/contact/new" v-show="newContact()">
	        	<i class="fas fa-user-plus"></i>
	        </router-link>
        </section>
	</nav>
</template>

<script type="text/javascript">
	export default {
	  name: 'Navigation',
	  computed: {
	  	sectionName: function(){
	  		if(this.$route.name === 'contacts'){
	  			return 'Contact List';
	  		}
	  		if(this.$route.name === 'newcontact'){
	  			return 'New Contact';
	  		}
	  		if(this.$route.name === 'contact'){
	  			return 'Edit Contact';
	  		}
	  	}
	  },
	  methods: {
	  	newContact: function(){
	  		return this.$route.name === 'contacts'
	  	}
	  }
	}
</script>

<style lang="sass" scoped>
	@import '../../styles/colors';

	a{
		color:#647B96;
		line-height:20px;
		padding:10px;
		display:inline-block;
		transition: all 0.4s ease-in-out;
	}
	a:hover{
		background-color:$orange;
		border-radius:50%;
	}
	a:hover>i::before{
		color:$dark-grey;
		transition: all 0.4s ease-in-out;
	}

	a.right-align{
		float:right;
	}
	nav{
		background-color:$dark-grey;
		&::before{
			content: attr(title);
		    position: fixed;
		    width: 50%;
		    text-align: center;
		    top: 8px;
		    margin-left:25%;
		    color:$white;
		};
	}
</style>