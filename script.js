let main = document.querySelector('main')

const users = [
    {
      fullName: "Aarav Mehta",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Software Engineer",
      description: "Backend-focused engineer specializing in scalable APIs and system optimization.",
      tags: ["Java", "Node.js", "Microservices", "Backend"]
    },
    {
      fullName: "Neha Sharma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "UI/UX Designer",
      description: "Designs user-centric interfaces with a strong focus on accessibility and usability.",
      tags: ["UI", "UX", "Figma", "Design Systems"]
    },
    {
      fullName: "Rohan Verma",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Product Manager",
      description: "Drives product strategy by aligning business goals with customer needs.",
      tags: ["Product", "Agile", "Roadmap", "Stakeholder"]
    },
    {
      fullName: "Simran Kaur",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Data Analyst",
      description: "Turns raw data into actionable insights to support decision-making.",
      tags: ["Data", "SQL", "Python", "Analytics"]
    },
    {
      fullName: "Aditya Rao",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      profession: "Digital Marketer",
      description: "Optimizes brand visibility through data-driven marketing campaigns.",
      tags: ["SEO", "Growth", "Marketing", "Performance"]
    }
];


let sum = ''

users.forEach((elem)=>{
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

main.innerHTML = sum