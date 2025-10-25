export const myProjects = [
    {
        id: 1,
        title: "E-commerce Website",
        description:
            "A website that enables seamless shopping from international platforms like Shopify, delivering products domestically.",
        subDescription: [
            "Built a scalable website using ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
            "Implemented secure user authentication and database management with ASP.NET Core Identity and Entity Framework Core.",
            "Designed a responsive website frontend with Tailwind CSS for an optimal user experience.",
            "Incorporated payment gateways, localization, and product filtering to enhance website functionality."
        ],
        href: "",
        logo: "",
        image: "/assets/projects/accessories.jpg",
        tags: [
            { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
            { id: 2, name: ".NET", path: "/assets/logos/dotnet.svg" },
            { id: 3, name: "EF Core", path: "/assets/logos/efcore.png" },
            { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
        ]
    },
    {
        id: 2,
        title: "Authentication & Authorization Automation",
        description:
            "An automation system for secure user management and access control using Make.com.",
        subDescription: [
            "Integrated Auth0 for streamlined authentication, supporting Make.com, JWT, and multi-factor authentication.",
            "Implemented role-based access control (RBAC) for precise user permission management.",
            "Developed a React-based frontend with Tailwind CSS for a seamless user interface.",
            "Connected to a secure SQLite database for efficient user data storage."
        ],
        href: "",
        logo: "",
        image: "/assets/projects/auth-system.jpg",
        tags: [
            { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
            { id: 2, name: "React", path: "/assets/logos/react.svg" },
            { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
            { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
        ]
    },
    {
        id: 3,
        title: "Blazor Website",
        description:
            "A modern, interactive website built with Blazor WebAssembly and .NET Core.",
        subDescription: [
            "Developed a fully interactive Single Page Website using Blazor WebAssembly.",
            "Implemented API interactions with .NET Core for a robust website backend.",
            "Designed responsive UI components with Tailwind CSS for an enhanced user experience.",
            "Integrated SQLite for efficient client-side database storage."
        ],
        href: "",
        logo: "",
        image: "/assets/projects/blazor-app.jpg",
        tags: [
            { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
            { id: 2, name: ".NET Core", path: "/assets/logos/dotnetcore.svg" },
            { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
            { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
        ]
    },
    {
        id: 4,
        title: "C++ Game Engine",
        description: "A lightweight C++ game engine designed for 2D and 3D game development.",
        subDescription: [
            "Built a high-performance rendering engine using OpenGL and C++.",
            "Developed a physics engine with collision detection and particle systems.",
            "Implemented modular scripting for extensibility and rapid iteration.",
            "Optimized performance using multithreading and memory management."
        ],
        href: "",
        logo: "",
        image: "/assets/projects/game-engine.jpg",
        tags: [
            { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
            { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
            { id: 3, name: "Git", path: "/assets/logos/git.svg" },
            { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" }
        ]
    },
    {
        id: 5,
        title: "WordPress Custom Theme",
        description: "A fully customizable WordPress theme optimized for performance and SEO.",
        subDescription: [
            "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
            "Integrated Tailwind CSS for modern styling and fast UI updates.",
            "Enhanced SEO and performance using Vite.js for optimized builds.",
            "Implemented plugin compatibility and custom widgets for advanced functionality."
        ],
        href: "",
        logo: "",
        image: "/assets/projects/wordpress-theme.jpg",
        tags: [
            { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
            { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
            { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
            { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" }
        ]
    },
    {
        id: 6,
        title: "Online Learning Platform",
        description:
            "A web platform where users can enroll in courses, watch video lectures, and take quizzes.",
        subDescription: [
            "Built with Blazor WebAssembly for a fluid single-page experience.",
            "Integrated video streaming using Azure Media Services.",
            "Created quiz engine with randomization and instant scoring.",
            "Added Stripe API for secure subscription payments."
        ],
        href: "",
        logo: "",
        image: "/assets/projects/elearning.jpg",
        tags: [
            { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
            { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
            { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
            { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" }
        ]
    }
];

export const mySocials = [
    {
        name: "WhatsApp",
        href:"https://wa.me/2349153060513",
        icon: "/assets/socials/whatsApp.svg"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/fredrick-omoyeni-567a86262/",
        icon: "/assets/socials/linkedIn.svg"
    },
    {
        name: "Instagram",
        href: "",
        icon: "/assets/socials/instagram.svg"
    }
];

export const experiences = [
    {
        title: "Lead Front-End Engineer",
        job: "Splendid African Salon",
        date: "2022",
        contents: [
            "Developed flagship 3D salon website using React, TailwindCSS, WebGL, and Vite.",
            "Built dynamic lighting, particle effects, and camera motion for immersive design.",
            "Reduced load time 45% via code-splitting and asset compression.",
            "Implemented SEO automation with structured data and meta tag optimization.",
            "Directed UI/UX refinement for consistent Axisure brand identity."
        ]
    },
    {
        title: "Full-Stack Web Engineer",
        job: "Lumen Digital Labs",
        date: "2022",
        contents: [
            "Built modular CMS and GraphQL backend for Axisure content automation.",
            "Integrated real-time SEO dashboards and analytics tracking.",
            "Developed content indexing and search optimization features.",
            "Enhanced Core Web Vitals and Lighthouse performance metrics.",
            "Deployed advanced caching and security protocols for high availability."
        ]
    },
    {
        title: "Senior Web Developer",
        job: "Orbit Creative",
        date: "2022",
        contents: [
            "Delivered interactive portfolio platform for Axisure using React and Three.js.",
            "Improved mobile UX and reduced bounce rate by 38%.",
            "Implemented schema markup to boost SERP visibility.",
            "Automated CI/CD pipelines with performance checks and audits.",
            "Optimized SSR for improved global speed and crawl efficiency."
        ]
    }
];

export const reviews = [
    { name: "Jack", username: "@jack", body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://robohash.org/jack" },
    { name: "Jill", username: "@jill", body: "I don't know what to say. I'm speechless. This is amazing.", img: "https://robohash.org/jill" },
    { name: "John", username: "@john", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://robohash.org/john" },
    { name: "Alice", username: "@alice", body: "This is hands down the best thing I've experienced. Highly recommend!", img: "https://robohash.org/alice" },
    { name: "Bob", username: "@bob", body: "Incredible work! The attention to detail is phenomenal.", img: "https://robohash.org/bob" },
    { name: "Charlie", username: "@charlie", body: "This exceeded all my expectations. Absolutely stunning!", img: "https://robohash.org/charlie" },
    { name: "Dave", username: "@dave", body: "Simply breathtaking. The best decision I've made in a while.", img: "https://robohash.org/dave" },
    { name: "Eve", username: "@eve", body: "So glad I found this. It has changed the game for me.", img: "https://robohash.org/eve" }
];
