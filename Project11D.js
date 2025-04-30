// 1️⃣ Create Data Objects
const cards = [
    {
      id: "1",
      title: "Learn JavaScript",
      description: "Understand the basics of JavaScript.",
      imageUrl: "https://placehold.co/250x150",
      link: "https://javascript.info"
    },
    {
      id: "2",
      title: "Build a Project",
      description: "Start your first real-world project.",
      imageUrl: "https://placehold.co/250x150",
      link: "https://github.com"
    },
    {
      id: "3",
      title: "Explore the DOM",
      description: "Master dynamic DOM manipulation with JavaScript.",
      imageUrl: "https://placehold.co/250x150",
      link: "https://developer.mozilla.org"
    },
    {
      id: "4",
      title: "Practice Array Methods",
      description: "Practice map, filter, reduce, and sort with examples.",
      imageUrl: "https://placehold.co/250x150",
      link: "https://w3schools.com"
    }
  ];
  
  // 2️⃣ Render Cards Dynamically
  function renderCards(cardArray) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear existing
  
    cardArray.forEach(card => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "card";
  
      const img = document.createElement("img");
      img.src = card.imageUrl;
  
      const title = document.createElement("h3");
      title.textContent = card.title;
  
      const desc = document.createElement("p");
      desc.textContent = card.description;
  
      const linkBtn = document.createElement("button");
      linkBtn.textContent = "Open Link";
      linkBtn.addEventListener("click", () => {
        window.open(card.link, "_blank");
      });
  
      // Highlight card on click
      cardDiv.addEventListener("click", () => {
        cardDiv.classList.toggle("highlighted");
      });
  
      // Append elements to card
      cardDiv.appendChild(img);
      cardDiv.appendChild(title);
      cardDiv.appendChild(desc);
      cardDiv.appendChild(linkBtn);
  
      // Append card to container
      container.appendChild(cardDiv);
    });
  }
  
  renderCards(cards);
  
  // 4️⃣ Practice Array Methods
  
  // Reduce: total characters in all titles
  const totalChars = cards.reduce((total, card) => total + card.title.length, 0);
  console.log("Total characters in all titles:", totalChars);
  
  // Sort: alphabetically by title
  const sortedCards = [...cards].sort((a, b) => a.title.localeCompare(b.title));
  console.log("Sorted cards by title:", sortedCards);
  
  // Filter: cards containing "JavaScript" in description
  const filteredCards = cards.filter(card => card.description.includes("JavaScript"));
  console.log('Cards with "JavaScript" in description:', filteredCards);
  
  // Map: array of all titles
  const titlesArray = cards.map(card => card.title);
  console.log("All card titles:", titlesArray);
  