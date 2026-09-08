/* ============================================================
   RURAL BUSINESS ADVISOR
   COMPLETE APP.JS
   MILESTONE 1 → MILESTONE 4 STEP 3
   Screens 1–14
   ============================================================ */

"use strict";

/* ============================================================
   GLOBAL CONSTANTS
   ============================================================ */

const TOTAL_SCREENS = 14;

/* ============================================================
   CATEGORY DEFAULTS
   ============================================================ */

const categoryDefaults = {
  dairy: {
    label: "Dairy Farming",
    baseScore: 65,
    demand: "High",
    comp: "Medium",
    risk: "Medium",
    opportunity: "High",
    pricePotential: "Stable",
    minViableCapital: 20000,
    optimalCapital: 50000
  },

  kirana: {
    label: "Grocery / Kirana",
    baseScore: 60,
    demand: "High",
    comp: "High",
    risk: "Low",
    opportunity: "Moderate",
    pricePotential: "Stable",
    minViableCapital: 15000,
    optimalCapital: 40000
  },

  poultry: {
    label: "Poultry Farming",
    baseScore: 55,
    demand: "Medium",
    comp: "Medium",
    risk: "High",
    opportunity: "High",
    pricePotential: "Volatile",
    minViableCapital: 25000,
    optimalCapital: 60000
  },

  agro: {
    label: "Agro-processing",
    baseScore: 70,
    demand: "High",
    comp: "Low",
    risk: "Medium",
    opportunity: "Very High",
    pricePotential: "High",
    minViableCapital: 35000,
    optimalCapital: 80000
  },

  retail: {
    label: "Rural Retail / Tailoring",
    baseScore: 58,
    demand: "Medium",
    comp: "Medium",
    risk: "Low",
    opportunity: "Moderate",
    pricePotential: "Moderate",
    minViableCapital: 8000,
    optimalCapital: 20000
  }
};

/* ============================================================
   FINANCIAL DEFAULTS
   ============================================================ */

const financialDefaults = {
  debtRatio: 90,
  interestRate: 9.5,
  tenureMonths: 36,
  monthlyProfit: 15000,
  moratoriumMonths: 1
};

/* ============================================================
   FALLBACK GOVERNMENT SCHEME CATALOG
   ------------------------------------------------------------
   If strategies.js already provides schemeCatalog, that
   catalog can still be used. This fallback keeps the app
   functional even when a scheme entry is missing.
   ============================================================ */

const schemeCatalog = {
  pmmy: { id: "pmmy", name: "Pradhan Mantri Mudra Yojana (PMMY)", shortName: "PMMY", description: "Collateral-free micro-enterprise credit through member lending institutions.", maxAmount: 2000000, benchmarkRate: 9.5, tenureMonths: 60, moratoriumMonths: 1, type: "Micro-enterprise credit", categories: ["dairy", "kirana", "poultry", "agro", "retail"], locations: ["all"], eligibility: "Non-corporate small business / micro enterprise; lender appraisal applies.", benefits: "Shishu, Kishor, Tarun and Tarun Plus credit categories; no scheme-level collateral requirement.", officialUrl: "https://www.mudra.org.in/", status: "Active", activeFrom: "2015-04-08", reviewBy: "2027-03-31" },
  pmegp: { id: "pmegp", name: "Prime Minister's Employment Generation Programme (PMEGP)", shortName: "PMEGP", description: "Margin-money subsidy linked to bank finance for eligible new micro-enterprises.", maxAmount: 5000000, benchmarkRate: 10.5, tenureMonths: 84, moratoriumMonths: 6, type: "Subsidy-linked enterprise loan", categories: ["dairy", "kirana", "poultry", "agro", "retail"], locations: ["all"], eligibility: "New eligible unit; applicant and activity must meet current PMEGP rules. Existing units are not eligible.", benefits: "Margin-money subsidy varies by beneficiary category and rural/urban location; bank finances the balance.", officialUrl: "https://kviconline.gov.in/pmegpeportal/pmegpguidelines.jsp", status: "Active", activeFrom: "2008-08-15", reviewBy: "2027-03-31" },
  cgtmse: { id: "cgtmse", name: "CGTMSE Credit Guarantee Scheme", shortName: "CGTMSE", description: "Credit guarantee support for eligible MSE loans through participating lenders; it is not a direct loan or subsidy.", maxAmount: 100000000, benchmarkRate: 10.5, tenureMonths: 84, moratoriumMonths: 3, type: "Credit guarantee", categories: ["dairy", "kirana", "poultry", "agro", "retail"], locations: ["all"], eligibility: "Eligible micro or small enterprise obtaining credit from a CGTMSE member lender.", benefits: "Guarantee cover can support collateral-free lending; enhanced cover is available for specified borrower and location groups.", officialUrl: "https://www.cgtmse.in/Home/VS/96", status: "Active", activeFrom: "2000-08-30", reviewBy: "2027-03-31" },
  kcc_ah: { id: "kcc_ah", name: "Kisan Credit Card for Animal Husbandry", shortName: "KCC-AH", description: "Working-capital credit support for dairy and poultry animal-husbandry activities.", maxAmount: 300000, benchmarkRate: 7, tenureMonths: 60, moratoriumMonths: 0, type: "Animal husbandry working capital", categories: ["dairy", "poultry"], locations: ["all"], eligibility: "Dairy or poultry farmer / allied-activity operator meeting bank and KCC norms.", benefits: "Revolving working-capital limit and applicable interest support subject to timely repayment and bank terms.", officialUrl: "https://www.nabard.org/content1.aspx?id=602&catid=23&mid=23", status: "Active", activeFrom: "2019-02-01", reviewBy: "2027-03-31" },
  ahidf: { id: "ahidf", name: "Animal Husbandry Infrastructure Development Fund (AHIDF)", shortName: "AHIDF", description: "Interest-subvention support for eligible private-sector animal-husbandry infrastructure.", maxAmount: 200000000, benchmarkRate: 9, tenureMonths: 96, moratoriumMonths: 24, type: "Infrastructure finance", categories: ["dairy", "poultry"], locations: ["all"], eligibility: "Eligible entrepreneur, MSME, FPO, cooperative or private company building approved dairy, poultry or feed infrastructure.", benefits: "Interest subvention and credit-guarantee support for approved infrastructure projects, subject to programme approval.", officialUrl: "https://dahd.nic.in/schemes/programmes/ahidf", status: "Active", activeFrom: "2020-06-24", reviewBy: "2027-03-31" },
  aif: { id: "aif", name: "Agriculture Infrastructure Fund (AIF)", shortName: "AIF", description: "Financing support for eligible post-harvest and community farming infrastructure.", maxAmount: 20000000, benchmarkRate: 9, tenureMonths: 84, moratoriumMonths: 24, type: "Agriculture infrastructure finance", categories: ["dairy", "poultry", "agro"], locations: ["all"], eligibility: "Eligible farmer, agri-entrepreneur, FPO, cooperative, SHG, JLG or MSME creating approved agriculture infrastructure.", benefits: "Interest subvention on eligible loans and credit-guarantee support within programme limits.", officialUrl: "https://agriinfra.dac.gov.in/", status: "Active", activeFrom: "2020-08-09", reviewBy: "2027-03-31" },
  standup: { id: "standup", name: "Stand-Up India", shortName: "Stand-Up India", description: "Bank-loan facilitation for greenfield enterprises promoted by women or SC/ST entrepreneurs.", maxAmount: 10000000, benchmarkRate: 10.5, tenureMonths: 84, moratoriumMonths: 18, type: "Greenfield enterprise loan", categories: ["dairy", "kirana", "poultry", "agro", "retail"], locations: ["all"], eligibility: "Greenfield enterprise with a woman or SC/ST promoter; borrower must satisfy bank and scheme conditions.", benefits: "Composite bank loan from ₹10 lakh to ₹1 crore with repayment tenure up to 7 years, including moratorium where applicable.", officialUrl: "https://www.standupmitra.in/", status: "Active", activeFrom: "2016-04-05", reviewBy: "2027-03-31" },
  pmvishwakarma: { id: "pmvishwakarma", name: "PM Vishwakarma", shortName: "PM Vishwakarma", description: "Support for eligible traditional artisans and craftspeople, including tailoring-related trades.", maxAmount: 300000, benchmarkRate: 5, tenureMonths: 48, moratoriumMonths: 0, type: "Artisan enterprise support", categories: ["retail"], locations: ["all"], eligibility: "Traditional artisan or craftsperson in an approved trade, verified through the prescribed process.", benefits: "Skill training, toolkit incentive, digital transaction incentive and concessional enterprise loans in tranches.", officialUrl: "https://pmvishwakarma.gov.in/", status: "Active", activeFrom: "2023-09-17", reviewBy: "2028-03-31" },
  pmsvanidhi: { id: "pmsvanidhi", name: "PM SVANidhi", shortName: "PM SVANidhi", description: "Working-capital support for eligible urban street vendors.", maxAmount: 50000, benchmarkRate: 7, tenureMonths: 12, moratoriumMonths: 0, type: "Street-vendor working capital", categories: ["kirana", "retail"], locations: ["urban"], eligibility: "Urban street vendor with the required certificate of vending, ID or local-body recommendation.", benefits: "Escalating working-capital loans, timely-repayment interest subsidy and digital-transaction cashback, subject to rules.", officialUrl: "https://pmsvanidhi.mohua.gov.in/", status: "Active", activeFrom: "2020-06-01", reviewBy: "2027-03-31" }
};

/* ============================================================
   APPLICATION STATE
   ============================================================ */

const appState = {
  currentScreen: 1,

  location: {
    village: "",
    block: "",
    district: ""
  },

  marginCapital: 0,
  businessCategory: "",

  feasibilityScore: 0,

  indicators: {
    demand: "",
    competition: "",
    opportunity: "",
    risk: "",
    pricePotential: ""
  },

  financials: {
    projectCost: 0,
    marginAmount: 0,
    loanAmount: 0,

    debtRatio: financialDefaults.debtRatio,

    interestRate: financialDefaults.interestRate,
    tenureMonths: financialDefaults.tenureMonths,
    monthlyProfit: financialDefaults.monthlyProfit,

    monthlyEMI: 0,

    recommendedScheme: "PMMY Mudra Loan",
    selectedSchemeId: "pmmy",

    moratoriumMonths: financialDefaults.moratoriumMonths,

    repaymentSchedule: [],

    totalInterest: 0,
    totalPayment: 0,

    debtBurden: 0,
    repaymentCapacity: "Not Evaluated",
    financialStatus: "Not Evaluated",

    advice: ""
  },

  reportReferenceId: "",

  assessmentGenerated: false
};

/* ============================================================
   ACTIVE SCHEDULE VIEW
   ============================================================ */

let activeScheduleView = "monthly";

/* ============================================================
   GENERAL UTILITIES
   ============================================================ */

function safeText(value, fallback = "") {
  if (value === null || value === undefined) {
    return fallback;
  }

  const text = String(value).trim();

  return text || fallback;
}

function safeArray(value, fallback = []) {
  return Array.isArray(value) ? value : fallback;
}

function safeNumber(value, fallback = 0) {
  const number = Number(value);

  return Number.isFinite(number) ? number : fallback;
}

function formatCurrency(value) {
  const amount = safeNumber(value, 0);

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function formatNumber(value) {
  const number = safeNumber(value, 0);

  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0
  }).format(number);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/* ============================================================
   STRATEGIC DATA HELPERS
   ============================================================ */

function getStrategicCategoryData(categoryKey) {
  const key =
    categoryKey ||
    appState.businessCategory ||
    "dairy";

  if (
    typeof strategicData !== "undefined" &&
    strategicData &&
    strategicData[key]
  ) {
    return strategicData[key];
  }

  return {
    label:
      categoryDefaults[key]?.label ||
      "Rural Micro-Enterprise",

    audience:
      "Local households, nearby retailers and repeat community customers.",

    reach:
      "Primarily the village and surrounding block, with expansion potential into nearby markets.",

    segments:
      "Households, local traders, institutional buyers and nearby consumers.",

    channels:
      "Direct sales, local retailers, village networks, referrals and nearby market linkages.",

    opportunities: [
      "Build repeat local customers.",
      "Use local supplier networks.",
      "Explore nearby institutional buyers."
    ],

    competition: {
      level: categoryDefaults[key]?.comp || "Medium",
      players:
        "Small local operators, established traders and informal market participants.",
      insights:
        "Differentiate through reliability, service quality, product consistency and customer trust."
    },

    swot: {
      strengths: [
        "Local customer familiarity",
        "Ability to operate with community-level relationships"
      ],

      weaknesses: [
        "Limited initial capital",
        "Exposure to local demand fluctuations"
      ],

      opportunities: [
        "Digital/local delivery channels",
        "Institutional and nearby-market customers"
      ],

      threats: [
        "Input price volatility",
        "Competition from established operators"
      ]
    },

    threats: {
      bottlenecks: [
        "Supplier delays and local transport constraints"
      ],

      seasonality:
        "Demand may fluctuate during seasonal and agricultural cycles.",

      rawMaterial:
        "Input prices may move due to supply and seasonal conditions.",

      buyerRisk:
        "Dependence on a limited number of buyers can create collection risk."
    },

    pricing: {
      purchasingPower:
        "Customers are generally price-conscious and value reliability.",

      strategy:
        "Use competitive base pricing with clear value differentiation.",

      valueProposition:
        "Reliable local service, consistent quality and transparent pricing."
    },

    opportunityLevel:
      categoryDefaults[key]?.opportunity || "Moderate"
  };
}

function getCurrentCategoryProfile() {
  return getStrategicCategoryData(
    appState.businessCategory || "dairy"
  );
}

/* ============================================================
   INDICATOR CLASS
   ============================================================ */

