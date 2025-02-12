function toggleLike() {
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');

    if (likeButton.classList.contains('checked')) {
        likeButton.classList.remove('checked'); // Uncheck like
    } else {
        likeButton.classList.add('checked'); // Check like
        dislikeButton.classList.remove('checked'); // Uncheck dislike if it was checked
    }
}

function toggleDislike() {
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');

    if (dislikeButton.classList.contains('checked')) {
        dislikeButton.classList.remove('checked'); // Uncheck dislike
    } else {
        dislikeButton.classList.add('checked'); // Check dislike
        likeButton.classList.remove('checked'); // Uncheck like if it was checked
    }
}