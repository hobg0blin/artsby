![The artsby logo in comic sans](static/img/header.png)
# Artsby

Artsby is a Gatsby boilerplate for digital art exhibits (it generates static sites, so it’s ideal for things like [p5.js](https://p5js.org/) sketches or anything without a server).

Hosting a bunch of different works, with a bunch of different potential dependencies, is a huge hassle. This just takes that out of the equation by keeping them all isolated in their own folders and putting them into iframes, for you our your audience’s viewing pleasure.

This is based on a framework I built for the [generative unfoldings](https://generative-unfoldings.mit.edu/) exhibit at MIT. 


## Setup

Clone the repo and run `npm install`.

In `static/works`, put folders containing your digital artworks. As long as there’s an index.html at the root of the folder, it should display when the site builds.

In `static/data`, put your exhibit info in about.json (it takes HTML), and each artist’s info in work_info.json - the `url` attribute should be the name of the artwork’s folder in `static/works`.

In `static/img`, for the homepage, you can put images of each artwork titled with the same name as the artwork’s folder in `static/works`, and it’ll auto-populate the homepage with them.

Once everything’s set up, run `setup.sh` - this just copies the index.html files from the works to the src folder, because I haven’t found a less dumb way to get this to work.

Bing bang boom you’ve got an art exhibit! 

You’ll have to run `gatsby build` once to get everything in the right place, but then you can play around with it -

Run `gatsby develop` to get your development site running, and `gatsby build` to create the final version when you’re satisfied. You can see the sample site [here](https://brondle.github.io/artsby_demo/) - if you’re deploying to GitHub, you’ll want to set your site metadata in `gatsby-config.js`, but if you use FTP or something simple you should be fine!
