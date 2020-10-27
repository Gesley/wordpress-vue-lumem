# Wordpress, laravel lumen api com vue

Uma api laravel lumem servindo pagina wordpress com vuejs

  - Type [wpvue] Markdown
  - See HTML
  - Magic

# New Features!
    -
# wordpress-vue-lumem
Uma api laravel lumem servindo pagina wordpress com vuejs

# Install
Instalar wordpress e laravel lumen

# Wordpress tag
Usar essa tag na pagina [wpvue]
Copiar a pasta wp-vue para pasta de plugins do wordpress

# Laravel Lumen
Copiar o arquivo web.php para pasta rotas ou colocar codigo php 
```php
$router->get('foo',function() {
    return response()->json(['name' => 'Virat Gandhi', 'state' => 'Gujarat']);
});
```

# Vuejs e Axios
Importar axios
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>
```

```js
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
```
