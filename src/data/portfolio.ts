import { Experience, Project, Skill, Achievement, PersonalInfo, SocialLink } from '@/types'

export const personalInfo: PersonalInfo = {
  name: "Himanshu Kumar",
  title: "Software Engineer | AI/ML Enthusiast",
  tagline: "Transforming ideas into intelligent solutions",
  description: "Passionate AI/ML Engineer and Full Stack Developer with expertise in creating innovative machine learning solutions and modern web applications. I specialize in turning complex AI concepts into practical, user-friendly applications.",
  location: "Kolkata, India",
  email: "himanshum1928@gmail.com",
  phone: "+91 93701-30762",
  avatar: "/images/avatar.jpg",
  resume: "/Himanshu-Kumar.pdf",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Himanshukumar2812",
      icon: "Github",
      color: "#333"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/himanshu-singh2812",
      icon: "Linkedin",
      color: "#0077b5"
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/himanshukumar",
      icon: "Twitter",
      color: "#1da1f2"
    },
    {
      platform: "Email",
      url: "mailto:himanshum1928@gmail.com",
      icon: "Mail",
      color: "#ea4335"
    }
  ]
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "LTIMindtree",
    location: "Kolkata, WB",
    duration: "March 2023 - Present",
    startDate: "2023-03-01",
    description: [
      "Worked primarily with client Slide Insurance LTD",
      "Designed and customized Duck Creek Billing workflows, streamlining policy creation and payment processes, which improved transaction efficiency by 30%",
      "Spearheaded the modernization of a legacy .NET-based enterprise system, successfully migrating backend services to a scalable Python (Django) architecture",
      "Engineered equivalent Django models, REST APIs, and database schemas (PostgreSQL) by analyzing and refactoring existing ASP.NET Web API and MSSQL services",
      "Increased operational efficiency in consumer sector with a RAG powered chatbot that handles over 20,000+ user queries per month",
      "Collaborated with cross-functional teams to embed modern search, API standardization, and scalable design patterns, laying the foundation for future AI/ML-driven enhancements"
    ],
    technologies: ["Python", "Django", "PostgreSQL", ".NET", "C#", "Duck Creek", "REST API", "RAG", "Chatbot", "ASP.NET"],
    logo: "/images/ltimindtree.png",
    website: "https://www.ltimindtree.com"
  },
  {
    id: "2",
    title: "In-House Orchard Training",
    company: "LTIMindtree",
    location: "Mumbai, MH",
    duration: "Dec 2022 - March 2023",
    startDate: "2022-12-01",
    endDate: "2023-03-01",
    description: [
      "Gained proficiency in .NET, C#, Python, Angular, MVC, REST API, and SQL, developing full-stack applications in an Agile environment",
      "Utilized Git for version control, collaborating in Agile teams to enhance software functionality and maintain code integrity",
      "Developed comprehensive understanding of enterprise software development practices",
      "Completed intensive training program covering modern development technologies and methodologies"
    ],
    technologies: [".NET", "C#", "Python", "Angular", "MVC", "REST API", "SQL", "Git", "Agile"],
    logo: "/images/ltimindtree.png",
    website: "https://www.ltimindtree.com"
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Sentiment Analysis from Text Feedback",
    description: "NLP-based sentiment analysis model to classify customer feedback into positive, negative, and neutral sentiments.",
    longDescription: "Built an NLP-based sentiment analysis model to classify customer feedback into positive, negative, and neutral sentiments. Leveraged Python, Scikit-learn, and NLTK for preprocessing (tokenization, stopword removal) and model training. Improved feedback analysis accuracy by enabling automated insights from unstructured text, helping clients to identify key pain points and satisfaction drivers.",
    technologies: ["Python", "Scikit-learn", "NLTK", "NLP", "Text Processing", "Machine Learning"],
    category: "ai",
    image: "/images/sentiment-analysis.png",
    images: ["/images/sentiment-analysis-1.png", "/images/sentiment-analysis-2.png"],
    github: "https://github.com/himanshukumar/sentiment-analysis",
    demo: "https://sentiment-analysis-demo.vercel.app",
    featured: true,
    status: "completed"
  },
  {
    id: "2",
    title: "AI-ECOM: E-commerce Platform",
    description: "Full-featured e-commerce platform with authentication, product browsing, cart management, and checkout flow.",
    longDescription: "Built an e-commerce platform with standard features including authentication, product browsing, cart management, and checkout flow. Designed with a responsive UI using Next.js, Tailwind CSS, and TypeScript for optimal user experience. Backend powered by Django REST Framework with PostgreSQL for production and development.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "React"],
    category: "fullstack",
    image: "/images/ai-ecom.png",
    images: ["/images/ai-ecom-1.png", "/images/ai-ecom-2.png"],
    github: "https://github.com/himanshukumar/ai-ecom",
    demo: "https://ai-ecom.vercel.app",
    featured: true,
    status: "completed"
  },
  {
    id: "3",
    title: "Indian Hand Gesture Recognition",
    description: "Real-time Indian Sign Language (ISL) recognition system using SURF, SVM, and CNN for precise classification.",
    longDescription: "Lead the team to built a real-time Indian Sign Language (ISL) recognition system using SURF, SVM, and CNN for precise classification. Orchestrated end-to-end project execution, overseeing dataset management and pre-processing.",
    technologies: ["Python", "OpenCV", "SURF", "SVM", "CNN", "Computer Vision", "Deep Learning"],
    category: "ai",
    image: "/images/gesture-recognition.png",
    images: ["/images/gesture-recognition-1.png", "/images/gesture-recognition-2.png"],
    github: "https://github.com/himanshukumar/indian-gesture-recognition",
    demo: "https://gesture-recognition-demo.herokuapp.com",
    featured: true,
    status: "completed"
  },
  {
    id: "4",
    title: "Personalized Email Campaign System",
    description: "Agentic workflow using Autogen to create agents that write, review, and rewrite personalized emails for cold customers.",
    longDescription: "Designed an agentic workflow using Autogen to create agents that write, review, and rewrite personalized emails for cold customers. Leveraged GPT-4o to generate high-quality personalized emails, increasing customer return rate by 5%.",
    technologies: ["Python", "Autogen", "GPT-4", "OpenAI API", "Email Automation", "AI Agents"],
    category: "ai",
    image: "/images/email-campaign.png",
    images: ["/images/email-campaign-1.png", "/images/email-campaign-2.png"],
    github: "https://github.com/himanshukumar/personalized-email-campaign",
    demo: "https://email-campaign-demo.netlify.app",
    featured: false,
    status: "completed"
  },
  {
    id: "5",
    title: "AI-Powered Semantic Search for Customer Service Portal",
    description: "Embedding-based semantic search system to replace keyword-based ticket search with 40% reduction in ticket creation.",
    longDescription: "Designed and deployed an embedding-based semantic search system to replace the client's keyword-based ticket search. Enhanced user experience by providing quick access to past tickets, resulting in a 40% reduction in ticket creation. Integrated a solution and problem summary feature powered by GPT-4, enabling faster resolution of issues.",
    technologies: ["Python", "Embeddings", "GPT-4", "Semantic Search", "Vector Database", "NLP"],
    category: "ai",
    image: "/images/semantic-search.jpg",
    images: ["/images/semantic-search-1.jpg", "/images/semantic-search-2.jpg"],
    github: "https://github.com/himanshukumar/semantic-search-portal",
    demo: "https://semantic-search-demo.vercel.app",
    featured: false,
    status: "completed"
  },
  {
    id: "6",
    title: "AI/ML Practical Applications Portfolio",
    description: "Collection of 10 hands-on ML projects exploring end-to-end AI/ML workflows including chatbot, resume parser, and more.",
    longDescription: "Developed 10 hands-on ML projects to explore end-to-end AI/ML workflows using Python. Projects include chatbot (rule-based & LLM), resume parser, fake news detector, sentiment analysis, and more. Covered core areas: classification, regression, NLP, recommendation, model deployment.",
    technologies: ["Python", "scikit-learn", "Pandas", "NLTK", "Streamlit", "Matplotlib", "Machine Learning"],
    category: "ai",
    image: "/images/ml-portfolio.png",
    images: ["/images/aiml-portfolio-1.png", "/images/aiml-portfolio-2.png"],
    github: "https://github.com/himanshukumar/ai-ml-portfolio",
    demo: "https://ai-ml-portfolio.streamlit.app",
    featured: false,
    status: "completed"
  }
]

