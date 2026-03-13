export const portfolioData = {
    personal: {
        name: "Akshar",
        surname: "Munjani",
        phone: "+91 9824515594",
        email: "aksharmunjani127@gmail.com", // Found @mail in resume, assuming standard format or placeholder
        github: "https://github.com/aksharmunjani", // Placeholder based on @github
        linkedin: "https://linkedin.com/in/akshar-munjani", // Placeholder based on @linkdin
        role: "MERN Stack Developer",
    },
    summary: `Results-driven web developer with a strong foundation in front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create responsive, user-friendly websites and web applications. Skilled in optimizing performance, enhancing UI/UX, and ensuring cross-browser compatibility. Passionate about clean code, problem-solving, and staying updated with the latest industry trends.`,
    technicalSkills: {
        frontend: ["React.JS", "Next.JS", "TypeScript", "JavaScript", "HTML, JSON, CSS", "Tailwind CSS", "Material-UI", "Shadcn"],
        backend: ["Node.JS", "Express.JS", "Elysia.JS", "Paylod CMS", "MongoDB", "Sequelize", "Swagger"],
        other: ["Supabase", "Bootstrap", "Electron"],
    },
    experience: [
        {
            role: "MERN Stack Developer",
            company: "Dignizant Technologies LLP",
            duration: "April 2025 - Present",
            description: "Defined and executed front-end engineering strategy across multiple business-critical applications, aligning technical roadmaps with corporate objectives. Built and managed high-performing engineering teams, overseeing hiring, performance management, and professional development.",
        },
        {
            role: "MERN Stack Developer",
            company: "Uplift Infotech",
            duration: "February 2024 - April 2025",
            description: "Gained hands-on experience in Next.js and React.js, specializing in building dynamic, responsive, and visually appealing user interfaces. Strong background in backend technologies, including Elysia.js, Express.js, and Node.js.",
        },
        {
            role: "Internship",
            company: "Double Plus Infotech",
            duration: "July 2023 - November 2023",
            description: "Acquired a vast amount of knowledge and skills in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Next.js, and React.js. Gained valuable hands-on experience in working at the production level.",
        },
    ],
    projects: [
        {
            title: "Breakdayz – HRMS Platform",
            category: "HRMS & Time Tracking",
            tools: "Electron, React, Node.js",
            image: "/images/breakdayz.png", // Assuming images might need to be added or placeholders used
            description: "HRMS web application with integrated desktop-based time tracking system. Led front-end development of HR modules including employee management and attendance systems.",
        },
        {
            title: "LMS - Loans My Payroll",
            category: "Fintech",
            tools: "TurboRepo, Next.js, Tailwind CSS, ShadCN, BetterAuth, Payload CMS, Elysia.js, Node.js, Supabase, PostgreSQL, MongoDB",
            image: "/images/lms.png",
            description: "A suite of loan management projects including SpeedyFina, Speedy Paid Loans, Ec2go, and E-cash 2 go. Built with a monorepo architecture for scalability.",
        },
        {
            title: "CodessWear (E-Commerce)",
            category: "E-Commerce",
            tools: "Next.js, Node.js, MongoDB, Mongoose",
            image: "/images/codesswear.png",
            description: "Implemented responsive and user-friendly interfaces with Next.js. Utilized Node.js for a robust back-end, handling authentication, products, and orders.",
        },
    ],
};
