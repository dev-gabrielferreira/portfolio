export const profile = {
  name: "Gabriel Ferreira",
  firstName: "Gabriel",
  initials: "GF",
  greeting: "Oi, eu sou o",
  roles: [
    "Engenheiro de Controle e Automação",
    "Construindo soluções com IA",
    "Dados, automação e LLMs",
  ],
  location: "Brasil",
  tagline:
    "Engenheiro de automação virando gente de dados e IA. Construo agentes que decidem, modelos que preveem e análises que respondem perguntas de verdade.",
  availability: "Aberto a oportunidades em Dados e IA",
  bio: [
    "Me formei em Engenharia de Controle e Automação pela UFOP e passei um bom tempo olhando para sistemas físicos: processo, sensor, falha, confiabilidade. Hoje uso exatamente esse jeito de pensar para construir software de dados e IA.",
    "Meus projetos não são exercícios soltos, eles conversam entre si. Um extrai dados de documentos, outro busca resposta na documentação técnica, outro tria tickets de suporte, e um agente orquestrador decide qual deles chamar. Do lado de machine learning, trabalho com manutenção preditiva e previsão de séries temporais.",
    "Gosto de tratar cada projeto como produto: escopo definido, decisões documentadas, testes automatizados e deploy real em VPS. E se um modelo não bate o baseline, isso está escrito no README.",
  ],
  focus: "Dados e Inteligência Artificial",
  education: {
    degree: "Engenharia de Controle e Automação",
    institution: "UFOP, Universidade Federal de Ouro Preto",
  },
  contact: {
    email: "gabrielferreora2gf@gmail.com",
    // TODO(Gabriel): confirmar. O username do GitHub veio do remote deste repo
    // (dev-gabrielferreira). Já o LinkedIn usa a forma com hífen, não verificada.
    linkedin: "https://linkedin.com/in/dev-gabriel-ferreira",
    github: "https://github.com/dev-gabrielferreira",
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
