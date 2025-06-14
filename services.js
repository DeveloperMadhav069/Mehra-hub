// services.js

document.addEventListener('DOMContentLoaded', function () {
  // Services data array
  const services = [
    {
      title: "Business Website",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      description:
        "Create a professional and responsive business website tailored to your brand and needs.",
    },
    {
      title: "Business Dashboard",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
      description:
        "Intuitive dashboards for monitoring key business metrics in real-time.",
    },
    {
      title: "Personal Website",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
      description:
        "Build personal portfolios, blogs, or resumes to showcase your unique skills and experiences.",
    },
    {
      title: "Help in Projects / Guidance",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      description:
        "Expert guidance and assistance with your software, academic, or business projects.",
    },
    {
      title: "Coding-related Problems",
      image:
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=600&q=80",
      description:
        "Solve complex coding problems with experienced developers ready to help.",
    },
    {
      title: "Family Calling Mobile App",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      description:
        "A mobile app designed to keep your family connected anytime, anywhere.",
    },
  ];

  // DOM Elements
  const serviceItems = document.querySelectorAll('.service-item');
  const serviceImage = document.querySelector('.service-image');
  const serviceTitle = document.querySelector('.service-title');
  const serviceDescription = document.querySelector('.service-description');
  const enquiryBtn = document.querySelector('.enquiry-btn');

  // Initialize display with first service
  const setActiveService = (index) => {
    // Remove active class from all items
    serviceItems.forEach(item => item.classList.remove('active'));

    // Add active to selected
    const selectedItem = serviceItems[index];
    selectedItem.classList.add('active');

    // Animate details update
    // Fade out old
    serviceImage.classList.remove('show');
    serviceTitle.style.opacity = '0';
    serviceDescription.style.opacity = '0';

    // Update content after short delay for fade out effect
    setTimeout(() => {
      const service = services[index];
      serviceImage.src = service.image;
      serviceImage.alt = service.title;
      serviceTitle.textContent = service.title;
      serviceDescription.textContent = service.description;

      // Fade in updated content
      serviceImage.classList.add('show');
      serviceTitle.style.transition = 'opacity 0.6s ease';
      serviceDescription.style.transition = 'opacity 0.6s ease';
      serviceTitle.style.opacity = '1';
      serviceDescription.style.opacity = '1';
    }, 300);
  };

  // Set first service initially
  setActiveService(0);

  // Event Listeners on all service items (keyboard & click)
  serviceItems.forEach(item =>
    item.addEventListener('click', () => {
      const index = Number(item.getAttribute('data-index'));
      setActiveService(index);
    })
  );

  serviceItems.forEach(item =>
    item.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const index = Number(item.getAttribute('data-index'));
        setActiveService(index);
      }
    })
  );

  // Enquiry button redirects to contact page
  enquiryBtn.addEventListener('click', () => {
    window.location.href = 'enquiry.html';
  });
});