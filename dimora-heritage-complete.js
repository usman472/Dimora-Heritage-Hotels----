/* ============================================
   DIMORA HERITAGE - Complete JavaScript
   Premium Italian Heritage Hotels Directory
   ============================================ */

// ============================================
// DOM Ready - Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setFooterYear();
    loadHotelData();
    initializeEventListeners();
    console.log('Dimora Heritage initialized successfully');
});

// ============================================
// Set Dynamic Footer Year
// ============================================
function setFooterYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// Load Hotel Data from JSON
// ============================================
async function loadHotelData() {
    try {
        const response = await fetch('dimora-data.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        renderHotels(data.hotels);
        
    } catch (error) {
        console.error('Error loading hotel data:', error);
        displayErrorMessage();
    }
}

// ============================================
// Render Hotels to DOM
// ============================================
function renderHotels(hotels) {
    const container = document.getElementById('hotelsContainer');
    
    if (!container) {
        console.error('Hotels container not found');
        return;
    }
    
    // Clear loading message if any
    container.innerHTML = '';
    
    // Render each hotel
    hotels.forEach((hotel, index) => {
        const hotelCard = createHotelCard(hotel);
        container.appendChild(hotelCard);
        
        // Insert ad space every 3 hotels
        if ((index + 1) % 3 === 0 && index < hotels.length - 1) {
            const adSpace = createAdSpace();
            container.appendChild(adSpace);
        }
    });
    
    console.log(`Loaded ${hotels.length} hotels`);
}

// ============================================
// Create Hotel Card Element
// ============================================
function createHotelCard(hotel) {
    const article = document.createElement('article');
    article.className = 'hotel-card';
    
    // Extract starting price
    const startingPrice = hotel.price_range.split('-')[0];
    
    // Create amenities HTML (show first 3)
    const amenitiesHTML = hotel.amenities
        .slice(0, 3)
        .map(amenity => `<span class="amenity-tag">${escapeHtml(amenity)}</span>`)
        .join('');
    
    // Truncate description to ~100 words
    const shortDesc = truncateText(hotel.short_description, 100);
    
    article.innerHTML = `
        <div class="hotel-image-wrapper">
            <img 
                src="${escapeHtml(hotel.images[0])}" 
                alt="${escapeHtml(hotel.name)} - ${escapeHtml(hotel.region)}"
                class="hotel-image"
                loading="lazy"
            >
        </div>
        <div class="hotel-content">
            <h3 class="hotel-name">${escapeHtml(hotel.name)}</h3>
            <div class="hotel-location">${escapeHtml(hotel.city)}, ${escapeHtml(hotel.region)}</div>
            <p class="hotel-tagline">${escapeHtml(hotel.tagline)}</p>
            <p class="hotel-description">${escapeHtml(shortDesc)}</p>
            <div class="amenities">
                ${amenitiesHTML}
            </div>
            <div class="hotel-footer">
                <div class="price">€${escapeHtml(startingPrice)}<span> / night</span></div>
                <a 
                    href="${escapeHtml(hotel.booking_url)}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn btn-primary"
                    aria-label="Reserve ${escapeHtml(hotel.name)}"
                >
                    <span>Reserve</span>
                </a>
            </div>
        </div>
    `;
    
    return article;
}

// ============================================
// Create Ad Space Element
// ============================================
function createAdSpace() {
    const adDiv = document.createElement('div');
    adDiv.className = 'ad-space';
    adDiv.style.gridColumn = '1 / -1';
    adDiv.innerHTML = '<p>📢 AdSense Ad Space (728x90 or 336x280)</p>';
    return adDiv;
}

// ============================================
// Display Error Message
// ============================================
function displayErrorMessage() {
    const container = document.getElementById('hotelsContainer');
    
    if (container) {
        container.innerHTML = `
            <div class="ad-space" style="grid-column: 1 / -1; background: #fff3cd; border-color: #ffc107; color: #856404;">
                <p><strong>Unable to load hotels at this time.</strong></p>
                <p>Please refresh the page or contact us for assistance.</p>
            </div>
        `;
    }
}

// ============================================
// Initialize Event Listeners
// ============================================
function initializeEventListeners() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for lazy loading animations (optional)
    observeHotelCards();
}

// ============================================
// Intersection Observer for Animations
// ============================================
function observeHotelCards() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    // Observe all hotel cards
    setTimeout(() => {
        document.querySelectorAll('.hotel-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

// ============================================
// Utility Functions
// ============================================

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Truncate text to specified word count
 */
function truncateText(text, maxWords) {
    const words = text.split(' ');
    if (words.length <= maxWords) {
        return text;
    }
    return words.slice(0, maxWords).join(' ') + '...';
}

/**
 * Format price with currency
 */
function formatPrice(price) {
    return `€${price}`;
}

/**
 * Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Optional: Search Functionality
// ============================================
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query === '') {
        alert('Please enter a destination or property name to search.');
        searchInput.focus();
    } else {
        alert(`Search for: ${query}\n\nSearch functionality coming soon!`);
        // TODO: Implement actual search filtering
    }
}

// ============================================
// Optional: Filter Hotels by Region
// ============================================
function filterHotelsByRegion(region) {
    const allCards = document.querySelectorAll('.hotel-card');
    
    allCards.forEach(card => {
        const location = card.querySelector('.hotel-location').textContent;
        
        if (region === 'all' || location.includes(region)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// Optional: Sort Hotels by Price
// ============================================
function sortHotelsByPrice(order = 'asc') {
    const container = document.getElementById('hotelsContainer');
    const cards = Array.from(container.querySelectorAll('.hotel-card'));
    
    cards.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.price').textContent.match(/\d+/)[0]);
        const priceB = parseInt(b.querySelector('.price').textContent.match(/\d+/)[0]);
        
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    
    // Re-append sorted cards
    cards.forEach(card => container.appendChild(card));
}

// ============================================
// Optional: Analytics Event Tracking
// ============================================
function trackBookingClick(hotelName, bookingUrl) {
    // Google Analytics tracking (if GA is installed)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
            'event_category': 'Booking',
            'event_label': hotelName,
            'value': bookingUrl
        });
    }
    
    console.log(`Booking clicked: ${hotelName}`);
}

// Add tracking to all booking buttons
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.hotel-card .btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const hotelName = this.closest('.hotel-card')
                    .querySelector('.hotel-name').textContent;
                trackBookingClick(hotelName, this.href);
            });
        });
    }, 1000);
});

// ============================================
// Performance Monitoring
// ============================================
window.addEventListener('load', () => {
    // Log performance metrics
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    }
});

// ============================================
// Export Functions (if using modules)
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadHotelData,
        renderHotels,
        filterHotelsByRegion,
        sortHotelsByPrice
    };
}
