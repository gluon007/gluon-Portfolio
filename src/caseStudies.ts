export type Block =
  | { t: "p"; text: string }
  | { t: "list"; items: string[] }
  | { t: "olist"; items: string[] }
  | { t: "defs"; items: [string, string][] }
  | { t: "h3"; text: string }
  | { t: "objective"; text: string }
  | { t: "note"; text: string }
  | { t: "placeholder"; text: string }
  | { t: "takeaway"; text: string }

export interface Section {
  n: string
  title: string
  blocks: Block[]
}

export interface Study {
  tag: string
  title: string
  headline: string
  lede: string[]
  meta: [string, string][]
  sections: Section[]
}

const p = (text: string): Block => ({ t: "p", text })

export const caseStudies: Record<string, Study> = {
  srmu: {
    tag: "CASE STUDY / WEB EXPERIENCE",
    title: "SRMU Website Redesign",
    headline:
      "A clearer digital experience for a university with multiple pathways.",
    lede: [
      "Redesigning the university website to improve program discovery, simplify navigation, and establish a cohesive digital experience through a structured design system.",
    ],
    meta: [
      [
        "PROJECT",
        "Shri Ramswaroop Memorial University (SRMU) Website Redesign",
      ],
      ["ROLE", "UI/UX Designer"],
      [
        "SCOPE",
        "Website UX/UI, information architecture, design system, program discovery, responsive layouts",
      ],
      ["PLATFORM", "Web"],
      ["STATUS", "Design project"],
    ],
    sections: [
      {
        n: "01",
        title: "Overview",
        blocks: [
          p(
            "A university website serves multiple audiences, from prospective students exploring programs to current students, faculty, and visitors looking for essential information.",
          ),
          p(
            "The challenge was to create a more structured and visually cohesive experience that supports these different needs without making the interface feel crowded or difficult to navigate.",
          ),
          p(
            "I worked on redesigning the SRMU website with a focus on information hierarchy, program discovery, consistent page structures, and a recognizable institutional visual identity.",
          ),
          p(
            "The goal was to make the experience feel modern and professional while keeping university information accessible and easy to scan.",
          ),
        ],
      },
      {
        n: "02",
        title: "The Challenge",
        blocks: [
          p(
            "University websites contain a broad range of information, including academic programs, admissions, campus resources, institutional information, and student services.",
          ),
          p(
            "Presenting this content effectively requires more than a visual refresh. Users need clear pathways to relevant information, predictable navigation, and consistent patterns across pages.",
          ),
          p("The redesign focused on three key challenges:"),
          {
            t: "defs",
            items: [
              [
                "Complex information architecture",
                "Organizing different content categories and user journeys into a navigation system that feels logical and easy to understand.",
              ],
              [
                "Program discovery",
                "Helping prospective students browse academic offerings, identify relevant programs, and move naturally toward program-specific information.",
              ],
              [
                "Visual consistency",
                "Establishing reusable design patterns that create a unified experience across sections while accommodating different content types.",
              ],
            ],
          },
        ],
      },
      {
        n: "03",
        title: "Design Objectives",
        blocks: [
          p("I approached the redesign with four priorities:"),
          {
            t: "defs",
            items: [
              [
                "Improve discoverability",
                "Make important university information and academic programs easier to find.",
              ],
              [
                "Establish hierarchy",
                "Use clear typography, spacing, and grouping to help users scan content efficiently.",
              ],
              [
                "Create consistency",
                "Build reusable interface patterns and design tokens for a cohesive website.",
              ],
              [
                "Balance identity with usability",
                "Preserve SRMU’s institutional blue-and-yellow visual language while creating a cleaner, more contemporary interface.",
              ],
            ],
          },
        ],
      },
      {
        n: "04",
        title: "My Approach",
        blocks: [
          { t: "h3", text: "01 / Structure before styling" },
          p(
            "I focused on how users move through the website and how information should be grouped and prioritized.",
          ),
          p(
            "The navigation was organized around recognizable university destinations, with attention to the relationship between institutional information, admissions, academic offerings, and student-facing resources.",
          ),
          p(
            "The intent was to make navigation predictable and reduce the effort required to locate important content.",
          ),
          { t: "h3", text: "02 / A more focused visual language" },
          p(
            "I developed a restrained visual direction using institutional blue and yellow, white surfaces, light-blue backgrounds, dark-blue typography, and subtle borders.",
          ),
          p(
            "Rather than relying on decorative effects, the interface uses contrast, spacing, alignment, and consistent component patterns to establish hierarchy.",
          ),
          p(
            "The design direction aims to feel institutional and trustworthy without becoming visually dense or outdated.",
          ),
          { t: "h3", text: "03 / Reusable design system" },
          p(
            "I worked toward a consistent set of layout and component patterns that could be reused across different website sections.",
          ),
          p("This included:"),
          {
            t: "list",
            items: [
              "A structured content grid and consistent container widths.",
              "Reusable section headings and call-to-action patterns.",
              "Program, feature, image, and logo cards.",
              "Numbered indicators and information groupings.",
              "Consistent spacing, typography, borders, and surface treatments.",
            ],
          },
          p(
            "The purpose was to reduce visual inconsistency and make future page design more systematic.",
          ),
        ],
      },
      {
        n: "05",
        title: "Key Design Decisions",
        blocks: [
          { t: "h3", text: "A more organized navigation experience" },
          p(
            "The header was structured to provide access to important institutional destinations and utility actions, including admissions, login options, search, the university’s 360-degree experience, and helpline access.",
          ),
          p(
            "The emphasis was on clear grouping and spacing so that navigation items remain distinguishable rather than competing for attention.",
          ),
          { t: "h3", text: "A more useful Explore Programs section" },
          p(
            "Program discovery was treated as an important part of the website experience.",
          ),
          p(
            "I explored a compact layout with a dedicated search field and category-based navigation, allowing users to focus on relevant academic offerings without having to scan an unnecessarily long page.",
          ),
          p(
            "The section was designed to prioritize discoverability, content hierarchy, and efficient browsing over oversized promotional elements.",
          ),
          { t: "h3", text: "Program-specific landing pages" },
          p(
            "The program-page direction focused on presenting academic information in a clearer hierarchy, with supporting content organized into distinct sections.",
          ),
          p(
            "For the B.Tech Microtronics program, the design context included the program’s association with Tata Motors’ Lucknow plant. This provided an opportunity to present industry relevance as part of the program’s identity without overwhelming the academic information.",
          ),
          { t: "h3", text: "Consistency across page types" },
          p(
            "Different sections require different content treatments, but they should still feel like parts of the same website.",
          ),
          p(
            "Reusable cards, section headings, content widths, and spacing rules helped establish a consistent visual rhythm while allowing individual pages to retain their own purpose.",
          ),
        ],
      },
      {
        n: "06",
        title: "The Design System",
        blocks: [
          p(
            "The design system was intended to make the interface cohesive, scalable, and easier to maintain.",
          ),
          {
            t: "defs",
            items: [
              [
                "Color",
                "Institutional blue provides structure and visual identity, while yellow is reserved for emphasis and important interactions. White and light-blue surfaces create separation between content groups.",
              ],
              [
                "Layout",
                "A 12-column grid, a consistent content container, and generous spacing establish predictable alignment across sections.",
              ],
              [
                "Components",
                "Reusable cards, buttons, section headings, program layouts, and content blocks help maintain consistent interaction and presentation patterns.",
              ],
              [
                "Visual hierarchy",
                "Dark-blue typography, clear heading levels, subtle borders, and restrained shadows distinguish primary information from supporting content.",
              ],
            ],
          },
          p(
            "The guiding principle was simple: the interface should feel consistent because its underlying rules are consistent, not because every page looks identical.",
          ),
        ],
      },
      {
        n: "07",
        title: "Responsive Experience",
        blocks: [
          p(
            "The design direction considered how content and navigation should adapt to different viewport sizes.",
          ),
          p(
            "The priority was to preserve content hierarchy, readable typography, usable controls, and clear relationships between sections as layouts change.",
          ),
          p(
            "Program browsing and key navigation actions should remain accessible without forcing desktop layouts into smaller screens.",
          ),
          {
            t: "placeholder",
            text: "Insert final desktop, tablet, and mobile screenshots here when available.",
          },
        ],
      },
      {
        n: "08",
        title: "Outcome",
        blocks: [
          p(
            "The redesign established a more structured direction for the SRMU website, bringing together information architecture, program discovery, reusable interface patterns, and a consistent institutional visual language.",
          ),
          p("The resulting design approach focused on:"),
          {
            t: "list",
            items: [
              "Clearer content hierarchy and page organization.",
              "A more focused program discovery experience.",
              "Consistent components across website sections.",
              "A restrained visual system aligned with the university’s identity.",
              "A foundation for designing and extending additional pages systematically.",
            ],
          },
          {
            t: "note",
            text: "These are design outcomes rather than measured usability or business results. Quantitative improvements should only be added if supported by testing or analytics.",
          },
        ],
      },
      {
        n: "09",
        title: "Reflection",
        blocks: [
          p(
            "This project reinforced the importance of treating a university website as an interconnected information system rather than a collection of individual pages.",
          ),
          p(
            "Visual consistency matters, but it becomes more valuable when it supports navigation, content comprehension, and predictable interaction.",
          ),
          p(
            "My central focus was to connect information architecture with visual design, creating an experience where the structure of the interface helps users understand both where they are and where they can go next.",
          ),
          {
            t: "takeaway",
            text: "Good institutional design is not about presenting more information. It is about making the right information easier to find and understand.",
          },
        ],
      },
    ],
  },
  srdt: {
    tag: "CASE STUDY / WEB DESIGN",
    title: "SRDT Educational Services",
    headline:
      "Designing an Institutional Training Website That Connects Education with Employability",
    lede: [],
    meta: [
      ["ROLE", "UI/UX Designer"],
      ["PROJECT", "Website Design & UX Improvement"],
      ["INDUSTRY", "Education Technology, Corporate Training & Employability"],
      ["PLATFORM", "Responsive Website"],
    ],
    sections: [
      {
        n: "01",
        title: "Project Overview",
        blocks: [
          p(
            "SRDT Educational Services works with educational institutions to deliver industry-aligned training programs that help students develop practical skills and become career-ready.",
          ),
          p(
            "The challenge was to design a website that communicates this value clearly, presents SRDT’s training capabilities in a structured way, and helps institutions understand how they can partner with SRDT.",
          ),
          p(
            "I approached the project as more than a visual redesign. My focus was to build a coherent digital experience that explains the services, demonstrates the training approach, and guides institutional decision-makers toward meaningful engagement.",
          ),
        ],
      },
      {
        n: "02",
        title: "The Problem",
        blocks: [
          p(
            "Training providers often communicate their offerings through long descriptions, disconnected service sections, and generic marketing content. This can make it difficult for institutional decision-makers to understand the actual value of a partnership.",
          ),
          p(
            "For SRDT, the website needed to communicate three things effectively:",
          ),
          {
            t: "defs",
            items: [
              [
                "What SRDT offers",
                "A comprehensive range of technical, professional, and placement-oriented training programs.",
              ],
              [
                "How SRDT delivers value",
                "Structured learning journeys, practical projects, assessment, technology-enabled learning, and industry exposure.",
              ],
              [
                "How institutions can engage",
                "Clear information about training models, program formats, and partnership enquiries.",
              ],
            ],
          },
          p(
            "The design challenge was to bring these elements together without overwhelming visitors with information or unnecessary visual complexity.",
          ),
        ],
      },
      {
        n: "03",
        title: "Project Goals",
        blocks: [
          p("I established five core design goals:"),
          {
            t: "defs",
            items: [
              [
                "1. Clarify the value proposition",
                "Position SRDT as an institutional learning and employability partner.",
              ],
              [
                "2. Improve content hierarchy",
                "Help visitors understand the offering through clear headings, concise descriptions, and meaningful visual groupings.",
              ],
              [
                "3. Organize the service ecosystem",
                "Arrange the content into intuitive sections covering training programs, delivery models, learning journeys, and placement readiness.",
              ],
              [
                "4. Build a consistent visual language",
                "Use SRDT’s existing brand direction, typography, spacing, colors, cards, and interaction patterns.",
              ],
              [
                "5. Improve enquiry pathways",
                "Make partnership calls to action visible and keep enquiry forms focused on relevant institutional requirements.",
              ],
            ],
          },
        ],
      },
      {
        n: "04",
        title: "My Design Approach",
        blocks: [
          { t: "h3", text: "Understanding the business and its audience" },
          p(
            "I approached the website from the perspective of its primary audience: educational institutions and Training & Placement teams.",
          ),
          p(
            "Rather than treating students as direct customers, I structured the experience around institutional needs, including training requirements, academic calendars, student skill development, and placement preparation.",
          ),
          p(
            "This distinction informed both the content and the calls to action throughout the website.",
          ),
          { t: "h3", text: "Structuring the information architecture" },
          p(
            "I organized the content into a progressive narrative, allowing visitors to understand SRDT before exploring its individual services.",
          ),
          p("The experience moves through:"),
          {
            t: "list",
            items: [
              "SRDT’s vision, mission, and value proposition",
              "Training programs and engagement models",
              "The SRDT learning approach and customized learning journeys",
              "Technology-enabled learning through MyGuruji LMS",
              "Employability development and placement readiness",
              "Institutional partnership and enquiry",
            ],
          },
          p(
            "This structure connects the individual sections into a unified story rather than presenting them as unrelated marketing blocks.",
          ),
          { t: "h3", text: "Establishing a consistent design system" },
          p(
            "I developed the page layouts around a consistent visual language inspired by SRDT’s brand colors and institutional identity.",
          ),
          p("Key design decisions included:"),
          {
            t: "list",
            items: [
              "Deep navy typography for hierarchy and clarity",
              "Blue accents to highlight important phrases and interactions",
              "Restrained green accents for calls to action and selected labels",
              "Light backgrounds with subtle decorative elements",
              "Consistent card borders, corner radii, icon treatments, and spacing",
              "Clear typographic hierarchy and generous whitespace",
            ],
          },
          p(
            "My goal was to create a modern, professional interface that feels cohesive across the entire website, not a collection of independently designed sections.",
          ),
        ],
      },
      {
        n: "05",
        title: "Key Design Solutions",
        blocks: [
          { t: "h3", text: "A. Training Programs & Engagement Models" },
          p(
            "I designed the training program experience to explain how SRDT can adapt its delivery to different institutional requirements.",
          ),
          p(
            "The content distinguishes between seasonal bootcamps, semester-based programs, and year-long training journeys. Each format communicates its purpose, duration or structure where relevant, and relationship to institutional learning goals.",
          ),
          p(
            "I also developed a training-model comparison section to help institutions evaluate SRDT’s end-to-end delivery against internal-team and vendor-based approaches.",
          ),
          p(
            "The comparison focuses on practical decision-making factors such as curriculum ownership, trainer networks, learning platforms, assessment, reporting, and placement support.",
          ),
          {
            t: "objective",
            text: "Make complex service offerings easier to compare and understand.",
          },
          { t: "h3", text: "B. The SRDT Advantage" },
          p(
            "One of the central sections explains what differentiates SRDT’s approach to training.",
          ),
          p("I structured the content around six principles:"),
          {
            t: "list",
            items: [
              "Industry and academia perspective",
              "Learning beyond the curriculum",
              "Practical-first training",
              "Customized learning journeys",
              "Continuous assessment and feedback",
              "Placement readiness built in",
            ],
          },
          p(
            "I refined the content to preserve its meaning while improving readability, scanability, and consistency across the cards.",
          ),
          p(
            "For customized learning journeys, I represented the progression from foundation learning to skill development, advanced learning, industry exposure, and placement preparation as a connected sequence rather than a set of unrelated links.",
          ),
          p(
            "For assessment and placement readiness, I focused on communicating the essential competencies and processes without allowing information-heavy cards to dominate the layout.",
          ),
          {
            t: "objective",
            text: "Communicate SRDT’s methodology through a clear, consistent, and easy-to-scan structure.",
          },
          { t: "h3", text: "C. Customized Learning Journeys" },
          p(
            "I designed the learning-journey content around the idea that students at different academic stages have different learning needs.",
          ),
          p("The experience communicates how programs can be tailored by:"),
          {
            t: "list",
            items: [
              "Academic year",
              "Existing skill level",
              "Discipline",
              "Institutional objectives",
              "Training format",
            ],
          },
          p(
            "This makes the offering easier for institutions to understand in practical terms. Instead of presenting training as a one-size-fits-all solution, the website communicates a progressive approach that can evolve throughout a student’s academic journey.",
          ),
          { t: "h3", text: "D. Technology-Enabled Learning" },
          p(
            "I incorporated MyGuruji LMS into the website narrative to explain how digital learning complements instructor-led training.",
          ),
          p(
            "The content focuses on the learning cycle: learn, practice, assess, track, and improve.",
          ),
          p(
            "This positions the learning platform as part of a broader training ecosystem, supporting learning resources, assessments, learner progress, and continued engagement beyond scheduled sessions.",
          ),
          {
            t: "objective",
            text: "Explain the role of technology in the learning experience without turning the section into a technical product specification.",
          },
          { t: "h3", text: "E. Employability & Placement Readiness" },
          p(
            "I designed the employability content around the capabilities students need to develop beyond completing a course.",
          ),
          p(
            "The content brings together technical competence, problem-solving, practical exposure, communication, interview confidence, and workplace readiness.",
          ),
          p(
            "I also included placement support, career guidance, resume and interview preparation, and industry connections as part of the broader institutional training proposition.",
          ),
          p(
            "The intent was to communicate that successful training should develop practical capability and professional confidence, not simply mark course completion.",
          ),
          { t: "h3", text: "F. Institutional Enquiry & Conversion" },
          p(
            "I approached the enquiry experience with the institutional audience in mind.",
          ),
          p(
            "Rather than introducing unnecessary fields or lengthy forms, I structured the enquiry flow around the information needed to understand an institution’s requirements.",
          ),
          p("The multi-step approach organizes the process into three stages:"),
          {
            t: "olist",
            items: [
              "Institution Details",
              "Training Requirements",
              "Review & Submit",
            ],
          },
          p(
            "I also kept the calls to action direct and relevant to institutional engagement, using language such as “Talk to Us” and “Partner with SRDT.”",
          ),
          {
            t: "objective",
            text: "Make the next step clear while keeping the enquiry experience focused and manageable.",
          },
        ],
      },
      {
        n: "06",
        title: "Visual Design & Interaction Principles",
        blocks: [
          p(
            "Throughout the project, I prioritized consistency over decoration.",
          ),
          p("My design decisions followed a few principles:"),
          {
            t: "defs",
            items: [
              [
                "Hierarchy before ornamentation",
                "Headings and content structure should do most of the communication work.",
              ],
              [
                "One clear purpose per card",
                "Each card should have a single visual hierarchy, with an icon supporting the content rather than competing with it.",
              ],
              [
                "Meaningful visual connections",
                "Sequential information should look connected, while independent concepts should remain distinct.",
              ],
              [
                "Controlled use of color",
                "Blue and green accents should reinforce hierarchy and actions, not make every component compete for attention.",
              ],
              [
                "Content-led layouts",
                "The layout should adapt to the amount and type of content rather than forcing every section into the same card pattern.",
              ],
              [
                "Consistent spacing",
                "Repeated padding, alignment, and typography create a more cohesive experience across the page.",
              ],
              [
                "Responsive thinking",
                "Content groups and layouts should remain readable and usable as the available screen width changes.",
              ],
            ],
          },
          p(
            "These principles helped me evaluate each section as part of the overall website rather than as an isolated visual composition.",
          ),
        ],
      },
      {
        n: "07",
        title: "Challenges & Design Decisions",
        blocks: [
          { t: "h3", text: "Balancing detail with simplicity" },
          p(
            "The website needed to communicate a broad range of services and capabilities. Presenting everything at once would make the experience dense and difficult to scan.",
          ),
          p(
            "I addressed this by grouping related information, shortening repetitive descriptions, and giving each section a clear communication objective.",
          ),
          {
            t: "h3",
            text: "Maintaining consistency across different content types",
          },
          p(
            "A training-model comparison, a learning journey, and a mission statement have different information needs. Applying the same layout to all three would reduce clarity.",
          ),
          p(
            "I therefore focused on a shared design system while allowing individual sections to use layouts suited to their content.",
          ),
          {
            t: "h3",
            text: "Making the website conversion-focused without feeling overly promotional",
          },
          p(
            "The website serves an institutional business audience, so the experience needed to establish credibility before asking visitors to enquire.",
          ),
          p(
            "I used a progressive content structure, relevant calls to action, and focused enquiry flows to connect information discovery with partnership opportunities.",
          ),
        ],
      },
      {
        n: "08",
        title: "The Outcome",
        blocks: [
          p(
            "The project established a more structured approach to presenting SRDT’s institutional training offering through its website design.",
          ),
          p("The resulting design direction brings together:"),
          {
            t: "list",
            items: [
              "A clearer institutional value proposition",
              "A structured presentation of training programs and delivery models",
              "A consistent visual language across content sections",
              "A more understandable explanation of SRDT’s learning methodology",
              "A connected narrative around technology, practical learning, and employability",
              "A focused pathway for institutional partnership enquiries",
            ],
          },
          p(
            "The emphasis was on creating an experience that helps institutional decision-makers understand not only what SRDT offers, but how its training approach can support their students and institutional objectives.",
          ),
          {
            t: "note",
            text: "Quantitative improvements in enquiries, engagement, or conversion would need to be validated using website analytics after implementation.",
          },
        ],
      },
      {
        n: "09",
        title: "Key Takeaway",
        blocks: [
          {
            t: "takeaway",
            text: "Good UX is not about making every section visually impressive. It is about making the entire experience easier to understand and act upon.",
          },
          p(
            "By connecting content strategy, information architecture, visual consistency, and institutional user needs, I worked toward a website experience that presents SRDT as a coherent learning and employability partner.",
          ),
          p(
            "For me, the value of this project lies in translating a broad service offering into a structured digital experience where the content, visual hierarchy, and user journey work together.",
          ),
        ],
      },
    ],
  },
}
