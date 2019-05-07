# Location picker Smart Widget UI (AngularJS)

With the location picker smart widget you can simply implement a location picker in any page.

You will also need the BFF package in order to get the location picker smart widget to work: [http://github.com/digipolisantwerp/location-picker_service_nodejs](http://github.com/digipolisantwerp/location-picker_service_nodejs)

<img src="screenshot.png" alt="Location picker screenshot" width="410" style="max-width:100%;width:100%">

There is a demo app, see below for instructions on running it.

## Changes

### v1.0.0

- original release

## How to use

### Installing

To install this package use bower

`bower install 'https://github.com/digipolisantwerp/location-picker_widget_ng1.git#^1.x.x'`.

Include `akit.component.locationPickerWidget` as module.

### In your template

```html
<aui-location-picker-widget
  url="http://localhost:3000/api/bff">
</aui-location-picker-widget>
```

### Supported attributes

#### **url**

`string` BFF URL.

## Run the demo app

Run `npm install && bower install`.

Then run `gulp build && gulp serve`, then navigate to `./example/index.html' in the browser.

To interact with the location picker widget you will have to set up the corresponding BFF service,
as well as adjust necessary parameters in `example/index.html`.

### Developing

Please refer to the [contributing guide](CONTRIBUTING.md).
