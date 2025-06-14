const galleryImages = [
    {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        alt: 'Mountain',
        caption: 'Majestic Mountain'
    },
    {
        src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80',
        alt: 'Forest',
        caption: 'Enchanted Forest'
    },
    {
        src: 'https://images.unsplash.com/photo-1486308510493-cb7d1583215a?auto=format&fit=crop&w=600&q=80',
        alt: 'Desert',
        caption: 'Vast Desert'
    },
    {
        src: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a008e?auto=format&fit=crop&w=600&q=80',
        alt: 'Beach',
        caption: 'Serene Beach'
    },
    {
        src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80',
        alt: 'City',
        caption: 'City Lights'
    },
    {
        src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80',
        alt: 'Snow',
        caption: 'Snowy Landscape'
    },
];

const gallery = document.getElementById('gallery');

function createGalleryItem({ src, alt, caption }) {
    const div = document.createElement('div');
    div.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    const captionEl = document.createElement('div');
    captionEl.className = 'caption';
    captionEl.textContent = caption;

    div.appendChild(img);
    div.appendChild(captionEl);

    div.addEventListener('click', () => {
        window.open(src, '_blank');
    });

    return div;
}

function renderGallery(items) {
    items.forEach(item => {
        const galleryItem = createGalleryItem(item);
        gallery.appendChild(galleryItem);
    });
}

renderGallery(galleryImages);