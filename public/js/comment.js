const commentFormHandler = async (event) => {
  event.preventDefault();

  const comment_text = document.querySelector('#comment-text').value.trim();

  if (comment_text) {
    const post_id = document.querySelector('[name="post-id"]').value;

    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_text, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
