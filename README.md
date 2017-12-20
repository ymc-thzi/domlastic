# DomLastic.js

DomLastic.js is a jquery plugin that adds jointed bouncing effects to your HTML elements.    
You can connect dom elements so that they behave like elastic physically jointed bodies.
Make your list items bouncing like messages on iOS when scrolling or fire a customizable effect on any dom manipulation.
<br><a target="_blank" href="https://ymc-thzi.github.io/domlastic/demo/">TEST THE DEMO</a>

<a target="_blank" href="https://ymc-thzi.github.io/domlastic/demo/"><img src="https://raw.githubusercontent.com/ymc-thzi/domlastic/master/demo/domlasticdemo.gif"></a>

# Install

- Installation with <a target="_blank" href="https://www.npmjs.com/package/domlastic">npm</a>: packagename "domlastic"    
`$ npm install domlastic`

- Installation with <a target="_blank" href="https://libraries.io/bower/domlastic">bower.io</a>: packagename "domlastic"    
`$ bower install domlastic`

- Manual installation: copy and link the file domlastic.js to your project    
[domlastic.js][1]

 [1]: https://github.com/ymc-thzi/domlastic/blob/master/dist/domlastic.js


# Usage

## Example 1: Init and trigger animation

```html
<script>
domLastic.init({
  itemsClassnameToConnect: 'item'
});

domLastic.animateItems();
</script>

<div>
  <div class="item">item 1</div>
  <div class="item">item 2</div>
  <div class="item">item 3</div>
</div>
```

## Example 2: Callback after animation has finished


```html
<script>
domLastic.init ({
  itemsClassnameToConnect: 'item',
  callback: function() {
    console.log( 'anim finished');
  }
});

domLastic.animateItems();
</script>

<div>
  <div class="item">item 1</div>
  <div class="item">item 2</div>
  <div class="item">item 3</div>
</div>
```


## Example 3: Horizontal animation with custom parameters. Connect any DOM element like Images...

```html
<script>
domLastic.init({
  itemsClassnameToConnect: 'item',
  itemsJointStrength: 10, //value optimum between 10 - 100
  animationSpeed: 500, //value optimum 300 - 1000
  animationIntensity: 0.6, //value optimum optimum 0.5 - 1
  animationDirection: 'horizontal'
});

domLastic.animateItems();
</script>
<div>
  <div class="item"><img src="..." /></div>
  <div class="item"><img src="..." /></div>
  <div class="item"><img src="..." /></div>
</div>
```

| Attribute               | default       | type   |
| ----------------------- | ------------- | ------ |
| itemsClassnameToConnect |               | string |
| itemsJointStrength      | 20            | int    |
| animationSpeed          | 600           | int(ms)|
| animationIntensity      | 0.5           | float  |
| animationDirection      | 'horizontal'  | string |
| callback                |               | func() |

animationDirection Types:

* 'horizontal'
* 'vertical'

# Dependencies
* jQuery

# Browser Support
| Browser  | <img src="http://www.w3schools.com/images/compatible_chrome.gif">  | <img src="http://www.w3schools.com/images/compatible_ie.gif"> | <img src="http://www.w3schools.com/images/compatible_firefox.gif"> | <img src="http://www.w3schools.com/images/compatible_safari.gif"> | <img src="http://www.w3schools.com/images/compatible_opera.gif"> |
| -------- | -------------------------------------------------------------------| --------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------|
| Version  | 4.0                                                                | 9.0                                                           | 2.0                                                                | 3.1                                                               | 9.0                                                              |
