Vue.prototype.$http = axios

var app = new Vue({
    el: '#divWpVue',
    data: {
        message: ''
    },
    mounted () {
        axios
            .get('http://localhost:8000/foo')
            .then(response => (this.message = response))
    }
})