# 🏛️ DIMORA - Italian Heritage Hotels Website

A luxury Italian heritage hotels website featuring elegant design, smooth animations, and modern web technologies.

---

## 📁 Project Structure

```
dimora/
├── index.html          # Main HTML file (clean, links external files)
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── main.js         # All JavaScript interactions
└── README.md           # Project documentation
```

---

## 🎨 Design Features

### **Color Palette**
- **Cream**: `#F9F7F2` - Primary background
- **Olive Dark**: `#32382D` - Text and accents
- **Olive Light**: `#556B2F` - Secondary accents
- **Gold**: `#C5A059` - Call-to-action and highlights
- **White**: `#FFFFFF` - Clean overlays

### **Typography**
- **Playfair Display** - Elegant serif for headings
- **Cinzel** - Logo and brand identity
- **Lato** - Clean sans-serif for body text

---

## ✨ Key Features

### 1. **Fixed Navigation Header**
- Transparent initially, becomes solid on scroll
- Smooth color transitions
- Responsive design
- Hover effects on navigation links

### 2. **Hero Section**
- Full-screen immersive background
- Ken Burns zoom effect animation
- Glassmorphism search bar
- Animated title with fade-up effect

### 3. **Search Functionality**
- Location, dates, and guest inputs
- Glassmorphism design with backdrop blur
- Fully responsive (wraps on mobile)
- JavaScript validation

### 4. **Collection Cards**
- Responsive grid layout (auto-fit)
- Hover effects with image zoom
- Smooth gradient overlays
- Animated content reveal on hover
- 6 curated collections

### 5. **Visual Gallery**
- Masonry-style grid layout
- First item spans 2x2 for emphasis
- Hover zoom effects
- Optimized image loading

### 6. **Footer**
- Multi-column responsive layout
- Newsletter subscription form
- Social links and sitemap
- Brand information

---

## 🛠️ Technical Implementation

### **CSS Features** (`css/styles.css`)
- CSS Variables for easy theming
- Flexbox and CSS Grid layouts
- Smooth cubic-bezier transitions
- Responsive media queries
- CSS animations and keyframes
- Glassmorphism effects
- Advanced hover states

### **JavaScript Features** (`js/main.js`)
1. **Header Scroll Effect** - Dynamic background on scroll
2. **Smooth Scrolling** - Anchor link navigation
3. **Search Functionality** - Form validation and handling
4. **Intersection Observer** - Lazy loading and scroll animations
5. **Newsletter Subscription** - Email validation
6. **Parallax Effects** - Hero background movement
7. **Card Click Tracking** - Analytics ready
8. **Performance Optimization** - Debounced scroll handlers

---

## 🚀 Getting Started

### **1. Basic Setup**
Simply open `index.html` in any modern browser. No build process required!

### **2. Local Development**
For live reloading during development:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

### **3. Customization**

#### **Change Colors**
Edit CSS variables in `css/styles.css`:
```css
:root {
    --color-cream: #F9F7F2;
    --color-olive-dark: #32382D;
    --color-gold: #C5A059;
    /* Add your custom colors */
}
```

#### **Change Typography**
Update Google Fonts import in `index.html` and CSS variables:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap">
```

#### **Add More Collections**
Copy a collection card block in `index.html`:
```html
<div class="collection-card">
    <div class="card-img-wrapper">
        <img src="YOUR_IMAGE_URL" alt="Description" class="card-bg">
    </div>
    <div class="card-overlay">
        <span class="card-meta">X Properties</span>
        <h3 class="card-title">Your Title</h3>
        <a href="#" class="card-btn-link">Explore Collection</a>
    </div>
</div>
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 900px and above
- **Tablet**: 768px - 899px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## 🎯 Performance Optimizations

1. **Lazy Loading** - Images load as they enter viewport
2. **Debounced Scroll** - Prevents excessive event triggers
3. **CSS Transforms** - Hardware-accelerated animations
4. **Optimized Images** - Using Unsplash CDN with format/quality params
5. **Preconnect Links** - Faster font loading

---

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ IE11 (requires polyfills)

---

## 📋 Future Enhancements

### **Planned Features**
- [ ] Mobile hamburger menu
- [ ] Advanced search filters
- [ ] Property detail pages
- [ ] Booking system integration
- [ ] User authentication
- [ ] Favorites/wishlist functionality
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Blog/journal section
- [ ] Interactive map view

### **Technical Improvements**
- [ ] Progressive Web App (PWA)
- [ ] Image optimization (WebP format)
- [ ] Service worker for offline support
- [ ] Backend API integration
- [ ] Database for dynamic content
- [ ] CMS integration
- [ ] SEO optimization
- [ ] Analytics implementation

---

## 🎨 Design Principles

1. **Luxury & Elegance** - High-end hospitality aesthetic
2. **Italian Heritage** - Classical European design elements
3. **Minimalism** - Clean layouts, ample whitespace
4. **Storytelling** - Visual narrative through imagery
5. **User Experience** - Intuitive navigation and interactions

---

## 📸 Image Sources

All images are from [Unsplash](https://unsplash.com) - royalty-free stock photos.

**Replace with your own images:**
- Hero background: `.hero-bg` background-image
- Collection cards: `.card-bg` src attributes
- Gallery images: `.gallery-img` src attributes

---

## 🤝 Contributing

Feel free to fork this project and add your own enhancements!

### **Areas for Contribution**
- Additional page templates
- More collection categories
- Advanced JavaScript features
- Accessibility improvements
- Performance optimizations
- Documentation updates

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 📞 Support

For questions or issues:
- Check browser console for errors
- Ensure all file paths are correct
- Verify CSS and JS files are loading
- Test in latest browser versions

---

## 🏗️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Typography
- **Unsplash** - Stock imagery

---

## 🌟 Credits

**Design & Development**: DIMORA Team  
**Inspiration**: Italian Renaissance architecture and luxury hospitality

---

**Happy Coding! 🚀**

*Transform your heritage hotel website into an unforgettable digital experience.*
