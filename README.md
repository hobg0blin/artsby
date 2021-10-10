![The artsby logo in comic sans](static/img/header.png)
# Artsby

### [Demo Site](https://brondle.github.io/artsby_demo/). 

Artsby is a [Gatsby](https://www.gatsbyjs.com/) boilerplate for digital art exhibits (it generates static sites, so it’s ideal for static artworks, [p5.js](https://p5js.org/) sketches or anything without a server).

Hosting a bunch of different works, with a bunch of different potential dependencies, is a huge hassle. This just takes that out of the equation by keeping them all isolated in their own folders and putting them into iframes, for you or your audience’s viewing pleasure.

This is based on a framework I built for the [generative unfoldings](https://generative-unfoldings.mit.edu/) exhibit at MIT. 


## Setup

There’s some basic content in here that you’ll want to remove for your own work: just clear out `src/works` and `static/works`.

Clone the repo and run `npm install`.

In `static/works`, put folders containing your digital artworks. As long as there’s an index.html at the root of each folder, it should display when the site builds.

In `static/data`, put your exhibit info in `about.json` (it takes HTML), and each artist’s info in `work_info.json`:

#### Sample About
```
{
  "about_title": "My Cool Art Exhibition",
  "about_text": "This is my cool art exhibition. Check it out!",
  "header_image": "img/header.png"
}
```

#### Sample Artist Info
```
{
  "works": [{
    "url": "rectangles", // this should be the same as the folder name in static/works
    "name": "Rectangles",
    "altText": "A large number of multi-colored rectangles layered over each other.", //alt text for the homepage image
    "artist": "Brent Bailey",
    "bio": "Brent Bailey made this boilerplate."
  }]
}
```



In `static/img`, for the homepage, you can put images of each artwork titled with the same name as the artwork’s folder in `static/works`, and it’ll auto-populate the homepage with them. You can add your own header image in there, whatever you want.

Once everything’s set up, run `setup.sh` - this just copies the index.html files from the works to the src folder, because I haven’t found a less dumb way to get this to work.

#### Bing bang boom - you’ve got an art exhibit! 

You’ll have to run `gatsby build` once to get everything in the right place, but then you can play around with it -

Run `gatsby develop` to get your development site running, and `gatsby build` to create the final version when you’re satisfied. 

You might want to set your [site metadata](https://www.gatsbyjs.com/docs/add-page-metadata/) in gatsby-config if you care about things like SEO.

By default, all filepaths just point to root. If you’re deploying to GitHub Pages, you’ll [want to set your path prefix](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/) in `gatsby-config.js` and make sure you’re prefixing your paths when you build, but if you use FTP or something simple you should be fine!

## Known Bugs

If you’re working with p5 and relying on windowWidth, the fullscreen button won’t automatically change your sketch width - you’ll have to reset your sketch when the windowWidth changes.
