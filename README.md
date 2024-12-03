# Image Gallery

A simple website that displays a random image every time the page is reloaded.

## Features
- Displays a different image on every page reload.
- Caption overlay at the bottom of the page.
- Uses a folder of images stored locally.

## Project Structure
```
/images           # Folder containing images
  example1.jpg
  example2.jpg
  example3.jpg
/scripts
  main.js         # JavaScript file to load random images
/styles
  styles.css      # CSS file for styling the page
index.html        # Main HTML file for the webpage
images.json       # JSON file containing paths to the images
```

## Setup

1. Fork the repository:

2. Once you've got the images you want to display, put them in a folder titled `/images` and run the provided `jsongenerator.js` to make sure the site can properly load them.

3. Upload the newly generated `images.json` to your fork.

4. Enable GitHub Pages for your fork.

5. Open you GitHub pages site in your browser to see your images!

## Notes
- The images are loaded from the `images.json` file, which contains paths to the images in the `/images` directory.
- The CSS file (`styles.css`) handles the background image styling, and the JavaScript (`main.js`) randomly selects an image from the `images.json` file.

## License
This project is open source and available under the GNU General Public License v3.0 License.
