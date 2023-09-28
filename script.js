const videoContainer = document.getElementById ('video-container');

// Example video data (you'd fetch this from a server in reality)
const videos = [
  
  {
    title: "1",
    thumbnail:"gg.PNG", 
    source: "Ghosted.2023.480p.V2.WEB-DL.HINDI.DUB.1XBET-Vegamovies.to.mkv",
},
{
    title: "2",
    source: "Meg.2.The.Trench.2023.480p.WEBRip.HINDI.DUB.1XBET.Vegamovies.to.mkv",
},
{
    title: "3",
    source: "sample3.mp4",
},


  // Add more videos here
];

// DOM elements
const videoPlayer = document.getElementById("videoPlayer");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Function to filter videos based on search input
function searchVideos() {
  const searchTerm = searchInput.value.toLowerCase();
  const matchingVideos = videoData.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
  );

  if (matchingVideos.length > 0) {
      // Display the first matching video in the player
      videoPlayer.src = matchingVideos[0].source;
  } else {
      // Clear the video player if no matching videos
      videoPlayer.src = "";
  }
}

// Event listener for the search button
searchButton.addEventListener("click", searchVideos);

// Event listener for pressing Enter key in the search input
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
      searchVideos();
  }
});


// Render video thumbnails
videos.forEach(video => {
  const thumbnail = document.createElement('div');
  thumbnail.className = 'video-thumbnail';
  thumbnail.innerHTML = `
    <h2>${video.title}</h2>
    <img src="${video.thumbnail}" alt="${video.title}">
    <button onclick="playVideo('${video.videoUrl}')"<li><a href="index.html">play</a></li>">`;
  videoContainer.appendChild(thumbnail);
});



function playVideo(videoUrl) {
 
  // Get modal and button elements
const modal = document.getElementById("videoModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Add event listeners to open and close the modal
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});
}



