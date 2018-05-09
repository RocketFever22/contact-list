<template>
	<div v-on-clickaway="hideList">
		<input type="text" v-model="filterString" :placeholder="placeholder" class="form-field" v-on:keyup="startSearch()">
		<ul v-show="searching" >
			<li v-for="item in listItems" v-on:click="selectItem(item)">{{item.name}}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">

	import { findCountry } from '../services/countriesService';
	import { contains } from '../tools.js'
	import { mixin as clickaway } from 'vue-clickaway';

	export default {
		props:['listArray','filterField','default','placeholder'],
		mixins:[ clickaway ],
		data(){
			return {
				filterString:"",
				searching: false
			}
		},
		created: function () {
			if(this.$route.name !== 'newcontact'){
	        	this.filterString = findCountry(this.default);
	        }
	    },
		watch:{
			filterString: function(){
				if(this.filterString.length > 2 && this.searching){
					this.listItems = this.filterList(this.listArray)
				} else if (this.filterString.length < 3){
					this.listItems = []
					this.$emit('item-selected',"");
				} else {
					this.listItems = []
				}
			}
		},
		methods:{
			selectItem(item){
				this.filterString = item.name;
				this.$emit('item-selected',item.code);
				this.searching = false;
			},
			startSearch(){
				this.searching = true;
			},
			reset(){
				if(this.$route.name !== 'newcontact'){
		        	this.filterString = findCountry(this.default);
		        }
			},
			hideList(){
				this.searching = false;
				if(this.searching){
					this.filterString = "";
				}
			},
			filterList(listArray){
				self = this;
				return listArray.filter(function(item){
					return contains(item[self.filterField],self.filterString);
				})
			}
		}
	}
</script>

<style lang="sass">
	@import '../styles/colors';

	input.form-field{
		background-color:$grey;
		border:none;
		border-bottom:1px solid $orange;
		color:$light-grey;
	}
		
	ul{    
		margin: 0;
	    padding: 2px;
	    position: absolute;
	    z-index: 10;
	    background-color: $grey;
	    width: 98%;
	    left: 1px;
	    max-height: 120px;
	    overflow: auto;
		li{
			list-style-type:none;    
			list-style-type: none;
		    line-height: 26px;
		    color:$light-grey;
		}
	}
</style>