function changeContent(section) {
    const mainContent = document.getElementById('main-content');
  
    // Clear existing content
    mainContent.innerHTML = '';
  
    // Change content based on clicked section
    if (section === 'home') {
      mainContent.innerHTML = `
        <div>
          <h1>Welcome to Home</h1>
          <p>This is the home section.</p>
        </div>
      `;
    } else if (section === 'services') {
      mainContent.innerHTML = `
        <div>
          <h1>Our Services</h1>
          <p>We offer various services such as web development, mobile app development, and more!</p>
        </div>
      `;
    } else if (section === 'contact') {
      mainContent.innerHTML = `
        <div>
          <h1>Contact Us</h1>
          <p>Feel free to reach out at contact@company.com or call us at (123) 456-7890.</p>
        </div>
      `;
    } else if (section === 'about') {
      mainContent.innerHTML = `
        <div>
          <h1>About Us</h1>
          <p>We are a company dedicated to delivering quality software solutions.</p>
        </div>
      `;
    }
}
