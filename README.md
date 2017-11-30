## QTextAnimation

#### Require Files
```html
    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="js/text-animation.js"></script>
```

#### Use
```javascript
$(selector).animQText(options); 
```

#### code
```javascript
var options = {
   effectIn: 'rollIn',
   effectOut: 'rollOut',
   delay:  800,
   duration: 500,
   revers: false,
}
$('.demo').animQText(options);
```
You can use all [Animate.css](https://daneden.github.io/animate.css/)  classes for `` effectIn  `` & `` effectOut `` Animation
