# contacts-app

> This is a contact app demo with localStorage persistance. 

A working version can be found here: [https://rocketfever22.github.io/contact-list/](https://rocketfever22.github.io/contact-list/)

## Built with
[Vuejs](https://vuejs.org/) - Using the [Browserify](http://browserify.org/) client template.

[node-sass](https://github.com/sass/node-sass) - For sass styles compiling.

[Vueify](https://github.com/vuejs/vueify) - .vue template compiler.
 
## Tested with

The project has been developed in OSX High Sierra with Node.js 9.X and NPM 5.

But it has been tested with NodeJs version 5.12 and NPM 3.8.6 as per requirements. 

Maybe you can have problems with node-sass, in that case, you have to run the following script:
```
npm rebuild node-sass --force
```

It also has been tested in latest Chrome, Firefox and Safari browsers.

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
