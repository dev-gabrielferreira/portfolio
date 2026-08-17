export const profile = {
  name: "Gabriel Ferreira",
  firstName: "Gabriel",
  initials: "GF",
  greeting: "Oi, eu sou o",
  roles: [
    "Engenharia de Dados",
    "Ingestão, validação e pipeline",
    "Python, Docker e deploy em VPS",
  ],
  location: "Brasil",
  tagline:
    "Vim da automação industrial e hoje construo pipeline de dados. Ingestão, validação e o deploy que faz aquilo rodar sozinho em produção.",
  availability: "Aberto a oportunidades em engenharia de dados",
  bio: [
    "Me formei em Engenharia de Controle e Automação na UFOP. Passei um tempo bom olhando para chão de fábrica: sensor, alarme, o que quebra e por quê. Dado sujo, sensor que para de responder e processo que falha no meio do caminho não me assustam, era o que eu via todo dia.",
    "O que me interessa hoje é a parte de engenharia: tirar dado de onde ele está, seja PDF, API ou arquivo solto, validar antes de confiar, e deixar rodando em container sem depender de alguém apertar botão. Quase todos os projetos aqui embaixo são isso por baixo do capô, mesmo os que têm IA em cima.",
    "Tento tratar cada um como produto, não como exercício de curso. Escopo fechado, decisão documentada, teste rodando, deploy em VPS. E quando o modelo não bate o baseline, está escrito no README que não bateu.",
  ],
  focus: "Engenharia de Dados",
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
    whatsapp: "https://wa.me/5531975901524",
  },
  // O currículo é detectado sozinho: qualquer PDF em public/resume/ vira o download.
};

// Ordem proposital: engenharia de dados primeiro, IA por último.
// Só entra aqui o que aparece de fato em algum projeto do portfólio.
export const skillGroups = [
  {
    title: "Engenharia de Dados",
    skills: [
      "Ingestão de PDF, CSV e APIs",
      "Limpeza e validação de dados",
      "pandas · NumPy",
      "Schema e contrato com Pydantic",
      "Pipelines reprodutíveis",
      "PyMuPDF · openpyxl",
    ],
  },
  {
    title: "Infraestrutura & Deploy",
    skills: [
      "Docker · Docker Compose",
      "Caddy (HTTPS)",
      "VPS (Hostinger)",
      "Git/GitHub",
      "Serviços conversando via REST",
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
    title: "Machine Learning",
    skills: [
      "scikit-learn",
      "LightGBM",
      "SHAP (explicabilidade)",
      "statsmodels · Prophet",
      "Séries temporais",
      "Validação sem vazamento de dados",
    ],
  },
  {
    title: "Busca & Dados vetoriais",
    skills: ["ChromaDB", "sentence-transformers", "Busca híbrida (BM25)"],
  },
  {
    title: "IA & LLMs",
    skills: [
      "LLM Function Calling",
      "RAG (Retrieval-Augmented Generation)",
      "Vision LLM / OCR",
      "OpenAI-compatible APIs",
      "Groq · OpenRouter · Ollama",
    ],
  },
  {
    title: "Visualização & BI",
    skills: ["Streamlit", "Plotly", "Power BI", "Jupyter"],
  },
];
