document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    // Simulate sending data to the server
    console.log('Booking Data:', data);
  
    alert('Thank you for your booking! We will contact you soon.');
  });