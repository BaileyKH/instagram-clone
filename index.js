
const heart = document.querySelector(".fa-heart")
const likes = document.getElementById("likes")

let count = 0

heart.addEventListener("click", () => {
    count++
    likes.textContent = `${count} likes`
    heart.style.color = "#9403fc"
})




 