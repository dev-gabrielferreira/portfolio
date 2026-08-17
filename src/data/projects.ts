export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  stack: string[];
  features: string[];
  status: "MVP em construção" | "Concluído";
  category: "IA & Agentes" | "Machine Learning" | "Dados & Análise";
  githubUrl?: string;
  liveUrl?: string;
};

/** Link que o card usa quando alguém clica para "ir ao projeto". */
export function projectUrl(project: Project): string | undefined {
  return project.liveUrl || project.githubUrl || undefined;
}

export const projects: Project[] = [
  {
    slug: "agente-orquestrador",
    title: "Agente Orquestrador",
    tagline: "O agente que decide qual ferramenta usar",
    description:
      "Agente de IA baseado em function calling que recebe um pedido em linguagem natural, decide quais ferramentas acionar entre os outros serviços do portfólio (extração de documentos, busca em documentação técnica, triagem de tickets) e encadeia ações em múltiplas etapas, sempre pedindo confirmação explícita antes de qualquer ação com efeito colateral.",
    problem:
      "Ter vários serviços de IA especializados não basta se alguém precisa saber manualmente qual chamar. Este agente concentra a decisão: entende o pedido, escolhe a ferramenta certa (ou a sequência delas) e só executa ações reais com aprovação do usuário.",
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "OpenAI SDK (function calling)",
      "OpenRouter / Llama 3.3",
      "httpx",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Function calling escrito na mão, sem LangChain ou CrewAI, com loop próprio e enxuto",
      "Orquestra 3 serviços irmãos via REST (extrator, RAG, triagem)",
      "Confirmação obrigatória antes de qualquer ação com efeito colateral (guardrails)",
      "Interface de chat em Streamlit e API própria em FastAPI",
      "Suite de testes cobrindo agente, guardrails, clientes e registry de ferramentas",
    ],
    status: "MVP em construção",
    category: "IA & Agentes",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "rag-automacao-predial",
    title: "RAG para Documentação Predial",
    tagline: "Busca semântica em manuais técnicos, com a fonte exata citada",
    description:
      "Assistente onde o técnico descreve um problema ou digita um código de falha e o sistema busca na documentação técnica (chillers, painéis de incêndio, CFTV, controladores BMS/BACnet/Modbus), devolvendo a causa provável e o procedimento de solução com citação exata do documento e da página.",
    problem:
      "Documentação técnica de automação predial é extensa e dispersa em PDFs. Encontrar o procedimento certo para um código de falha específico consome tempo, e resposta sem fonte não é confiável em campo.",
    stack: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "sentence-transformers",
      "rank-bm25 (busca híbrida)",
      "PyMuPDF / pymupdf4llm",
      "OpenAI-compatible LLM client",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Busca híbrida: embeddings locais combinados com BM25 (palavra-chave)",
      "Ingestão de PDFs com leitura nativa e OCR via visão para páginas escaneadas",
      "Toda resposta cita o documento e a página de origem",
      "O sistema se abstém explicitamente quando a documentação não cobre o caso",
      "Exposto como ferramenta reutilizável pelo Agente Orquestrador",
      "Avaliação com métricas reais: top-k 100%, top-1 100%, abstenção 75%",
    ],
    status: "MVP em construção",
    category: "IA & Agentes",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "documentador-de-processos",
    title: "Documentador de Processos",
    tagline: "Transforma a execução de uma tarefa em tutorial pronto",
    description:
      "Um agente de captura registra os cliques e telas de um técnico executando um processo (em sistema web ou desktop). A partir dessas capturas, uma IA gera um tutorial passo a passo em Markdown com screenshots anotados, revisável por humano antes de publicar na base de conhecimento.",
    problem:
      "Documentar processos manualmente é repetitivo e costuma ficar desatualizado. Aqui, o próprio ato de executar a tarefa já gera o rascunho da documentação.",
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Vision LLM (Gemini via endpoint compatível OpenAI)",
      "Pillow (anotação/redação de imagens)",
      "pynput / mss / uiautomation",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Agente de captura hookando cliques e teclas no Windows, com 1 screenshot por ação",
      "Visão computacional só é acionada quando o elemento de UI não é identificável, para controlar custo",
      "Revisão humana com edição e redação de dados sensíveis antes da publicação",
      "Publica automaticamente no RAG e na Triagem/FAQ do mesmo portfólio",
      "Suite de testes cobrindo pipeline, anotação, geração e publicação",
    ],
    status: "MVP em construção",
    category: "IA & Agentes",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "triagem-e-faq",
    title: "Triagem + FAQ de Suporte",
    tagline: "Classifica tickets e responde perguntas frequentes sozinho",
    description:
      "Agente que ingere tickets de suporte em texto livre, classifica tema, prioridade e área de roteamento via LLM, e tenta responder automaticamente com base em uma FAQ curada usando busca semântica. Quando não consegue resolver, encaminha para um humano com a resposta já rascunhada.",
    problem:
      "Boa parte dos tickets de suporte são dúvidas repetidas que já têm resposta documentada. Triar e responder isso manualmente desperdiça tempo do time de suporte.",
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "sentence-transformers",
      "Groq (Llama 3.1 8B)",
      "Pydantic",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Classificação estruturada (JSON) de tema, prioridade e área de roteamento",
      "Deflexão de FAQ via busca semântica local com confirmação do LLM",
      "Fallback para roteamento humano com rascunho de resposta pronto",
      "API REST, UI em Streamlit e CLI própria",
      "9 páginas de documentação técnica (arquitetura, fluxo de dados, avaliação, deploy)",
    ],
    status: "MVP em construção",
    category: "IA & Agentes",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "extrator-de-documentos",
    title: "Extrator Estruturado de Documentos (IDP)",
    tagline: "Extrai campos de notas, boletos e contratos com validação",
    description:
      "Pipeline de extração de documentos (notas fiscais, boletos, ordens de serviço, contratos) que identifica campos como nome, CPF/CNPJ, endereço, itens e valores, com pontuação de confiança e proveniência por campo, validando dígitos verificadores, datas e soma de valores antes de exportar.",
    problem:
      "Digitar manualmente dados de documentos é lento e sujeito a erro. Extrair sem validação, por outro lado, gera confiança falsa. Aqui o LLM é obrigado a citar de onde tirou cada campo, e o resultado passa por validação determinística.",
    stack: [
      "Python",
      "FastAPI",
      "Streamlit",
      "PyMuPDF / pymupdf4llm",
      "OpenAI-compatible client (OpenAI / Ollama local)",
      "openpyxl · pandas",
      "Docker Compose",
      "Caddy",
    ],
    features: [
      "Leitura em camadas: texto nativo primeiro, OCR por visão como fallback para scans",
      "Extração via LLM com schema forçado (JSON), sem alucinação de campos",
      "Validação determinística de CPF/CNPJ, datas, moeda e soma que bate com o total",
      "Fila de revisão humana para campos com baixa confiança",
      "Templates de extração pré-definidos e personalizáveis pelo usuário",
      "Discussão explícita de LGPD, com recomendação de Ollama local para dados sensíveis",
    ],
    status: "MVP em construção",
    category: "IA & Agentes",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "manutencao-preditiva",
    title: "Manutenção Preditiva de Equipamentos",
    tagline: "Prevê falha e vida útil restante a partir de sensores",
    description:
      "Modelo de machine learning que, a partir de leituras de sensores de equipamentos industriais, prevê risco de falha, o modo de falha mais provável, a vida útil restante (RUL) e as causas prováveis via importância de features, com tratamento explícito de dados desbalanceados e limiares de decisão baseados em custo.",
    problem:
      "Parar equipamento por manutenção não planejada custa caro. Prever a falha antes que aconteça, com explicação do porquê, permite agir a tempo e priorizar o que realmente importa.",
    stack: [
      "Python",
      "scikit-learn",
      "LightGBM",
      "SHAP (explicabilidade)",
      "FastAPI",
      "Streamlit",
      "joblib",
      "Docker Compose",
    ],
    features: [
      "Classificação de risco de falha e regressão de vida útil restante (RUL)",
      "Explicabilidade via SHAP para apontar causas prováveis",
      "Split temporal e por unidade, sem vazamento de dados (data leakage)",
      "Limiares de decisão por custo, considerando que falso negativo custa 10x mais que falso positivo",
      "Métricas reais no dataset público AI4I 2020: precisão 0,92 · recall 0,73 · PR-AUC 0,91 · RMSE do RUL 8,67",
    ],
    status: "MVP em construção",
    category: "Machine Learning",
    githubUrl: "https://github.com/dev-gabriel-ferreira/manutencao-preditiva-ia",
    liveUrl: "",
  },
  {
    slug: "previsao-series-temporais",
    title: "Previsão de Consumo de Energia",
    tagline: "Previsão honesta, batendo baseline antes de confiar no modelo",
    description:
      "Previsão do consumo horário de energia da rede elétrica brasileira (dados públicos do ONS, 2022 a 2025), comparando desde baselines ingênuos e sazonais até SARIMA/ETS, Prophet e gradient boosting. Nenhum modelo é considerado bom sem antes superar o baseline com validação que respeita o tempo.",
    problem:
      "É fácil publicar um modelo de série temporal com métrica bonita mas enviesada por validação errada. Aqui isso vira regra: backtesting com origem móvel, comparação explícita contra baseline e intervalos de incerteza.",
    stack: [
      "Python",
      "pandas · NumPy",
      "statsmodels (SARIMA, ETS, MSTL)",
      "Prophet",
      "scikit-learn (gradient boosting)",
      "Streamlit",
      "Jupyter",
    ],
    features: [
      "Dados reais do ONS (Curva de Carga Horária do SIN), de 2022 a 2025",
      "Backtesting com origem móvel (rolling origin) respeitando a ordem temporal",
      "Comparação obrigatória contra baseline ingênuo e sazonal antes de validar um modelo",
      "Intervalos de previsão explícitos, não apenas o valor pontual",
      "Dashboard interativo em Streamlit com previsão versus real e bandas de incerteza",
    ],
    status: "MVP em construção",
    category: "Machine Learning",
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "eda-storytelling",
    title: "Análise Exploratória e Storytelling",
    tagline: "De uma pergunta de negócio a uma conclusão acionável",
    description:
      "Análise de ponta a ponta sobre acidentes em rodovias federais brasileiras (dados abertos da PRF, 2021 a 2025): parte de uma pergunta de negócio clara, passa por limpeza documentada e reproduzível, e termina em uma conclusão acionável, entregue como relatório com narrativa e dashboard interativo.",
    problem:
      "Treinar modelo é a parte que todo mundo mostra. Interpretar o dado e contar a história por trás dele é o que separa quem entende o problema de quem só roda algoritmo.",
    stack: ["Python", "pandas", "Plotly", "Streamlit", "Jupyter", "Power BI (modelo/DAX)"],
    features: [
      "342.624 acidentes e 28.668 mortos analisados, de 2021 a 2025",
      "Achado central: colisão frontal (63%) e atropelamento (68%) muito acima da média de gravidade (28,3%)",
      "Hipóteses testadas e refutadas pelo dado, por exemplo: chuva não aumenta a gravidade",
      "Trecho crítico identificado: BR-101/SC, km 130 ao 210",
      "Disciplina explícita de correlação diferente de causa, e visualização honesta",
      "Relatório narrativo (notebook para HTML) e dashboard interativo em Streamlit",
    ],
    status: "MVP em construção",
    category: "Dados & Análise",
    githubUrl: "https://github.com/dev-gabriel-ferreira/eda-storytelling-br",
    liveUrl: "",
  },
];
