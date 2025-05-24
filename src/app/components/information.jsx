'use client';

const EDUCATION = [
    {
        date: "2018-2022",
        title: "Bachelor of Engineering in Civil Engineering - Srinakharinwirot University",
        description: "It's not suitable for me, so I've decided to start learning programing for a new field of work.",
        icon: "fa-solid fa-graduation-cap",
        spacial: "(Working in a different field of study)"
    },
    {
        date: "2022",
        title: "JavaScript Algorithms and Data Structures - FreeCodecamp",
        description: "Intermediate algorithm with JavaScript.",
        icon: "fa-solid fa-certificate"
    },
    {
        date: "2022",
        title: "Responsive Web Design - FreeCodecamp",
        description: "Basic HTML & CSS , Applied Visual Design and responsive design principles.",
        icon: "fa-solid fa-certificate"
    },
    {
        date: "2023",
        title: "Back End Development and APIs - FreeCodecamp",
        description: "Manging packges with NPM , Node & Express , MongoDB.",
        icon: "fa-solid fa-certificate"
    },
    {
        date: "2023",
        title: "SQL for everyone - born2dev",
        description: "Basic SQL with SQLite.",
        icon: "fa-solid fa-certificate"
    },
    {
        date: "All Time",
        title: "Youtube.com",
        description: "A lot of thing. Checking in my skill.",
        icon: "fa-brands fa-youtube",
    },
    

];

const SKILL = [
    {
        date: "Technical Skills",
        title: "Front-End Frameworks",
        description: "JavaScript, basic TypeScript with Next.js, React, and React + Vite. I've also built mini-projects like an Admin-Dashboard (using React.js+Nivo+MaterialUI) , Basic-API (using NEXT.js) and this resume (using NEXT.js).",
        icon: "fa-solid fa-n"
    },
    {
        date: "Technical Skills",
        title: "Front-End Libraries",
        description: "Often using TailwindCSS, but I'm also comfortable with Bootstrap, MaterialUI, and Nivo. Sometime i forget abount original CSS. 😆",
        icon: "fa-brands fa-css3"
    },
    {
        date: "Technical Skills",
        title: "Back-End",
        description: "I can interact with Firebase and have experience deploying Web-App (like this resume). I also have basic knowledge of MongoDB and other backend-related tools such as Postman.",
        icon: "fa-solid fa-fire-flame-curved"
    },
    {
        date: "Technical Skills",
        title: "Git",
        description: "Can Work with git",
        icon: "fa-brands fa-git"
    },
    {
        date: "Technical Skills",
        title: "Another Programing Language",
        description: "I have experience with Python, including frameworks like Flask and Django. I'm also learning C# with Unity, which I've used to create a simple video game. Additionally, I've used Python to practice solving tasks on random Website (like a programming.in.th or borntodev.com/devlab )",
        icon: "fa-brands fa-python",
        spacial: "Python and C#"
    },
    {
        date: "Language Skills",
        title: "English",
        description: "I can understand 65% of movie and TV-series",
        icon: "fa-solid fa-language",
        spacial: "(Medium)"
    },
]

const Infocard = ({ date, title, description, icon, spacial }) => {
    return (
        <div className="shadow-xl rounded-xl relative">
            <div className="flex item-center justify-between overflow-visible">
                <div className="m-3 mt-5 mb-0 mr-16">
                    <p className="font-bold text-xs text-sky-500">
                        {date}
                    </p>
                    <h5 className="flex text-xl text-zinc-700 font-bold">
                        {title}
                    </h5>
                </div>
            </div>
            <div className="absolute top-5 right-3 flex items-center justify-center rounded-xl bg-zinc-700 w-10 h-10">
                <i className={`${icon} text-zinc-100  `} />
            </div>
            <div className="grid justify-start !px-3.5 mt-1 mb-5">
                <p className="font-normal text-sm text-zinc-500 mb-3">
                    <span className="text-red-500">{spacial}</span> {description}
                </p>
            </div>
        </div>
    )
};

export default function Information() {
    return (
        <section className="pb-28 px-8 mt-50">
            <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-30 container mx-auto items-start">
                {/* First column */}
                <div>
                    <div>
                        <p className="mb-10 text-4xl font-bold">
                            Skills
                        </p>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-16 mb-10">
                        {SKILL.map((props, idx) => (
                            <Infocard key={idx} {...props} />
                        ))}
                    </div>

                </div>

                {/* Second column */}
                <div>
                    <div>
                        <p className="mb-10 text-4xl font-bold">
                            Education & Certifications
                        </p>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-16 mb-10">
                        {EDUCATION.map((props, idx) => (
                            <Infocard key={idx} {...props} />
                        ))}
                    </div>
                </div>
            </div>

        </section>

    )
}