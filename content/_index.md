+++
title = "Portfolio"
template = "index.html"

[extra]
# Personal info
name = "Lucas Rollin Ferreira"
tagline = "Civil Engineer · Full-Stack Developer · Data Analyst"
avatar = "/img/headshot.png"
location = "Florianópolis, Santa Catarina, Brazil"
graduation_title = "B.Sc. in Civil Engineering · UFSC"
graduation_year = "2024"
languages = [
  { name = "English",   level = "C2" },
  { name = "Portuguese", level = "Native" },
]

# Social links
social = [
  { platform = "github",   url = "https://github.com/lucas-rollin" },
  { platform = "linkedin", url = "https://www.linkedin.com/in/lucas-rollin-ferreira" },
  { platform = "email",    url = "mailto:lucasrollinferreira@gmail.com" }
]

# Footer links
footer_links = [
  { text = "Resume",       url = "/pdf/resume.pdf",      arrow_direction = "top_right" },
  { text = "Certificates", url = "certificates/",   arrow_direction = "right" }
]

# About section
about_paragraphs = [
  "I'm a Civil Engineer graduated from <a href=\"https://ufsc.br/\" target=\"_blank\" class=\"link-custom\">UFSC</a> (GPA 8.8/10.0) with a specialization in Full-Stack Web Development and Data Analysis. I build web applications with <span class=\"tech\">Django</span>, <span class=\"tech\">HTMX</span>, <span class=\"tech\">AlpineJS</span> and <span class=\"tech\">Tailwind CSS</span>, automate workflows with <span class=\"tech\">Python</span> and <span class=\"tech\">Google Apps Script</span>, and design strategic dashboards with <span class=\"tech\">Power BI</span>.",
  "I currently work as a Civil Engineer at <a href=\"https://www.aresc.sc.gov.br/\" target=\"_blank\" class=\"link-custom\">ARESC</a>, where I develop internal web applications, automate data collection and processing routines, cutting operational time by 40%, and build dashboards for regulatory indicator monitoring.",
  "Throughout my career I have also worked at <a href=\"https://www.scgas.com.br/\" target=\"_blank\" class=\"link-custom\">SCGÁS</a> in market intelligence and geospatial analysis, and at <a href=\"https://www.dacampos.com.br/\" target=\"_blank\" class=\"link-custom\">D'Campos Construtora</a>, managing planning and control across 4 vertical construction projects (~12,000 m²). I am a native Portuguese speaker, fluent in English (C2), and hold all five Harvard CS50 certifications: <a href=\"/certificates/\" class=\"link-custom\">CS50x, CS50P, CS50 SQL, CS50W and CS50AI</a>."
]

# Experience section
[[extra.experience]]
url = "https://www.aresc.sc.gov.br/"
date = "DEC 2024 — PRESENT"
title = "Civil Engineer · ARESC"
description = "Regulation, inspection and process management in the state infrastructure sector. I develop internal web applications with Django, HTMX, AlpineJS and Tailwind CSS; automate data collection and processing routines with Python and Google Apps Script, reducing operational time by 40%; and build Power BI dashboards for regulatory indicator monitoring."
tags = ["Python | Django", "HTMX", "AlpineJS", "Tailwind CSS", "Apps Script", "Power BI", "Data Analysis"]

[[extra.experience]]
url = "https://lucas-rollin.github.io/"
date = "NOV 2024 — FEB 2026"
title = "Full-Stack Developer & Cost Estimator · Freelance"
description = "Built a web application for civil engineering cost estimation using Django, Vanilla JavaScript and SQL, including database modeling for cost inputs and unit price compositions. Delivered strategic dashboards and custom automations for clients across different industries."
tags = ["Django | Python", "JavaScript", "SQL", "Power BI", "Cost Estimation"]

[[extra.experience]]
url = "https://www.scgas.com.br/"
date = "SEP 2023 — JUL 2024"
title = "Planning & Market Intelligence Intern · SCGÁS"
description = "Created Power BI dashboards to analyze the piped gas project portfolio; mapped and optimized project management processes using BPMN (Bizagi); and conducted geospatial and statistical studies with QGIS to identify potential customers and support strategic decisions."
tags = ["Power BI", "Advanced Excel", "QGIS", "Bizagi (BPMN)", "Data Analysis"]

[[extra.experience]]
url = "https://www.dacampos.com.br/"
date = "APR 2022 — JUL 2023"
title = "Planning & Civil Engineering Intern · D'Campos Construtora"
description = "Monitored 4 vertical construction projects (~12,000 m²), controlling schedule, quality and quantities. Prepared physical schedules in MS Project, tracked materials via Sienge ERP, and developed quality manuals and service verification checklists (FVS) to standardize construction quality."
tags = ["MS Project", "Advanced Excel", "Sienge ERP", "AutoCAD", "Quality Management"]

# Projects section
[[extra.projects]]
title = "Costplan"
description = "Web application for civil engineering project cost estimation, enabling the creation of Unit Price Spreadsheets (UPS) based on predefined cost compositions and a structured input database."
url = ""
tags = ["Django | Python", "JavaScript", "SQL", "HTML", "SCSS", "Cost Estimation"]
[[extra.projects.media]]
type = "image"
src = "/img/costplan.png"
alt = "Costplan preview"

[[extra.projects]]
title = "Hardplan"
description = "Web application for construction project scheduling with algorithms including the Critical Path Method (CPM) and Line of Balance (LOB)."
url = "https://github.com/Harddus0/cs50fp"
tags = ["Flask | Python", "SQL", "JavaScript", "Scheduling"]
[[extra.projects.media]]
type = "image"
src = "/img/hardplan.jpg"
alt = "Hardplan project — Line of Balance scheduling view."

[[extra.projects]]
title = "Hardplan ERP"
description = "Relational database supporting the core features of an ERP system for construction companies: projects, inputs, suppliers, contracts and cost control."
url = "https://github.com/Harddus0/cs50sql"
tags = ["SQL", "Data Modeling", "Construction"]
[[extra.projects.media]]
type = "image"
src = "/img/ERP.png"
alt = "Hardplan ERP — Entity Relationship Diagram."

[[extra.projects]]
title = "Budgetpy"
description = "Python CLI tool for calculating civil construction project costs using SINAPI data, with support for cost compositions and exportable report generation."
url = "https://github.com/Harddus0/cs50p"
tags = ["Python", "CLI", "SINAPI", "Cost Estimation"]
[[extra.projects.media]]
type = "image"
src = "/img/budgetpy.png"
alt = "Budgetpy — CLI interface with menu and cost calculation."
+++