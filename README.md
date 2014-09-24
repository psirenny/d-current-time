Derby Current Time
==================

A [Derby JS](http://derbyjs.com) component for keeping track of the current time.

Motivation
----------

This is useful for formatting timestamps relative to a reference time.  
For example, showing the times: *"About a minute ago"* and *"2 days ago"*.

Installation
------------

    $ npm install d-current-time --save

Usage
-----

Create a view:

    <index: element="curent-time">
      <!-- empty -->

Associate your view with the component:

    app.component('current-time', require('d-current-time'));

Use the component:

    <!-- update _page.currentTime every 10 seconds -->
    <current-time path="#root._page.currentTime" period="10000"></current-time>

Options
-------

**path** – **Required**. The path that the current time will be written to.

**period** – How often the current time should be updated. Defaults to `1000` milliseconds.
