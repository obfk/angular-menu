# Angular Menu

## Running the App

    npm install connect

    npm install server-static

    node server.js
    
## TODO

1. package manager

## Angular FAQ

### Is AngularJS a library, framework, plugin or a browser extension?

>AngularJS fits the definition of a framework the best, even though it's much 
more lightweight than a typical framework and that's why many confuse it with a 
library.

>AngularJS is 100% JavaScript, 100% client-side and compatible with both desktop 
and mobile browsers. So it's definitely not a plugin or some other native browser 
extension.

### Is AngularJS a templating system?

>At the highest level, Angular does look like just another templating system. 
But there is one important reason why the Angular templating system is different, 
that makes it very good fit for application development: bidirectional data binding. 
The template is compiled in the browser and the compilation step produces a live view. 
This means you, the developers, don't need to write code to constantly sync the 
view with the model and the model with the view as in other templating systems.

### What browsers does Angular work with?

>We run our extensive test suite against the following browsers: Safari, Chrome, 
Firefox, Opera 15, IE9 and mobile browsers (Android, Chrome Mobile, iOS Safari). 
See Internet Explorer Compatibility for more details in supporting legacy IE browsers.

### What's Angular's performance like?

>The startup time heavily depends on your network connection, state of the cache, 
browser used and available hardware, but typically we measure bootstrap time in 
tens or hundreds of milliseconds.

>The runtime performance will vary depending on the number and complexity of 
bindings on the page as well as the speed of your backend (for apps that fetch 
data from the backend). Just for an illustration we typically build snappy apps 
with hundreds or thousands of active bindings.

### How big is the angular.js file that I need to include?

>The size of the file is < 36KB compressed and minified.

### Does Angular use the jQuery library?

>Yes, Angular can use jQuery if it's present in your app when the application is 
being bootstrapped. If jQuery is not present in your script path, Angular falls 
back to its own implementation of the subset of jQuery that we call jQLite.

>Angular 1.3 only supports jQuery 2.1 or above. jQuery 1.7 and newer might work 
correctly with Angular but we don't guarantee that.

## Other Notes

### DOM Manipulation

>Stop trying to use jQuery to modify the DOM in controllers. Really. That includes 
adding elements, removing elements, retrieving their contents, showing and hiding 
them. Use built-in directives, or write your own where necessary, to do your DOM 
manipulation.

>If you're struggling to break the habit, consider removing jQuery from your app. 
Really. Angular has the $http service and powerful directives that make it almost 
always unnecessary. Angular's bundled jQLite has a handful of the features most 
commonly used in writing Angular directives, especially binding to events.
