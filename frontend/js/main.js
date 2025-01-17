const API_URL = 'https://your-backend.onrender.com/api';

// Fetch and display blogs
const fetchBlogs = async () => {
  try {
    const response = await fetch(`${API_URL}/blogs`);
    const blogs = await response.json();
    const blogsContainer = document.getElementById('blogs-container');
    blogsContainer.innerHTML = blogs
      .map(
        (blog) => `
      <article class="border p-4 rounded shadow">
        <h3 class="text-xl font-bold">${blog.title}</h3>
        <p>${blog.content.substring(0, 100)}...</p>
        <p class="text-gray-500 text-sm">By ${blog.author} on ${new Date(
          blog.createdAt
        ).toLocaleDateString()}</p>
      </article>
    `
      )
      .join('');
  } catch (error) {
    console.error('Error fetching blogs:', error);
  }
};

// Initialize
fetchBlogs();
