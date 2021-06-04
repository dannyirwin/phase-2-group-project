# SampL

Find your color palette from any image.

## Summary

SampL is a design tool to help designers and developers extract and view vibrant
color palettes from images. The user is able to input an image url from the web,
generate a color palette, and watch the page's theme shift to match. It allows
the user to see their palettes side by side and get an idea how their palette
might affect the page as a whole.

We built this App as a solution to a challenge we face as new developers quite
frequently. We found ourselves building quite a few small apps here and there to
put to practice all that we've been learning. While the purpose of most of these
projects is usually to practice some new technology, it is always important to
keep in mind the user's experience, an huge part of which is the visual design
of the app. SampL can be used to take some design pressure off of these projects
by providing an easy way to get a baseline palette. Just find an image in the
internet that captures the vibe of your user experience and extract the colors.

## Technologies

<img src="https://assets-global.website-files.com/5d9bc5d562ffc2869b470941/5e1f8bd1dc3c511ea5a28a56_icon-rect-tech.png" alt="React Logo" height="126"><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo" height="126">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript Logo" height="126">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/730px-CSS.3.svg.png" alt="CSS Logo" height="126">

## Setup

Clone(`git clone`) this repo to your local machine.
Navigate(`cd <subdirectory name>`) into the newly created directory.

### Set up your backend

This app will work as intended without setting up a backend. If you don't need
to worry about keeping persistent data, you can skip this ste.

The save color palette data is stored in the `db.json` file and uses jason-serve
as a simple backend. To use this file, if you don't already have json-server
installed, in your terminal run `npm install -g json-server`. Then run
`json-server --watch db.json`.

### Set up your front-end

Open a new tab in your terminal and navigate into the directory where the game
files live. First run `npm install` to install the node dependencies. Then run
`npm-start` to view the page.

## Features

## Code Snippets

We treated this app as a fantastic way of practicing writing clean code. We
limited repetition by refactoring our functions to operate differently depending
on the context in which we used them. That way, we could pass around one
function to multiple components which needed to perform similar but not
identical tasks. This way, if we ever need to make a change to a function, it
can be done in one place.

```javascript
const toggleView = (palette = null) => {
  palette === "newPalette"
    ? setMainPalette(newPalette)
    : setMainPalette(palette);
};

const removePalette = (event, id) => {
  event.stopPropagation();
  const newPalettes = palettes.filter(palette => {
    return palette.id !== id;
  });
  setPalettes(newPalettes);
  deletePaletteFromDB(id);
};

const changeTheme = (event, colors) => {
  if (event) {
    event.stopPropagation();
  }
  setTheme(colors);
  colors.forEach((color, i) => {
    document.documentElement.style.setProperty(`--color${i + 1}`, color);
  });
};
```

## Feature Wishlist

- User can choose how many palettes to generate.
- User can add or remove colors from a palette manually.
- Export palettes for embedding.

## Reach out

#### Want to get get in touch or see more of our work?

[Brandon](https://github.com/brandonefields) |
[Danny](https://github.com/dannyirwin)
