+++
title = "Portfolio"
template = "index.html"

[extra]
# Personal info
name = "Lucas Rollin Ferreira"
tagline = "Full-Stack Developer · Data Analyst · Civil Engineer"
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

# About section
about_paragraphs = [
  "I'm a Civil Engineer graduated from <a href=\"https://ufsc.br/\" target=\"_blank\" class=\"link-custom\">UFSC</a> working across software development, data analysis, and engineering. I build web applications with <span class=\"tech\">Django</span>, <span class=\"tech\">HTMX</span>, <span class=\"tech\">Alpine.js</span> and <span class=\"tech\">Tailwind CSS</span>, automate workflows with <span class=\"tech\">Python</span> and <span class=\"tech\">Google Apps Script</span>, and design strategic dashboards with <span class=\"tech\">Power BI</span>. Currently, I am pursuing a degree in Systems Analysis and Development at <a href=\"https://www.uninter.com/\" target=\"_blank\" class=\"link-custom\">UNINTER</a> with a full academic scholarship based on national exam performance.",
  "I currently work as a Civil Engineer at <a href=\"https://www.aresc.sc.gov.br/\" target=\"_blank\" class=\"link-custom\">ARESC</a>, where I develop internal web applications, automate data collection and processing routines, cutting operational time by 40%, and build dashboards for regulatory indicator monitoring.",
  "Throughout my career I have also worked at <a href=\"https://www.scgas.com.br/\" target=\"_blank\" class=\"link-custom\">SCGÁS</a> in market intelligence and geospatial analysis, and at <a href=\"https://www.dacampos.com.br/\" target=\"_blank\" class=\"link-custom\">D'Campos Construtora</a>, managing planning and control across 4 vertical construction projects (~12,000 m²). I am a native Portuguese speaker, fluent in English (C2)."
]

# Experience section
[[extra.experience]]
url = "https://www.aresc.sc.gov.br/"
date = "DEC 2024 — PRESENT"
title = "Civil Engineer · ARESC"
description = "I work in public utilities regulation and oversight, combining engineering and technology. Collaborating on a modular web application I lead development of the Ombudsman module, which enables public submissions. I also automate processes with Python and Google Apps Script, reducing operational time by 40%, and develop Power BI dashboards."
tags = ["Django | Python", "HTMX", "Alpine.js", "Tailwind CSS", "Apps Script", "Power BI", "Data Analysis"]

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

# Education section
[[extra.education]]
institution = "UNINTER International University Center"
url = "https://www.uninter.com/graduacao/a-distancia/tecnologia-em-analise-e-desenvolvimento-de-sistemas/"
degree = "Technologist in Systems Analysis and Development"
date = "2025 — 2028"
description = "Full merit-based scholarship (100%) through national exam (ENEM) performance."

[[extra.education]]
institution = "Harvard University"
url = "https://cs50.harvard.edu/x/"
degree = "CS50 — Computer Science Courses"
date = "JUL 2024 — DEC 2024"
description = "5 concluded certifications: CS50x, CS50 Python, CS50 SQL, CS50 Web and CS50 AI."

[[extra.education]]
institution = "Federal University of Santa Catarina (UFSC)"
url = "https://ufsc.br/"
degree = "B.Sc. in Civil Engineering"
date = "2018 — 2024"
description = "GPA: 8.8/10.0."

# Projects section
[[extra.projects]]
title = "django-htmx-nav"
description = "A Django + HTMX navigation library for declarative, server-driven partial updates, with an interactive benchmark comparing 8 architectural approaches and a comprehensive guide to HTMX navigation patterns."
url = "https://lucas-rollin.github.io/django-htmx-nav/"
tags = ["Django | Python", "HTMX", "Alpine.js", "ECharts", "CI/CD"]
[[extra.projects.media]]
type = "image"
src = "/img/django-htmx-nav.png"
alt = "Social preview for django-htmx-nav, showing a Python library for server-driven navigation in HTMX with Django, complete with a code snippet and installation command."
caption = "A Python library for seamless server-driven navigation with Django and HTMX"

[[extra.projects]]
title = "Gas Tariff Regulatory Dashboard"
description = "Developed a public Power BI dashboard for ARESC to track the Gas and Transport Price Adjustment Index (IRPGT) and the regulatory account balance under Resolution 73/2016. Improves public access to tariff adjustment data and transparency in natural gas distribution regulation."
url = "https://aresc.sc.gov.br/conta-grafica-power-bi/"
tags = ["Power BI", "DAX", "Power Query", "Data Visualization", "Public Regulation"]
[[extra.projects.media]]
type = "image"
src = "/img/conta-grafica.png"
alt = "Power BI dashboard displaying IRPGT trends, regulatory account balance, and related indicators."
caption = "Public dashboard for monitoring the IRPGT and regulatory account balance"

[[extra.projects]]
title = "Costplan"
description = "Web application for civil engineering project cost estimation, enabling the creation of Unit Price Spreadsheets (UPS) based on predefined cost compositions and a structured input database."
url = ""
tags = ["Django | Python", "JavaScript", "SQL", "HTML", "SCSS", "Cost Estimation"]
[[extra.projects.media]]
type = "image"
src = "/img/costplan.png"
alt = "Costplan application interface showcasing unit price spreadsheets and construction cost tables."
caption = "Unit price spreadsheet management in Costplan"

[[extra.projects]]
title = "Hardplan"
description = "Web application for construction project scheduling with algorithms including the Critical Path Method (CPM) and Line of Balance (LOB)."
url = "https://github.com/Harddus0/cs50fp"
tags = ["Flask | Python", "SQL", "JavaScript", "Scheduling"]
[[extra.projects.media]]
type = "image"
src = "/img/hardplan.jpg"
alt = "Hardplan app interface in the Line of Balance scheduling view, illustrating a 10-story building timeline from structure to finishing."
caption = "Line of Balance scheduling view"
+++