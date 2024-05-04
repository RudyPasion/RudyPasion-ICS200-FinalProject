// take user back to top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

// know when user reaches end of the screen
window.onscroll = () => {
    if((wind.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        console.log("You are at the end of the page.")
    }
}

