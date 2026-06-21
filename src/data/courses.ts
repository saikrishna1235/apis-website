import { Course } from "@/types/course";

export const courses: Course[] = [
  {
    id: "1",
    slug: "pharmacovigilance",
    title: "Pharmacovigilance",
    image: "/images/courses/pharmacovigilance.jpg",

    shortDescription:
      "Comprehensive drug safety, adverse event reporting and case processing.",

    introduction:
      "Pharmacovigilance is the science and activities related to the detection, assessment, understanding and prevention of adverse effects.",

    modules: [
      {
        title: "Module 1: Introduction to Pharmacovigilance",
        topics: [
          "Definition and History",
          "Importance of Drug Safety",
          "Objectives",
          "Scope",
          "Drug Development Process",
        ],
      },

      {
        title: "Module 2: Drug Safety Basics",
        topics: [
          "AE",
          "ADR",
          "SAE",
          "Medication Errors",
          "Off Label Use",
        ],
      },

      {
        title: "Module 3: Regulations",
        topics: [
          "ICH Guidelines",
          "FDA",
          "EMA",
          "MHRA",
          "WHO Programme",
        ],
      },
    ],

    practicalTraining: [
      "Case Processing",
      "MedDRA Coding",
      "Narrative Writing",
      "Mock Case Studies",
    ],

    interviewPreparation: [
      "Resume Building",
      "Mock Interviews",
      "HR Preparation",
    ],

    outcome:
      "Understand complete Pharmacovigilance workflows and regulations.",
  },

  {
    id: "2",
    slug: "clinical-research",
    title: "Clinical Research",
    image: "/images/courses/clinical-research.jpg",

    shortDescription:
      "Clinical trial processes, ethics, monitoring and GCP.",

    introduction:
      "Clinical Research evaluates the safety and effectiveness of drugs and therapies in humans.",

    modules: [
      {
        title: "Module 1: Introduction",
        topics: [
          "History",
          "Scope",
          "Industry Overview",
          "Career Opportunities",
        ],
      },

      {
        title: "Module 2: Drug Development",
        topics: [
          "Drug Discovery",
          "Preclinical Studies",
          "IND",
          "NDA",
        ],
      },

      {
        title: "Module 3: Clinical Trials",
        topics: [
          "Phase I",
          "Phase II",
          "Phase III",
          "Phase IV",
        ],
      },
    ],

    practicalTraining: [
      "Case Studies",
      "Protocol Review",
      "Monitoring Exercises",
    ],

    interviewPreparation: [
      "Clinical Research Interview Questions",
      "Resume Building",
      "HR Round",
    ],

    outcome:
      "Understand end-to-end clinical trial operations.",
  },
  {
  id: "3",
  slug: "clinical-data-management",
  title: "Clinical Data Management",
  image: "/images/courses/clinical-data-management.jpg",
  shortDescription: "Clinical data collection, validation and management.",
  introduction: "Clinical Data Management ensures accurate and reliable clinical trial data.",
  modules: [
    {
      title: "CDM Fundamentals",
      topics: [
        "Introduction",
        "CRF Design",
        "Data Entry",
        "Data Cleaning",
      ],
    },
  ],
  practicalTraining: [
    "EDC Practice",
    "Query Management",
  ],
  interviewPreparation: [
    "CDM Interview Questions",
  ],
  outcome: "Understand clinical data lifecycle.",
},
{
  id: "4",
  slug: "clinical-sas",
  title: "Clinical SAS",
  image: "/images/courses/clinical-sas.jpg",
  shortDescription: "SAS programming for clinical trials.",
  introduction: "Clinical SAS is used for analysis and reporting of clinical trial data.",
  modules: [
    {
      title: "SAS Basics",
      topics: [
        "DATA Step",
        "PROC Step",
        "Clinical Reporting",
      ],
    },
  ],
  practicalTraining: [
    "SAS Programming",
  ],
  interviewPreparation: [
    "Clinical SAS Interviews",
  ],
  outcome: "Develop clinical SAS programming skills.",
},
{
  id: "5",
  slug: "medical-coding",
  title: "Medical Coding",
  image: "/images/courses/medical-coding.jpg",
  shortDescription: "ICD, CPT and healthcare coding systems.",
  introduction: "Medical coding translates healthcare information into standardized codes.",
  modules: [
    {
      title: "Coding Basics",
      topics: [
        "ICD",
        "CPT",
        "HCPCS",
      ],
    },
  ],
  practicalTraining: [
    "Coding Exercises",
  ],
  interviewPreparation: [
    "Coding Interviews",
  ],
  outcome: "Understand medical coding processes.",
},
{
  id: "6",
  slug: "regulatory-affairs",
  title: "Regulatory Affairs",
  image: "/images/courses/regulatory-affairs.jpg",
  shortDescription: "Drug registration and regulatory submissions.",
  introduction: "Regulatory Affairs ensures compliance with global regulations.",
  modules: [
    {
      title: "RA Fundamentals",
      topics: [
        "FDA",
        "EMA",
        "ICH",
      ],
    },
  ],
  practicalTraining: [
    "Submission Documentation",
  ],
  interviewPreparation: [
    "RA Interviews",
  ],
  outcome: "Understand regulatory submission processes.",
},
{
  id: "7",
  slug: "materiovigilance",
  title: "Materiovigilance",
  image: "/images/courses/materiovigilance.jpg",
  shortDescription: "Medical device safety monitoring.",
  introduction: "Materiovigilance focuses on safety of medical devices.",
  modules: [
    {
      title: "Device Safety",
      topics: [
        "Medical Devices",
        "Incident Reporting",
      ],
    },
  ],
  practicalTraining: [
    "Case Assessment",
  ],
  interviewPreparation: [
    "Materiovigilance Interviews",
  ],
  outcome: "Understand medical device vigilance.",
},
{
  id: "8",
  slug: "pharma-ai",
  title: "Pharma AI",
  image: "/images/courses/pharma-ai.jpg",
  shortDescription: "Artificial Intelligence in pharmaceutical industry.",
  introduction: "AI is transforming drug discovery and healthcare analytics.",
  modules: [
    {
      title: "AI Fundamentals",
      topics: [
        "Machine Learning",
        "Generative AI",
        "Drug Discovery",
      ],
    },
  ],
  practicalTraining: [
    "AI Tools",
  ],
  interviewPreparation: [
    "AI Career Guidance",
  ],
  outcome: "Apply AI concepts in pharmaceutical workflows.",
},
];