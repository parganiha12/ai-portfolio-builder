export const personalInfo = {
  name: "Alex Chen",
  title: "AI/ML Engineer & Data Scientist",
  tagline: "Transforming complex data into intelligent solutions that drive real-world impact.",
  email: "alex.chen@example.com",
  location: "San Francisco, CA",
  about:
    "I'm a passionate AI/ML engineer and data scientist with 5+ years of experience building and deploying machine learning models at scale. I specialize in NLP, computer vision, and predictive analytics, and I love turning messy data into actionable insights. Currently focused on large language models and responsible AI.",
  stats: [
    { label: "Years in ML", value: "5+" },
    { label: "Models Deployed", value: "20+" },
    { label: "Publications", value: "8" },
    { label: "Open Source Projects", value: "12" },
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    kaggle: "https://kaggle.com",
    twitter: "https://twitter.com",
  },
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior ML Engineer",
    company: "TechCorp AI",
    period: "2022 — Present",
    description: "Leading ML infrastructure and model development for production NLP systems.",
    highlights: [
      "Built a real-time NLP pipeline processing 10M+ documents daily",
      "Reduced model inference latency by 40% through optimization",
      "Mentored a team of 4 junior engineers",
    ],
  },
  {
    role: "Data Scientist",
    company: "DataFlow Inc.",
    period: "2020 — 2022",
    description: "Developed predictive models and data pipelines for enterprise clients.",
    highlights: [
      "Designed a churn prediction model improving retention by 25%",
      "Automated ETL pipelines reducing processing time by 60%",
      "Presented findings to C-suite stakeholders",
    ],
  },
  {
    role: "ML Research Intern",
    company: "University AI Lab",
    period: "2019 — 2020",
    description: "Conducted research on transfer learning for low-resource NLP tasks.",
    highlights: [
      "Published 2 papers at top-tier conferences (ACL, EMNLP)",
      "Developed a novel data augmentation technique",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export const education: Education[] = [
  {
    degree: "M.S. Computer Science (ML Specialization)",
    school: "Stanford University",
    period: "2018 — 2020",
    details: "GPA: 3.9/4.0 | Thesis: Transfer Learning for Low-Resource NLP",
  },
  {
    degree: "B.S. Mathematics & Statistics",
    school: "UC Berkeley",
    period: "2014 — 2018",
    details: "Summa Cum Laude | Minor in Computer Science",
  },
];

export const skillCategories = [
  {
    category: "ML / Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "JAX", "XGBoost"],
  },
  {
    category: "NLP",
    skills: ["Transformers", "spaCy", "NLTK", "LangChain", "RAG", "Fine-tuning LLMs"],
  },
  {
    category: "Data & Analytics",
    skills: ["Pandas", "NumPy", "SQL", "Spark", "Airflow", "dbt"],
  },
  {
    category: "Languages",
    skills: ["Python", "R", "TypeScript", "SQL", "Julia"],
  },
  {
    category: "Cloud & MLOps",
    skills: ["AWS SageMaker", "GCP Vertex AI", "Docker", "Kubernetes", "MLflow", "Weights & Biases"],
  },
];

export const certifications = [
  "AWS Certified Machine Learning — Specialty",
  "Google Professional Machine Learning Engineer",
  "Deep Learning Specialization (Coursera)",
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "NLP" | "Computer Vision" | "Data Analysis" | "MLOps" | "Generative AI";
  techStack: string[];
  results: string;
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Intelligent Document Summarizer",
    description: "An LLM-powered tool that summarizes long documents with extractive and abstractive methods.",
    longDescription:
      "Built a production-grade document summarization system using fine-tuned T5 and BART models. The system handles PDFs, Word docs, and web articles, producing concise summaries with configurable length and style. Deployed as a REST API with a React frontend.",
    category: "NLP",
    techStack: ["Python", "PyTorch", "Hugging Face", "FastAPI", "React"],
    results: "Achieved 42 ROUGE-L score, 3x faster than GPT-4 at 1/10th the cost.",
    github: "https://github.com",
  },
  {
    id: "2",
    title: "Real-Time Object Detection System",
    description: "Edge-deployed computer vision model for manufacturing quality control.",
    longDescription:
      "Developed a YOLOv8-based defect detection system for a manufacturing client. The model runs on edge devices (NVIDIA Jetson) and detects 15+ defect types in real-time at 30 FPS. Includes an alert dashboard and automated reporting.",
    category: "Computer Vision",
    techStack: ["Python", "YOLOv8", "TensorRT", "OpenCV", "NVIDIA Jetson"],
    results: "99.2% accuracy, reduced manual inspection time by 80%.",
  },
  {
    id: "3",
    title: "Customer Churn Predictor",
    description: "End-to-end ML pipeline predicting customer churn for a SaaS platform.",
    longDescription:
      "Built a complete churn prediction system including feature engineering, model training (XGBoost + LightGBM ensemble), and deployment. Integrated with the client's CRM to trigger proactive retention campaigns.",
    category: "Data Analysis",
    techStack: ["Python", "XGBoost", "LightGBM", "Airflow", "PostgreSQL"],
    results: "Improved customer retention by 25%, saving $2M annually.",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: "4",
    title: "ML Pipeline Orchestrator",
    description: "Open-source framework for reproducible ML experiment tracking and deployment.",
    longDescription:
      "Created an open-source MLOps tool that simplifies experiment tracking, model versioning, and deployment. Supports multiple ML frameworks and cloud providers with a unified API.",
    category: "MLOps",
    techStack: ["Python", "Docker", "Kubernetes", "MLflow", "GitHub Actions"],
    results: "500+ GitHub stars, adopted by 3 enterprise teams.",
    github: "https://github.com",
  },
  {
    id: "5",
    title: "AI Art Style Transfer App",
    description: "A generative AI application that applies artistic styles to photographs.",
    longDescription:
      "Built a neural style transfer application using a modified VGG-19 network. Users can upload photos and apply styles from famous paintings. Optimized for mobile with CoreML export.",
    category: "Generative AI",
    techStack: ["Python", "PyTorch", "CoreML", "Swift", "Flask"],
    results: "10K+ downloads on the App Store, 4.7 star rating.",
    demo: "https://example.com",
  },
  {
    id: "6",
    title: "Sentiment Analysis Dashboard",
    description: "Real-time social media sentiment tracking for brand monitoring.",
    longDescription:
      "Developed a real-time sentiment analysis system that monitors Twitter, Reddit, and news sites. Uses a fine-tuned RoBERTa model with streaming data processing via Apache Kafka.",
    category: "NLP",
    techStack: ["Python", "RoBERTa", "Kafka", "Elasticsearch", "React"],
    results: "Processes 50K+ posts/hour with 91% accuracy.",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Fine-Tuning LLMs: A Practical Guide",
    excerpt:
      "A hands-on walkthrough of fine-tuning large language models for domain-specific tasks, including LoRA, QLoRA, and full fine-tuning approaches.",
    content: `Fine-tuning large language models has become one of the most impactful techniques in modern NLP. In this post, I'll walk through the practical steps of adapting a pre-trained LLM to your specific domain.\n\n## Why Fine-Tune?\n\nWhile pre-trained models like GPT-4 and Llama are incredibly capable, they often lack domain-specific knowledge. Fine-tuning bridges this gap efficiently.\n\n## Approaches\n\n### LoRA (Low-Rank Adaptation)\nLoRA freezes the pre-trained weights and injects trainable rank decomposition matrices. This dramatically reduces the number of trainable parameters.\n\n### QLoRA\nCombines quantization with LoRA for even more memory-efficient training. You can fine-tune a 65B parameter model on a single GPU.\n\n## Best Practices\n1. Start with a high-quality, curated dataset\n2. Use appropriate learning rates (1e-4 to 5e-5)\n3. Monitor for overfitting with validation metrics\n4. Evaluate on held-out test sets with domain-specific metrics`,
    date: "2024-12-15",
    readTime: "8 min",
    category: "NLP",
  },
  {
    id: "2",
    title: "Building Robust ML Pipelines with MLflow",
    excerpt:
      "How to structure your ML experiments for reproducibility, from data versioning to model deployment with MLflow.",
    content: `Reproducibility is one of the biggest challenges in machine learning. In this post, I share my approach to building robust ML pipelines using MLflow.\n\n## The Problem\n\nMost ML projects start as Jupyter notebooks that quickly become unmaintainable. Without proper tracking, it's impossible to reproduce results.\n\n## MLflow Components\n\n### Tracking\nLog parameters, metrics, and artifacts for every experiment run.\n\n### Projects\nPackage your code in a reproducible format with conda environments.\n\n### Model Registry\nVersion and stage your models (Staging → Production) with approval workflows.\n\n## Key Takeaways\n- Track everything from day one\n- Use consistent naming conventions\n- Automate your pipeline with CI/CD`,
    date: "2024-11-02",
    readTime: "6 min",
    category: "MLOps",
  },
  {
    id: "3",
    title: "The State of Computer Vision in 2024",
    excerpt:
      "An overview of the latest breakthroughs in computer vision, from foundation models to real-time edge deployment.",
    content: `Computer vision has seen remarkable progress in 2024. Let's explore the key trends shaping the field.\n\n## Foundation Models\n\nModels like SAM (Segment Anything) and DINOv2 have changed how we approach CV tasks. Instead of training from scratch, we can now leverage these foundation models.\n\n## Edge Deployment\n\nWith optimized architectures like EfficientNet and MobileNet, deploying CV models on edge devices is more practical than ever.\n\n## Multimodal Learning\n\nThe convergence of vision and language (CLIP, GPT-4V) is opening new possibilities for understanding visual content.\n\n## What's Next?\n- Video understanding at scale\n- 3D scene reconstruction\n- Embodied AI and robotics`,
    date: "2024-09-20",
    readTime: "5 min",
    category: "Computer Vision",
  },
  {
    id: "4",
    title: "Data Quality > Model Complexity",
    excerpt:
      "Why investing in data quality consistently outperforms chasing the latest model architectures.",
    content: `After years of building ML systems, I've learned one lesson that stands above all others: data quality matters more than model complexity.\n\n## The 80/20 Rule of ML\n\n80% of your model's performance comes from your data. The remaining 20% comes from architecture and hyperparameter choices.\n\n## Practical Steps\n\n### 1. Data Profiling\nUnderstand your data distributions, missing values, and outliers before training.\n\n### 2. Labeling Quality\nInvest in clear labeling guidelines and inter-annotator agreement metrics.\n\n### 3. Data Augmentation\nUse smart augmentation strategies that reflect real-world variation.\n\n## Conclusion\nBefore reaching for the latest transformer architecture, invest in understanding and cleaning your data. The ROI is almost always higher.`,
    date: "2024-08-05",
    readTime: "4 min",
    category: "Best Practices",
  },
];
