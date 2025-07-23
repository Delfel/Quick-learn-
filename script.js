
const hustles = [
    {
        name: "Teach English Online",
        description: "Use WhatsApp to teach basic English lessons.",
        type: "Online",
        income: "$5–20/day",
        skill: "Easy"
    },
    {
        name: "Print-on-Demand Designs",
        description: "Create Canva t-shirt designs and sell online.",
        type: "Online",
        income: "$10–50/week",
        skill: "Medium"
    },
    {
        name: "Sell ECZ Notes",
        description: "Summarize past papers and sell to classmates.",
        type: "Offline",
        income: "K50 per pack",
        skill: "Easy"
    },
    {
        name: "TikTok Promotions",
        description: "Use TikTok to sell affiliate products.",
        type: "Online",
        income: "$100+/month",
        skill: "Hard"
    },
    {
        name: "Local Errand Service",
        description: "Help neighbors with errands for a small fee.",
        type: "Offline",
        income: "K20–K100/day",
        skill: "Easy"
    }
];

function displayHustles(list) {
    const container = document.getElementById("hustle-list");
    container.innerHTML = "";
    list.forEach(hustle => {
        const card = document.createElement("div");
        card.className = "hustle-card";
        card.innerHTML = `<h3>${hustle.name}</h3>
                          <p>${hustle.description}</p>
                          <small><strong>Type:</strong> ${hustle.type} | 
                          <strong>Skill:</strong> ${hustle.skill} | 
                          <strong>Income:</strong> ${hustle.income}</small>`;
        container.appendChild(card);
    });
}

function filterHustles() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = hustles.filter(h => h.name.toLowerCase().includes(query) || h.description.toLowerCase().includes(query));
    displayHustles(filtered);
}

window.onload = () => displayHustles(hustles);
