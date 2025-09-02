

let copyButtons = document.querySelectorAll(".btn-copy"); 
let copyCountEl = document.getElementById("copy-count");
let copyCount = 0;

copyButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let card = btn.closest(".card"); 
    let serviceNumber = card.querySelector(".service-number").innerText; 

    navigator.clipboard.writeText(serviceNumber); 
    copyCount++;
    alert("Number copied: " + serviceNumber);
    copyCountEl.innerText =  copyCount ;
  });
});




let heartCount = 0;
    const heartCountEl = document.getElementById("heartCount");
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach(heart => {
      heart.addEventListener("click", function () {
        if (!heart.classList.contains("liked")) {
          heart.classList.add("liked");
          heartCount++;
        } else {
        
          heart.classList.remove("liked");
          heartCount--;
        }
        heartCountEl.textContent = heartCount;
      });
    });


      let coins = 100; // starting coins

    const callButtons = document.querySelectorAll(".call-btn");
    const callHistory = document.getElementById("call-history");
    const coinsDisplay = document.getElementById("coins");
    
    callButtons.forEach(btn => {
      btn.addEventListener("click", function () 
    {
        const card = btn.closest(".card");
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;
        let now = new Date();
    let timeStamp = now.toLocaleString("en-GB");

        if (coins < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        alert(`Calling ${serviceName} at ${serviceNumber}`);
      
        coins -= 20;
        coinsDisplay.innerText = coins;
        


        const li = document.createElement("li");
        li.innerText = `${serviceName} - ${serviceNumber} Time: ${timeStamp})`;
        callHistory.appendChild(li);
      });
    });
    document.getElementById("clear-history").addEventListener("click", function () {
      callHistory.innerHTML = "";
    });

    