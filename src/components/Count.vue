<template>
	<div>
		<h2>{{ msg }}</h2>
		<hr>
		<h3>{{ count }}</h3>
		<p>
			<button @click="add(10)">+</button>
			<button @click="reduce">-</button>
		</p>
	</div>
</template>

<script type="text/javascript">
	import store from '@/vuex/store';
	import { mapState, mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				msg: 'Hello Vuex'
			}
		},
		computed: {
			...mapState(['count']),
			...mapGetters(['count'])
		},
		methods: mapMutations(['add', 'reduce']),
		store
	}
</script>