function getIndicatorClass(value) {
  const text = safeText(value).toLowerCase();

  if (
    text.includes("high") ||
    text.includes("strong") ||
    text.includes("low risk") ||
    text.includes("stable")
  ) {
    return "positive";
  }

  if (
    text.includes("medium") ||
    text.includes("moderate") ||
    text.includes("manageable")
  ) {
    return "neutral";
  }

  if (
    text.includes("risk") ||
    text.includes("volatile") ||
    text.includes("elevated")
  ) {
    return "negative";
  }

  return "";
}

/* ============================================================
   FEASIBILITY ENGINE
   ============================================================ */

function calculateFeasibilityScore() {
  const categoryKey =
    appState.businessCategory || "dairy";

  const config =
    categoryDefaults[categoryKey] ||
    categoryDefaults.dairy;

  const capital = Math.max(
    0,
    safeNumber(appState.marginCapital, 0)
  );

  let score = config.baseScore;

  if (capital >= config.optimalCapital) {
    score += 15;
  } else if (capital >= config.minViableCapital) {
    score += 5;
  } else {
    score -= 15;
  }

  score = clamp(score, 0, 100);

  appState.feasibilityScore = Math.round(score);

  appState.indicators = {
    demand: config.demand,

    competition: config.comp,

    opportunity: config.opportunity,

    risk:
      capital < config.minViableCapital
        ? "High"
        : config.risk,

    pricePotential: config.pricePotential
  };

  return appState.feasibilityScore;
}

function refreshFeasibilityFromInputs() {
  const village = document.getElementById("village");
  const block = document.getElementById("block");
  const district = document.getElementById("district");
  const capital = document.getElementById("capital");
  const category = document.getElementById("category");

  if (village) appState.location.village = village.value.trim();
  if (block) appState.location.block = block.value.trim();
  if (district) appState.location.district = district.value;
  if (capital) appState.marginCapital = Math.max(0, parseFloat(capital.value) || 0);
  if (category) appState.businessCategory = category.value;

  const score = calculateFeasibilityScore();

  /* Update the live dashboard immediately when it is being viewed. */
  if (appState.currentScreen === 3) {
    renderDashboard();
    applyLanguage();
  }

  if (appState.currentScreen === 14) {
    renderScreen14();
    applyLanguage();
  }

  return {
    score,
    status: getScoreStatus(score)
  };
}

/* ============================================================
   FORM VALIDATION
   ============================================================ */