export const skills: Skill[] = [
  // Programming Languages
  { id: "s1", name: "Python", category: "other", level: 95, icon: "🐍", section: "Programming Languages" },
  { id: "s2", name: "C++", category: "other", level: 75, icon: "➕", section: "Programming Languages" },
  { id: "s3", name: "C#", category: "other", level: 75, icon: "#️⃣", section: "Programming Languages" },
  { id: "s4", name: "SQL", category: "other", level: 82, icon: "🧮", section: "Programming Languages" },
  { id: "s5", name: "JavaScript", category: "other", level: 85, icon: "🟨", section: "Programming Languages" },

  // Frameworks & Libraries (Backend)
  { id: "s6", name: "Django", category: "backend", level: 85, icon: "🧩", section: "Backend" },
  { id: "s7", name: "Flask", category: "backend", level: 82, icon: "🌶️", section: "Backend" },
  { id: "s8", name: "FastAPI", category: "backend", level: 85, icon: "⚡", section: "Backend" },

  // Frameworks & Libraries (AI/ML)
  { id: "s9", name: "LangChain", category: "ai/ml", level: 80, icon: "🔗", section: "AI/ML" },
  { id: "s10", name: "TensorFlow", category: "ai/ml", level: 85, icon: "🧠", section: "AI/ML" },
  { id: "s11", name: "PyTorch", category: "ai/ml", level: 83, icon: "🔥", section: "AI/ML" },
  { id: "s12", name: "NumPy", category: "ai/ml", level: 88, icon: "🔢", section: "AI/ML" },
  { id: "s13", name: "Pandas", category: "ai/ml", level: 90, icon: "🐼", section: "AI/ML" },
  { id: "s14", name: "Matplotlib", category: "ai/ml", level: 85, icon: "📈", section: "AI/ML" },
  { id: "s15", name: "OpenAI", category: "ai/ml", level: 80, icon: "🧠", section: "AI/ML" },

  // Cloud/Services
  { id: "s16", name: "Azure", category: "devops", level: 78, icon: "☁️", section: "Cloud" },

  // Databases
  { id: "s17", name: "MySQL", category: "database", level: 82, icon: "🐬", section: "Databases" },
  { id: "s18", name: "PostgreSQL", category: "database", level: 85, icon: "🐘", section: "Databases" },
  { id: "s19", name: "Duck Creek Database", category: "database", level: 70, icon: "💾", section: "Databases" },

  // Platforms & Tools
  { id: "s20", name: "Linux (Ubuntu)", category: "devops", level: 85, icon: "🐧", section: "Platforms & Tools" },
  { id: "s21", name: "Windows", category: "devops", level: 90, icon: "🪟", section: "Platforms & Tools" },
  { id: "s22", name: "Git", category: "devops", level: 92, icon: "📝", section: "Platforms & Tools" },
  { id: "s23", name: "GitHub", category: "devops", level: 92, icon: "🐙", section: "Platforms & Tools" },
  { id: "s24", name: "Docker", category: "devops", level: 85, icon: "🐳", section: "Platforms & Tools" },
  { id: "s25", name: "Kubernetes", category: "devops", level: 75, icon: "☸️", section: "Platforms & Tools" },
  { id: "s26", name: "Streamlit", category: "backend", level: 80, icon: "🧪", section: "Platforms & Tools" },
  { id: "s27", name: "Swagger", category: "backend", level: 78, icon: "📜", section: "Platforms & Tools" },
  { id: "s28", name: "Heroku", category: "devops", level: 70, icon: "🚀", section: "Platforms & Tools" },

  // Familiar with
  { id: "s29", name: "MLOps", category: "ai/ml", level: 70, icon: "🛠️", section: "Familiar with" },
  { id: "s30", name: "LLMOps", category: "ai/ml", level: 70, icon: "🤖", section: "Familiar with" },
  { id: "s31", name: "PySpark", category: "ai/ml", level: 72, icon: "🔥", section: "Familiar with" },
  { id: "s32", name: "Databricks", category: "ai/ml", level: 72, icon: "🧱", section: "Familiar with" }
]

