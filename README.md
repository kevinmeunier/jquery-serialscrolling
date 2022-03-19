# jQuery serialscrolling - Lightweight section detection on scroll

## About jQuery serialscrolling
This plugin is dedicated to one pagers where a navigation is fixed on the screen so that the user can switch from one section to another. Note that jQuery serialscrolling is shared for inspirational and development purpose.


## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialscrolling/) for a demonstration.


## Compatibility
jQuery serialscrolling has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialscrolling/archive/master.zip) and save one of two available files to include serialscrolling to your page, either the [development](https://github.com/kevinmeunier/jquery-serialscrolling/blob/main/dist/jquery.serialscrolling.js) or the [minified](https://github.com/kevinmeunier/jquery-serialscrolling/blob/main/dist/jquery.serialscrolling.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialscrolling/) to copy what you need.
```HTML
<script src="jquery.serialscrolling.min.js"></script>
```

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialscrolling. 


## Basic Usage
The basic usage of serialscrolling is pretty easy, just start using jQuery serialscrolling by calling it after page load.
```HTML
<ul>
  <li data-serialscrolling="home">Home</li>
  <li data-serialscrolling="work">Work</li>
  <li data-serialscrolling="team">Team</li>
</ul>

<div data-serialscrolling-target="home">Section 1</div>
<div data-serialscrolling-target="work">Section 2</div>
<div data-serialscrolling-target="team">Section 3</div>
```
```JS
$(document).ready(function(){
  // jquery.serialscrolling initialisation
  $('[data-serialscrolling]').serialscrolling();
});
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
targetSelector     | *string*   | *'[data-serialscrolling-target]'*   | The selector to identify the targets (usually sections)
getTarget          | *function* | See [jquery.serialscrolling.js](https://github.com/kevinmeunier/jquery-serialscrolling/blob/main/dist/jquery.serialscrolling.js) | The function to retrieve the target element (usually sections)
getTrigger         | *function* | See [jquery.serialscrolling.js](https://github.com/kevinmeunier/jquery-serialscrolling/blob/main/dist/jquery.serialscrolling.js) | The function to retrieve the trigger element
duration           | *integer*  | *800*                               | The delay for the scroll animation
easing             | *string*   | *'easeInOutExpo'*                   | The effect for the scroll animation
offsetTop          | *integer*  | *0*                                 | The offset top when scrolling to a specific section 
callback           | *function* | *false*                             | A callback called when a new trigger is set (useful for Google Analytics tracking)


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialscrolling/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialscrolling/issues) for new features directly on GitHub.


## License
jQuery serialscrolling is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