function validateAssessmentForm() {
  const errors = [];

  const villageInput =
    document.getElementById("village");

  const blockInput =
    document.getElementById("block");

  const districtInput =
    document.getElementById("district");

  const capitalInput =
    document.getElementById("capital");

  const categoryInput =
    document.getElementById("category");

  const fields = [
    villageInput,
    blockInput,
    districtInput,
    capitalInput,
    categoryInput
  ];

  fields.forEach((element) => {
    element?.classList.remove("input-error");
  });

  if (
    !villageInput ||
    !villageInput.value.trim()
  ) {
    errors.push(
      "Village / Gram Panchayat is required."
    );

    villageInput?.classList.add("input-error");
  }

  if (
    !blockInput ||
    !blockInput.value.trim()
  ) {
    errors.push("Block is required.");

    blockInput?.classList.add("input-error");
  }

  if (
    !districtInput ||
    !districtInput.value
  ) {
    errors.push("Please select a District.");

    districtInput?.classList.add("input-error");
  }

  const capitalVal =
    parseFloat(
      capitalInput?.value || ""
    );

  if (
    !Number.isFinite(capitalVal) ||
    capitalVal < 1000
  ) {
    errors.push(
      "Available Margin Capital must be at least ₹1,000."
    );

    capitalInput?.classList.add(
      "input-error"
    );
  }

  if (
    !categoryInput ||
    !categoryInput.value
  ) {
    errors.push(
      "Please select a Business Category."
    );

    categoryInput?.classList.add(
      "input-error"
    );
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/* ============================================================
   ASSESSMENT SUBMISSION
   ============================================================ */

function handleAssessmentSubmit(event) {
  if (event) {
    event.preventDefault();
  }

  const validation =
    validateAssessmentForm();

  const errorContainer =
    document.getElementById("form-errors");

  if (!validation.isValid) {
    if (errorContainer) {
      errorContainer.innerHTML =
        validation.errors
          .map(
            (error) =>
              `<div>• ${safeText(document.documentElement.dataset.language === "hi" ? (easyHindi[error] || error) : error)}</div>`
          )
          .join("");

      errorContainer.classList.remove(
        "hidden-step"
      );
    }

    return false;
  }

  if (errorContainer) {
    errorContainer.classList.add(
      "hidden-step"
    );

    errorContainer.innerHTML = "";
  }

  appState.location.village =
    document
      .getElementById("village")
      .value.trim();

  appState.location.block =
    document
      .getElementById("block")
      .value.trim();

  appState.location.district =
    document
      .getElementById("district")
      .value;

  appState.marginCapital =
    parseFloat(
      document
        .getElementById("capital")
        .value
    );

  appState.businessCategory =
    document
      .getElementById("category")
      .value;

  calculateFeasibilityScore();

  appState.assessmentGenerated = true;

  /* Preserve financial settings unless they
     have never been initialized. */

  if (
    !appState.financials.projectCost
  ) {
    calculateFinancialPlan();
  }

  goToScreen(3);

  return true;
}

/* ============================================================
   SCREEN 3
   ============================================================ */

function getScoreStatus(score) {
  if (score >= 70) {
    return {
      text: "High Viability",
      className: "badge-opp-green",
      explanation:
        "The enterprise shows comparatively strong feasibility based on the available capital and category benchmark."
    };
  }

  if (score >= 50) {
    return {
      text: "Moderate Viability",
      className: "badge-opp-blue",
      explanation:
        "The enterprise is potentially viable, but execution discipline and financial risk controls are important."
    };
  }

  return {
    text: "High Caution",
    className: "badge-opp-red",
    explanation:
      "The current capital position indicates higher downside exposure. Validate demand and strengthen the capital buffer before taking significant debt."
  };
}

let feasibilityRenderTimer = null;
let feasibilityRenderVersion = 0;

function renderDashboard() {
  const scoreNumber = document.getElementById("score-number");
  const scoreBadge = document.getElementById("score-badge");
  const scoreExplanation = document.getElementById("score-explanation");
  const version = ++feasibilityRenderVersion;

  if (feasibilityRenderTimer) {
    clearTimeout(feasibilityRenderTimer);
  }

  if (scoreNumber) scoreNumber.textContent = "--";
  if (scoreBadge) {
    scoreBadge.textContent = "Calculating...";
    scoreBadge.className = "status-badge";
  }
  if (scoreExplanation) {
    scoreExplanation.textContent = "Analyzing your business inputs...";
  }

  /* The score is local and deterministic; this short state gives clear feedback
     while guaranteeing that a result replaces the loader within one second. */
  feasibilityRenderTimer = window.setTimeout(() => {
    if (version !== feasibilityRenderVersion) return;
    renderDashboardResults();
  }, 450);
}

function renderDashboardResults() {
  calculateFeasibilityScore();

  const score =
    appState.feasibilityScore;

  const status =
    getScoreStatus(score);

  const scoreNumber =
    document.getElementById(
      "score-number"
    );

  const scoreBadge =
    document.getElementById(
      "score-badge"
    );

  const scoreExplanation =
    document.getElementById(
      "score-explanation"
    );

  if (scoreNumber) {
    scoreNumber.textContent =
      score;
  }

  if (scoreBadge) {
    scoreBadge.textContent =
      status.text;

    scoreBadge.className =
      `status-badge ${status.className}`;
  }

  if (scoreExplanation) {
    scoreExplanation.textContent =
      status.explanation;
  }

  const indicators =
    appState.indicators;

  const demand =
    document.getElementById(
      "indicator-demand"
    );

  const competition =
    document.getElementById(
      "indicator-competition"
    );

  const risk =
    document.getElementById(
      "indicator-risk"
    );

  const price =
    document.getElementById(
      "indicator-price"
    );

  if (demand) {
    demand.textContent =
      indicators.demand || "--";
  }

  if (competition) {
    competition.textContent =
      indicators.competition || "--";
  }

  if (risk) {
    risk.textContent =
      indicators.risk || "--";
  }

  if (price) {
    price.textContent =
      indicators.pricePotential || "--";
  }

  feasibilityRenderTimer = null;
  applyLanguage();
}

/* ============================================================
   SCREEN 4
   ============================================================ */

function renderScreen4() {
  const profile =
    getCurrentCategoryProfile();

  const audience =
    document.getElementById(
      "market-audience"
    );

  const reach =
    document.getElementById(
      "market-reach"
    );

  const segments =
    document.getElementById(
      "market-segments"
    );

  const channels =
    document.getElementById(
      "market-channels"
    );

  if (audience) {
    audience.textContent =
      safeText(
        profile.audience,
        "Nearby households and local customers."
      );
  }

  if (reach) {
    reach.textContent =
      safeText(
        profile.reach,
        "Village and surrounding block."
      );
  }

  if (segments) {
    segments.textContent =
      safeText(
        profile.segments,
        "Local households and nearby businesses."
      );
  }

  if (channels) {
    channels.textContent =
      safeText(
        profile.channels,
        "Direct sales and local distribution."
      );
  }
}

/* ============================================================
   SCREEN 5
   ============================================================ */

function renderScreen5() {
  const profile =
    getCurrentCategoryProfile();

  const badge =
    document.getElementById(
      "opp-level-badge"
    );

  const list =
    document.getElementById(
      "opp-items-list"
    );

  if (badge) {
    badge.textContent =
      safeText(
        profile.opportunityLevel,
        "Moderate"
      );

    badge.className =
      "badge-opp badge-opp-green";

    const level =
      safeText(
        profile.opportunityLevel,
        ""
      ).toLowerCase();

    if (level.includes("low")) {
      badge.className =
        "badge-opp badge-opp-red";
    } else if (
      level.includes("moderate") ||
      level.includes("medium")
    ) {
      badge.className =
        "badge-opp badge-opp-blue";
    }
  }

  if (list) {
    const opportunities =
      safeArray(
        profile.opportunities,
        [
          "Strengthen local customer acquisition.",
          "Build supplier and distribution relationships.",
          "Explore nearby market expansion."
        ]
      );

    list.innerHTML = "";

    opportunities.forEach(
      (item) => {
        const li =
          document.createElement(
            "li"
          );

        li.textContent =
          safeText(item);

        list.appendChild(li);
      }
    );
  }
}

/* ============================================================
   SCREEN 6
   ============================================================ */

function renderScreen6() {
  const profile =
    getCurrentCategoryProfile();

  const badge =
    document.getElementById(
      "comp-level-badge"
    );

  const players =
    document.getElementById(
      "comp-players"
    );

  const insights =
    document.getElementById(
      "comp-insights"
    );

  const competition =
    profile.competition || {};

  if (badge) {
    badge.textContent =
      safeText(
        competition.level,
        appState.indicators.competition ||
          "Medium"
      );

    const level =
      safeText(
        competition.level,
        ""
      ).toLowerCase();

    badge.className =
      "badge-opp badge-opp-blue";

    if (
      level.includes("low")
    ) {
      badge.className =
        "badge-opp badge-opp-green";
    }

    if (
      level.includes("high")
    ) {
      badge.className =
        "badge-opp badge-opp-red";
    }
  }

  if (players) {
    players.textContent =
      safeText(
        competition.players,
        "Local traders and small operators."
      );
  }

  if (insights) {
    insights.textContent =
      safeText(
        competition.insights,
        "Differentiate with consistency, reliability and service quality."
      );
  }
}

/* ============================================================
   SCREEN 7
   ============================================================ */

function renderScreen7() {
  const profile =
    getCurrentCategoryProfile();

  const swot =
    profile.swot || {};

  const mapping = {
    strengths:
      "swot-strengths-list",

    weaknesses:
      "swot-weaknesses-list",

    opportunities:
      "swot-opportunities-list",

    threats:
      "swot-threats-list"
  };

  Object.keys(mapping).forEach(
    (key) => {
      const element =
        document.getElementById(
          mapping[key]
        );

      if (!element) {
        return;
      }

      element.innerHTML = "";

      safeArray(
        swot[key],
        []
      ).forEach((item) => {
        const li =
          document.createElement(
            "li"
          );

        li.textContent =
          safeText(item);

        element.appendChild(li);
      });
    }
  );
}

/* ============================================================
   SCREEN 8
   ============================================================ */

function renderScreen8() {
  const profile =
    getCurrentCategoryProfile();

  const threat =
    profile.threats || {};

  const riskBadge =
    document.getElementById(
      "risk-level-badge"
    );

  const bottlenecks =
    document.getElementById(
      "threat-bottlenecks"
    );

  const seasonality =
    document.getElementById(
      "threat-seasonality"
    );

  const rawMaterial =
    document.getElementById(
      "threat-raw-material"
    );

  const buyerRisk =
    document.getElementById(
      "threat-buyer-risk"
    );

  const riskText =
    appState.indicators.risk ||
    "Medium Risk";

  if (riskBadge) {
    riskBadge.textContent =
      `${riskText}`;

    const lower =
      riskText.toLowerCase();

    riskBadge.className =
      "badge-opp badge-opp-blue";

    if (
      lower.includes("high") ||
      lower.includes("elevated")
    ) {
      riskBadge.className =
        "badge-opp badge-opp-red";
    }

    if (
      lower.includes("low")
    ) {
      riskBadge.className =
        "badge-opp badge-opp-green";
    }
  }

  if (bottlenecks) {
    bottlenecks.textContent =
      safeArray(
        threat.bottlenecks,
        [
          "Supplier delays and transport constraints."
        ]
      ).join(" ");
  }

  if (seasonality) {
    seasonality.textContent =
      safeText(
        threat.seasonality,
        "Seasonal demand may affect cash flow."
      );
  }

  if (rawMaterial) {
    rawMaterial.textContent =
      safeText(
        threat.rawMaterial,
        "Input prices may fluctuate."
      );
  }

  if (buyerRisk) {
    buyerRisk.textContent =
      safeText(
        threat.buyerRisk,
        "Avoid depending on a single buyer."
      );
  }
}

/* ============================================================
   SCREEN 9
   ============================================================ */

function renderScreen9() {
  const profile =
    getCurrentCategoryProfile();

  const pricing =
    profile.pricing || {};

  const power =
    document.getElementById(
      "pricing-power"
    );

  const strategy =
    document.getElementById(
      "pricing-strategy"
    );

  const valueProp =
    document.getElementById(
      "pricing-value-prop"
    );

  if (power) {
    power.textContent =
      safeText(
        pricing.purchasingPower,
        "Customers remain price-conscious."
      );
  }

  if (strategy) {
    strategy.textContent =
      safeText(
        pricing.strategy,
        "Use competitive pricing with clear value differentiation."
      );
  }

  if (valueProp) {
    valueProp.textContent =
      safeText(
        pricing.valueProposition,
        "Reliable local service and transparent pricing."
      );
  }
}

/* ============================================================
   FINANCIAL PLAN
   ============================================================ */

function calculateFinancialPlan() {
  const capital =
    Math.max(
      0,
      safeNumber(
        appState.marginCapital,
        0
      )
    );

  const debtRatio =
    clamp(
      safeNumber(
        appState.financials.debtRatio,
        90
      ),
      0,
      95
    );

  const marginRatio =
    1 - debtRatio / 100;

  const minimumProjectCost =
    marginRatio > 0
      ? capital / marginRatio
      : capital;

  const category =
    categoryDefaults[
      appState.businessCategory
    ] || categoryDefaults.dairy;

  const benchmarkCost =
    Math.max(
      category.minViableCapital,
      capital
    );

  const projectCost =
    Math.max(
      minimumProjectCost,
      benchmarkCost
    );

  const marginAmount =
    capital;

  const loanAmount =
    Math.max(
      0,
      projectCost - marginAmount
    );

  appState.financials.projectCost =
    Math.round(projectCost);

  appState.financials.marginAmount =
    Math.round(marginAmount);

  appState.financials.loanAmount =
    Math.round(loanAmount);

  appState.financials.debtRatio =
    debtRatio;

  return appState.financials;
}

/* ============================================================
   SAFE EMI CALCULATOR
   ============================================================ */

function calculateMonthlyEMI(
  principal,
  annualRatePercent,
  tenureMonths
) {
  const P =
    Math.max(
      0,
      safeNumber(principal, 0)
    );

  const annualRate =
    Math.max(
      0,
      safeNumber(
        annualRatePercent,
        0
      )
    );

  const n =
    parseInt(
      tenureMonths,
      10
    ) || 0;

  if (
    P === 0 ||
    n <= 0
  ) {
    return 0;
  }

  if (
    annualRate === 0
  ) {
    return Math.round(
      P / n
    );
  }

  const r =
    annualRate /
    (12 * 100);

  const compoundFactor =
    Math.pow(
      1 + r,
      n
    );

  const denominator =
    compoundFactor - 1;

  if (
    !Number.isFinite(
      compoundFactor
    ) ||
    denominator === 0
  ) {
    return Math.round(
      P / n
    );
  }

  const emi =
    (P * r * compoundFactor) /
    denominator;

  if (
    !Number.isFinite(emi)
  ) {
    return Math.round(
      P / n
    );
  }

  return Math.round(emi);
}

/* Compatibility helper */

function calculateEMI(
  principal,
  annualRatePercent,
  tenureMonths
) {
  return calculateMonthlyEMI(
    principal,
    annualRatePercent,
    tenureMonths
  );
}

/* ============================================================
   REPAYMENT SCHEDULE GENERATOR
   ============================================================ */

function generateRepaymentSchedule(
  principal,
  annualRatePercent,
  tenureMonths,
  moratoriumMonths = 0
) {
  const P =
    Math.max(
      0,
      safeNumber(principal, 0)
    );

  const annualRate =
    Math.max(
      0,
      safeNumber(
        annualRatePercent,
        0
      )
    );

  const n =
    Math.max(
      1,
      parseInt(
        tenureMonths,
        10
      ) || 1
    );

  const morMonths =
    Math.max(
      0,
      parseInt(
        moratoriumMonths,
        10
      ) || 0
    );

  if (P === 0) {
    return [];
  }

  const schedule = [];

  let balance = P;

  const monthlyRate =
    (annualRate / 100) / 12;

  const emi =
    calculateMonthlyEMI(
      P,
      annualRate,
      n
    );

  let currentMonth = 1;

  /* ----------------------------------------------------------
     MORATORIUM
     Interest serviced only.
     Principal remains unchanged.
     ---------------------------------------------------------- */

  for (
    let m = 0;
    m < morMonths;
    m++
  ) {
    const interestPayment =
      Math.round(
        balance *
          monthlyRate
      );

    schedule.push({
      month:
        currentMonth++,

      isMoratorium: true,

      openingBalance:
        Math.round(balance),

      payment:
        interestPayment,

      principalPaid: 0,

      interestPaid:
        interestPayment,

      closingBalance:
        Math.round(balance)
    });
  }

  /* ----------------------------------------------------------
     AMORTIZATION
     ---------------------------------------------------------- */

  for (
    let m = 1;
    m <= n;
    m++
  ) {
    const opening =
      Math.round(balance);

    const interestPaid =
      Math.round(
        opening *
          monthlyRate
      );

    let principalPaid =
      emi - interestPaid;

    let payment =
      emi;

    if (
      principalPaid < 0
    ) {
      principalPaid = 0;
    }

    /* Final-month reconciliation */

    if (
      m === n ||
      balance - principalPaid <= 0
    ) {
      principalPaid =
        balance;

      payment =
        principalPaid +
        interestPaid;

      balance = 0;
    } else {
      balance =
        Math.max(
          0,
          balance -
            principalPaid
        );
    }

    schedule.push({
      month:
        currentMonth++,

      isMoratorium: false,

      openingBalance:
        opening,

      payment:
        Math.round(payment),

      principalPaid:
        Math.round(
          principalPaid
        ),

      interestPaid:
        Math.round(
          interestPaid
        ),

      closingBalance:
        Math.round(
          balance
        )
    });

    if (
      balance === 0
    ) {
      break;
    }
  }

  return schedule;
}

/* Compatibility alias */

function buildRepaymentSchedule(
  principal,
  annualRatePercent,
  tenureMonths,
  moratoriumMonths = 0
) {
  return generateRepaymentSchedule(
    principal,
    annualRatePercent,
    tenureMonths,
    moratoriumMonths
  );
}

/* ============================================================
   FINANCIAL ENGINE
   ============================================================ */

function runFinancialEngine() {
  calculateFinancialPlan();

  const fin =
    appState.financials;

  fin.monthlyEMI =
    calculateMonthlyEMI(
      fin.loanAmount,
      fin.interestRate,
      fin.tenureMonths
    );

  fin.repaymentSchedule =
    generateRepaymentSchedule(
      fin.loanAmount,
      fin.interestRate,
      fin.tenureMonths,
      fin.moratoriumMonths
    );

  fin.totalInterest =
    fin.repaymentSchedule.reduce(
      (total, row) =>
        total +
        safeNumber(
          row.interestPaid
        ),
      0
    );

  fin.totalPayment =
    fin.repaymentSchedule.reduce(
      (total, row) =>
        total +
        safeNumber(
          row.payment
        ),
      0
    );

  const profit =
    Math.max(
      0,
      safeNumber(
        fin.monthlyProfit,
        0
      )
    );

  if (
    profit > 0
  ) {
    fin.debtBurden =
      Number(
        (
          fin.monthlyEMI /
          profit
        ) * 100
      ).toFixed(1);
  } else {
    fin.debtBurden = 0;
  }

  if (
    profit <= 0
  ) {
    fin.repaymentCapacity =
      "Insufficient";
  } else if (
    fin.monthlyEMI <=
    profit * 0.35
  ) {
    fin.repaymentCapacity =
      "Strong";
  } else if (
    fin.monthlyEMI <=
    profit * 0.60
  ) {
    fin.repaymentCapacity =
      "Moderate";
  } else {
    fin.repaymentCapacity =
      "Stretched";
  }

  if (
    fin.monthlyEMI === 0
  ) {
    fin.financialStatus =
      "No Debt";
  } else if (
    fin.repaymentCapacity ===
    "Strong"
  ) {
    fin.financialStatus =
      "Financeable";
  } else if (
    fin.repaymentCapacity ===
    "Moderate"
  ) {
    fin.financialStatus =
      "Conditional";
  } else {
    fin.financialStatus =
      "High Debt Stress";
  }

  fin.advice =
    buildFinancialAdvice();

  return fin;
}

/* ============================================================
   FINANCIAL ADVICE
   ============================================================ */

function buildFinancialAdvice() {
  const fin =
    appState.financials;

  if (
    fin.monthlyEMI <= 0
  ) {
    return (
      "No meaningful debt service is currently projected. Review the financing requirement before taking debt."
    );
  }

  if (
    fin.repaymentCapacity ===
    "Strong"
  ) {
    return (
      `The projected EMI of ${formatCurrency(fin.monthlyEMI)} remains within a comparatively comfortable share of the expected monthly business surplus. Maintain a cash reserve and verify lender terms before borrowing.`
    );
  }

  if (
    fin.repaymentCapacity ===
    "Moderate"
  ) {
    return (
      `The projected EMI of ${formatCurrency(fin.monthlyEMI)} creates a moderate repayment burden. Strengthen the operating buffer and avoid unnecessary early expansion.`
    );
  }

  return (
    `The projected EMI of ${formatCurrency(fin.monthlyEMI)} creates a high repayment burden relative to expected monthly surplus. Consider reducing the loan requirement, increasing promoter contribution, or piloting the business before taking significant debt.`
  );
}

/* ============================================================
   SCREEN 10
   ============================================================ */

function renderScreen10() {
  const fin =
    appState.financials;

  calculateFinancialPlan();

  const loanInput =
    document.getElementById(
      "loan-amount"
    );

  const interestInput =
    document.getElementById(
      "interest-rate"
    );

  const tenureInput =
    document.getElementById(
      "loan-tenure"
    );

  const profitInput =
    document.getElementById(
      "monthly-profit"
    );

  if (
    loanInput &&
    safeNumber(
      fin.loanAmount
    ) > 0
  ) {
    loanInput.value =
      fin.loanAmount;
  }

  if (
    interestInput
  ) {
    interestInput.value =
      fin.interestRate;
  }

  if (
    tenureInput
  ) {
    tenureInput.value =
      fin.tenureMonths;
  }

  if (
    profitInput
  ) {
    profitInput.value =
      fin.monthlyProfit;
  }

  runFinancialEngine();

  updateFinancialScreen10();
}

function updateFinancialScreen10() {
  const fin =
    appState.financials;

  const emi =
    document.getElementById(
      "financial-emi"
    );

  const debtBurden =
    document.getElementById(
      "financial-debt-burden"
    );

  const capacity =
    document.getElementById(
      "financial-repayment-capacity"
    );

  const status =
    document.getElementById(
      "financial-status"
    );

  const advice =
    document.getElementById(
      "financial-advice"
    );

  if (emi) {
    emi.textContent =
      formatCurrency(
        fin.monthlyEMI
      );
  }

  if (debtBurden) {
    debtBurden.textContent =
      `${fin.debtBurden}%`;
  }

  if (capacity) {
    capacity.textContent =
      fin.repaymentCapacity;
  }

  if (status) {
    status.textContent =
      fin.financialStatus;
  }

  if (advice) {
    advice.textContent =
      fin.advice;
  }
}

/* ============================================================
   MANUAL FINANCE CALCULATION
   ============================================================ */

function calculateManualFinance() {
  const loanInput =
    document.getElementById(
      "loan-amount"
    );

  const interestInput =
    document.getElementById(
      "interest-rate"
    );

  const tenureInput =
    document.getElementById(
      "loan-tenure"
    );

  const profitInput =
    document.getElementById(
      "monthly-profit"
    );

  if (loanInput) {
    appState.financials.loanAmount =
      Math.max(
        0,
        parseFloat(
          loanInput.value
        ) || 0
      );
  }

  if (interestInput) {
    appState.financials.interestRate =
      Math.max(
        0,
        parseFloat(
          interestInput.value
        ) || 0
      );
  }

  if (tenureInput) {
    appState.financials.tenureMonths =
      Math.max(
        1,
        parseInt(
          tenureInput.value,
          10
        ) || 1
      );
  }

  if (profitInput) {
    appState.financials.monthlyProfit =
      Math.max(
        0,
        parseFloat(
          profitInput.value
        ) || 0
      );
  }

  runFinancialEngine();
  updateFinancialScreen10();

  return appState.financials;
}

/* ============================================================
   GOVERNMENT SCHEMES
   ============================================================ */

function getAvailableSchemeCatalog() {
  if (
    typeof window !==
      "undefined" &&
    window.schemeCatalog &&
    window.schemeCatalog !==
      schemeCatalog
  ) {
    return window.schemeCatalog;
  }

  return schemeCatalog;
}

function escapeHtml(value) {
  return safeText(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function getBusinessLocationScope() {
  const location = appState.location || {};

  // The intake currently captures a village/block/district, not an urban-vendor
  // certificate. Treat a recorded village or block as rural for location-only schemes.
  return safeText(location.village) || safeText(location.block) ? "rural" : "unknown";
}

function isSchemeCurrentlyActive(scheme) {
  const today = new Date().toISOString().slice(0, 10);
  return scheme.status === "Active" &&
    (!scheme.activeFrom || scheme.activeFrom <= today) &&
    (!scheme.activeUntil || scheme.activeUntil >= today) &&
    (!scheme.reviewBy || scheme.reviewBy >= today);
}

function getSchemeEligibility(scheme, locationScope) {
  const categoryMatches = safeArray(scheme.categories).includes(appState.businessCategory);
  const locations = safeArray(scheme.locations, ["all"]);
  const locationMatches = locations.includes("all") || locations.includes(locationScope);

  if (!categoryMatches) return { eligible: false, label: "Business category not covered" };
  if (!locationMatches) return { eligible: false, label: "Location requirement not met" };
  return { eligible: true, label: "Potentially eligible — lender / scheme verification required" };
}

function evaluateSchemes() {
  calculateFinancialPlan();

  const requestedLoan = appState.financials.loanAmount;
  const projectCost = appState.financials.projectCost;
  const locationScope = getBusinessLocationScope();

  const catalog =
    getAvailableSchemeCatalog();

  const entries = Object.keys(catalog).map((key) => ({ ...catalog[key], id: catalog[key].id || key }));

  const ranked = entries
    .filter(isSchemeCurrentlyActive)
    .map((scheme) => {
      const eligibility = getSchemeEligibility(scheme, locationScope);
      const maxAmount = safeNumber(scheme.maxAmount, 0);
      let score = 20;
      if (eligibility.eligible) score += 35;
      if (maxAmount >= requestedLoan) score += 25;
      else score -= 20;
      if (maxAmount >= projectCost) score += 8;
      if (safeNumber(scheme.tenureMonths, 0) >= appState.financials.tenureMonths) score += 7;
      if (safeArray(scheme.locations, ["all"]).includes("all")) score += 5;

      return { ...scheme, eligibility, matchScore: clamp(score, 0, 100), locationScope };
    });

  ranked.sort(
    (a, b) =>
      b.matchScore -
      a.matchScore
  );

  // Keep at least five active, category-relevant options visible. Location or
  // applicant restrictions are clearly flagged and cannot be selected as a match.
  const categoryRelevant = ranked.filter((scheme) => safeArray(scheme.categories).includes(appState.businessCategory));
  return categoryRelevant.slice(0, Math.max(5, categoryRelevant.length));
}

function renderScreen11() {
  const container =
    document.getElementById(
      "schemes-container"
    );

  const target =
    document.getElementById(
      "scheme-loan-target"
    );

  const confirmButton =
    document.getElementById(
      "confirm-scheme-btn"
    );

  runFinancialEngine();

  const schemes =
    evaluateSchemes();

  const selectedSchemeIsEligible = schemes.some(
    (scheme) => scheme.id === appState.financials.selectedSchemeId && scheme.eligibility.eligible
  );

  if (!selectedSchemeIsEligible) {
    const firstEligibleScheme = schemes.find((scheme) => scheme.eligibility.eligible);
    appState.financials.selectedSchemeId = firstEligibleScheme ? firstEligibleScheme.id : "";
    appState.financials.recommendedScheme = firstEligibleScheme ? firstEligibleScheme.name : "";
  }

  if (target) {
    target.textContent =
      formatCurrency(
        appState.financials
          .loanAmount
      );
  }

  if (!container) {
    return schemes;
  }

  container.innerHTML = "";

  schemes.forEach(
    (scheme, index) => {
      const card =
        document.createElement(
          "article"
        );

      card.className =
        "scheme-card";

      if (
        scheme.id ===
        appState.financials
          .selectedSchemeId
      ) {
        card.classList.add(
          "selected-scheme"
        );
      }

      const selectDisabled = !scheme.eligibility.eligible;
      card.innerHTML = `
        <div class="scheme-card-header">
          <div>
            <span class="scheme-match-label">
              Match Score
            </span>
            <strong class="scheme-match-score">
              ${scheme.matchScore}%
            </strong>
          </div>

          <span class="scheme-type">
            ${escapeHtml(safeText(scheme.type, "Credit Option"))}
          </span>
        </div>

        <h3>
          ${escapeHtml(safeText(scheme.name, "Credit Scheme"))}
        </h3>

        <p class="scheme-desc">
          ${escapeHtml(safeText(scheme.description, "Potentially relevant financing option."))}
        </p>

        <div class="scheme-specs-grid">
          <div class="spec-item"><span class="spec-label">Current status</span><strong class="spec-val scheme-status-active">${escapeHtml(scheme.status)}</strong></div>
          <div class="spec-item"><span class="spec-label">Business category</span><strong class="spec-val">${escapeHtml(safeArray(scheme.categories).map((key) => categoryDefaults[key]?.label || key).join(", "))}</strong></div>
          <div class="spec-item"><span class="spec-label">Eligibility check</span><strong class="spec-val ${scheme.eligibility.eligible ? "eligibility-yes" : "eligibility-no"}">${escapeHtml(scheme.eligibility.label)}</strong></div>
          <div class="spec-item"><span class="spec-label">Key benefits</span><strong class="spec-val">${escapeHtml(scheme.benefits)}</strong></div>
          <div class="spec-item"><span class="spec-label">Maximum reference</span><strong class="spec-val">${formatCurrency(scheme.maxAmount || 0)}</strong></div>
          <div class="spec-item"><span class="spec-label">Official source</span><a class="scheme-source-link" href="${escapeHtml(scheme.officialUrl)}" target="_blank" rel="noopener noreferrer">View current rules</a></div>
        </div>

        <button
          type="button"
          class="btn btn-secondary scheme-select-btn"
          data-scheme-id="${safeText(
            scheme.id
          )}"
          ${selectDisabled ? "disabled title=\"This scheme does not match the recorded location or category.\"" : ""}
        >
          ${
            scheme.id ===
            appState.financials
              .selectedSchemeId
              ? "Selected"
              : selectDisabled ? "Not eligible for recorded location" : "Select Scheme"
          }
        </button>
      `;

      container.appendChild(
        card
      );
    }
  );

  const buttons =
    container.querySelectorAll(
      ".scheme-select-btn"
    );

  buttons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          selectScheme(
            button.dataset
              .schemeId
          );
        }
      );
    }
  );

  if (confirmButton) {
    confirmButton.disabled =
      !appState.financials
        .selectedSchemeId;
  }

  return schemes;
}

