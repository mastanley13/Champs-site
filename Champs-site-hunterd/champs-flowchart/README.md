# Champ's Dog House - GoHighLevel Guide

This interactive website serves as a comprehensive guide for Champ's Dog House employees to navigate and utilize GoHighLevel features effectively.

## Features

- Interactive flowchart interface
- Responsive design for all devices
- Tooltips with additional information
- Modal windows for detailed views
- Smooth scrolling navigation
- Direct links to GoHighLevel features

## Setup Instructions

1. Clone this repository to your local machine
2. Add your logo image to the `images` directory:
   - Name: `logo.png`
   - Recommended size: 200x60 pixels
   - Format: PNG with transparency

3. Open `index.html` in a web browser to view the website

## File Structure

```
champs-flowchart/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── images/            # Image assets
│   └── logo.png       # Company logo
└── README.md          # This file
```

## Customization

### Colors
The website uses a teal and gray color scheme. To modify the colors, update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #008080;    /* Teal */
    --secondary-color: #4a4a4a;  /* Gray */
    --accent-color: #e0e0e0;     /* Light Gray */
    --background-color: #ffffff;
    --text-color: #333333;
    --hover-color: #006666;      /* Darker Teal */
}
```

### Content
To update the content:
1. Modify the text in `index.html` for static content
2. Update the `tooltipContent` object in `script.js` for tooltips
3. Edit the modal content in the respective functions in `script.js`

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Maintenance

### Adding New Features
1. Add new HTML elements in `index.html`
2. Style them in `styles.css`
3. Add interactivity in `script.js`

### Updating Links
All GoHighLevel links are in the `script.js` file. Update them as needed:

```javascript
case 'home':
    window.open('https://app.gohighlevel.com/dashboard', '_blank');
    break;
```

## Support

For technical support or questions, please contact:
- Email: support@champsdoghouse.com
- Phone: [Your Support Phone Number]

## License

© 2024 Champ's Dog House. All rights reserved. 