const newFormHandler = async (event) => {
  event.preventDefault();

  const newComment = document.querySelector('#add-comment').value.trim();

  if (newComment) {
    const response = await fetch(`/api/blogs/:id`, {
      method: 'POST',
      body: JSON.stringify({ comment_post }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blogs/:id');
    } else {
      alert('Failed to create comment.');
    }
  }
};