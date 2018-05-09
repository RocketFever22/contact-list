<template>
	<section>
		<input type="text" placeholder="Type in to filter contacts" v-model="searchString" v-on:keyup="updateString">
	</section>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				searchString:""
			}
		},
		methods:{
			updateString(e, val){
				this.$emit("typein", this.searchString);
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import '../styles/colors';

	section{
		width:100%;
		background-color:$dark-grey;
		text-align:center;
		height:35px;
		top:40px;
		left:0;
	}

	input{
		background-color:$grey;
		border:none;
		border-bottom:1px solid $orange;
		width:98%;
		font-size:inherit;
		font-weight:inherit;
		color:$light-grey;
		line-height:24px;
	    top: 3px;
	    position: relative;
	}

	
</style>