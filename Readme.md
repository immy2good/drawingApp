# Drawing App

An interactive drawing application built with [p5.js](https://p5js.org/) as part of the University of London BSc Computer Science course "Intro to Programming 2" (ITP2) — March 2025.

## Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Running the App](#running-the-app)
* [Accessing the Front End](#accessing-the-front-end)
* [Project Structure](#project-structure)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## Demo

> *Screenshot or GIF of the app in action*

You can see and try the live version of the app here:

**GitHub Pages:**

```
https://immy2good.github.io/drawingApp/
```

*(If GitHub Pages is not enabled, see [Accessing the Front End](#accessing-the-front-end) below to run locally.)*

## Features

* **Freehand Tool**: Draw freeform strokes with adjustable brush size and colour.
* **Line Tool**: Draw straight lines between two points.
* **Spray Can Tool**: Simulate a spray-paint effect with customizable density.
* **Mirror Draw Tool**: Draw symmetric patterns with real-time mirroring.
* **Stamp Tool**: Place pre-defined shapes or images onto the canvas.
* **Cut & Scissor Tools**: Cut out regions of the drawing and move or remove them.
* **Shape Tool**: Draw basic shapes (e.g., rectangles, ellipses).
* **Colour Palette**: Choose from a wide range of colours.
* **Stroke Settings**: Adjust line thickness and opacity.
* **Undo/Redo**: Step backward or forward through your drawing history.
* **Save as Image**: Export your artwork as a PNG file.
* **Clear Canvas**: Reset the canvas to a blank state.

## Tech Stack

* **p5.js** (and p5.dom)
* Vanilla JavaScript (ES6+)
* HTML5 & CSS3

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/immy2good/drawingApp.git
   cd drawingApp
   ```

2. **No build step required.** All dependencies are included via local `lib/` files or CDN links in `index.html`.

## Running the App

You have two options:

1. **Open directly in browser:**

   * Double-click `index.html` in the project root. This works in most modern browsers.

2. **Serve with a simple HTTP server (recommended):**

   ```bash
   # Python 3
   python3 -m http.server 8000

   # Or with Node.js
   npx http-server -p 8000
   ```

   Then open `http://localhost:8000` in your browser.

## Accessing the Front End

* **Local:** Follow the steps under [Running the App](#running-the-app) to launch locally at `http://localhost:8000` or by opening `index.html` directly.

* **Online (GitHub Pages):**

  ```
  https://immy2good.github.io/drawingApp/
  ```

  If the live site is not yet published, you can enable GitHub Pages in the repository settings and use the above URL.

## Project Structure

```
drawingApp/
├── assets/               # Icon and image assets
├── lib/                  # p5.js and DOM library files
├── colourPalette.js      # Colour picker container
├── helperFunctions.js    # Handlers for clear/save buttons
├── index.html            # Entry point & script imports
├── shapeTool.js          # Basic shape drawing tool
├── sketch.js             # p5.js sketch (setup & draw)
├── style.css             # Layout & styling
├── toolbox.js            # Tool management container
├── tools/                # (Optional) Directory for additional tools
│   ├── cutTool.js
│   ├── freehandTool.js
│   ├── lineToTool.js
│   ├── mirrorDrawTool.js
│   ├── scissorTool.js
│   ├── sprayCanTool.js
│   ├── stampTool.js
│   └── undoRedoManager.js
└── README.md             # This file
```

## Contributing

Contributions are welcome! Feel free to:

* Open issues for bugs or feature requests.
* Submit pull requests for improvements.

Please follow standard GitHub workflow:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to your fork (`git push origin feature/name`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

Developed by Immy (immy2good).

* GitHub: [immy2good](https://github.com/immy2good)
* Email: [imran2good@hotmail.com](mailto:imran2good@hotmail.com)
