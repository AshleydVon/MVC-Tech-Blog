const delButtonHandler = async (event) => {
  if (event.target.classList.contains('delete-post')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }

  if (event.target.classList.contains('delete-comment')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete comment');
    }
  }
};

const postList = document.querySelector('.post-list');
const commentsSection = document.querySelector('.comments');

if (postList) {
  postList.addEventListener('click', delButtonHandler);
}

if (commentsSection) {
  commentsSection.addEventListener('click', delButtonHandler);
}
