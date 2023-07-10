document.addEventListener("DOMContentLoaded", function() {
  const championData = {
    top: [
      { name: "Rengar", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Darius", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Rumble", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Jax", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Renekton", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Poppy", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Quinn", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "Q", "E"] },
      { name: "Kayle", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "Q", "W"] },
      { name: "Fiora", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Malphite", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
    ],
    jungle: [
      { name: "Rek Sai", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Graves", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Maokai", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Nidalee", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Hecarim", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Kindred", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Kha zix", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Lee sin", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Karthus", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Sejuani", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "Q", "E"] },
    ],
    mid: [
      { name: "Leblanc", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "Q", "E"] },
      { name: "Akshan", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Ahri", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Cassiopeia", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "Q", "W"] },
      { name: "Zed", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Katarina", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Aurelion sol", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Fizz", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "W", "Q"] },
      { name: "Neeko", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Tristana", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "Q", "W"] },
    ],
    adc: [
      { name: "Ezreal", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Ashe", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "Q", "E"] },
      { name: "Jhin", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Samira", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Kaisa", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Miss fortune", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Karthus", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Seraphine", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Xayah", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "W", "Q"] },
      { name: "Nilah", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
    ],
    sup: [
      { name: "Rell", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "E", "Q"] },
      { name: "Rakan", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "E", "Q"] },
      { name: "Thresh", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Nautilus", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "W", "E"] },
      { name: "Blitzcrank", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Janna", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "W", "Q"] },
      { name: "Soraka", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["W", "Q", "E"] },
      { name: "Milio", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "W", "Q"] },
      { name: "Karma", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["Q", "E", "W"] },
      { name: "Lulu", items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"], skills: ["E", "W", "Q"] },
    ]
  };

  const categoryLinks = document.querySelectorAll("nav ul li a");
  const championSections = document.querySelectorAll("main section");

  // Add click event listeners to category links
  categoryLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      const categoryId = link.getAttribute("href").slice(1);

      // Toggle the display of the selected category
      const selectedSection = document.getElementById(categoryId);
      const isSelected = selectedSection.style.display === "block";
      selectedSection.style.display = isSelected ? "none" : "block";

      // Toggle 'active' class for the clicked category link
      link.parentNode.classList.toggle("active");

      // Hide all other champion sections and remove 'active' class from their links
      championSections.forEach(function(section) {
        if (section !== selectedSection) {
          section.style.display = "none";
          const correspondingLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
          correspondingLink.parentNode.classList.remove("active");
        }
      });
    });
  });

  for (const category in championData) {
    const section = document.createElement("section");
    section.id = category;
    const heading = document.createElement("h2");
    heading.textContent = category.toUpperCase();
    const ul = document.createElement("ul");
    ul.className = "champion-list";

    championData[category].forEach(function(champion) {
      const li = document.createElement("li");
      const championName = document.createElement("h3");
      championName.textContent = champion.name;
      championName.classList.add("clickable"); // Add 'clickable' class to champion name

      const details = createChampionDetails(champion);

      championName.addEventListener("click", function() {
        details.style.display = details.style.display === "none" ? "block" : "none";
      });

      // Initially hide the details
      details.style.display = "none";

      li.appendChild(championName);
      li.appendChild(details);
      ul.appendChild(li);
    });

    section.appendChild(heading);
    section.appendChild(ul);
    document.querySelector("main").appendChild(section);
  }

  function createChampionDetails(champion) {
    const details = document.createElement("div");
    details.className = "details";
    const itemTitle = document.createElement("h4");
    itemTitle.textContent = "Items";
    const itemUl = document.createElement("ul");
    const skillTitle = document.createElement("h4");
    skillTitle.textContent = "Skill Order";
    const skillUl = document.createElement("ul");

    champion.items.forEach(function(item) {
      const itemLi = document.createElement("li");
      itemLi.textContent = item;
      itemUl.appendChild(itemLi);
    });

    champion.skills.forEach(function(skill) {
      const skillLi = document.createElement("li");
      skillLi.textContent = skill;
      skillUl.appendChild(skillLi);
    });

    details.appendChild(itemTitle);
    details.appendChild(itemUl);
    details.appendChild(skillTitle);
    details.appendChild(skillUl);

    return details;
  }
});