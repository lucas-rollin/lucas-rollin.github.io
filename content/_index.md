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
  "I started as a civil engineer, and that background still shapes how I build software: understand the process, find where time is lost, then automate it. The goal is always a tool people use every day, whether it's a scheduling algorithm for construction or a platform running in production at a regulator.",
  "My core stack is <span class=\"tech\">Django</span> and <span class=\"tech\">HTMX</span> for server-driven apps, with <span class=\"tech\">Python</span> and <span class=\"tech\">Power BI</span> on the data side, which led to <a href=\"https://lucas-rollin.github.io/django-htmx-nav/\" target=\"_blank\" class=\"link-custom\">django-htmx-nav</a>. I'm now widening that range with <span class=\"tech\">Astro</span> and <span class=\"tech\">TypeScript</span> for static, data-driven sites, and <span class=\"tech\">FastAPI</span> with <span class=\"tech\">React</span> for decoupled architectures."
]

# Experience section
[[extra.experience]]
url = "https://www.aresc.sc.gov.br/"
date = "DEC 2024 — PRESENT"
title = "Civil Engineer · ARESC"
description = "Lead the Ombudsman module of a modular web app for a utilities regulator, and automate data routines that cut operational time by 40%. Also build Power BI dashboards for regulatory indicators."
tags = ["Django | Python", "HTMX", "Alpine.js", "Tailwind CSS", "Apps Script", "Power BI", "Data Analysis"]

[[extra.experience]]
url = "https://lucas-rollin.github.io/"
date = "NOV 2024 — FEB 2026"
title = "Full-Stack Developer & Cost Estimator · Freelance"
description = "Built Costplan, a cost estimation app for civil engineering, and delivered dashboards and automations for clients across industries."
tags = ["Django | Python", "JavaScript", "SQL", "Power BI", "Cost Estimation"]

[[extra.experience]]
url = "https://www.scgas.com.br/"
date = "SEP 2023 — JUL 2024"
title = "Planning & Market Intelligence Intern · SCGÁS"
description = "Built Power BI dashboards for the piped gas project portfolio, mapped processes in BPMN, and used QGIS to identify potential customers."
tags = ["Power BI", "Advanced Excel", "QGIS", "BPMN", "Data Analysis"]

[[extra.experience]]
url = "https://www.dacampos.com.br/"
date = "APR 2022 — JUL 2023"
title = "Planning & Civil Engineering Intern · D'Campos Construtora"
description = "Tracked schedule, quality and quantities on 4 vertical projects (~12,000 m²), with MS Project schedules, Sienge ERP control and quality checklists (FVS)."
tags = ["MS Project", "Advanced Excel", "Sienge ERP", "AutoCAD", "Quality Management"]

# Education section
[[extra.education]]
institution = "UNINTER International University Center"
url = "https://www.uninter.com/graduacao/a-distancia/tecnologia-em-analise-e-desenvolvimento-de-sistemas/"
degree = "Technologist in Systems Analysis and Development"
date = "2025 — 2028"
description = "Full merit-based scholarship (100%) through national exam (ENEM) performance."
logo = "/img/uninter.png"

[[extra.education]]
institution = "Harvard University"
url = "https://cs50.harvard.edu/x/"
degree = "CS50 — Computer Science Courses"
date = "JUL 2024 — DEC 2024"
description = "5 concluded certifications: CS50x, CS50 Python, CS50 SQL, CS50 Web and CS50 AI."
logo = "/img/harvard.png"

[[extra.education]]
institution = "Federal University of Santa Catarina (UFSC)"
url = "https://ufsc.br/"
degree = "B.Sc. in Civil Engineering"
date = "2017 — 2024"
description = "GPA: 8.8/10.0."
logo = "/img/ufsc.png"

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
description = "Developed a public Power BI dashboard for ARESC to track the Gas and Transport Price Adjustment Index (IRPGT) and the regulatory account balance under Resolution 73/2016."
url = "https://aresc.sc.gov.br/conta-grafica-power-bi/"
tags = ["Power BI", "DAX", "Power Query", "Data Visualization", "Public Regulation"]
[[extra.projects.media]]
type = "image"
src = "/img/conta-grafica.png"
alt = "Power BI dashboard displaying IRPGT trends, regulatory account balance, and related indicators."
caption = "Public dashboard for monitoring the IRPGT and regulatory account balance"

[[extra.projects]]
title = "Costplan"
description = "Freelance cost estimation platform for gas distribution networks, grown from my CS50W capstone. The link points to the open-source foundation. Rebuilt with HTMX and Alpine.js after learning the limits of a vanilla-JS SPA in the capstone."
url = "https://github.com/lucas-rollin/costplan-core"
tags = ["Django | Python", "HTMX", "Alpine.js", "SQL", "SCSS", "Cost Estimation"]
[[extra.projects.media]]
type = "image"
src = "/img/costplan-dashboard.png"
alt = "Costplan Dashboard interface showcasing ABC curve and aggregation charts."
caption = "Costplan production app dashboard"
[[extra.projects.media]]
type = "image"
src = "/img/costplan-core.png"
alt = "Costplan Core application interface showcasing unit price spreadsheets and construction cost tables."
caption = "Costplan Core, the open-source CS50W capstone"

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