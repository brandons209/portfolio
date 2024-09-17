// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'brandons209', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['FSEC-Photovoltaics/pvrpm-lcoe', 'brandons209/Red-bot-Cogs', 'brandons209/CIS6261-Project-SP23'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'MAC - Modular Autonomous Cart that Assists with Intra-home Object Transportation',
          description:
            'The MAC is a robotic system designed to assist elderly individuals and people with disabilities by easing the transportation of household objects such as laundry, groceries, or small furniture items. This autonomous robot is equipped with modular storage options, enabling users to interchange racks or baskets depending on the size and type of load. The MAC follows users to their desired locations using a combination of cameras, LiDAR, ultrasonic, and weight sensors, providing safe and efficient navigation throughout the home. It features a sturdy 4-wheel drivetrain for enhanced stability and smooth maneuvering. Designed with a focus on ease of use, durability, and robustness, MAC ensures reliable performance through a simple interface, minimal user input, and the ability to withstand the physical demands of home environments.',
          imageUrl:
            'https://i.imgur.com/3ufuY8L.jpeg',
          link: 'https://github.com/brandons209/portfolio/blob/f9607882949e5ad2a3210ab24c46e9dbbad5cf45/MAC_design_document.pdf',
        },
        {
          title: 'Practice Makes Perfect',
          description:
            'Practice Makes Perfect is a 2D platformer designed using the Unity engine. Inspired by Super Meat Boy, it is a difficult platformer where failure is guaranteed. However, with enough practice, one can make it through. The game takes place in the far future, where contestants are forced onto the game show "Practice Makes Perfect" to navigate these dangerous courses for everyone\'s entertainment.The game has 5 levels, each of increasing difficulty, and features dynamic obstacle and enemy AI. This was created for the UCF Course "AI For Game Programming" during spring of 2021.',
          imageUrl:
            'https://i.imgur.com/11B94jn.png',
          link: 'https://youtu.be/agisF5CSSBE',
        },
        {
          title: 'The Storyteller',
          description:
            'This project involves the development of a storytelling robot that generates stories based on user prompts. Equipped with facial animations and detection capabilities, the robot moves its head to pan and tilt while speaking, and its “cute” design aims to reduce any sense of uncanniness. The robot is built with an Arduino Uno, five 8x8 LED arrays for facial expressions, a 2-DOF pan/ tilt mechanism, and a Playstation Eye webcam for facial tracking. Housed in a wooden enclosure, it is powered by a 6V lantern battery. The software integrates servo and LED libraries to control animations. Using Python for face tracking, the system adjusts servo angles to follow detected faces. When no face is detected, the robot pans around. Storytelling involves a combination of talking, blinking, and movement. Stories are generated using OpenAI\'s GPT-2 model, fine-tuned on a dataset from Reddit\'s r/ WritingPrompts. Voice generation is handled through Google\'s Text-to-Speech API, offering a variety of realistic voices in multiple languages.',
          imageUrl:
            'https://i.imgur.com/H7EFXMH.png',
          link: 'https://www.youtube.com/watch?v=y06GE-Lww2Y',
        },
        {
          title: 'AI Workshops',
          description:
            'During my undergraduate degree, I designed and hosted several workshops to teach other students the fundamentals of machine and deep learning under the AI@UCF club, founded in 2017. During that time, there were few resources online for students to teach themselves, so our club worked to fill that gap and provide those resources for students interested in a career in AI. Our workshops had two parts, the first part being an interactive presentation on teaching a topic, followed by a prepared project in Python that students followed along to showcase what was taught. I have designed successful workshops for convolutional neural networks, recurrent neural networks and LSTMs, random forests, support vector machines, and more. Many students went on into internships and careers in AI that started in our workshops.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/20828758?s=200&v=4',
          link: 'https://www.youtube.com/watch?v=lGizWY2w_Aw',
        },
        {
          title: 'Homelab',
          description:
            'I have a 42U server rack running a Dell R620 enterprise server and Dell MD1000 NAS alongside an old desktop with 2 GPUs for AI-related work. An APC Smart-UPS 2200VA UPS powers this. I have been running this homelab for many years and rely on it for a variety of self hosted services, such as Nextcloud, Seafile, Plex, Bitwarden, HomeAssistant, OPNSense for routing, Portainer, NGINX webserver, and more. All of these run on virtual machines under the Proxmox hypervisor. Working on this has helped me build various system and network administration skills applicable to multiple systems, as well as experience building and running Docker containers. In the day of cloud technology, it\'s good to experience what the cloud is doing and build one for yourself.',
          imageUrl:
            'https://i.imgur.com/Jd6Shha.jpeg',
          link: '',
        },
        {
          title: 'FIRST Robotics',
          description:
            'During high school, I helped build the FIRST robotics team, Nerds of Prey, number 4065. FIRST robotics encompasses different leagues; our team is an FRC team. Each year, we had six weeks to design and build a robot capable of tackling that year\'s game, which was different every year. I was the lead programmer and designed our codebase from scratch. I first learned how to program in C++ and also learned valuable collaboration, project design, teaching, and leadership skills. After graduating high school, I continued to mentor my team for several years.',
          imageUrl:
            'https://www.firstinspires.org/sites/default/files/uploads/resource_library/brand/thumbnails/FIRST-Icon.png',
          link: 'http://www.nerdsofpreyrobotics.com/',
        },
      ],
    },
  },
  seo: {
    title: 'Brandon Silva\'s Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'contact@ponezone.zone',
  },
  resume: {
    fileUrl:
      'https://github.com/brandons209/portfolio/blob/main/resume2024.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C/C++',
    'Python',
    'Git',
    'Package Deployment',
    'Linux/Windows',
    'MySQL',
    'Linux Command Line',
    'Network Administration',
    'Docker',
    'Microsoft Office',
    'Machine Learning',
    'Deep Learning',
    'PyTorch',
    'Keras',
    'Computer Vision',
    'Transformers',
    'Data Science (scipy,pandas,matplotlib)',
  ],
  experiences: [
    {
      company: 'University of Floirda',
      position: 'Graduate Research Assistant',
      from: 'August 2021',
      to: 'July 2024',
      companyLink: 'https://www.ufl.edu/',
    },
    {
      company: 'Florida Solar Energy Center (FSEC)',
      position: 'Reserach Assistant / Systems Administrator',
      from: 'October 2020',
      to: 'Present',
      companyLink: 'https://energyresearch.ucf.edu/',
    },
    {
      company: 'Center for Research in Computer Vision (CRCV) at UCF',
      position: 'Reserach Assistant',
      from: 'September 2018',
      to: 'December 2019',
      companyLink: 'https://www.crcv.ucf.edu/',
    },
    {
      company: 'Orange County Academy',
      position: 'Network and Systems Administrator',
      from: 'July 2018',
      to: 'July 2021',
      companyLink: 'https://www.ugo2.org',
    },
  ],
  certifications: [
    {
      name: 'SOLIDWORKS CAD Design Associate (CSWA)',
      body: 'The CSWA certification is proof of your SOLIDWORKS® expertise with cutting-edge skills that businesses seek out and reward.',
      year: '2017',
      link: 'https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design',
    },
  ],
  educations: [
    {
      institution: 'University of Central Florida',
      degree: 'Bachelors of Science in Computer Engineering with minors in Mathematics and Intelligent Robotics Systems',
      from: '2017',
      to: '2021',
    },
    {
      institution: 'University of Florida',
      degree: 'Masters of Science in Computer Science',
      from: '2021',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'PyPVRPM: Photovoltaic Reliability and Performance Model in Python',
      conferenceName: '',
      journalName: 'The Journal of Open Source Software',
      authors: 'Brandon Silva, Paul Lunis, Marios Theristis, and Hubert Seigneur',
      link: 'https://joss.theoj.org/papers/10.21105/joss.04093',
      description:
        'The ability to perform accurate techno-economic analysis of solar photovoltaic (PV) systems is essential for bankability and investment purposes. Most energy yield models assume an almost flawless operation(i.e., no failures); however, realistically, components fail and get repaired stochastically. This package, PyPVRPM, is a Python translation and improvement of the Language Kit(LK) based PhotoVoltaic Reliability Performance Model(PVRPM), which was first developed at Sandia National Laboratories in Goldsim software. PyPVRPM allows the user to define a PV system at a specific location and incorporate failure, repair, and detection rates and distributions to calculate energy yield and other financial metrics such as the levelized cost of energy and net present value. Our package is a simulation tool that uses NREL\'s Python interface for System Advisor Model (SAM) to evaluate the performance of a PV plant throughout its lifetime by considering component reliability metrics. Besides the numerous benefits from migrating to Python(e.g., speed, libraries, batch analyses), it also expands on the failure and repair processes from the LK version by including the ability to vary monitoring strategies. These failures, repairs, and monitoring processes are based on user-defined distributions and values, enabling a more accurate and realistic representation of cost and availability throughout a PV system\'s lifetime.',
    },
    {
      title: 'Multi-dimensional patient acuity estimation with longitudinal EHR tokenization and flexible transformer networks',
      conferenceName: '',
      journalName: 'Frontiers in Digital Health',
      authors: 'Benjamin Shickel, Brandon Silva, Tezcan Ozrazgat-Baslanti, Yuanfang Ren, Kia Khezeli, Ziyuan Guan, Patrick J Tighe, Azra Bihorac, Parisa Rashidi',
      link: 'https://pubmed.ncbi.nlm.nih.gov/36440460/',
      description:
        'Transformer model architectures have revolutionized the natural language processing (NLP) domain and continue to produce state-of-the-art results in text-based applications. Prior to the emergence of transformers, traditional NLP models such as recurrent and convolutional neural networks demonstrated promising utility for patient-level predictions and health forecasting from longitudinal datasets. However, to our knowledge only few studies have explored transformers for predicting clinical outcomes from electronic health record (EHR) data, and in our estimation, none have adequately derived a health-specific tokenization scheme to fully capture the heterogeneity of EHR systems. In this study, we propose a dynamic method for tokenizing both discrete and continuous patient data, and present a transformer-based classifier utilizing a joint embedding space for integrating disparate temporal patient measurements. We demonstrate the feasibility of our clinical AI framework through multi-task ICU patient acuity estimation, where we simultaneously predict six mortality and readmission outcomes. Our longitudinal EHR tokenization and transformer modeling approaches resulted in more accurate predictions compared with baseline machine learning models, which suggest opportunities for future multimodal data integrations and algorithmic support tools using clinical transformer networks.',
    },
    {
      title: 'Transformers in Healthcare: A Survey',
      conferenceName: '',
      journalName: '',
      authors: 'Subhash Nerella, Sabyasachi Bandyopadhyay, Jiaqing Zhang, Miguel Contreras, Scott Siegel, Aysegul Bumin, Brandon Silva, Jessica Sena, Benjamin Shickel, Azra Bihorac, Kia Khezeli, Parisa Rashidi',
      link: 'https://arxiv.org/abs/2307.00067',
      description:
        'With Artificial Intelligence (AI) increasingly permeating various aspects of society, including healthcare, the adoption of the Transformers neural network architecture is rapidly changing many applications. Transformer is a type of deep learning architecture initially developed to solve general-purpose Natural Language Processing (NLP) tasks and has subsequently been adapted in many fields, including healthcare. In this survey paper, we provide an overview of how this architecture has been adopted to analyze various forms of data, including medical imaging, structured and unstructured Electronic Health Records (EHR), social media, physiological signals, and biomolecular sequences. Those models could help in clinical diagnosis, report generation, data reconstruction, and drug/protein synthesis. We identified relevant studies using the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) guidelines. We also discuss the benefits and limitations of using transformers in healthcare and examine issues such as computational cost, model interpretability, fairness, alignment with human values, ethical implications, and environmental impact.',
    },
    {
      title: 'Dynamic Delirium Prediction in the Intensive Care Unit using Machine Learning on Electronic Health Records',
      conferenceName: 'IEEE EMBS BHI',
      journalName: '',
      authors: 'Miguel Contreras, Brandon Silva, Benjamin Shickel, Sabyasachi Bandyopadhyay, Ziyuan Guan, Yuanfang Ren, Tezcan Ozrazgat-Baslanti, Kia Khezeli, Azra Bihorac, Parisa Rashidi',
      link: 'https://pubmed.ncbi.nlm.nih.gov/38585187/',
      description:
        'Delirium is a syndrome of acute brain failure which is prevalent amongst older adults in the Intensive Care Unit (ICU). Incidence of delirium can significantly worsen prognosis and increase mortality, therefore necessitating its rapid and continual assessment in the ICU. Currently, the common approach for delirium assessment is manual and sporadic. Hence, there exists a critical need for a robust and automated system for predicting delirium in the ICU. In this work, we develop a machine learning (ML) system for real-time prediction of delirium using Electronic Health Record (EHR) data. Unlike prior approaches which provide one delirium prediction label per entire ICU stay, our approach provides predictions every 12 hours. We use the latest 12 hours of ICU data, along with patient demographic and medical history data, to predict delirium risk in the next 12-hour window. This enables delirium risk prediction as soon as 12 hours after ICU admission. We train and test four ML classification algorithms on longitudinal EHR data pertaining to 16,327 ICU stays of 13,395 patients covering a total of 56,297 12-hour windows in the ICU to predict the dynamic incidence of delirium. The best performing algorithm was Categorical Boosting which achieved an area under receiver operating characteristic curve (AUROC) of 0.87 (95% Confidence Interval; C.I, 0.86-0.87). The deployment of this ML system in ICUs can enable early identification of delirium, thereby reducing its deleterious impact on long-term adverse outcomes, such as ICU cost, length of stay and mortality.',
    },
    {
      title: 'Transformers and large language models in healthcare: A review',
      conferenceName: '',
      journalName: 'Artificial Intelligence in Medicine',
      authors: 'Subhash Nerella, Sabyasachi Bandyopadhyay, Jiaqing Zhang, Miguel Contreras, Scott Siegel, Aysegul Bumin, Brandon Silva, Jessica Sena, Benjamin Shickel, Azra Bihorac, Kia Khezeli, Parisa Rashidi',
      link: 'https://pubmed.ncbi.nlm.nih.gov/38878555/',
      description:
        'With Artificial Intelligence (AI) increasingly permeating various aspects of society, including healthcare, the adoption of the Transformers neural network architecture is rapidly changing many applications. Transformer is a type of deep learning architecture initially developed to solve general-purpose Natural Language Processing (NLP) tasks and has subsequently been adapted in many fields, including healthcare. In this survey paper, we provide an overview of how this architecture has been adopted to analyze various forms of healthcare data, including clinical NLP, medical imaging, structured Electronic Health Records (EHR), social media, bio-physiological signals, biomolecular sequences. Furthermore, which have also include the articles that used the transformer architecture for generating surgical instructions and predicting adverse outcomes after surgeries under the umbrella of critical care. Under diverse settings, these models have been used for clinical diagnosis, report generation, data reconstruction, and drug/protein synthesis. Finally, we also discuss the benefits and limitations of using transformers in healthcare and examine issues such as computational cost, model interpretability, fairness, alignment with human values, ethical implications, and environmental impact.',
    },
    {
      title: 'APRICOT-Mamba: Acuity Prediction in Intensive Care Unit (ICU): Development and Validation of a Stability, Transitions, and Life-Sustaining Therapies Prediction Model',
      conferenceName: '',
      journalName: 'Research Square',
      authors: 'Miguel Contreras, Brandon Silva, Benjamin Shickel, Andrea Davidson, Tezcan Ozrazgat-Baslanti, Yuanfang Ren, Ziyuan Guan, Jeremy Balch, Jiaqing Zhang, Sabyasachi Bandyopadhyay, Tyler Loftus, Kia Khezeli, Subhash Nerella, Azra Bihorac, Parisa Rashidi',
      link: 'https://pubmed.ncbi.nlm.nih.gov/39149454/',
      description:
        'On average, more than 5 million patients are admitted to intensive care units (ICUs) in the US, with mortality rates ranging from 10 to 29%. The acuity state of patients in the ICU can quickly change from stable to unstable, sometimes leading to life-threatening conditions. Early detection of deteriorating conditions can assist in more timely interventions and improved survival rates. While Artificial Intelligence (AI)-based models show potential for assessing acuity in a more granular and automated manner, they typically use mortality as a proxy of acuity in the ICU. Furthermore, these methods do not determine the acuity state of a patient (i.e., stable or unstable), the transition between acuity states, or the need for life-sustaining therapies. In this study, we propose APRICOT-M (Acuity Prediction in Intensive Care Unit-Mamba), a 1M-parameter state space-based neural network to predict acuity state, transitions, and the need for life-sustaining therapies in real-time among ICU patients. The model integrates ICU data in the preceding four hours (including vital signs, laboratory results, assessment scores, and medications) and patient characteristics (age, sex, race, and comorbidities) to predict the acuity outcomes in the next four hours. Our state space-based model can process sparse and irregularly sampled data without manual imputation, thus reducing the noise in input data and increasing inference speed. The model was trained on data from 107,473 patients (142,062 ICU admissions) from 55 hospitals between 2014-2017 and validated externally on data from 74,901 patients (101,356 ICU admissions) from 143 hospitals. Additionally, it was validated temporally on data from 12,927 patients (15,940 ICU admissions) from one hospital in 2018-2019 and prospectively on data from 215 patients (369 ICU admissions) from one hospital in 2021-2023.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
