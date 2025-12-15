document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GLOBAL VARIABLES & SELECTORS ---
    const header = document.getElementById('main-header');
    const heroBg = document.querySelector('.hero-bg');
    const heroContent = document.querySelector('.hero-content');
    const cards = document.querySelectorAll('.collection-card');
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-group input[type="text"]');
    
    // --- 2. HEADER & PARALLAX SCROLL EFFECTS ---
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Header Glassmorphism Toggle
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hero Parallax (Slower scroll speed for background)
        if (scrollY < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
            heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
            heroContent.style.opacity = 1 - (scrollY / 700);
        }
    });

    // --- 3. SCROLL REVEAL ANIMATION (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal class to sections and cards
    document.querySelectorAll('.collection-card, .section-header, .gallery-item').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // --- 4. DYNAMIC INJECTION: FILTER BUTTONS ---
    // Injecting UI elements not present in HTML
    const collectionsSection = document.querySelector('#collections .container');
    const cardsGrid = document.querySelector('.cards-grid');
    
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container reveal';
    
    const types = ['All', 'Castles', 'Villas', 'Convents', 'Coastal'];
    
    types.forEach(type => {
        const btn = document.createElement('button');
        btn.innerText = type;
        btn.className = type === 'All' ? 'filter-btn active' : 'filter-btn';
        btn.onclick = () => filterByType(type, btn);
        filterContainer.appendChild(btn);
    });

    // Insert before the grid
    collectionsSection.insertBefore(filterContainer, cardsGrid);

    // --- 5. DYNAMIC INJECTION: HEART ICONS ---
    cards.forEach(card => {
        const heart = document.createElement('div');
        heart.className = 'card-heart';
        heart.innerHTML = '♥'; // Simple heart char, could be SVG
        heart.onclick = (e) => addToFavorites(e, heart);
        card.appendChild(heart);
    });

    // --- 6. CORE FUNCTIONS ---

    // Filter Functionality
    function filterByType(type, clickedBtn) {
        // Update active button state
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        clickedBtn.classList.add('active');

        // Filter Logic
        cards.forEach(card => {
            const title = card.querySelector('.card-title').innerText;
            
            // Basic matching logic based on title content
            if (type === 'All') {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                if (title.includes(type) || (type === 'Coastal' && title.includes('Coastal'))) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 400); // Wait for transition
                }
            }
        });
    }

    // Search Functionality (Linked to Hero Search)
    window.search = function() {
        const query = searchInput.value.toLowerCase();
        
        // Scroll to collections
        document.getElementById('collections').scrollIntoView({ behavior: 'smooth' });

        // Filter cards
        cards.forEach(card => {
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Bind click to search button
    searchBtn.addEventListener('click', window.search);

    // Add To Favorites
    function addToFavorites(e, heartElement) {
        e.stopPropagation(); // Prevent card click
        heartElement.classList.toggle('active');
        
        const isAdded = heartElement.classList.contains('active');
        showToast(isAdded ? 'Added to Dream List' : 'Removed from Dream List');
    }

    // Toast Notification System
    function showToast(message) {
        // Create toast if doesn't exist
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        toast.innerText = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
});