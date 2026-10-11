+++
title = "Portfolio"
template = "index.html"

[extra]
# Personal info
name = "Lucas Rollin Ferreira"
tagline = "Desenvolvedor Full-Stack · Analista de Dados · Engenheiro Civil"
avatar = "/img/headshot.png"
location = "Florianópolis, Santa Catarina, Brasil"
graduation_title = "Bacharel em Engenharia Civil · UFSC"
graduation_year = "2024"
languages = [
  { name = "Inglês",   level = "C2" },
  { name = "Português", level = "Nativo" },
]

# Social links
social = [
  { platform = "github", url = "https://github.com/lucas-rollin" },
  { platform = "linkedin", url = "https://www.linkedin.com/in/lucas-rollin-ferreira" },
  { platform = "email", url = "mailto:lucasrollinferreira@gmail.com" }
]

# Seção Sobre - Strings multilinha preservando HTML interno
about_paragraphs = [
  "Sou Engenheiro Civil formado pela <a href=\"https://ufsc.br/\" target=\"_blank\" class=\"link-custom\">UFSC</a> com atuação híbrida entre desenvolvimento de software, análise de dados e engenharia. Desenvolvo aplicações web com <span class=\"tech\">Django</span>, <span class=\"tech\">HTMX</span>, <span class=\"tech\">Alpine.js</span> e <span class=\"tech\">Tailwind CSS</span>, automatizo processos com <span class=\"tech\">Python</span> e <span class=\"tech\">Google Apps Script</span> e construo dashboards estratégicos com <span class=\"tech\">Power BI</span>. Hoje, curso Análise e Desenvolvimento de Sistemas na <a href=\"https://www.uninter.com/\" target=\"_blank\" class=\"link-custom\">UNINTER</a>, com bolsa integral por desempenho no ENEM.",
  "Atualmente atuo como Engenheiro Civil na <a href=\"https://www.aresc.sc.gov.br/\" target=\"_blank\" class=\"link-custom\">ARESC</a>, onde desenvolvo aplicações web internas, automatizo rotinas de coleta e processamento de dados, reduzindo o tempo operacional em 40%, e construo dashboards para monitoramento de indicadores regulatórios.",
  "Ao longo da minha trajetória trabalhei na <a href=\"https://www.scgas.com.br/\" target=\"_blank\" class=\"link-custom\">SCGÁS</a>, com inteligência de mercado e análise geoespacial, e na <a href=\"https://www.dacampos.com.br/\" target=\"_blank\" class=\"link-custom\">D'Campos Construtora</a>, com planejamento e controle de 4 obras verticais (~12.000 m²). Sou fluente em inglês (C2)."
]

# Seção Experiência
[[extra.experience]]
url = "https://www.aresc.sc.gov.br/"
date = "DEZ 2024 — PRESENTE"
title = "Engenheiro Civil · ARESC"
description = "Atuo na regulação e fiscalização de serviços públicos, conciliando engenharia e tecnologia. Desenvolvo, em equipe, uma aplicação web modular, sendo responsável pelo módulo de Ouvidoria, que permite o envio público de manifestações. Também automatizo processos com Python e Google Apps Script, reduzindo o tempo operacional em 40%, e desenvolvo dashboards em Power BI."
tags = ["Django | Python", "HTMX", "Alpine.js", "Tailwind CSS", "Apps Script", "Power BI", "Análise de Dados"]

[[extra.experience]]
url = "https://lucas-rollin.github.io/"
date = "NOV 2024 — FEV 2026"
title = "Desenvolvedor Full-Stack e Orçamentista | Freelance"
description = "Desenvolvimento de Web App para orçamento de obras de engenharia utilizando Django, Vanilla JavaScript e SQL, com modelagem de banco de dados para estruturação de insumos e composições de custos. Entrega de dashboards estratégicos e automações personalizadas para clientes de diferentes segmentos."
tags = ["Django | Python", "JavaScript", "SQL", "Power BI", "Orçamento"]

[[extra.experience]]
url = "https://www.scgas.com.br/"
date = "SET 2023 — JUL 2024"
title = "Estagiário de Planejamento e Inteligência de Mercado · SCGÁS"
description = "Criação de dashboards em Power BI para análise da carteira de projetos de gás canalizado; mapeamento e otimização de processos de gerenciamento com BPMN (Bizagi); e estudos geoespaciais e estatísticos com QGIS para identificação de clientes potenciais, apoiando decisões estratégicas."
tags = ["Power BI", "Excel Avançado", "QGIS", "Bizagi (BPMN)", "Análise de Dados"]

