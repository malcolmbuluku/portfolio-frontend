const API_URL = 'https://your-backend.onrender.com/api/contact';

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    alert('Error sending message. Please try again later.');
    console.error(error);
  }
});
