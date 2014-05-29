node-pdf-generator
==================

A Node web server to generate PDF's from HTML that uses the [wkhtmltopdf](http://code.google.com/p/wkhtmltopdf/) command line tool.

## Installation

### Prerequisites

Install the wkhtmltopdf command line tool on your system ([download](http://code.google.com/p/wkhtmltopdf/downloads/list)).  

Add `wkhtmltopdf` to your PATH, the server will not be able to use wkhtmltopdf without this.

### Setup

Install npm, and then do this:

    npm install node-pdf-generator


## Usage

Basic usage with default configuration:

    node index.js

The server can be configured using any method supported by [*nconf*](https://npmjs.org/package/nconf), for example from a bash shell:

    port=1338 bindIp=0.0.0.0 node index.js