/* ============================================================
   SCHEME SELECTION
   ============================================================ */

function selectScheme(
  schemeId
) {
  const catalog =
    getAvailableSchemeCatalog();

  const scheme =
    catalog[schemeId];

  if (!scheme) {
    return;
  }

  if (!isSchemeCurrentlyActive(scheme) || !getSchemeEligibility(scheme, getBusinessLocationScope()).eligible) {
    return;
  }

  appState.financials
    .selectedSchemeId =
    schemeId;

  appState.financials
    .recommendedScheme =
    scheme.name ||
    "Applicable Credit Scheme";

  if (
    Number.isFinite(
      Number(
        scheme.benchmarkRate
      )
    )
  ) {
    appState.financials
      .interestRate =
      Number(
        scheme.benchmarkRate
      );
  }

  if (
    Number.isFinite(
      Number(
        scheme.tenureMonths
      )
    )
  ) {
    appState.financials
      .tenureMonths =
      Math.max(
        1,
        Number(
          scheme.tenureMonths
        )
      );
  }

  if (
    Number.isFinite(
      Number(
        scheme.moratoriumMonths
      )
    )
  ) {
    appState.financials
      .moratoriumMonths =
      Math.max(
        0,
        Number(
          scheme.moratoriumMonths
        )
      );
  }

  renderScreen11();

  return scheme;
}

/* ============================================================
   PROCEED TO SCREEN 12
   ============================================================ */

function proceedToScreen12() {
  runFinancialEngine();

  goToScreen(12);
}

/* ============================================================
   SCREEN 12 EMI CALCULATOR
   ============================================================ */

function updateTenureChipUI(
  months
) {
  const chips =
    document.querySelectorAll(
      ".chip-btn"
    );

  chips.forEach(
    (chip) => {
      const value =
        parseInt(
          chip.getAttribute(
            "data-months"
          ),
          10
        );

      if (
        value ===
        Number(months)
      ) {
        chip.classList.add(
          "active-chip"
        );
      } else {
        chip.classList.remove(
          "active-chip"
        );
      }
    }
  );
}

function renderScreen12() {
  const fin =
    appState.financials;

  const schemeName =
    document.getElementById(
      "emi-active-scheme-name"
    );

  const moratorium =
    document.getElementById(
      "emi-moratorium-note"
    );

  const principalInput =
    document.getElementById(
      "emi-principal-input"
    );

  const rateSlider =
    document.getElementById(
      "emi-rate-slider"
    );

  calculateFinancialPlan();

  if (
    schemeName
  ) {
    schemeName.textContent =
      fin.recommendedScheme ||
      "PMMY Mudra Loan";
  }

  if (
    moratorium
  ) {
    moratorium.textContent =
      `Moratorium: ${
        fin.moratoriumMonths || 0
      } Month(s)`;
  }

  if (
    principalInput
  ) {
    principalInput.value =
      fin.loanAmount || 0;
  }

  if (
    rateSlider
  ) {
    const rate =
      clamp(
        safeNumber(
          fin.interestRate,
          9.5
        ),
        Number(
          rateSlider.min || 0
        ),
        Number(
          rateSlider.max || 100
        )
      );

    rateSlider.value =
      rate;
  }

  updateTenureChipUI(
    fin.tenureMonths ||
      36
  );

  recalculateEMIFromInputs();
}

/* ============================================================
   EMI RECALCULATION
   ============================================================ */

function recalculateEMIFromInputs() {
  const principalInput =
    document.getElementById(
      "emi-principal-input"
    );

  const rateSlider =
    document.getElementById(
      "emi-rate-slider"
    );

  const P =
    Math.max(
      0,
      parseFloat(
        principalInput?.value
      ) || 0
    );

  const R =
    Math.max(
      0,
      parseFloat(
        rateSlider?.value
      ) || 0
    );

  const N =
    Math.max(
      1,
      parseInt(
        appState.financials
          .tenureMonths,
        10
      ) || 36
    );

  const moratorium =
    Math.max(
      0,
      parseInt(
        appState.financials
          .moratoriumMonths,
        10
      ) || 0
    );

  const emi =
    calculateMonthlyEMI(
      P,
      R,
      N
    );

  const schedule =
    generateRepaymentSchedule(
      P,
      R,
      N,
      moratorium
    );

  const totalInterest =
    schedule.reduce(
      (total, row) =>
        total +
        safeNumber(
          row.interestPaid,
          0
        ),
      0
    );

  const totalPayment =
    schedule.reduce(
      (total, row) =>
        total +
        safeNumber(
          row.payment,
          0
        ),
      0
    );

  appState.financials
    .loanAmount =
    P;

  appState.financials
    .interestRate =
    R;

  appState.financials
    .tenureMonths =
    N;

  appState.financials
    .monthlyEMI =
    emi;

  appState.financials
    .repaymentSchedule =
    schedule;

  appState.financials
    .totalInterest =
    totalInterest;

  appState.financials
    .totalPayment =
    totalPayment;

  const principalBadge =
    document.getElementById(
      "principal-badge"
    );

  const rateBadge =
    document.getElementById(
      "rate-badge"
    );

  const displayEMI =
    document.getElementById(
      "display-monthly-emi"
    );

  const displayPrincipal =
    document.getElementById(
      "display-total-principal"
    );

  const displayInterest =
    document.getElementById(
      "display-total-interest"
    );

  const displayPayment =
    document.getElementById(
      "display-total-payment"
    );

  if (
    principalBadge
  ) {
    principalBadge.textContent =
      formatCurrency(P);
  }

  if (
    rateBadge
  ) {
    rateBadge.textContent =
      `${R.toFixed(2)}%`;
  }

  if (
    displayEMI
  ) {
    displayEMI.textContent =
      formatCurrency(emi);
  }

  if (
    displayPrincipal
  ) {
    displayPrincipal.textContent =
      formatCurrency(P);
  }

  if (
    displayInterest
  ) {
    displayInterest.textContent =
      formatCurrency(
        totalInterest
      );
  }

  if (
    displayPayment
  ) {
    displayPayment.textContent =
      formatCurrency(
        totalPayment
      );
  }

  /* Keep the already-rendered repayment view in sync as the loan changes. */
  if (
    document.getElementById(
      "amortization-tbody"
    )
  ) {
    renderScheduleTable();
  }

  /* Refresh the final report only when it is the active view. */
  if (
    appState.currentScreen === 14
  ) {
    renderScreen14();
  }

  return {
    emi,
    totalInterest,
    totalPayment,
    schedule
  };
}

/* ============================================================
   TENURE SELECTION
   ============================================================ */

function selectTenure(
  months
) {
  const value =
    Math.max(
      1,
      parseInt(
        months,
        10
      ) || 36
    );

  appState.financials
    .tenureMonths =
    value;

  updateTenureChipUI(
    value
  );

  recalculateEMIFromInputs();
}

/* ============================================================
   EMI EVENT LISTENERS
   ============================================================ */

function initEMICalculatorListeners() {
  const principalInput =
    document.getElementById(
      "emi-principal-input"
    );

  const rateSlider =
    document.getElementById(
      "emi-rate-slider"
    );

  const refreshLoanCalculations = () => {
    recalculateEMIFromInputs();
  };

  principalInput?.addEventListener(
    "input",
    refreshLoanCalculations
  );

  principalInput?.addEventListener(
    "change",
    refreshLoanCalculations
  );

  rateSlider?.addEventListener(
    "input",
    refreshLoanCalculations
  );
}

/* ============================================================
   SCREEN 13
   ============================================================ */

