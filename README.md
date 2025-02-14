<span style="text-align:center;display:block;width:100%;">
![Example of FlipTimer](https://github.com/bei9/fliptimer/images/image.png){ width=500px }
</span>

# FlipTimer

⏰ A lightweight and performant flip style timer, built with https://github.com/PButcher/fliptimer.

## Features

- 💡 Lightweight - No jQuery! <11KB minified bundle
- ⚡ Performant - Animations powered by CSS transitions
- 📱 Responsive - Works great on screens of all sizes
- 🎨 Themeable - Choose from built-in themes, or add your own
- 🌍 i18n - Customisable headings for your language

## Basic Usage

```javascript
new FlipTimer(1538137672).start();
```

Include the [CSS and JS](https://github.com/bei9/fliptimer/tree/master/dist) in `<head>` and include the following line in your HTML.

```html
<div id="fliptimer" class="fliptimer"></div>
```

See a full example [here](https://github.com/bei9/fliptimer/tree/master/example).

## Multiple Instances

To use multiple instances of FlipTimer on the same page, specify a DOM element ID as the second argument in FlipTimer's constructor:

```javascript
new FlipTimer(1588017373, "registerBy").start();
new FlipTimer(1593561600, "eventStart").start();
```

```html
<div id="registerBy" class="FlipTimer"></div>
<div id="eventStart" class="FlipTimer"></div>
```

## Themes

FlipTimer comes with 2 themes as standard:

- dark [default]
- light

To change the theme, you can supply the `theme` property in the `opt` object in the constructor with the theme name as a string:

```javascript
{
  theme: "light";
}
```

For example, to instantiate FlipTimer using the light theme instead:

```javascript
new FlipTimer(1538137672, {
  theme: "light",
}).start();
```

### Custom Themes

Custom themes can be added by adding a new stylesheet using the FlipTimer [theme template](https://github.com/PButcher/FlipTimer/blob/master/src/FlipTimer.css#L3-L34).

FlipTimer themes must have the class name prefix of: `.FlipTimer__theme-` followed by the name of your theme. For example, the standard theme class names are:

- `.FlipTimer__theme-dark`
- `.FlipTimer__theme-light`

You can then load your theme by specifying the `theme` property in the `opt` object of the constructor (see [Themes](#Themes)).

## Headings

You can add your own rotor group headings by passing an array as part of the `opt` object. Bear in mind this won't change the functionality of the rotors (eg: the 'days' rotor won't magically start counting months because you passed it 'Months' as a heading).

Suggested use is for i18n. Usage as follows:

```javascript
new FlipTimer(1538137672, {
  headings: ["Nap", "Óra", "Perc", "Másodperc"],
}).start();
```

Note that headings will default to English if not provided: `["Days", "Hours", "Minutes", "Seconds"]`

## API

### `FlipTimer.prototype.constructor(uts, [el], [opts])`

Create a new FlipTimer instance.

#### Parameters

##### `uts`

Type: _number_

The unix timestamp to count down to (in seconds).

##### `[el]`

**Optional**  
Type: _string_ (default: `FlipTimer`)

The DOM element ID to attach this FlipTimer instance to. Defaults to `FlipTimer`.

##### `[opts]`

**Optional**  
Type: _object_ (default: `{}`)

Optionally specify additional configuration settings. Currently supported settings include:

- [`theme`](#Themes)
- [`headings`](#Headings)

### `FlipTimer.prototype.start()`

Start the timer.

### `FlipTimer.prototype.ifEnded(callback)`

Call a function once the timer has ended.

#### Parameters

##### `callback`

Type: _function_

Function to execute once the timer has ended.

#### Example

```javascript
var FlipTimer = new FlipTimer(1538137672)

  // Start the timer
  .start()

```

## Acknowledgements

Thanks to the following people for their suggestions/fixes:

- [@chuckbergeron](https://github.com/chuckbergeron) for his help with making FlipTimer responsive.
- [@vasiliki-b](https://github.com/vasiliki-b) for spotting and fixing the Safari backface-visibility issue.
- [@joeinnes](https://github.com/joeinnes) for adding i18n to rotor group headings.
