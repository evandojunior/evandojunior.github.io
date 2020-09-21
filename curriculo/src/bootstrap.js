var app = new Vue({
	el:"#app",
	data: {
		perfil:{}
	},
	filter:{
		getNewLine: function(string){
			return JSON.parse(JSON.stringify(string));
		}
	},
	methods:{
		start: function(){
			var self = this;

			this.$http.get('https://raw.githubusercontent.com/evandojunior/evandojunior.github.io/master/curriculo/src/resume.json').then((response) => {
				console.log(response.data);
				self.perfil = response.data;
			}, (response) => {
				alert("Ops! Aconteceu algum erro, Desculpe-me :(");
			});
		}
	},
	mounted: function(){
		this.start();
	}
})