[[extra.experience]]
url = "https://www.dacampos.com.br/"
date = "ABR 2022 — JUL 2023"
title = "Estagiário de Planejamento e Engenharia Civil · D'Campos Construtora"
description = "Acompanhamento de 4 obras verticais (~12.000 m²) com controle de prazo, qualidade e quantitativos. Elaboração de cronogramas físicos no MS Project, controle de materiais via ERP Sienge e desenvolvimento de manuais e fichas de verificação de serviço (FVS) para padronização da qualidade construtiva."
tags = ["MS Project", "Excel Avançado", "Sienge ERP", "AutoCAD", "Gestão da Qualidade"]

# Seção Formação acadêmica

[[extra.education]]
institution = "Centro Universitário Internacional UNINTER"
url = "https://www.uninter.com/graduacao/a-distancia/tecnologia-em-analise-e-desenvolvimento-de-sistemas/"
degree = "Tecnologia em Análise e Desenvolvimento de Sistemas"
date = "2025 — 2028"
description = "Bolsa integral (100%) por desempenho no ENEM."

[[extra.education]]
institution = "Harvard University"
url = "https://cs50.harvard.edu/x/"
degree = "CS50 — Cursos em Ciência de Computação"
date = "JUL 2024 — DEZ 2024"
description = "5 certificações concluídas: CS50x, CS50 Python, CS50 SQL, CS50 Web e CS50 AI."

[[extra.education]]
institution = "Universidade Federal de Santa Catarina (UFSC)"
url = "https://ufsc.br/"
degree = "Bacharelado em Engenharia Civil"
date = "2018 — 2024"
description = "IAP: 8,8/10,0."

# Seção Projetos
[[extra.projects]]
title = "django-htmx-nav"
description = "Uma biblioteca de navegação para Django + HTMX que permite atualizações parciais declarativas e orientadas pelo servidor, com um benchmark interativo comparando 8 abordagens arquiteturais e um guia completo sobre padrões de navegação com HTMX."
url = "https://lucas-rollin.github.io/django-htmx-nav/"
tags = ["Django | Python", "HTMX", "Alpine.js", "ECharts", "CI/CD"]
[[extra.projects.media]]
type = "image"
src = "/img/django-htmx-nav.png"
alt = "Prévia social do django-htmx-nav, destacando uma biblioteca Python para navegação orientada ao servidor com HTMX em Django, acompanhada de trecho de código e comando de instalação."
caption = "Biblioteca Python para navegação fluida orientada ao servidor com Django e HTMX"

[[extra.projects]]
title = "Dashboard da Conta Gráfica do Gás"
description = "Desenvolvi um painel público em Power BI para a ARESC acompanhar o Índice de Reajuste do Preço do Gás e do Transporte (IRPGT) e o saldo da conta gráfica, conforme a Resolução nº 73/2016. Facilita o acesso público aos dados de atualização tarifária e amplia a transparência na regulação da distribuição de gás natural."
url = "https://aresc.sc.gov.br/conta-grafica-power-bi/"
tags = ["Power BI", "DAX", "Power Query", "Visualização de Dados", "Setor Público"]
[[extra.projects.media]]
type = "image"
src = "/img/conta-grafica.png"
alt = "Painel Power BI com a evolução do IRPGT, o saldo da conta gráfica e indicadores relacionados."
caption = "Painel público de acompanhamento do IRPGT e do saldo da conta gráfica"

[[extra.projects]]
title = "Costplan"
description = "Aplicação web para o orçamento projetos de engenharia civil com criação de Planilhas de Preços Unitários (PPU) com base em Composições de Custos predefinidas."
url = ""
tags = ["Django | Python", "JavaScript", "SQL", "HTML", "SCSS", "Orçamento"]
[[extra.projects.media]]
type = "image"
src = "/img/costplan.png"
alt = "Interface da aplicação Costplan exibindo planilhas de preços unitários e tabelas de custos de construção."
caption = "Visualização de planilhas de preços unitários no Costplan"

[[extra.projects]]
title = "Hardplan"
description = "Aplicação web para gerenciamento de projetos de construção com algoritmos de agendamento como o Método do Caminho Crítico (CPM) e Linha de Balanço (LOB)."
url = "https://github.com/Harddus0/cs50fp"
tags = ["Flask | Python", "SQL", "JavaScript", "Planejamento"]
[[extra.projects.media]]
type = "image"
src = "/img/hardplan.jpg"
alt = "Tela do aplicativo Hardplan na visualização de cronograma por Linha de Balanço, mostrando o planejamento de um edifício de 10 pavimentos da estrutura aos acabamentos."
caption = "Visualização de cronograma por Linha de Balanço"
+++