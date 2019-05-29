# Location picker Smart Widget UI (AngularJS)

With the location picker smart widget you can simply implement a location picker in any page.

You will also need the BFF package in order to get the location picker smart widget to work: [http://github.com/digipolisantwerp/location-picker_service_nodejs](http://github.com/digipolisantwerp/location-picker_service_nodejs)

<img src="screenshot.png" alt="Location picker screenshot" width="681" style="max-width:100%;width:100%">

There is a demo app, see below for instructions on running it.

## How to use

### Installing

To install this package use bower

`bower install 'https://github.com/digipolisantwerp/location-picker_widget_ng1.git#^1.x.x'`.

Include `akit.component.locationPickerWidget` as module.

### In your template

```html
<aui-location-picker
    url="http://localhost:9999/api/locations"
    data-value="location"
    data-value-change="valueChanged(value)">
</aui-location-picker>
```

(replace the url of the BFF service)

### In your controller:

```js
function ($scope) {
	$scope.picker1;

	$scope.picker2 = {
		id: 'P_DA/Locaties/MapServer/18/646468',
		name: 'Piep-in-\'t-Riet',
		layer: 'straatnaam',
		street: 'Piep-in-\'t-Riet',
		locationType: 'street',
		coordinates: {
			lambert: {
				x: 146709.25951518,
				y: 226440.44134237
			},
			latLng: {
				lat: 51.347710435471946,
				lng: 4.321550045455797
			}
		}
	};

	$scope.valueChanged = function (value) {
		console.log(value);
	}
}
```

Every value in the backing list must have a unique id.

### Supported attributes

- **url**: the URL of the back-end service feeding this widget
- **value**: the current value of the picker, represented as a value object
- **placeholder**: specify the text to show in an empty field
- **noDataMessage**: the text shown in the list when there are no matching results
- **minLength**: the minimum number of characters typed before a search is triggered
- **bufferInputMs**: how long to buffer keystrokes before fetching remote results
- **types**: the type of values to search for; this is a comma-separated list of "street", "number" and/or "poi
- **searchingText**: the text shown while searching

### Events

- **valueChange**: triggers when the current value is changed (or cleared)

## Run the demo app

Run `npm install && bower install`.

Then run `gulp build && gulp serve`, then navigate to `./example/index.html' in the browser.

To interact with the location picker widget you will have to set up the corresponding BFF service,
as well as adjust necessary parameters in `example/index.html`.

## Contributing

We welcome your bug reports and pull requests.

Please see our [contribution guide](CONTRIBUTING.md).

## License

This project is published under the [MIT license](LICENSE.md).