function renderScreen13() {
  const fin =
    appState.financials;

  if (
    !fin.repaymentSchedule ||
    fin.repaymentSchedule.length === 0
  ) {
    runFinancialEngine();
  }

  const schedule =
    fin.repaymentSchedule || [];

  const tenureText =
    document.getElementById(
      "sched-tenure-text"
    );

  const rateText =
    document.getElementById(
      "sched-rate-text"
    );

  const banner =
    document.getElementById(
      "moratorium-notice-banner"
    );

  const bannerText =
    document.getElementById(
      "moratorium-notice-text"
    );

  if (
    tenureText
  ) {
    tenureText.textContent =
      `${fin.tenureMonths || 0} Months`;
  }

  if (
    rateText
  ) {
    rateText.textContent =
      `${safeNumber(
        fin.interestRate,
        0
      ).toFixed(2)}% p.a.`;
  }

  const moratoriumMonths =
    safeNumber(
      fin.moratoriumMonths,
      0
    );

  if (banner) {
    if (
      moratoriumMonths > 0
    ) {
      banner.classList.remove(
        "hidden-step"
      );

      if (bannerText) {
        bannerText.textContent =
          `A grace period of ${moratoriumMonths} month(s) is applied. Interest is serviced during the initial grace period while principal repayment begins afterward.`;
      }
    } else {
      banner.classList.add(
        "hidden-step"
      );
    }
  }

  renderScheduleTable();
}

/* ============================================================
   SCHEDULE VIEW SWITCHER
   ============================================================ */

function switchScheduleView(
  viewMode
) {
  if (
    viewMode !== "monthly" &&
    viewMode !== "quarterly"
  ) {
    viewMode = "monthly";
  }

  activeScheduleView =
    viewMode;

  const monthlyBtn =
    document.getElementById(
      "toggle-monthly-btn"
    );

  const quarterlyBtn =
    document.getElementById(
      "toggle-quarterly-btn"
    );

  if (viewMode === "monthly") {
    monthlyBtn?.classList.add(
      "active-toggle"
    );

    quarterlyBtn?.classList.remove(
      "active-toggle"
    );
  } else {
    quarterlyBtn?.classList.add(
      "active-toggle"
    );

    monthlyBtn?.classList.remove(
      "active-toggle"
    );
  }

  renderScheduleTable();
}

/* ============================================================
   QUARTERLY AGGREGATION
   ============================================================ */

function aggregateQuarterly(
  monthlySchedule
) {
  const quarters = [];

  const schedule =
    safeArray(
      monthlySchedule,
      []
    );

  for (
    let i = 0;
    i < schedule.length;
    i += 3
  ) {
    const chunk =
      schedule.slice(
        i,
        i + 3
      );

    if (
      chunk.length === 0
    ) {
      continue;
    }

    const qNum =
      Math.floor(
        i / 3
      ) + 1;

    const opening =
      chunk[0]
        .openingBalance;

    const closing =
      chunk[
        chunk.length - 1
      ].closingBalance;

    const hasMoratorium =
      chunk.some(
        (row) =>
          row.isMoratorium
      );

    let principal = 0;
    let interest = 0;
    let payment = 0;

    chunk.forEach(
      (row) => {
        principal +=
          safeNumber(
            row.principalPaid
          );

        interest +=
          safeNumber(
            row.interestPaid
          );

        payment +=
          safeNumber(
            row.payment
          );
      }
    );

    quarters.push({
      periodLabel:
        `Quarter ${qNum} (M${chunk[0].month}–M${chunk[chunk.length - 1].month})`,

      isMoratorium:
        hasMoratorium,

      opening,
      principal,
      interest,
      payment,
      closing
    });
  }

  return quarters;
}

/* ============================================================
   SCHEDULE TABLE
   ============================================================ */

function renderScheduleTable() {
  const schedule =
    appState.financials
      .repaymentSchedule || [];

  const tbody =
    document.getElementById(
      "amortization-tbody"
    );

  const tfoot =
    document.getElementById(
      "amortization-tfoot"
    );

  const periodHeader =
    document.getElementById(
      "th-period-label"
    );

  if (
    !tbody ||
    !tfoot
  ) {
    return;
  }

  tbody.innerHTML = "";
  tfoot.innerHTML = "";

  if (
    schedule.length === 0
  ) {
    tbody.innerHTML =
      `
      <tr>
        <td
          colspan="6"
          style="text-align:center;"
        >
          No repayment schedule available.
        </td>
      </tr>
      `;

    return;
  }

  let rowsToRender = [];

  if (
    activeScheduleView ===
    "quarterly"
  ) {
    rowsToRender =
      aggregateQuarterly(
        schedule
      );

    if (periodHeader) {
      periodHeader.textContent =
        "Quarter";
    }
  } else {
    rowsToRender =
      schedule.map(
        (row) => ({
          periodLabel:
            `Month ${row.month}`,

          isMoratorium:
            Boolean(
              row.isMoratorium
            ),

          opening:
            row.openingBalance,

          principal:
            row.principalPaid,

          interest:
            row.interestPaid,

          payment:
            row.payment,

          closing:
            row.closingBalance
        })
      );

    if (periodHeader) {
      periodHeader.textContent =
        "Month";
    }
  }

  let totalPrincipal = 0;
  let totalInterest = 0;
  let totalPayment = 0;

  rowsToRender.forEach(
    (row) => {
      totalPrincipal +=
        safeNumber(
          row.principal
        );

      totalInterest +=
        safeNumber(
          row.interest
        );

      totalPayment +=
        safeNumber(
          row.payment
        );

      const tr =
        document.createElement(
          "tr"
        );

      if (
        row.isMoratorium
      ) {
        tr.classList.add(
          "moratorium-row"
        );
      }

      const graceTag =
        row.isMoratorium
          ? `<span class="moratorium-tag">Grace</span>`
          : "";

      tr.innerHTML = `
        <td>
          ${safeText(
            row.periodLabel
          )}
          ${graceTag}
        </td>

        <td>
          ${formatCurrency(
            row.opening
          )}
        </td>

        <td>
          ${formatCurrency(
            row.principal
          )}
        </td>

        <td>
          ${formatCurrency(
            row.interest
          )}
        </td>

        <td>
          <strong>
            ${formatCurrency(
              row.payment
            )}
          </strong>
        </td>

        <td>
          ${formatCurrency(
            row.closing
          )}
        </td>
      `;

      tbody.appendChild(
        tr
      );
    }
  );

  tfoot.innerHTML = `
    <tr>
      <td>
        Lifetime Total
      </td>

      <td>
        —
      </td>

      <td>
        ${formatCurrency(
          totalPrincipal
        )}
      </td>

      <td>
        ${formatCurrency(
          totalInterest
        )}
      </td>

      <td>
        ${formatCurrency(
          totalPayment
        )}
      </td>

      <td>
        ${formatCurrency(0)}
      </td>
    </tr>
  `;

  appState.financials
    .totalInterest =
    activeScheduleView ===
    "monthly"
      ? totalInterest
      : appState.financials
          .totalInterest;

  appState.financials
    .totalPayment =
    activeScheduleView ===
    "monthly"
      ? totalPayment
      : appState.financials
          .totalPayment;
}

/* Compatibility alias */

function renderAmortizationTable() {
  renderScheduleTable();
}

/* ============================================================
   SCREEN 14
   REPORT REFERENCE ID
   ============================================================ */

function getReportReferenceId() {
  if (
    !appState.reportReferenceId
  ) {
    const year =
      new Date()
        .getFullYear();

    const randomPart =
      Math.floor(
        1000 +
          Math.random() *
            9000
      );

    appState.reportReferenceId =
      `RBA-${year}-${randomPart}`;
  }

  return appState.reportReferenceId;
}

/* ============================================================
   SCREEN 14 REPORT
   ============================================================ */

function renderScreen14() {
  runFinancialEngine();

  calculateFeasibilityScore();

  const loc =
    appState.location || {};

  const catKey =
    appState.businessCategory ||
    "dairy";

  const category =
    categoryDefaults[
      catKey
    ] || categoryDefaults.dairy;

  const fin =
    appState.financials;

  const indicators =
    appState.indicators;

  const profile =
    getCurrentCategoryProfile();

  /* ----------------------------------------------------------
     REPORT HEADER
     ---------------------------------------------------------- */

  const enterpriseTitle =
    document.getElementById(
      "report-enterprise-title"
    );

  const locationSubtitle =
    document.getElementById(
      "report-location-subtitle"
    );

  const referenceId =
    document.getElementById(
      "report-ref-id"
    );

  const dateStamp =
    document.getElementById(
      "report-date-stamp"
    );

  if (
    enterpriseTitle
  ) {
    enterpriseTitle.textContent =
      `Business Feasibility Report: ${category.label} at ${safeText(
        loc.village,
        "Local Village"
      )}, ${safeText(
        loc.block,
        "Local Block"
      )}`;
  }

  if (
    locationSubtitle
  ) {
    locationSubtitle.textContent =
      `Geographic Scope: District ${safeText(
        loc.district,
        "Unspecified"
      )} | Target Sector: Rural Micro-Enterprise`;
  }

  if (
    referenceId
  ) {
    referenceId.textContent =
      getReportReferenceId();
  }

  if (
    dateStamp
  ) {
    const now =
      new Date();

    const dateStr =
      now.toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric"
        }
      );

    dateStamp.textContent =
      `Generated: ${dateStr}`;
  }

  /* ----------------------------------------------------------
     SCORE
     ---------------------------------------------------------- */

  const score =
    appState.feasibilityScore;

  const scoreNumber =
    document.getElementById(
      "report-score-number"
    );

  const scoreBadge =
    document.getElementById(
      "report-score-badge"
    );

  if (
    scoreNumber
  ) {
    scoreNumber.textContent =
      score;
  }

  if (
    scoreBadge
  ) {
    const status =
      getScoreStatus(
        score
      );

    scoreBadge.textContent =
      status.text;

    scoreBadge.className =
      `status-badge ${status.className}`;
  }

  /* ----------------------------------------------------------
     MARKET HEALTH PILLS
     ---------------------------------------------------------- */

  const demand =
    document.getElementById(
      "report-pill-demand"
    );

  const competition =
    document.getElementById(
      "report-pill-competition"
    );

  const risk =
    document.getElementById(
      "report-pill-risk"
    );

  const pricing =
    document.getElementById(
      "report-pill-pricing"
    );

  if (
    demand
  ) {
    demand.textContent =
      indicators.demand ||
      "Moderate";
  }

  if (
    competition
  ) {
    competition.textContent =
      indicators.competition ||
      "Medium";
  }

  if (
    risk
  ) {
    risk.textContent =
      indicators.risk ||
      "Manageable";
  }

  if (
    pricing
  ) {
    pricing.textContent =
      indicators.pricePotential ||
      "Standard";
  }

  /* ----------------------------------------------------------
     PROJECT CAPITALIZATION
     ---------------------------------------------------------- */

  const projectCost =
    document.getElementById(
      "report-project-cost"
    );

  const margin =
    document.getElementById(
      "report-margin-invested"
    );

  const loan =
    document.getElementById(
      "report-loan-sanction"
    );

  const equityRatio =
    document.getElementById(
      "report-equity-ratio"
    );

  if (
    projectCost
  ) {
    projectCost.textContent =
      formatCurrency(
        fin.projectCost
      );
  }

  if (
    margin
  ) {
    margin.textContent =
      formatCurrency(
        fin.marginAmount
      );
  }

  if (
    loan
  ) {
    loan.textContent =
      formatCurrency(
        fin.loanAmount
      );
  }

  if (
    equityRatio
  ) {
    equityRatio.textContent =
      `${Math.max(
        0,
        100 -
          safeNumber(
            fin.debtRatio,
            90
          )
      )}% Margin / ${safeNumber(
        fin.debtRatio,
        90
      )}% Debt`;
  }

  /* ----------------------------------------------------------
     CREDIT STRUCTURE
     ---------------------------------------------------------- */

  const schemeName =
    document.getElementById(
      "report-scheme-name"
    );

  const interestRate =
    document.getElementById(
      "report-interest-rate"
    );

  const tenure =
    document.getElementById(
      "report-tenure-months"
    );

  const emi =
    document.getElementById(
      "report-monthly-emi"
    );

  if (
    schemeName
  ) {
    schemeName.textContent =
      fin.recommendedScheme ||
      "PMMY Mudra";
  }

  if (
    interestRate
  ) {
    interestRate.textContent =
      `${safeNumber(
        fin.interestRate,
        9.5
      ).toFixed(2)}% p.a.`;
  }

  if (
    tenure
  ) {
    const months =
      safeNumber(
        fin.tenureMonths,
        36
      );

    tenure.textContent =
      `${months} Months (${(
        months / 12
      ).toFixed(1)} Yrs)`;
  }

  if (
    emi
  ) {
    emi.textContent =
      `${formatCurrency(
        fin.monthlyEMI
      )} / mo`;
  }

  /* ----------------------------------------------------------
     SWOT DIGEST
     ---------------------------------------------------------- */

  const swotList =
    document.getElementById(
      "report-swot-bullets"
    );

  if (
    swotList
  ) {
    swotList.innerHTML =
      "";

    const swot =
      profile.swot || {};

    const strengths =
      safeArray(
        swot.strengths,
        []
      ).slice(0, 2);

    const opportunities =
      safeArray(
        swot.opportunities,
        []
      ).slice(0, 2);

    const bullets =
      [
        ...strengths,
        ...opportunities
      ];

    if (
      bullets.length === 0
    ) {
      bullets.push(
        "Maintain reliable local demand",
        "Build supplier and buyer relationships"
      );
    }

    bullets.forEach(
      (item) => {
        const li =
          document.createElement(
            "li"
          );

        li.textContent =
          safeText(item);

        swotList.appendChild(
          li
        );
      }
    );
  }

  /* ----------------------------------------------------------
     RISK MITIGATION
     ---------------------------------------------------------- */

  const mitigationBox =
    document.getElementById(
      "report-risk-mitigation-box"
    );

  if (
    mitigationBox
  ) {
    const threats =
      profile.threats || {};

    const bottleneck =
      safeArray(
        threats.bottlenecks,
        [
          "supplier and transport disruption"
        ]
      )[0];

    const buyerRisk =
      safeText(
        threats.buyerRisk,
        "buyer concentration"
      );

    mitigationBox.innerHTML =
      `
      <strong>
        Priority Safeguard:
      </strong>
      Buffer against
      <em>
        ${safeText(
          bottleneck
        ).toLowerCase()}
      </em>
      by maintaining an operational cash reserve.
      To manage
      <em>
        ${buyerRisk.toLowerCase()}
      </em>,
      maintain regular cash reconciliation and avoid excessive informal customer credit.
      `;
  }

  /* ----------------------------------------------------------
     FINANCIAL VERIFICATION
     ---------------------------------------------------------- */

  updateFinalFinancialVerification();

  /* ----------------------------------------------------------
     RECOMMENDATION ENGINE
     ---------------------------------------------------------- */

  renderActionPlanEngine();

  return appState;
}

