# Keywords 

* [dontRunOn](#dontrunon)
* [elementCount](#elementcount)
* [getVersionNumbers](#getversionnumbers)
* [screenSize](#screensize)
* [setCheckbox](#setcheckbox)
* [setDropdown](#setdropdown)

## dontRunOn

### Purpose

Add the ability to exit a test early if we do not want to run on a specific environment

### Parameters

The ```dontRunOn(['environment'])``` keyword accepts an array of environments such as ```int```,```test``` or ```live```.

### How it works

It compares the array to the current environment it is testing against (Usually provided by the ```ENV``` variable in the ```.env``` file)

### Example

```
browser.page.<page>.dontRunOn(['live']);
```

## elementCount

### Purpose

Read the number of elements that match a certain criteria

### Parameters

* The ```elementCount(locateStrategy, selector, count)``` keyword has three required parameters:
  * ```locateStrategy``` - can be something like ```css selector``` or ```xpath``` and is based on the selector
  * ```selector``` - is way in which we identify the element 
  * ```count``` - is the number of items that we are expecting there to be

### How it works

It checks the number of elements which match the selector and if it does not match the count given then it will fail the assertion.

### Example

```
browser.page.<page>.assert.elementCount('css selector', 'ol li', 7);
```

## getVersionNumbers

### Purpose

This extracts the version number of a product from the HTML source

### Parameters

The ```getVersionNumber(['productName'])``` keyword accepts an array of productNames such as ```orbit``` or ```searchbox-app```.

### How it works

It reads in the HTML source of a page and then parses it to look for the ```productName``` which is of the format ```productName/xx.yy.zz```. Where ```xx.yy.zz``` are the version numbers.

### Example

```
browser.page.<page>.getVersionNumbers(['productName']);
```

## screenSize

### Purpose

This provides a way of us getting the width of the browser window so we can vary the assertions in a test accordingly. For example the layout of modules is different at different screen widths.

The nightwatch supported way for getting the screen width does not work on Firefox, or the iPhone. This function provides an alternate way of doing this.

### How it works

It runs some javascript in the browser which returns the width of the browser window, and returns it in the callback.

### Example

```
browser.screenSize(function (screenSize) {
  if (screenSize >= 600) {
    // verify something on a large screen 
  } else {
    // verify something on a small screen 
  }
});
```

## setCheckbox

### Purpose

This provides a way of setting a checkbox to either true/false regardless of it's current state

### Parameters

* The ```setCheckbox(locateStrategy, selector, value)``` keyword has three required parameters:
  * ```locateStrategy``` - can be something like ```css selector``` or ```xpath``` and is based on the selector
  * ```selector``` - is way in which we identify the element 
  * ```value``` - this can either be ```true``` or ```false``` depending on whether we want it checked or not

### How it works

It checks the current value of the checkbox and if it does not match the value given then it will change it to be the correct value, however if it is the correct value then it will carry on without changing anything.

### Example

```
browser.page.object.setCheckbox('css selector', '[name="fig_uk"]', true)
```

## setDropdown

### Purpose

This provides a way of setting a select dropdown option

### Parameters

* The ```setDropdown(selector, value)``` keyword has two required parameters:
  * ```selector``` - is way in which we identify the element 
  * ```value``` - is the value which is provided inside the ```<option value="XXX">```

### How it works

It clicks the dropdown menu to show the options and then selects the appropriate value

### Example

```
browser.page.object.setDropdown('bodyColor', '#77BC30')
```