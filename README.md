# La Bella Cucina — Restaurant Website

This is a simple multi-page restaurant website built with HTML, Tailwind CSS classes (via CDN), and vanilla JavaScript. Images are represented using Unsplash-style placeholders. Use these files to preview, adapt, or deploy a static site.

Files
- index.html — Home page with hero, featured menu, reservation form, and modal details.
- about.html — About page with story, team, philosophy, and photos.
- contact.html — Contact page with contact details, a contact form, and a map placeholder.
- assets/js/main.js — JavaScript for interactive features (mobile menu, menu modal, simple filtering, reservation & contact form handling).

Images
All <img> tags use a placeholder format to indicate the kind of image to replace them with. The placeholder format used is:

  {{unsplash: a detailed description of the image}}

Replace these src values with actual image URLs from Unsplash or your own images when deploying. For example:

  <img src="{{unsplash: close up of a beautifully plated Italian pasta with basil and parmesan}}" ...>

could be replaced with:

  <img src="https://images.unsplash.com/photo-..." ...>

Usage
1. Download the files to a folder.
2. Open index.html in your browser to view the site. Because this is a static site, no server is required for basic usage.
3. To enable styling, the project uses TailwindCSS via CDN (script tag included in each HTML file). For production builds or custom Tailwind configurations, consider installing Tailwind locally and generating a stylesheet.

Interactive features (client-side only)
- Mobile menu toggle in the header.
- Menu item modal to view item details.
- Filter menu items by category (All / Starters / Mains / Desserts).
- Reservation and contact forms perform basic client-side validation and then store entries in localStorage as a mock backend.

Notes
- This project is a front-end static prototype and does not connect to a server. Replace mock behaviors (localStorage) with real API calls when integrating with a backend.
- Replace the placeholder image src values with real images before going live.

License
Use and adapt this template freely for building a restaurant website.
