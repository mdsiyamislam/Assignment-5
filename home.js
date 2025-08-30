
let heartCount = 0;
    const heartCountEl = document.getElementById("heartCount");
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(heart => {
      heart.addEventListener("click", function () {
        // যদি আগে লাইক না করা থাকে
        if (!heart.classList.contains("liked")) {
          heart.classList.add("liked");
          heartCount++;
        } else {
          // আবার ক্লিক করলে count কমবে
          heart.classList.remove("liked");
          heartCount--;
        }
        heartCountEl.textContent = heartCount;
      });
    });
