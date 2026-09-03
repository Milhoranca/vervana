import React, { createContext, useContext, useState, useEffect } from 'react';

const dictionary = {
  en: {
    skip: "Skip to content",
    nav1: "For Startups",
    nav2: "Careers",
    nav3: "About",
    nav4: "Blog",
    cta_header: "Start Hiring",
    headline: "Volume is noise. What you need is one right person.",
    lede: "Vervana connects scaling US startups with Brazilian software engineers. Every search is led by engineers — you receive candidates who were actually evaluated, not a pile of résumés.",
    cta1: "Start a Search",
    cta2: "See How It Works",
    micro: "You pay on delivery. Replacement is free.",
    award1: "Rated 5.0 on Clutch",
    award2: "10x awarded by Awwwards",
    award3: "Awarded by Webaward",

    // Grid Showcase Section (5 Cards)
    stacked_eyebrow: "Engineers selecting engineers",
    stacked_headline: "Exceptional candidates, hand-picked by engineers.",
    stacked_body: "Engineers who understand both code and people. The right match, guaranteed. We look beyond titles, keywords, and rehearsed answers to understand how someone thinks, communicates, and builds.",

    card1_title: "Rigorous Staff+ Code Evaluation",
    card1_desc: "Technical evaluations conducted by staff-level engineers. We test deep architectural reasoning, algorithmic clarity, and live debugging under pressure.",
    card1_tags: ["Deep Logic", "System Architecture", "Algorithmic Rigor", "Debugging"],

    card2_title: "Async Velocity & US Overlap",
    card2_desc: "Fluent English articulation and asynchronous mastery. We evaluate how engineers explain complex trade-offs, document decisions, and collaborate with US product leaders.",
    card2_tags: ["Fluent English", "Async Mastery", "Technical Writing", "Leadership"],

    card3_title: "End-to-End Autonomy & Ownership",
    card3_desc: "Proactive engineers who take full responsibility from initial spec to production deployment. No hand-holding required; candidates who drive momentum.",
    card3_tags: ["End-to-End Delivery", "Autonomy", "Product Mindset", "Production Ready"],

    card4_title: "Pragmatic Architecture & Judgement",
    card4_desc: "Pragmatic engineering choices over trendy hype. Selecting developers who weigh technical debt, maintainability, cost efficiency, and speed-to-market appropriately.",
    card4_tags: ["Pragmatic Stack", "Code Quality", "Scalability", "Trade-off Balance"],

    card5_title: "Pay-on-Delivery & Retention Guarantee",
    card5_desc: "You pay strictly on successful delivery. With dedicated engineering support, seamless US timezone integration, and a 30-day free replacement guarantee, we ensure long-term impact.",
    card5_tags: ["Pay on Delivery", "30-Day Guarantee", "Zero Retainer", "Long-term Impact"],

    // Methodology / Process Section
    methodology_eyebrow: "Curation Methodology",
    methodology_headline: "Built around the role. Not a database.",
    methodology_subheadline: "Every search starts from scratch. We don't recycle stale candidate lists or rely on automated scrapers. We hunt specifically for what your engineering roadmap demands.",
    
    step1_title: "Understand",
    step1_desc: "We learn about your product, team, stage, and what success in the role looks like.",
    step1_meta: "Architecture · Roadmap · Culture",

    step2_title: "Search",
    step2_desc: "We find professionals through direct sourcing, relationships, and specialized communities.",
    step2_meta: "Targeted Outbound · Private Network",

    step3_title: "Evaluate",
    step3_desc: "We assess technical ability, communication, autonomy, and startup readiness.",
    step3_meta: "Engineer-Led · Deep Rigor",

    step4_title: "Introduce",
    step4_desc: "You meet each exceptional talent.",
    step4_meta: "Calibrated Matches · Zero Noise",

    // Decision Workspace Showcase Section
    workspace_eyebrow: "Built for visibility. Not automated judgment.",
    workspace_headline: "Everything your team needs to decide.",
    workspace_body: "Review candidates, interviews, feedback, and next steps in one organized workspace.",
    workspace_reinforce: "Technology keeps the process clear. People make the decisions.",
    
    workspace_tab1: "Define the role",
    workspace_tab2: "Review candidates",
    workspace_tab3: "Share feedback",
    workspace_tab4: "Move to hire",

    // Benchmark Section
    benchmark_headline: "We set the benchmark for high-signal hiring",
    benchmark_card1_title: "100% engineer-led vetting. Zero guesswork.",
    benchmark_card1_desc: "Every candidate goes through deep architectural and algorithmic evaluations conducted by staff-level engineers before reaching your team.",
    benchmark_card1_cta: "Explore Vetting",
    
    benchmark_card2_title: "The standard every search is measured against.",
    benchmark_card2_desc: "You pay strictly on successful delivery. If a placement doesn't work out within the guarantee window, replacement is immediate and free.",
    benchmark_card2_cta: "See Guarantee",
    
    benchmark_card3_title: "Behind the code. Behind the mission. Behind it all.",
    benchmark_card3_desc: "Brazilian engineers working seamlessly in US timezones (EST/PST). Fluent English articulation, async velocity, and battle-tested momentum.",
    benchmark_card3_cta: "Learn More"
  },
  pt: {
    skip: "Pular para o conteúdo",
    nav1: "Para Startups",
    nav2: "Carreiras",
    nav3: "Sobre",
    nav4: "Blog",
    cta_header: "Começar a Contratar",
    headline: "Volume é ruído. O que você precisa é da pessoa certa.",
    lede: "A Vervana conecta startups americanas em crescimento a engenheiros de software brasileiros. Toda busca é conduzida por engenheiros — você recebe pessoas que foram de fato avaliadas, não uma pilha de currículos.",
    cta1: "Iniciar Busca",
    cta2: "Ver Como Funciona",
    micro: "Você paga na entrega. Reposição é gratuita.",
    award1: "Nota 5.0 no Clutch",
    award2: "10x premiado no Awwwards",
    award3: "Reconhecido pelo Webaward",

    // Grid Showcase Section (5 Cards)
    stacked_eyebrow: "Engenheiros selecionando engenheiros",
    stacked_headline: "Candidatos excepcionais, selecionados a dedo por engenheiros.",
    stacked_body: "Engenheiros que entendem tanto de código quanto de pessoas. O encaixe certo, garantido. Olhamos além de cargos, palavras-chave e respostas ensaiadas para entender como alguém pensa, se comunica e constrói.",

    card1_title: "Avaliação Técnica Rigorosa por Staff+",
    card1_desc: "Avaliações técnicas conduzidas por engenheiros sêniores. Testamos raciocínio arquitetural profundo, clareza algorítmica e resolução de bugs sob pressão.",
    card1_tags: ["Lógica Profunda", "Arquitetura de Sistemas", "Rigor Algorítmico", "Debugging"],

    card2_title: "Velocidade Assíncrona e Alinhamento com EUA",
    card2_desc: "Fluência em inglês e domínio assíncrono. Avaliamos como os engenheiros explicam decisões técnicas complexas, documentam processos e colaboram com líderes de produto dos EUA.",
    card2_tags: ["Inglês Fluente", "Domínio Assíncrono", "Escrita Técnica", "Liderança"],

    card3_title: "Autonomia End-to-End e Senso de Dono",
    card3_desc: "Resolvedores proativos de problemas que assumem responsabilidade total do escopo inicial ao deploy em produção. Profissionais autônomos que geram tração.",
    card3_tags: ["Entrega End-to-End", "Autonomia", "Visão de Produto", "Pronto pra Produção"],

    card4_title: "Julgamento Técnico e Escolhas Pragmáticas",
    card4_desc: "Escolhas pragmáticas de engenharia acima de modismos. Selecionamos desenvolvedores que equilibram débitos técnicos, manutenibilidade, eficiência de custos e velocidade.",
    card4_tags: ["Stack Pragmática", "Qualidade de Código", "Escalabilidade", "Equilíbrio de Trade-offs"],

    card5_title: "Pagamento na Entrega e Garantia de Retenção",
    card5_desc: "Você paga estritamente na entrega. Com acompanhamento contínuo de engenharia, integração direta nos fusos dos EUA e garantia de reposição gratuita em 30 dias, garantimos impacto duradouro.",
    card5_tags: ["Pagamento na Entrega", "Garantia de 30 Dias", "Zero Retainer", "Impacto Contínuo"],

    // Methodology / Process Section
    methodology_eyebrow: "Metodologia de Curadoria",
    methodology_headline: "Construído em torno da vaga. Não de um banco de dados.",
    methodology_subheadline: "Toda busca começa do zero. Não reciclamos listas de candidatos nem dependemos de scrapers automatizados. Buscamos exatamente o que o seu roadmap exige.",

    step1_title: "Entender",
    step1_desc: "Entendemos seu produto, equipe, momento e o que define o sucesso na função.",
    step1_meta: "Arquitetura · Roadmap · Cultura",

    step2_title: "Buscar",
    step2_desc: "Encontramos profissionais por meio de busca ativa direta, relacionamentos e comunidades especializadas.",
    step2_meta: "Outbound Direto · Redes Privadas",

    step3_title: "Avaliar",
    step3_desc: "Avaliamos capacidade técnica, comunicação, autonomia e maturidade para startups.",
    step3_meta: "Por Engenheiros · Rigor Profundo",

    step4_title: "Apresentar",
    step4_desc: "Você conhece cada talento verdadeiramente excepcional.",
    step4_meta: "Matches Calibrados · Zero Ruído",

    // Decision Workspace Showcase Section
    workspace_eyebrow: "Construído para visibilidade. Não para julgamento automatizado.",
    workspace_headline: "Tudo o que sua equipe precisa para decidir.",
    workspace_body: "Revise candidatos, entrevistas, feedbacks e próximos passos em um único espaço de trabalho organizado.",
    workspace_reinforce: "A tecnologia mantém o processo claro. As pessoas tomam as decisões.",
    
    workspace_tab1: "Definir a vaga",
    workspace_tab2: "Revisar candidatos",
    workspace_tab3: "Compartilhar feedback",
    workspace_tab4: "Avançar contratação",

    // Benchmark Section
    benchmark_headline: "Definimos o padrão para contratações de alto sinal",
    benchmark_card1_title: "Avaliação 100% conduzida por engenheiros. Zero suposições.",
    benchmark_card1_desc: "Todo candidato passa por avaliações arquiteturais e algorítmicas profundas conduzidas por engenheiros sêniores antes de chegar à sua equipe.",
    benchmark_card1_cta: "Ver Avaliações",
    
    benchmark_card2_title: "O padrão pelo qual toda contratação é medida.",
    benchmark_card2_desc: "Você paga estritamente na entrega. Se o profissional não se adaptar durante o período de garantia, a reposição é imediata e gratuita.",
    benchmark_card2_cta: "Ver Garantia",
    
    benchmark_card3_title: "Por trás do código. Por trás da missão. Por trás de tudo.",
    benchmark_card3_desc: "Engenheiros brasileiros atuando em tempo real nos fusos dos EUA (EST/PST). Fluência em inglês, agilidade assíncrona e velocidade comprovada.",
    benchmark_card3_cta: "Saber Mais"
  }
};

export const LOCALES = [
  { code: "en", short: "EN", flag: "🇺🇸", name: "English", region: "United States", terms: "english united states usa america ingles estados unidos" },
  { code: "pt", short: "PT", flag: "🇧🇷", name: "Português", region: "Brasil", terms: "portugues portuguese brasil brazil br pt-br" }
];

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const t = (key) => {
    return dictionary[lang]?.[key] || dictionary['en']?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, locale: lang, setLang, setLocale: setLang, t, LOCALES }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
