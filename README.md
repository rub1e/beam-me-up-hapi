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

The client side code for setting up file uploads is rather anti-climactic. The form in our `index.html` does a lot of heavy lifting for us. It'll send over a POST request to the server with the file we upload in the body. Eventually, we'll want this to create a new file in the `pix` directory (as codified in our tests.js file).

So, according to the form, we should be expecting a POST request at `/upload`. There, we will want to get something out of the request object, though we're not sure where we'll find it.

See if you can add an endpoint that logs in your terminal the request object for an attempted upload, then check out **branch 1** to see how we did it.

### Step 1

**Liftoff! Now we can see things are wired up right. Next challenge, finding out where the file is in the request object and working out how to deal with it.**

After you've tried uploading a picture, you should see in your terminal a rather large request object. Scrolling through it you might spot some likely looking properties. These properties actually come from Hapi's automatic parsing of the form submission. Thanks, Hapi! :)

Now would be a good time to look at the [`fs` core module docs](https://nodejs.org/api/fs.html) and start thinking about how to write the information we get to a file (in a currently non-existent `pix` directory!). Once you've had a think, skip over to **branch 2**.

### Step 2

Browsers sometimes split the data they receive into chunks and deliver them piecemeal to the server. A lovely abstraction for sources of data that may or may not be coming along all at once is *streams*. For this reason, we create a new write stream pointing at the file we want and then we push the data we receive down it.

Test number one passes! We now want to set up an endpoint for serving the picture. We're going to be lazy here, and just check that the file name of the file that's being sent is correct. This is definitely a place we might strengthen our tests in the future.

Let's have an endpoint exposed at `/pic/{picname}` that will return the file in `/pix/` that is called whatever `{picname}` equals. Have a look in **branch 3** to see how we've done it.

### Step 3

Yep, Hapi makes it pretty easy! Just pass the file *path* to the reply's file *method*! **Have you tried uploading a file with a name that doesn't have an extension? Have you then tried getting that file?** You may well have had a download initiated rather than seeing a picture show up. **Let's add in a `view` endpoint so that we can see the image. (HINT: think DOMstring (i.e. HTML as a string)).** Have a look at [the documentation for Hapi's `reply` interface](http://hapijs.com/api#reply-interface). You can then head back to **master** to see how we managed everything!



## Notes

Buffer is an object in node -- beware lack of deep equal!
