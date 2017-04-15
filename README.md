# Wallabyjs Issue



https://github.com/angular/angular-cli/wiki/stories-global-styles
"In Sass and Stylus you can also make use of the includePaths functionality for both component and global styles, which allows you to add extra base paths that will be checked for imports."


[.angular-cli.json](.angular-cli.json)
```javascript
"stylePreprocessorOptions": {
  "includePaths": [
    "some-styles"
  ]
}
```


[src/some-styles/mixins](src/some-styles/mixins.scss)
```css
@mixin red {
  color: red;
}
```

[ src/app/app.component.scss ](src/app/app.component.scss)
```css
@import 'mixins'

.red {
  @include red();
}
```

# Wallaby.js Console Output
​​[Error] Runtime error: Uncaught Error: Module build failed: ​​
​​[Error] @import 'mixins';​​
​​[Error] ^​​
​​[Error]       File to import not found or unreadable: mixins.​​
​​[Error] Parent style sheet: stdin​​
​​[Error]       in ./src/app/app.component.scss (line 1, column 1)​​
​​[Error] at http://localhost:38785/____wallaby-bundle.js?1492263222882&wallabyFileId=bundle:18140​​