/* ============================================================
   FINANCIAL VERIFICATION
   ============================================================ */

function updateFinalFinancialVerification() {
  const message =
    document.getElementById(
      "final-test-message"
    );

  const schedule =
    appState.financials
      .repaymentSchedule || [];

  if (
    !message
  ) {
    return;
  }

  if (
    schedule.length === 0
  ) {
    message.textContent =
      "No active repayment schedule is available for verification.";
    return;
  }

  const lastRow =
    schedule[
      schedule.length - 1
    ];

  const principalTotal =
    schedule.reduce(
      (sum, row) =>
        sum +
        safeNumber(
          row.principalPaid
        ),
      0
    );

  const expectedPrincipal =
    safeNumber(
      appState.financials
        .loanAmount
    );

  const balanceOK =
    lastRow.closingBalance ===
    0;

  const principalOK =
    principalTotal ===
    Math.round(
      expectedPrincipal
    );

  if (
    balanceOK &&
    principalOK
  ) {
    message.textContent =
      `Financial calculations have been reconciled successfully. Final closing balance is ₹0 and total principal amortized equals the configured loan principal of ${formatCurrency(
        expectedPrincipal
      )}.`;
  } else {
    message.textContent =
      "The financial verification detected a mismatch in the repayment schedule. Review the selected loan configuration.";
  }
}

/* Compatibility alias */

function renderRepaymentSchedule() {
  renderScreen13();
}

/* ============================================================
   ADVISORY ENGINE
   ============================================================ */

function getAdvisoryPlan(
  score,
  schemeName
) {
  const scheme =
    safeText(
      schemeName,
      "Applicable Credit Scheme"
    );

  if (
    score >= 70
  ) {
    return {
      tier: "green",

      badgeText:
        "Strong Viability",

      pillText:
        "Greenlit",

      recommendation:
        `Greenlit for financing under ${scheme}. The current assessment shows comparatively strong enterprise viability, but final borrowing should still be based on verified lender terms and actual business cash flow.`,

      checklistTitle:
        "Bank Documentation Checklist for Loan Application",

      checklist: [
        "Identity & Address Verification: Keep valid KYC documents such as Aadhaar, PAN or other accepted identity/address proof ready.",
        "Premises Proof: Keep applicable land, ownership, rent or lease documentation available for lender verification.",
        "Equipment Quotations: Obtain formal quotations or proforma invoices from verified suppliers.",
        "Financial Profile: Maintain recent bank statements/passbook records and evidence of regular business transactions."
      ]
    };
  }

  if (
    score >= 50
  ) {
    return {
      tier: "amber",

      badgeText:
        "Conditional Viability",

      pillText:
        "Mitigation Required",

      recommendation:
        "The venture appears potentially viable with risk mitigation. Increasing promoter contribution, improving the operating buffer or phasing capital expenditure can reduce early repayment stress.",

      checklistTitle:
        "Risk Mitigation & Staging Roadmap",

      checklist: [
        "Capital Buffer: Build an additional liquidity cushion before taking the full planned debt.",
        "Phased Capex: Purchase essential equipment first and defer non-critical expansion spending.",
        "Pre-Tieups: Establish relationships with local buyers, suppliers or distribution partners before scaling.",
        "Low-Cost Setup: Minimize avoidable upfront fixed costs and negotiate practical operating arrangements."
      ]
    };
  }

  return {
    tier: "red",

    badgeText:
      "High Risk / Low Feasibility",

    pillText:
      "Caution Advised",

    recommendation:
      "Caution is advised. The current assessment indicates higher financial or operational exposure. Validate real customer demand and conduct a small pilot before committing to significant commercial debt.",

    checklistTitle:
      "Corrective Actions Before Incurring Debt",

    checklist: [
      "Avoid High-Interest Credit: Delay expensive borrowing until baseline market demand and cash-flow performance are clearer.",
      "Micro Pilot Run: Conduct a low-cost pilot using small batches or limited operations to validate real customer turnover.",
      "Cost Restructuring: Rework the operating model around essential costs and the lowest practical fixed-cost base.",
      "Skill & Mentorship: Seek relevant local entrepreneurship, training or business-development support before scaling."
    ]
  };
}

function renderActionPlanEngine() {
  const card =
    document.getElementById(
      "report-advisory-card"
    );

  if (!card) {
    return;
  }

  const score =
    safeNumber(
      appState.feasibilityScore,
      0
    );

  const scheme =
    appState.financials
      .recommendedScheme ||
    "PMMY Mudra";

  const plan =
    getAdvisoryPlan(
      score,
      scheme
    );

  const badge =
    document.getElementById(
      "advisory-status-badge"
    );

  const pill =
    document.getElementById(
      "advisory-tier-pill"
    );

  const recommendation =
    document.getElementById(
      "advisory-recommendation-text"
    );

  const checklistTitle =
    document.getElementById(
      "action-plan-title"
    );

  const checklist =
    document.getElementById(
      "action-plan-checklist"
    );

  card.classList.remove(
    "advisory-tier-green",
    "advisory-tier-amber",
    "advisory-tier-red"
  );

  card.classList.add(
    `advisory-tier-${plan.tier}`
  );

  if (
    badge
  ) {
    badge.textContent =
      plan.badgeText;
  }

  if (
    pill
  ) {
    pill.textContent =
      plan.pillText;
  }

  if (
    recommendation
  ) {
    recommendation.textContent =
      plan.recommendation;
  }

  if (
    checklistTitle
  ) {
    checklistTitle.textContent =
      plan.checklistTitle;
  }

  if (
    checklist
  ) {
    checklist.innerHTML =
      "";

    const icon =
      plan.tier === "green"
        ? "📋"
        : plan.tier === "amber"
          ? "⚡"
          : "⚠️";

    plan.checklist.forEach(
      (item) => {
        const li =
          document.createElement(
            "li"
          );

        li.innerHTML =
          `
          <span class="action-checkbox-icon">
            ${icon}
          </span>
          <span>
            ${safeText(item)}
          </span>
          `;

        checklist.appendChild(
          li
        );
      }
    );
  }
}

/* ============================================================
   PRINT / PDF
   ============================================================ */

function printReport() {
  window.print();
}

/* ============================================================
   PROGRESS TRACKER
   ============================================================ */

function updateProgressTracker(
  currentStep
) {
  const step =
    clamp(
      parseInt(
        currentStep,
        10
      ) || 1,
      1,
      TOTAL_SCREENS
    );

  const nodes =
    document.querySelectorAll(
      ".step-node"
    );

  nodes.forEach(
    (node) => {
      const nodeStep =
        parseInt(
          node.dataset.step,
          10
        ) || 0;

      node.classList.remove(
        "active-node",
        "completed-node"
      );

      if (
        nodeStep === step
      ) {
        node.classList.add(
          "active-node"
        );
      } else if (
        nodeStep < step
      ) {
        node.classList.add(
          "completed-node"
        );
      }
    }
  );

  const counter =
    document.getElementById(
      "step-counter-badge"
    );

  if (
    counter
  ) {
    counter.textContent =
      `Step ${step} of ${TOTAL_SCREENS}`;
  }

  document
    .querySelectorAll(
      ".step-indicator"
    )
    .forEach(
      (element) => {
        const screen =
          element.closest(
            ".step-screen"
          );

        if (!screen) {
          return;
        }

        const screenNumber =
          parseInt(
            screen.id.replace(
              "screen-",
              ""
            ),
            10
          );

        if (
          Number.isFinite(
            screenNumber
          )
        ) {
          element.textContent =
            `Screen ${screenNumber} of ${TOTAL_SCREENS}`;
        }
      }
    );
}

/* ============================================================
   SCREEN CONTENT ROUTER
   ============================================================ */

function renderScreenContent(
  screenNumber
) {
  switch (
    Number(screenNumber)
  ) {
    case 1:
      break;

    case 2:
      break;

    case 3:
      renderDashboard();
      break;

    case 4:
      renderScreen4();
      break;

    case 5:
      renderScreen5();
      break;

    case 6:
      renderScreen6();
      break;

    case 7:
      renderScreen7();
      break;

    case 8:
      renderScreen8();
      break;

    case 9:
      renderScreen9();
      break;

    case 10:
      renderScreen10();
      break;

    case 11:
      renderScreen11();
      break;

    case 12:
      renderScreen12();
      break;

    case 13:
      renderScreen13();
      break;

    case 14:
      renderScreen14();
      break;

    default:
      break;
  }
}

/* ============================================================
   MAIN NAVIGATION
   ============================================================ */

