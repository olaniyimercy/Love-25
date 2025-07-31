// Create floating elements
        document.addEventListener('DOMContentLoaded', function() {
            const floatingContainer = document.querySelector('.floating-elements');
            const elements = ['heart', 'heart', 'kiss-wink-heart', 'gift', 'calendar-alt', 'heart'];
            
            for (let i = 0; i < 15; i++) {
                const element = document.createElement('i');
                const randomIcon = elements[Math.floor(Math.random() * elements.length)];
                element.classList.add('fas', `fa-${randomIcon}`, 'floating-element');
                
                // Random position
                const left = Math.random() * 100;
                const top = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 20 + 10;
                
                // Random animation delay
                const delay = Math.random() * 5;
                
                element.style.left = `${left}%`;
                element.style.top = `${top}%`;
                element.style.fontSize = `${size}px`;
                element.style.animationDelay = `${delay}s`;
                
                floatingContainer.appendChild(element);
            }
            
            // Add animation to timeline items on scroll
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            function checkScroll() {
                timelineItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (itemTop < windowHeight - 100) {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }
                });
            }
            
            // Set initial state
            timelineItems.forEach((item, index) => {
                item.style.opacity = '0';
                if (item.classList.contains('left')) {
                    item.style.transform = 'translateX(-50px)';
                } else {
                    item.style.transform = 'translateX(50px)';
                }
                item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
            });
            
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Check on load
            
            // Add animation to gallery items
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(50px)';
                item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            });
            
            function checkGallery() {
                galleryItems.forEach(item => {
                    const itemTop = item.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (itemTop < windowHeight - 100) {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }
                });
            }
            
            window.addEventListener('scroll', checkGallery);
            checkGallery(); // Check on load
        });