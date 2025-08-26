# Zezhen Wu Personal Website

Personal website for Zezhen Wu, Ph.D. - Behavioral Scientist specializing in data science for social impact, AI systems evaluation, and educational interventions.

Website available at [zezhenwu.com](http://zezhenwu.com/).

## Website Structure

The website is built as a static HTML site with three main pages:
- **Home** (`index.html`) - Introduction and overview
- **About** (`about.html`) - Background, current role, and research interests
- **Publications** (`publications.html`) - Complete list of academic publications

## Local Development

To run the website locally, you can use either Python or Node.js:

### Using Python (if installed):
```bash
python3 -m http.server 8000
```

### Using Node.js/npm:
```bash
npm run serve-npm
```

Then open your browser and navigate to `http://localhost:8000`

## Deployment

This is a static website that can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Or any web server

Simply upload all files maintaining the directory structure.

## Directory Structure

```
├── index.html          # Home page
├── about.html          # About page
├── publications.html   # Publications page
├── assets/
│   ├── css/
│   │   └── style.css  # Main stylesheet
│   ├── img/
│   │   ├── zezhen-profile.jpg
│   │   ├── favicon.ico
│   │   └── icons/     # SVG icons
│   └── cv.pdf         # CV document
├── package.json       # NPM scripts
└── README.md          # This file
```

## Technologies Used

- Pure HTML5
- CSS3 with CSS Variables
- Responsive design
- SEO optimized with structured data

## License

MIT License - See LICENSE file for details
