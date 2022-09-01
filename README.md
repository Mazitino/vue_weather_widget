# vue_weather_widget

#### Link - https://mazitino.github.io/vue_weather_widget/

#### Usage
```
    <script src="https://unpkg.com/vue@3"></script>
    <script src="../vue_weather_widget/dist/vue_weather_widget.umd.min.js"></script>

    <body>
        <div id="app">
            <demo>

            </demo>
        </div> 
    </body>

    <script>Vue.createApp({
        components: {
        demo: vue_weather_widget
        }
    }).mount('#app')
    </script>  
    
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for production-lib (widget)
```
npm run build-lib
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
