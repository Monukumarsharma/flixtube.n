let likeCount = 0;
let dislikeCount = 0;

function like() {
    likeCount++;
    document.getElementById("like-count").innerText = likeCount;
}

function dislike() {
    dislikeCount++;
    document.getElementById("dislike-count").innerText = dislikeCount;
}

function addComment() {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();

    if (commentText === "") {
        alert("Please enter a comment.");
        return;
    }

    const commentList = document.getElementById("comment-list");
    const commentItem = document.createElement("li");
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);

    // Clear the input field
    commentInput.value = "";
}

