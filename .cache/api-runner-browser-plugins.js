module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"custom":{"families":["Ostrich, Philosopher"],"urls":["/fonts/fonts.css"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"meditation-timer","short_name":"meditation-timer","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
