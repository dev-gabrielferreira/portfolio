export const profile = {
  name: "Gabriel Ferreira",
  firstName: "Gabriel",
  initials: "GF",
  greeting: "Oi, eu sou o",
  roles: [
    "Engenheiro de Controle e Automação",
    "Dados, IA e automação",
    "Python, LLMs e deploy em VPS",
  ],
  location: "Brasil",
  tagline:
    "Vim da automação industrial e hoje trabalho com dados e IA. Gosto quando a coisa sai do notebook e vira API, container e deploy.",
  availability: "Aberto a oportunidades em dados e IA",
  bio: [
    "Me formei em Engenharia de Controle e Automação na UFOP. Passei um tempo bom olhando para chão de fábrica: sensor, alarme, o que quebra e por quê. É esse jeito de pensar que eu trago para o software.",
    "Os projetos aqui do portfólio conversam entre si. Um extrai dado de documento, outro procura resposta em manual técnico, outro faz triagem de ticket. E tem um agente em cima dos três decidindo qual chamar. Fora esses, tem a parte de machine learning: manutenção preditiva e previsão de série temporal.",
    "Tento tratar cada um como produto, não como exercício de curso. Escopo fechado, decisão documentada, teste rodando, deploy em VPS. E quando o modelo não bate o baseline, está escrito no README que não bateu.",
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
