// document.getElementById('date').innerHTML = new Date().toDateString();


Vue.component('santa', {
	template: '#santa-template'
});

Vue.component('gift-pack-wrapper', {
	template: '#gift-pack-wrapper-template'
});

Vue.component('gift-pack', {
	template: '#gift-pack-template',

	props: {
		n: {
			type: Number,
			default () {
				return 0
			}
		}
	},

	data () {
		return {
			colors: [
				'yellow',
				'green',
				'white',
				'pink',
				'blue',
				'yellow',
				'green',
				'white',
				'pink',
				'blue',
				'yellow',
				'pink'
			]
		}
	},

	computed: {
		className () {
			return this.colors[this.n % this.colors.length]
		}
	}
});

const app = new Vue({
  el: '#app',

	data () {
		return {
			giftCount: 0
		}
	},

	mounted () {
		this.onResize()
		window.addEventListener('resize', this.onResize, false)
	},

	methods: {
		onResize () {
			const { innerWidth, innerHeight } = window
			const giftWidth = innerWidth / 5
			const giftsPerRow = 11
			const rows = Math.ceil(innerHeight / giftWidth)

			this.giftCount = rows * giftsPerRow
		}
	}
});
