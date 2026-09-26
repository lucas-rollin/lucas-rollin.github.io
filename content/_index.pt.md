+++
title = "Portfolio"
template = "index.html"

[extra]
# Personal info
name = "Lucas Rollin Ferreira"
tagline = "Engenheiro Civil · Desenvolvedor Full-Stack · Analista de Dados"
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

# Footer links
footer_links = [
  { text = "Currículo", url = "/pdf/curriculo.pdf", arrow_direction = "top_right" },
  { text = "Certificados", url = "certificates/", arrow_direction = "right" }
]

# Seção Sobre - Strings multilinha preservando HTML interno
about_paragraphs = [
  "Sou Engenheiro Civil formado pela <a href=\"https://ufsc.br/\" target=\"_blank\" class=\"link-custom\">UFSC</a> (IAP 8.8/10.0) com especialização em Desenvolvimento Web Full-Stack e Análise de Dados. Desenvolvo aplicações web com <span class=\"tech\">Django</span>, <span class=\"tech\">HTMX</span>, <span class=\"tech\">AlpineJS</span> e <span class=\"tech\">Tailwind CSS</span>, automatizo processos com <span class=\"tech\">Python</span> e <span class=\"tech\">Google Apps Script</span> e construo dashboards estratégicos com <span class=\"tech\">Power BI</span>.",
  "Atualmente atuo como Engenheiro Civil na <a href=\"https://www.aresc.sc.gov.br/\" target=\"_blank\" class=\"link-custom\">ARESC</a>, onde desenvolvo aplicações web internas, automatizo rotinas de coleta e processamento de dados, reduzindo o tempo operacional em 40%, e construo dashboards para monitoramento de indicadores regulatórios.",
  "Ao longo da minha trajetória trabalhei na <a href=\"https://www.scgas.com.br/\" target=\"_blank\" class=\"link-custom\">SCGÁS</a>, com inteligência de mercado e análise geoespacial, e na <a href=\"https://www.dacampos.com.br/\" target=\"_blank\" class=\"link-custom\">D'Campos Construtora</a>, com planejamento e controle de 4 obras verticais (~12.000 m²). Sou fluente em inglês (C2) e possuo as cinco certificações Harvard CS50: <a href=\"certificates/\" class=\"link-custom\">CS50x, CS50P, CS50 SQL, CS50W e CS50AI</a>."
]

# Seção Experiência
[[extra.experience]]
url = "https://www.aresc.sc.gov.br/"
date = "DEZ 2024 — PRESENTE"
title = "Engenheiro Civil · ARESC"
description = "Regulação, fiscalização e gestão de processos do setor de infraestrutura estadual. Desenvolvo aplicações web internas com Django, HTMX, AlpineJS e Tailwind CSS; automatizo rotinas de coleta e processamento de dados com Python e Google Apps Script, reduzindo o tempo operacional em 40%; e construo dashboards em Power BI para monitoramento de indicadores regulatórios."
tags = ["Python | Django", "HTMX", "AlpineJS", "Tailwind CSS", "Apps Script", "Power BI", "Análise de Dados"]

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


# Seção Projetos
[[extra.projects]]
title = "django-htmx-nav"
description = "Uma biblioteca de navegação para Django + HTMX que permite atualizações parciais declarativas e orientadas pelo servidor, com um benchmark interativo comparando 8 abordagens arquiteturais e um guia completo sobre padrões de navegação com HTMX."
url = "https://lucas-rollin.github.io/django-htmx-nav/"
tags = ["Django | Python", "HTMX", "AlpineJS", "ECharts", "CI/CD"]
[[extra.projects.media]]
type = "image"
src = "/img/django-htmx-nav.png"
alt = "Prévia social do django-htmx-nav, destacando uma biblioteca Python para navegação orientada ao servidor com HTMX em Django, acompanhada de trecho de código e comando de instalação."
caption = "Biblioteca Python para navegação fluida orientada ao servidor com Django e HTMX"

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

[[extra.projects]]
title = "Hardplan ERP"
description = "Banco de dados relacional para suporte das principais funcionalidades de um ERP voltado para construção civil: obras, insumos, fornecedores, contratos e controle de custos."
url = "https://github.com/Harddus0/cs50sql"
tags = ["SQL", "Modelagem de Dados", "Construção Civil"]
[[extra.projects.media]]
type = "image"
src = "/img/ERP.png"
alt = "Diagrama de Entidade-Relacionamento em Mermaid simplificada para o banco de dados do Hardplan ERP."
caption = "Diagrama de Entidade-Relacionamento do banco de dados"

[[extra.projects]]
title = "Budgetpy"
description = "CLI em Python para cálculo de custos de projetos de construção civil utilizando dados do SINAPI, com suporte a composições de custos e geração de relatórios exportáveis."
url = "https://github.com/Harddus0/cs50p"
tags = ["Python", "CLI", "SINAPI", "Orçamento"]
[[extra.projects.media]]
type = "image"
src = "/img/budgetpy.png"
alt = "Interface de linha de comando do Budgetpy exibindo o menu interativo e o resultado de um cálculo de custos."
caption = "Interface CLI para cálculo de custos e relatórios"
+++