function goToScreen(
  targetScreenNumber
) {
  const target =
    parseInt(
      targetScreenNumber,
      10
    );

  if (
    !Number.isFinite(target) ||
    target < 1 ||
    target > TOTAL_SCREENS
  ) {
    return;
  }

  const screens =
    document.querySelectorAll(
      ".step-screen"
    );

  const targetId =
    `screen-${target}`;

  let found = false;

  screens.forEach(
    (screen) => {
      if (
        screen.id ===
        targetId
      ) {
        screen.classList.remove(
          "hidden-step"
        );

        screen.classList.add(
          "active-step"
        );

        found = true;
      } else {
        screen.classList.remove(
          "active-step"
        );

        screen.classList.add(
          "hidden-step"
        );
      }
    }
  );

  if (!found) {
    return;
  }

  appState.currentScreen =
    target;

  updateProgressTracker(
    target
  );

  renderScreenContent(
    target
  );

  applyLanguage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ============================================================
   DEVELOPMENT TESTING
   ============================================================ */

function runFinancialEdgeCaseTests() {
  console.group(
    "=== MILESTONE 3 FINANCIAL EDGE-CASE VERIFICATION ==="
  );

  let passed = 0;
  let failed = 0;

  /* Test 1 */

  try {
    const zeroRateEMI =
      calculateMonthlyEMI(
        500000,
        0,
        60
      );

    const zeroTenureEMI =
      calculateMonthlyEMI(
        500000,
        9.5,
        0
      );

    const largeLoanEMI =
      calculateMonthlyEMI(
        50000000,
        10.5,
        84
      );

    if (
      zeroRateEMI ===
        Math.round(
          500000 / 60
        ) &&
      zeroTenureEMI === 0 &&
      largeLoanEMI > 0
    ) {
      console.log(
        "✅ Test 1 Passed: Zero-rate, zero-tenure and large-loan guards work."
      );

      passed++;
    } else {
      throw new Error(
        `Unexpected results: zeroRate=${zeroRateEMI}, zeroTenure=${zeroTenureEMI}, largeLoan=${largeLoanEMI}`
      );
    }
  } catch (error) {
    console.error(
      "❌ Test 1 Failed:",
      error.message
    );

    failed++;
  }

  /* Test 2 */

  const scenarios = [
    {
      p: 50000,
      r: 10,
      n: 24,
      mor: 0
    },

    {
      p: 225000,
      r: 9.5,
      n: 36,
      mor: 1
    },

    {
      p: 1350000,
      r: 8.75,
      n: 60,
      mor: 6
    },

    {
      p: 77777,
      r: 11.25,
      n: 48,
      mor: 3
    }
  ];

  let balanceTestPassed =
    true;

  scenarios.forEach(
    (scenario, index) => {
      const schedule =
        generateRepaymentSchedule(
          scenario.p,
          scenario.r,
          scenario.n,
          scenario.mor
        );

      const lastRow =
        schedule[
          schedule.length - 1
        ];

      if (
        !lastRow ||
        lastRow.closingBalance !==
          0
      ) {
        console.error(
          `❌ Test 2 Case ${
            index + 1
          } Failed: Closing balance is not ₹0.`,
          lastRow
        );

        balanceTestPassed =
          false;
      }
    }
  );

  if (
    balanceTestPassed
  ) {
    console.log(
      "✅ Test 2 Passed: Final repayment balance is exactly ₹0."
    );

    passed++;
  } else {
    failed++;
  }

  /* Test 3 */

  let principalTestPassed =
    true;

  scenarios.forEach(
    (scenario, index) => {
      const schedule =
        generateRepaymentSchedule(
          scenario.p,
          scenario.r,
          scenario.n,
          scenario.mor
        );

      const totalPrincipal =
        schedule.reduce(
          (sum, row) =>
            sum +
            safeNumber(
              row.principalPaid
            ),
          0
        );

      if (
        totalPrincipal !==
        scenario.p
      ) {
        console.error(
          `❌ Test 3 Case ${
            index + 1
          } Failed: Principal total ${totalPrincipal} != ${scenario.p}`
        );

        principalTestPassed =
          false;
      }
    }
  );

  if (
    principalTestPassed
  ) {
    console.log(
      "✅ Test 3 Passed: Principal amortization exactly matches loan principal."
    );

    passed++;
  } else {
    failed++;
  }

  /* Test 4 */

  try {
    const quarterly =
      aggregateQuarterly(
        generateRepaymentSchedule(
          225000,
          9.5,
          36,
          1
        )
      );

    if (
      quarterly.length !==
      12
    ) {
      throw new Error(
        `Expected 12 quarters, got ${quarterly.length}`
      );
    }

    console.log(
      "✅ Test 4 Passed: Quarterly aggregation works for a 36-month schedule."
    );

    passed++;
  } catch (error) {
    console.error(
      "❌ Test 4 Failed:",
      error.message
    );

    failed++;
  }

  console.log(
    `=== SUMMARY: ${passed} Passed, ${failed} Failed ===`
  );

  console.groupEnd();

  return {
    passed,
    failed,
    success:
      failed === 0
  };
}

/* ============================================================
   DEVELOPMENT AUTO-RUN
   ============================================================ */

function autoRunDevelopmentTests() {
  const shouldRun =
    true;

  if (
    shouldRun &&
    typeof runFinancialEdgeCaseTests ===
      "function"
  ) {
    runFinancialEdgeCaseTests();
  }
}

function runAdvisorTestSuite() {
  return runFinancialEdgeCaseTests();
}

/* ============================================================
   APPLICATION INITIALIZATION
   ============================================================ */

const easyHindi = {
  "From local business idea to a loan-ready feasibility report": "लोकल बिज़नेस आइडिया से लोन-रेडी रिपोर्ट तक",
  "Phase 1 of 6": "6 में से फेज़ 1",
  "Dark Mode": "डार्क मोड",
  "Light Mode": "लाइट मोड",
  "Business Input": "बिज़नेस जानकारी",
  "Feasibility": "फीज़िबिलिटी",
  "Local Market": "लोकल मार्केट",
  "Risk & Opportunity": "रिस्क और मौके",
  "Finance & Loan": "फाइनेंस और लोन",
  "Final Report": "फाइनल रिपोर्ट",
  "Build a business plan that is viable before you borrow": "लोन लेने से पहले अपना बिज़नेस प्लान जाँचें",
  "ArthSetu connects your local business idea, market reality, risks and finances into one practical feasibility report.": "अर्थसेतु आपके लोकल बिज़नेस आइडिया, मार्केट, रिस्क और फाइनेंस को एक आसान रिपोर्ट में जोड़ता है।",
  "Business & Feasibility": "बिज़नेस और फीज़िबिलिटी",
  "Hyper-Local Market & Risk": "आपके इलाके का मार्केट और रिस्क",
  "Finance to Final Report": "फाइनेंस से फाइनल रिपोर्ट तक",
  "Start Business Assessment →": "बिज़नेस असेसमेंट शुरू करें →",
  "Business Assessment Intake": "बिज़नेस की बेसिक जानकारी",
  "Provide your geographic and capital baseline to evaluate venture viability.": "बिज़नेस जाँचने के लिए अपनी लोकेशन और उपलब्ध पूंजी बताएं।",
  "Location Baseline": "आपकी लोकेशन",
  "Village / Gram Panchayat": "गाँव / ग्राम पंचायत",
  "Block": "ब्लॉक",
  "District": "ज़िला",
  "Available Margin Capital": "उपलब्ध पूंजी",
  "Business Category": "बिज़नेस टाइप",
  "-- Select District --": "-- ज़िला चुनें --",
  "-- Choose Category --": "-- बिज़नेस टाइप चुनें --",
  "Minimum required: ₹1,000 (your personal equity/investment)": "कम से कम ₹1,000 (आपका अपना निवेश)",
  "Analyze My Business →": "मेरा बिज़नेस जाँचें →",
  "← Back": "← वापस",
  "Business Feasibility Dashboard": "बिज़नेस फीज़िबिलिटी डैशबोर्ड",
  "Overall Feasibility Score": "कुल फीज़िबिलिटी स्कोर",
  "Core Market Indicators": "मार्केट के मुख्य पॉइंट",
  "Market Demand": "मार्केट डिमांड",
  "Competition Level": "कॉम्पिटिटर लेवल",
  "Initial Risk Level": "शुरुआती रिस्क लेवल",
  "Price Potential": "कीमत की संभावना",
  "← Edit Inputs": "← Details badlein",
  "Proceed to Market Analysis →": "मार्केट एनालिसिस देखें →",
  "Market Scope & Target Demographics": "आपके इलाके का मार्केट",
  "Who Can Buy Your Product": "आपका प्रोडक्ट कौन खरीदेगा",
  "Estimated Market Reach": "मार्केट रीच का अनुमान",
  "Customer Segments": "कस्टमर ग्रुप",
  "Distribution Channels": "डिलीवरी के तरीके",
  "← Back to Dashboard": "← Dashboard par wapas",
  "Proceed to Opportunity Analysis →": "मौकों का एनालिसिस देखें →",
  "Growth & Opportunity Analysis": "ग्रोथ और मौकों का एनालिसिस",
  "Strategic Expansion Pathways": "बिज़नेस बढ़ाने के तरीके",
  "Proceed to Competitor Analysis →": "कॉम्पिटिटर एनालिसिस देखें →",
  "Competitor & Industry Landscape": "कॉम्पिटिटर और इंडस्ट्री की जानकारी",
  "Proceed to SWOT Analysis →": "SWOT एनालिसिस देखें →",
  "SWOT & Internal Readiness": "SWOT और बिज़नेस तैयारी",
  "Strengths": "ताकत",
  "Weaknesses": "कमज़ोरियाँ",
  "Opportunities": "मौके",
  "Threats": "खतरे",
  "Proceed to Risk Assessment →": "रिस्क असेसमेंट देखें →",
  "Threats & Risk Assessment": "खतरे और रिस्क असेसमेंट",
  "Proceed to Pricing Analysis →": "प्राइसिंग एनालिसिस देखें →",
  "Pricing & Value Proposition": "प्राइसिंग और वैल्यू",
  "Proceed to Financial Planning →": "फाइनेंशियल प्लानिंग करें →",
  "Financial & Loan Structuring": "फाइनेंस और लोन प्लानिंग",
  "Project Cost Estimation": "प्रोजेक्ट कॉस्ट का अनुमान",
  "Margin Contribution": "आपका योगदान",
  "Loan Requirement": "लोन की ज़रूरत",
  "Calculate Financial Structure": "फाइनेंस कैलकुलेट करें",
  "Proceed to Government Schemes →": "सही स्कीम देखें →",
  "Government Scheme Matching": "सही सरकारी स्कीम",
  "Proceed to EMI Calculator →": "ईएमआई कैलकुलेटर खोलें →",
  "EMI & Repayment Planning": "ईएमआई और पेमेंट प्लानिंग",
  "Loan Principal (₹)": "लोन अमाउंट (₹)",
  "Annual Interest Rate (% p.a.)": "ब्याज दर (% सालाना)",
  "Repayment Tenure": "लोन चुकाने का समय",
  "View Repayment Schedule →": "पेमेंट शेड्यूल देखें →",
  "Amortization & Repayment Schedule": "ईएमआई और पेमेंट शेड्यूल",
  "Monthly View": "महीने का व्यू",
  "Quarterly View": "3 महीने का व्यू",
  "Generate Final Business Report →": "फाइनल बिज़नेस रिपोर्ट बनाएं →",
  "Business Feasibility Report": "बिज़नेस फीज़िबिलिटी रिपोर्ट",
  "Official Assessment Dossier": "बिज़नेस असेसमेंट रिपोर्ट",
  "Financial Verification": "फाइनेंस जाँच",
  "Strategic Advisory & Next-Step Action Plan": "आगे का एक्शन प्लान",
  "Recommended Next Steps": "आपके अगले स्टेप",
  "← Back to Schedule": "← Schedule par wapas",
  "Start New Assessment": "नया असेसमेंट शुरू करें",
  "Download / Print Report": "रिपोर्ट डाउनलोड / प्रिंट करें",
  "Calculating...": "कैलकुलेट हो रहा है...",
  "Analyzing your business inputs...": "आपकी बिज़नेस जानकारी जाँची जा रही है...",
  "High Viability": "अच्छी संभावना",
  "Moderate Viability": "ठीक-ठाक संभावना",
  "High Caution": "सावधानी ज़रूरी",
  "Loading recommendation...": "सुझाव लोड हो रहा है...",
  "Village / Gram Panchayat is required.": "गाँव / ग्राम पंचायत लिखना ज़रूरी है।",
  "Block is required.": "ब्लॉक लिखना ज़रूरी है।",
  "Please select a District.": "कृपया ज़िला चुनें।",
  "Available Margin Capital must be at least ₹1,000.": "उपलब्ध पूंजी कम से कम ₹1,000 होनी चाहिए।",
  "Please choose a Business Category.": "कृपया बिज़नेस टाइप चुनें।"
};

function translateNodeText(node, language) {
  const original = node.dataset.enText || node.textContent.trim().replace(/\s+/g, " ");

  if (!original) return;
  if (!node.dataset.enText) node.dataset.enText = original;

  const translated = language === "hi" ? easyHindi[original] : original;
  if (!translated) return;

  node.textContent = translated;
}

function applyLanguage(language = document.documentElement.dataset.language || "en") {
  const isHindi = language === "hi";
  document.documentElement.lang = isHindi ? "hi" : "en";
  document.documentElement.dataset.language = isHindi ? "hi" : "en";

  document.querySelectorAll("[data-i18n-text]").forEach((element) => {
    translateNodeText(element, language);
  });

  document.querySelectorAll("h1, h2, h3, h4, p, span, strong, small, label, legend, button, li, blockquote, th").forEach((element) => {
    if (element.closest("script, style, select, option") || element.children.length > 0) return;
    translateNodeText(element, language);
  });

  document.querySelectorAll("[placeholder]").forEach((element) => {
    const original = element.dataset.enPlaceholder || element.getAttribute("placeholder");
    if (!element.dataset.enPlaceholder) element.dataset.enPlaceholder = original;
    element.setAttribute("placeholder", isHindi ? (easyHindi[original] || original) : original);
  });

  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) languageToggle.value = isHindi ? "hi" : "en";
}

function initializeLanguageToggle() {
  const languageToggle = document.getElementById("language-toggle");
  applyLanguage();

  languageToggle?.addEventListener("change", (event) => {
    const language = event.target.value === "hi" ? "hi" : "en";
    applyLanguage(language);
    updateProgressTracker(appState.currentScreen || 1);
    try {
      localStorage.setItem("arthsetu-language", language);
    } catch (error) {
      // Language switching still works if storage is unavailable.
    }
  });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");

  if (isDark) {
    root.dataset.theme = "dark";
  } else {
    delete root.dataset.theme;
  }

  if (toggle) {
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
    toggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀️" : "🌙";
    toggle.querySelector(".theme-toggle-label").textContent = isDark ? "Light Mode" : "Dark Mode";
  }
}

function initializeThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";

  applyTheme(savedTheme);

  toggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
      localStorage.setItem("arthsetu-theme", nextTheme);
    } catch (error) {
      // The toggle remains usable if browser storage is unavailable.
    }
  });
}

function initializeApplication() {
  initializeLanguageToggle();
  initializeThemeToggle();

  /* Start button */

  const startButton =
    document.getElementById(
      "start-assessment-btn"
    );

  startButton?.addEventListener(
    "click",
    () => {
      goToScreen(2);
    }
  );

  /* Assessment form */

  const form =
    document.getElementById(
      "assessment-form"
    );

  form?.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      handleAssessmentSubmit(
        event
      );
    }
  );

  /* Live input sync */

  document
    .getElementById(
      "village"
    )
    ?.addEventListener(
      "input",
      (event) => {
        appState.location
          .village =
          event.target.value;

        refreshFeasibilityFromInputs();
      }
    );

  document
    .getElementById(
      "block"
    )
    ?.addEventListener(
      "input",
      (event) => {
        appState.location
          .block =
          event.target.value;

        refreshFeasibilityFromInputs();
      }
    );

  document
    .getElementById(
      "district"
    )
    ?.addEventListener(
      "change",
      (event) => {
        appState.location
          .district =
          event.target.value;

        refreshFeasibilityFromInputs();
      }
    );

  document
    .getElementById(
      "capital"
    )
    ?.addEventListener(
      "input",
      (event) => {
        appState.marginCapital =
          parseFloat(
            event.target.value
          ) || 0;

        refreshFeasibilityFromInputs();
      }
    );

  document
    .getElementById(
      "category"
    )
    ?.addEventListener(
      "change",
      (event) => {
        appState.businessCategory =
          event.target.value;

        refreshFeasibilityFromInputs();
      }
    );

  /* Screen 10 finance button */

  const financeButton =
    document.getElementById(
      "calculate-finance-btn"
    );

  financeButton?.addEventListener(
    "click",
    () => {
      calculateManualFinance();
    }
  );

  /* EMI listeners */

  initEMICalculatorListeners();

  /* Initial progress */

  updateProgressTracker(
    1
  );
}

/* ============================================================
   DOM READY
   ============================================================ */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    initializeApplication();

    /* Keep current landing page visible */

    goToScreen(1);

    /*
      Development diagnostics.
      This does not change the UI.
    */

    autoRunDevelopmentTests();
  }
);

/* ============================================================
   GLOBAL ACCESS
   ------------------------------------------------------------
   These exports support inline onclick handlers in index.html.
   ============================================================ */

