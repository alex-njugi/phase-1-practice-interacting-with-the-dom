document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let count = 0;
    let isPaused = false;
    let interval = setInterval(incrementCounter, 1000);
  
    function incrementCounter() {
      if (!isPaused) {
        count++;
        counter.textContent = count;
      }
    }
  
    document.getElementById("plus").addEventListener("click", () => {
      count++;
      counter.textContent = count;
    });
  
    document.getElementById("minus").addEventListener("click", () => {
      count--;
      counter.textContent = count;
    });
  
    document.getElementById("heart").addEventListener("click", () => {
      let likesList = document.querySelector(".likes");
      let existingLike = document.getElementById(`like-${count}`);
      if (existingLike) {
        let likeCount = parseInt(existingLike.dataset.count) + 1;
        existingLike.dataset.count = likeCount;
        existingLike.textContent = `${count} has been liked ${likeCount} times`;
      } else {
        let li = document.createElement("li");
        li.id = `like-${count}`;
        li.dataset.count = 1;
        li.textContent = `${count} has been liked 1 time`;
        likesList.appendChild(li);
      }
    });
  
    let pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", () => {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(interval);
        pauseButton.textContent = "resume";
        document.querySelectorAll("button:not(#pause)").forEach(button => button.disabled = true);
      } else {
        interval = setInterval(incrementCounter, 1000);
        pauseButton.textContent = "pause";
        document.querySelectorAll("button").forEach(button => button.disabled = false);
      }
    });
  
    document.getElementById("comment-form").addEventListener("submit", (e) => {
      e.preventDefault();
      let commentInput = document.getElementById("comment-input");
      let commentText = commentInput.value.trim();
      if (commentText) {
        let commentList = document.getElementById("list");
        let p = document.createElement("p");
        p.textContent = commentText;
        commentList.appendChild(p);
        commentInput.value = "";
      }
    });
  });
  