# GATCOIN Javascript Challenge

## Overview
To complete this challenge, you will need to write a simple React web app, and provide us the source files to be built.

The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of screens and an API feed. We will also assess the generated HTML, CSS, and JS output.

This challenge is expected to take about 1-2 hours.

## The Challenge
It's pretty simple. Using the provided screens as a reference, you'll need to build a set of React components to render the app. You'll also need to request a JSON feed, filter that data, and use the relevant fields.

Although this is a basic exercise, we'll be looking for simple, and well-designed code in the submission.

Please include a README with setup instructions, and any tests or other documentation you created as part of your solution.

Also, add the following info to your README:

* How did you decide which technologies to use as part of your solution?
* Are there any improvements you could make to your submission?
* What would you do differently if you were allocated more time?

## Details
You will need to build the following 3 pages with React:

* A "Home" page
* A "Series" page
* A "Movies" page

`Please create components for each part of the page (eg. header, content, etc). You may use any CSS framework you wish (
Bootstrap, Material-UI, Semantic-UI) or none at all. The provided screens are a reference and you need not mimix it exactly. Your final product styles may differ depending on the framework you use.

The pages only need to be usable on a computer.

You can assume that you do not have to support legacy browsers without features such as fetch or flexbox.

## "Home" Page
Refer to the screens/1-home.jpg screen.`

This will be your index.html screen.

You will need to display 2 tiles, which link to the "Series" page and the "Movies" page.

## "Series" and "Movies" Pages
Refer to the screens/2-series.jpg and screens/3-movies.jpg screens.

For each page you will need to fetch this JSON feed [feed/sample.json](https://gist.githubusercontent.com/jkongie/075ead69b9aaeb45581b995fbeef4ad6/raw/2688f82b789bddbab24875f4395a83aca5909d5a/feed.json), then:

* Display the first 21 entries
* Where the entry has a releaseYear attribute value >= 2010
* Sorted by the title attribute value in ascending alphanumeric order

For the "Series" page filter on:

* Where the entry has a programType attribute value of series

For the "Movies" page filter on:

* Where the entry has a programType attribute value of movie

The attributes you should use to display the entries are:

`title`
`images` → `Poster Art` → `url`

## Submission

You have a few options to submit:

* Share the repo on Github
* Email it to Sion Resources
* Email directly to me james@gatcoin.io

If you have any questions please email me or call me on +65 84386269

Thanks and good luck!