if (
  typeof window !==
  "undefined"
) {
  window.appState =
    appState;

  window.categoryDefaults =
    categoryDefaults;

  window.financialDefaults =
    financialDefaults;

  window.schemeCatalog =
    schemeCatalog;

  window.safeText =
    safeText;

  window.safeArray =
    safeArray;

  window.safeNumber =
    safeNumber;

  window.formatCurrency =
    formatCurrency;

  window.formatNumber =
    formatNumber;

  window.getStrategicCategoryData =
    getStrategicCategoryData;

  window.getCurrentCategoryProfile =
    getCurrentCategoryProfile;

  window.getIndicatorClass =
    getIndicatorClass;

  window.calculateEMI =
    calculateEMI;

  window.calculateMonthlyEMI =
    calculateMonthlyEMI;

  window.generateRepaymentSchedule =
    generateRepaymentSchedule;

  window.buildRepaymentSchedule =
    buildRepaymentSchedule;

  window.calculateFinancialPlan =
    calculateFinancialPlan;

  window.calculateFeasibilityScore =
    calculateFeasibilityScore;

  window.renderDashboard =
    renderDashboard;

  window.renderScreen4 =
    renderScreen4;

  window.renderScreen5 =
    renderScreen5;

  window.renderScreen6 =
    renderScreen6;

  window.renderScreen7 =
    renderScreen7;

  window.renderScreen8 =
    renderScreen8;

  window.renderScreen9 =
    renderScreen9;

  window.renderScreen10 =
    renderScreen10;

  window.renderScreen11 =
    renderScreen11;

  window.renderScreen12 =
    renderScreen12;

  window.renderScreen13 =
    renderScreen13;

  window.renderScreen14 =
    renderScreen14;

  window.recalculateEMIFromInputs =
    recalculateEMIFromInputs;

  window.selectTenure =
    selectTenure;

  window.updateTenureChipUI =
    updateTenureChipUI;

  window.switchScheduleView =
    switchScheduleView;

  window.renderScheduleTable =
    renderScheduleTable;

  window.renderAmortizationTable =
    renderAmortizationTable;

  window.aggregateQuarterly =
    aggregateQuarterly;

  window.evaluateSchemes =
    evaluateSchemes;

  window.selectScheme =
    selectScheme;

  window.proceedToScreen12 =
    proceedToScreen12;

  window.runFinancialEngine =
    runFinancialEngine;

  window.getReportReferenceId =
    getReportReferenceId;

  window.getAdvisoryPlan =
    getAdvisoryPlan;

  window.renderActionPlanEngine =
    renderActionPlanEngine;

  window.updateProgressTracker =
    updateProgressTracker;

  window.goToScreen =
    goToScreen;

  window.validateAssessmentForm =
    validateAssessmentForm;

  window.handleAssessmentSubmit =
    handleAssessmentSubmit;

  window.renderScreenContent =
    renderScreenContent;

  window.renderRepaymentSchedule =
    renderRepaymentSchedule;

  window.calculateManualFinance =
    calculateManualFinance;

  window.buildFinancialAdvice =
    buildFinancialAdvice;

  window.printReport =
    printReport;

  window.runFinancialEdgeCaseTests =
    runFinancialEdgeCaseTests;

  window.runAdvisorTestSuite =
    runAdvisorTestSuite;

  window.autoRunDevelopmentTests =
    autoRunDevelopmentTests;
}
  
   // ============================================================
// MILESTONE 4 — STEP 4
// END-TO-END NAVIGATION, STATE PERSISTENCE & RESET FLOW
// ============================================================

/**
 * Factory function providing a clean initial application state.
 *
 * IMPORTANT:
 * This function creates a NEW object every time.
 * It does not modify the existing appState by itself.
 */
function getInitialAppState() {

  return {

    location: {
      village: "",
      block: "",
      district: ""
    },

    marginCapital: 0,

    businessCategory: "",

    feasibilityScore: 0,

    indicators: {
      demand: "",
      competition: "",
      opportunity: "",
      risk: "",
      pricePotential: ""
    },

    financials: {
      projectCost: 0,
      loanAmount: 0,
      marginAmount: 0,
      debtRatio: 90,
      recommendedScheme: "",
      interestRate: 9.5,
      tenureMonths: 36,
      moratoriumMonths: 0,
      monthlyEMI: 0,
      repaymentSchedule: []
    },

    reportReferenceId: null
  };
}


/**
 * ============================================================
 * UPDATE PROGRESS TRACKER
 * ============================================================
 *
 * Updates:
 * 1. Current step
 * 2. Completed steps
 * 3. Active step
 * 4. Step counter badge
 */
function updateProgressTracker(currentStep) {

  const screen = Math.min(Math.max(Number(currentStep) || 1, 1), TOTAL_SCREENS);
  const phaseByScreen = {
    1: 1, 2: 1, 3: 2, 4: 3, 5: 3, 6: 3,
    7: 4, 8: 4, 9: 4, 10: 5, 11: 5, 12: 5,
    13: 5, 14: 6
  };
  const phaseNames = {
    1: "Business & User Information",
    2: "Business Feasibility Analysis",
    3: "Hyper-Local Market Analysis",
    4: "Risk & Opportunity Assessment",
    5: "Financial & Loan Structuring",
    6: "Final Business Feasibility Report"
  };
  const hindiPhaseNames = {
    1: "बिज़नेस और आपकी जानकारी",
    2: "बिज़नेस फीज़िबिलिटी एनालिसिस",
    3: "आपके इलाके का मार्केट एनालिसिस",
    4: "रिस्क और मौकों का असेसमेंट",
    5: "फाइनेंस और लोन प्लानिंग",
    6: "फाइनल बिज़नेस फीज़िबिलिटी रिपोर्ट"
  };
  const currentPhase = phaseByScreen[screen] || 1;
  const isHindi = document.documentElement.dataset.language === "hi";

  document.querySelectorAll(".step-node").forEach((node) => {
    const nodePhase = Number(node.dataset.phase);
    node.classList.remove("active-node", "completed-node");

    if (nodePhase === currentPhase) {
      node.classList.add("active-node");
    } else if (nodePhase < currentPhase) {
      node.classList.add("completed-node");
    }
  });

  const counterBadge = document.getElementById("step-counter-badge");
  if (counterBadge) {
    counterBadge.textContent = isHindi ? `6 में से फेज़ ${currentPhase}` : `Phase ${currentPhase} of 6`;
  }

  document.querySelectorAll(".step-indicator").forEach((element) => {
    const phaseLabel = isHindi ? hindiPhaseNames[currentPhase] : phaseNames[currentPhase];
    element.textContent = isHindi ? `6 में से फेज़ ${currentPhase} · ${phaseLabel}` : `Phase ${currentPhase} of 6 · ${phaseLabel}`;
  });
}


/**
 * ============================================================
 * RESET ASSESSMENT STATE
 * ============================================================
 *
 * Completely clears the current assessment and returns
 * the application to a fresh Screen 1 state.
 */
function resetAssessmentState() {

  // ----------------------------------------------------------
  // 1. Reset global application state
  // ----------------------------------------------------------

  const freshState =
    getInitialAppState();


  /*
   * Object.assign keeps the existing appState reference alive.
   * This is important because other functions may already hold
   * a reference to appState.
   */
  Object.assign(
    appState,
    freshState
  );


  // ----------------------------------------------------------
  // 2. Reset Screen 2 form
  // ----------------------------------------------------------

  const assessmentForm =
    document.getElementById(
      "assessment-form"
    );


  if (assessmentForm) {

    assessmentForm.reset();

  }


  // Explicitly clear important fields
  const formIds = [
    "village",
    "block",
    "district",
    "capital",
    "category"
  ];


  formIds.forEach((id) => {

    const element =
      document.getElementById(id);


    if (element) {

      element.value = "";

      element.classList.remove(
        "input-error"
      );

    }

  });


  // ----------------------------------------------------------
  // 3. Clear validation messages
  // ----------------------------------------------------------

  const errorContainer =
    document.getElementById(
      "form-errors"
    );


  if (errorContainer) {

    errorContainer.innerHTML = "";

    errorContainer.classList.add(
      "hidden-step"
    );

  }


  // ----------------------------------------------------------
  // 4. Reset financial calculator inputs
  // ----------------------------------------------------------

  const loanAmount =
    document.getElementById(
      "loan-amount"
    );

  const interestRate =
    document.getElementById(
      "interest-rate"
    );

  const loanTenure =
    document.getElementById(
      "loan-tenure"
    );

  const monthlyProfit =
    document.getElementById(
      "monthly-profit"
    );


  if (loanAmount) {
    loanAmount.value = "";
  }


  if (interestRate) {
    interestRate.value = "";
  }


  if (loanTenure) {
    loanTenure.value = "";
  }


  if (monthlyProfit) {
    monthlyProfit.value = "";
  }


  // ----------------------------------------------------------
  // 5. Reset EMI calculator
  // ----------------------------------------------------------

  const emiPrincipal =
    document.getElementById(
      "emi-principal-input"
    );

  const emiRateSlider =
    document.getElementById(
      "emi-rate-slider"
    );


  if (emiPrincipal) {

    emiPrincipal.value = "";

  }


  if (emiRateSlider) {

    emiRateSlider.value = 9.5;

  }


  // ----------------------------------------------------------
  // 6. Reset tenure chips
  // ----------------------------------------------------------

  if (
    typeof updateTenureChipUI ===
    "function"
  ) {

    updateTenureChipUI(36);

  }


  // ----------------------------------------------------------
  // 7. Reset old screen output
  // ----------------------------------------------------------

  const resetOutputIds = [

    "score-number",
    "score-badge",
    "score-explanation",

    "indicator-demand",
    "indicator-competition",
    "indicator-risk",
    "indicator-price",

    "market-audience",
    "market-reach",
    "market-segments",
    "market-channels",

    "opp-items-list",

    "comp-players",
    "comp-insights",

    "swot-strengths-list",
    "swot-weaknesses-list",
    "swot-opportunities-list",
    "swot-threats-list",

    "threat-bottlenecks",
    "threat-seasonality",
    "threat-raw-material",
    "threat-buyer-risk",

    "pricing-power",
    "pricing-strategy",
    "pricing-value-prop",

    "financial-emi",
    "financial-debt-burden",
    "financial-repayment-capacity",
    "financial-status",

    "schemes-container",

    "display-monthly-emi",
    "display-total-principal",
    "display-total-interest",
    "display-total-payment",

    "amortization-tbody",
    "amortization-tfoot",

    "action-plan-checklist"

  ];


  resetOutputIds.forEach((id) => {

    const element =
      document.getElementById(id);


    if (element) {

      if (
        element.tagName === "UL" ||
        element.tagName === "TBODY" ||
        element.tagName === "TFOOT" ||
        element.tagName === "DIV"
      ) {

        element.innerHTML = "";

      }

      else {

        element.textContent = "--";

      }

    }

  });


  // ----------------------------------------------------------
  // 8. Reset hidden alert / notice components
  // ----------------------------------------------------------

  const moratoriumNotice =
    document.getElementById(
      "moratorium-notice-banner"
    );


  if (moratoriumNotice) {

    moratoriumNotice.classList.add(
      "hidden-step"
    );

  }


  // ----------------------------------------------------------
  // 9. Reset scheme selection
  // ----------------------------------------------------------

  const confirmSchemeBtn =
    document.getElementById(
      "confirm-scheme-btn"
    );


  if (confirmSchemeBtn) {

    confirmSchemeBtn.disabled = false;

  }


  // ----------------------------------------------------------
  // 10. Reset schedule view
  // ----------------------------------------------------------

  const monthlyToggle =
    document.getElementById(
      "toggle-monthly-btn"
    );

  const quarterlyToggle =
    document.getElementById(
      "toggle-quarterly-btn"
    );


  if (monthlyToggle) {

    monthlyToggle.classList.add(
      "active-toggle"
    );

  }


  if (quarterlyToggle) {

    quarterlyToggle.classList.remove(
      "active-toggle"
    );

  }


  // ----------------------------------------------------------
  // 11. Reset progress tracker
  // ----------------------------------------------------------

  updateProgressTracker(1);


  // ----------------------------------------------------------
  // 12. Navigate to Screen 1
  // ----------------------------------------------------------

  goToScreen(1);

}


/**
 * ============================================================
 * CONFIRM & RESET
 * ============================================================
 *
 * Shows a confirmation dialog before deleting the current
 * assessment.
 */
function confirmAndResetAssessment() {

  const confirmReset =
    window.confirm(
      "Are you sure you want to start a new assessment?\n\n" +
      "All entered details and calculations will be reset."
    );


  if (confirmReset) {

    resetAssessmentState();

  }

}


// ============================================================
// GLOBAL ACCESS — STEP 4 FUNCTIONS
// ============================================================

if (
  typeof window !== "undefined"
) {

  window.getInitialAppState =
    getInitialAppState;

  window.updateProgressTracker =
    updateProgressTracker;

  window.resetAssessmentState =
    resetAssessmentState;

  window.confirmAndResetAssessment =
    confirmAndResetAssessment;

}
 /**
 * ============================================================
 * DEMO PRESET LOADER
 * ============================================================
 */

function loadDemoScenario(presetType) {

  if (presetType === 'dairy') {

    document.getElementById('village').value = 'Rampur';
    document.getElementById('block').value = 'Sadar';
    document.getElementById('district').value = 'Ranchi';
    document.getElementById('capital').value = 50000;
    document.getElementById('category').value = 'dairy';

  } else if (presetType === 'kirana') {

    document.getElementById('village').value = 'Gobra';
    document.getElementById('block').value = 'Ormanjhi';
    document.getElementById('district').value = 'Ranchi';
    document.getElementById('capital').value = 25000;
    document.getElementById('category').value = 'kirana';

  }

  const errorContainer =
    document.getElementById('form-errors');

  if (errorContainer) {

    errorContainer.innerHTML = '';

    errorContainer.classList.add(
      'hidden-step'
    );

  }

  [
    'village',
    'block',
    'district',
    'capital',
    'category'
  ].forEach((id) => {

    const element =
      document.getElementById(id);

    if (element) {

      element.classList.remove(
        'input-error'
      );

    }

  });

  refreshFeasibilityFromInputs();

}

/* ============================================================
   END OF APP.JS
   ============================================================ */
