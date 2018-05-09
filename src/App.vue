<template>
  <div id="app">
    <navigation></navigation>
    <section class="container">
    	<transition name="fade" mode="out-in">
	    	<router-view/></router-view>
	    </transition>
    </section>
  </div>
</template>

<script>

import Navigation from './components/layouts/Navigation.vue'
import { init, getList } from './services/contactsService'


export default {
	beforeMount(){
		init();
	},
	name: 'app',
	components: {
		Navigation
	}
}
</script>

<style lang="sass">
	@import 'styles/colors';

	body{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  	-webkit-font-smoothing: antialiased; 
	  	-moz-osx-font-smoothing: grayscale;
		font-weight:300;
		margin:0;
		font-size:18px;
		color: $orange;
		background-color:$dark-grey;
	}

	h1{
		color:red;
		font-weight:300;
		text-transform:capitalize;
	}
	a{
		text-decoration:none;
		color:$orange;
	}
	.container{
		padding:0% 1%;
	}

	.form-field{
		font-weight:lighter;
		font-size:18px;
		line-height:18px;
		border:1px solid #cacaca;
		display:block;
		position:relative;
		width:99%;
		color:black;
		border-radius:0;
		line-height:30px;
	}
	select{
		min-width:100%;
		min-height:32px;
	}
	.buttons{
		margin-top:1vh;
		display:flex;
  		justify-content: space-around;

  		button{
			border:none;
			font-size:18px;
			padding:7px 15px;
	  		color:white;
	  		font-weight:300;
		}
	}

	.success{
		background-color:$orange;
		color:$dark-grey;
	}
	.warning{
		background-color:$red;
	}

	.fade{
		float:left;
		opacity:1;
		&-enter, &-leave-to{
			opacity:0;
		}
		&-enter-active, &-leave-active{
		transition:all .3s;
		}

	}

	.fixed{
		position:fixed;
		background-color:white;
		width:100%;
		z-index:100;
	}
	.content{
		padding:82px 0px 10px 0px;
		position:absolute;
		width:99%;
	}

	i::before{
		color: $orange;
	}

	.dg-main-content{
		background-color:$grey!important;
		border-radius:0!important;
	}
	.dg-content-body{
		color:$light-grey!important;
		border-bottom-color:$dark-grey!important;
	}
	.dg-content{
		font-size:1.2rem!important;
		text-align:center!important;
	}
	.dg-btn--ok{
		background-color:$green!important;
		color:$dark-grey!important;
		border:2px solid $green!important;
	}
	.dg-btn--cancel{
		background-color:$grey!important;
		color:$light-grey!important;
		border:2px solid $light-grey!important;
	}

</style>