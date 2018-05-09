<template>
	<span :class="{emptyList: (sortedList.length==0)}">
		<list-filter v-on:typein="applyFilter" class="fixed"></list-filter>
	<section>
		<transition-group name="contacts" class="content" mode="in-out">
			<contact-card v-for="contact in sortedList" v-bind:contact="contact" 
			v-if="isVisible(contact)" v-bind:key="contact.id"></contact-card>
		</transition-group>
	</section>
	</span>
</template>

<script type="text/javascript">
	import { getList } from '../services/contactsService'
	import { compare, contains } from '../tools.js'
	import Filter from './Filter.vue'
	import ContactCard from './layouts/ContactCard.vue'

	export default {
	  name: 'List',
	  mounted: function(){
	  	this.contacts = getList();
	  },
	  data () {
	    return {
	      contacts: [],
	      filterString:""
	    }
	  },
	  computed:{
	  	sortedList() {
		    return this.contacts.sort(compare);
		}
	  },
	  methods:{
	  	applyFilter(new_value) {
	  		this.filterString = new_value;
	  	},
	  	isVisible(contact) {
	  		let fullName = `${contact.first_name} ${contact.last_name}`;
	  		return contains(fullName, this.filterString);
	  	}
	  },
	  components: {
	  	'list-filter': Filter,
	  	'contact-card': ContactCard
	  }
	}
</script>

<style lang="sass" scoped>
	@import '../styles/colors';

span{
	overflow-y:auto;
}
/* appearing */
.contacts-enter-active {
  transition: all 400ms ease-out;
}
.contacts-move{
  transition: top 400ms ease-in;
}
/* disappearing */
.contacts-leave-active {
  transition: all 400ms ease-in;
  z-index: 0;
}

/* appear at / disappear to */
.contacts-enter,
.contacts-leave-to {
  opacity: 0;
}

.emptyList{
	width:100%;
	padding:1%;
}
.emptyList::before{    
	color: $grey;
    position: absolute;
    z-index: 100;
    content: "This list is empty";
    top: 29vh;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 36px;
    letter-spacing: 3px;
}

</style>