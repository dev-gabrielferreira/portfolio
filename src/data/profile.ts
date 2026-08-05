export const profile = {
  name: "Gabriel Ferreira",
  initials: "GF",
  roles: [
    "Engenheiro de Controle e Automação",
    "Desenvolvedor de Soluções com IA",
    "Dados, Automação e LLMs",
  ],
  location: "Brasil",
  tagline:
    "Construo sistemas de IA aplicada — do agente que decide o que fazer até o modelo que prevê o que vai quebrar.",
  bio: [
    "Formado em Engenharia de Controle e Automação pela UFOP, em transição de carreira para Dados e Inteligência Artificial. Trago da automação industrial uma leitura de sistemas, processos e confiabilidade que aplico hoje na construção de produtos de IA.",
    "Meus projetos formam um portfólio conectado: extração de documentos, busca semântica sobre documentação técnica, triagem automática de tickets e um agente orquestrador que decide qual dessas ferramentas usar — além de modelos de machine learning para manutenção preditiva e previsão de séries temporais, e análises de dados com conclusões acionáveis.",
    "Gosto de tratar cada projeto como um produto: com escopo definido, decisões documentadas, testes automatizados e deploy real em VPS — não apenas notebooks soltos.",
  ],
  focus: "Em transição para Dados & Inteligência Artificial",
  education: {
    degree: "Engenharia de Controle e Automação",
    institution: "UFOP — Universidade Federal de Ouro Preto",
  },
  contact: {
    email: "gabrielferreora2gf@gmail.com",
    linkedin: "https://linkedin.com/in/dev-gabriel-ferreira",
    // TODO(Gabriel): confirmar o username correto do GitHub — vi variações
    // (dev-gabriel-ferreira / dev-gabrielferreira) entre os READMEs dos projetos.
    github: "",
    // TODO(Gabriel): adicionar número de WhatsApp (formato wa.me/55DDXXXXXXXXX).
    whatsapp: "",
  },
  resumeFile: "/resume/curriculo-gabriel-ferreira.pdf",
  // Troque para `true` assim que colocar o PDF de verdade em public/resume/.
  resumeAvailable: false,
};

export const skillGroups = [
  {
    title: "IA & LLMs",
    skills: [
      "LLM Function Calling",
      "RAG (Retrieval-Augmented Generation)",
      "Prompt Engineering",
      "Vision LLM / OCR",
      "OpenAI-compatible APIs",
      "Groq · OpenRouter · Ollama",
    ],
  },
  {
    title: "Dados & Machine Learning",
    skills: [
      "pandas · NumPy",
      "scikit-learn",
      "LightGBM",
      "SHAP (explicabilidade)",
      "statsmodels · Prophet",
      "Séries temporais",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Python",
      "FastAPI",
      "Pydantic",
      "REST APIs",
      "Arquitetura em camadas",
      "Testes automatizados (pytest)",
    ],
  },
  {
    title: "Dados vetoriais & Busca",
    skills: [
      "ChromaDB",
      "sentence-transformers",
      "Busca híbrida (BM25)",
      "PyMuPDF",
    ],
  },
  {
    title: "Visualização & BI",
    skills: ["Streamlit", "Plotly", "Power BI", "Jupyter"],
  },
  {
    title: "Infraestrutura & Deploy",
    skills: ["Docker · Docker Compose", "Caddy (HTTPS)", "VPS (Hostinger)", "Git/GitHub"],
  },
];
