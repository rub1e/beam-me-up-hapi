# beam-me-up-hapi

## What?

A simple upload/download system using the hapi framework  

## Why?  

For our weekly project, the 5th [Founders & Coders](http://www.foundersandcoders.com/) cohort is building a version of instagram from the ground up (having previously built twitter from the ground up!). This repository is a simple template for using a form to upload image files to a server created with the hapi framework, and then serving those files for the browser to display.  

At the insistence of @rjmk, we have avoided using the popular node module [multiparty](https://github.com/andrewrk/node-multiparty) to parse the form data, but this is something that users may want to consider as they move beyond this basic template.  

## How?  

* We assume you have node installed already
* Clone this repository
* Run `npm install` to install the dependencies

### Step 0

So, we need to set up a quick Hapi server to serve us our basic index page. For testing purposes, we are going to move our endpoints out into a separate module. Hapi allows us to provide various routing objects as an array to a server object's `route` method, so that's what we'll do.

The client side code for setting up file uploads is rather anti-climactic. The form in our `index.html` does a lot of heavy lifting for us. It'll send over a post request to the server with the file we upload in the body.



## Notes

Buffer is an object in node -- beware lack of deep equal!
