# contacts-app

> This is a contact app demo with localStorage persistance. 

## Built with
[Vuejs](https://vuejs.org/) - Using the [Browserify](http://browserify.org/) client template.

[node-sass](https://github.com/sass/node-sass) - For sass styles compiling.

[Vueify](https://github.com/vuejs/vueify) - .vue template compiler.
 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Known issues
There are two issues:
* When in contact details view, if page is refreshed it doesn't load the current service. But as it was supposed to be an App, no refresh button should exist.
* Due to Safari Browser limitations, data can't persist on Safari in private mode.

## Author
Ricardo Otaño Lago