export const Certifications: Certifications[] = [
  // Certifications
  {
    id: "a1",
    title: "DP-900: Microsoft Certified Azure Data Fundamentals",
    description: "Fundamentals of core data concepts and related Microsoft Azure data services.",
    date: "2025-07-06",
    category: "certification",
    icon: "📘"
  },
  {
    id: "a2",
    title: "AZ-900: Microsoft Certified Azure Fundamentals",
    description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
    date: "2025-10-04",
    category: "certification",
    icon: "☁️"
  },
  {
    id: "a3",
    title: "Machine Learning by Andrew Ng",
    description: "Completed the foundational Machine Learning course by Andrew Ng.",
    date: "2025-06-01",
    category: "certification",
    icon: "🎓"
  },
]
  export const achievements: Achievement[] = [
  {
    id: "a4",
    title: "Star Performer Award",
    description: "Received for 3 consecutive quarters in recognition of exceptional performance.",
    date: "2025-07-01",
    category: "award",
    icon: "⭐"
  },
  {
    id: "a5",
    title: "Client Recognition Award",
    description: "Honored by the client for outstanding and dedicated work.",
    date: "2025-08-10",
    category: "award",
    icon: "🏆"
  },
  {
    id: "a6",
    title: "State Rank Qualifier – Smart India Hackathon (SIH)",
    description: "Achieved state-level qualification in Smart India Hackathon (SIH).",
    date: "2022-08-15",
    category: "competition",
    icon: "🎖️"
  }
]
