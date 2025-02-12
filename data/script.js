let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const scrollContainer = document.getElementById("scrollContainer");
const loadingIndicator = document.getElementById("loadingIndicator");

scrollContainer.addEventListener("scroll", function () {
    let scrollTop = scrollContainer.scrollTop;

    // Hide navbar when scrolling down
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-60px"; // Hide navbar
    } else {
        navbar.style.top = "0"; // Show navbar
    }

    // Check if scrolled to the top for refresh
    if (scrollTop === 0) {
        refreshFeed();
    }

    lastScrollTop = scrollTop; // Update last scroll position
});

function refreshFeed() {
    loadingIndicator.style.display = "block"; // Show loading indicator

    // Simulate a network request for refreshing the feed
    setTimeout(() => {
        // Logic to refresh the video feed can go here
        console.log("Feed refreshed!");

        loadingIndicator.style.display = "none"; // Hide loading indicator
    }, 2000); // Simulate a 2-second loading time
}

function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
        searchContainer.style.display = 'flex'; // Show the search box
        document.getElementById('searchInput').focus(); // Focus on the search input when opened
        navbar.style.display = 'none'; // Hide navbar to give a better effect
    } else {
        searchContainer.style.display = 'none'; // Hide the search box
        navbar.style.display = 'flex'; // Show navbar again
    }
}

function searchPosts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const videoFeed = document.getElementById('videoFeed');
    const videos = videoFeed.getElementsByClassName('video');

    for (let i = 0; i < videos.length; i++) {
        const title = videos[i].getElementsByClassName('video-title')[0].textContent;
        if (title.toLowerCase().includes(filter)) {
            videos[i].style.display = ""; // Show the post
        } else {
            videos[i].style.display = "none"; // Hide the post
        }
    }
}