/**
 * ============================================================
 * MILESTONE 2 — STRATEGIC KNOWLEDGE BASE
 * Rural Enterprise Feasibility & Strategic Evaluation Engine
 * ============================================================
 *
 * This file contains category-level strategic intelligence.
 *
 * USED BY:
 *   Screen 4  → Market Scope
 *   Screen 5  → Opportunity Analysis
 *   Screen 6  → Competitor Analysis
 *   Screen 7  → SWOT Analysis
 *   Screen 8  → Threat / Risk Analysis
 *   Screen 9  → Pricing & Value Proposition
 *
 * FINANCIAL LOGIC:
 *   Screen 10 → app.js
 *   Screen 11 → app.js
 *   Screen 12 → app.js
 *   Screen 13 → app.js
 *
 * STANDARD SCHEMA
 *
 * market:
 *   - targetAudience
 *   - reach
 *   - segments
 *   - channels
 *
 * opportunity:
 *   - items[]
 *   - level
 *
 * competitors:
 *   - players
 *   - level
 *   - insights
 *
 * swot:
 *   - strengths[]
 *   - weaknesses[]
 *   - opportunities[]
 *   - threats[]
 *
 * threats:
 *   - bottlenecks[]
 *   - seasonality
 *   - rawMaterial
 *   - buyerRisk
 *   - riskLevel
 *
 * pricing:
 *   - purchasingPower
 *   - strategy
 *   - valueProp
 * ============================================================
 */


const strategicData = {


  // ==========================================================
  // 1. DAIRY FARMING
  // ==========================================================

  dairy: {

    market: {

      targetAudience:
        "Local households, tea stalls, local sweet shops (halwais), dairy cooperatives",

      reach:
        "5–10 km radius within Gram Panchayat and block",

      segments:
        "B2C (daily fresh milk) and B2B (bulk buyers, sweet makers, cooperatives)",

      channels:
        "Direct morning/evening doorstep delivery, village milk collection centers"

    },


    opportunity: {

      items: [

        "Value-added dairy products such as ghee, paneer, curd, and khoa can provide higher margins",

        "Formal contract supply to peri-urban centers and private chilling plants",

        "Sale of organic cattle dung vermicompost to local vegetable growers"

      ],

      level:
        "High"

    },


    competitors: {

      players:
        "Local unorganized cattle owners, regional cooperative collection agents, packaged pouch brands",

      level:
        "Medium",

      insights:
        "Consistently high demand; hygiene, milk quality testing, and reliable delivery timing can build strong customer retention."

    },


    swot: {

      strengths: [

        "Predictable daily cash flow through morning and evening milk sales",

        "Constant local demand for milk as an essential staple",

        "Multiple revenue streams through liquid milk, curd, ghee, dung manure, and calves"

      ],

      weaknesses: [

        "Perishable product requiring rapid same-day distribution or chilling",

        "Requires continuous physical labor, feeding cycles, and veterinary supervision",

        "High initial capital can be tied up in live milch cattle assets"

      ],

      opportunities: [

        "Government livestock and dairy support schemes where eligible",

        "Bulk chilling-center tie-ups for more predictable off-take",

        "Value addition into paneer, khoa, curd, and ghee during wedding and festival periods"

      ],

      threats: [

        "Cattle disease outbreaks can cause production losses and mortality",

        "Fodder and cattle-feed price volatility can reduce margins",

        "Milk spoilage can occur during extended summer power outages or cooling failures"

      ]

    },


    threats: {

      bottlenecks: [

        "Milk chilling and cold-chain access during high-temperature summer months",

        "Timely veterinary intervention and artificial insemination (AI) availability"

      ],

      seasonality:
        "Slight dip in milk production during dry summer; surplus production during winter",

      rawMaterial:
        "Fluctuations in dry fodder (bhusa), green fodder, and cattle-feed inputs",

      buyerRisk:
        "Low — diversified local customer base across households, tea vendors, and other buyers",

      riskLevel:
        "Medium"

    },


    pricing: {

      purchasingPower:
        "Moderate rural/semi-urban purchasing capacity with consistent daily spending on essential milk",

      strategy:
        "Cost-plus pricing with local market parity, considering milk quality and Fat & SNF percentage",

      valueProp:
        "Fresh, reliable, quality-focused milk supply with convenient daily delivery"

    }

  },


  // ==========================================================
  // 2. GROCERY / KIRANA
  // ==========================================================

  kirana: {

    market: {

      targetAudience:
        "Village households, migrant laborers, daily wage earners, and passing road commuters",

      reach:
        "1–3 km hyper-local village catchment area",

      segments:
        "B2C daily provisions, FMCG sachets, spices, personal care products, packaged snacks, and household essentials",

      channels:
        "Physical storefront at a central village square (chowk), main road, or local transit point"

    },


    opportunity: {

      items: [

        "Micro-ATM, AePS cash-out, and digital bill-payment services inside the store",

        "Stocking high-margin regional pulses, loose spices, edible oils, and locally preferred products",

        "Direct wholesale procurement from district mandis to improve procurement margins"

      ],

      level:
        "Moderate"

    },


    competitors: {

      players:
        "Established village grocers, roadside kiosks (paan-gumtis), weekly haat sellers, and nearby town stores",

      level:
        "High",

      insights:
        "The market is competitive. Customer retention depends on disciplined credit management, avoiding stock-outs of daily essentials, fair pricing, and strong neighborhood relationships."

    },


    swot: {

      strengths: [

        "Immediate cash generation from fast-moving consumer goods (FMCG)",

        "Resilient baseline demand for essential household products",

        "Low technical skill barrier compared with specialized enterprises"

      ],

      weaknesses: [

        "Thin gross margins on many standard branded commodities",

        "Working capital can become locked in delayed customer credit (Udhaar)",

        "Risk of expiry, spoilage, pest damage, and inventory losses"

      ],

      opportunities: [

        "Bulk procurement from district wholesalers to improve margins",

        "Doorstep delivery bundles for elderly households and festive requirements",

        "Adding agricultural seeds, seasonal hardware, or selected household services"

      ],

      threats: [

        "Working-capital pressure caused by uncollectible customer credit",

        "Wholesale price increases reducing retail margins",

        "Competition from peri-urban discount stores and rural delivery platforms"

      ]

    },


    threats: {

      bottlenecks: [

        "Dependence on frequent restocking trips to distant wholesale markets",

        "Manual tracking and recovery of informal customer credit"

      ],

      seasonality:
        "Sales can increase during crop harvest and festive periods; purchasing power may tighten during crop-sowing months",

      rawMaterial:
        "Wholesale price fluctuations in edible oil, sugar, grains, pulses, and other fast-moving staples",

      buyerRisk:
        "High — informal village credit can create delayed or difficult-to-recover receivables",

      riskLevel:
        "Low to Medium"

    },


    pricing: {

      purchasingPower:
        "Highly price-conscious customers with strong preference for small-value packs and essential daily purchases",

      strategy:
        "MRP parity on branded products with selective volume discounts and bundle pricing on suitable loose commodities",

      valueProp:
        "Convenient local access, reliable availability of essentials, fresh stock rotation, and trusted neighborhood service"

    }

  },


  // ==========================================================
  // 3. POULTRY FARMING
  // ==========================================================

  poultry: {

    market: {

      targetAudience:
        "Local chicken retail stalls, roadside highway dhabas, village households, and district wholesale traders",

      reach:
        "10–25 km radius covering the local block, neighboring hamlets, and highway corridors",

      segments:
        "B2B live-broiler sales to meat vendors and aggregators, plus B2C sales of country birds and eggs",

      channels:
        "Direct farmgate batch pickups by traders and live-bird sales through weekly rural markets"

    },


    opportunity: {

      items: [

        "Desi and premium backyard poultry breeds can target higher-value niche customers",

        "Poultry litter can be monetized as organic fertilizer where local demand exists",

        "Contract farming arrangements can provide structured procurement and market access"

      ],

      level:
        "High"

    },


    competitors: {

      players:
        "Commercial contract poultry farms, integrated poultry companies, and local independent broiler operators",

      level:
        "Medium",

      insights:
        "Wholesale bird pricing can change rapidly. Profitability depends heavily on feed efficiency, mortality control, flock management, and timely batch sales."

    },


    swot: {

      strengths: [

        "Rapid production turnover compared with many livestock enterprises",

        "Multiple production cycles can allow repeated capital deployment",

        "Growing demand for poultry meat and eggs across rural and semi-urban markets"

      ],

      weaknesses: [

        "High mortality risk during extreme temperature changes and poor ventilation",

        "Heavy exposure to commercial poultry-feed costs",

        "Holding birds beyond the optimal sale period can increase feed costs and reduce margins"

      ],

      opportunities: [

        "Dual-purpose and backyard poultry breeds can serve differentiated local demand",

        "Eligible livestock-support schemes can reduce selected capital barriers",

        "Direct hygienic processing or retail partnerships can potentially capture additional margin"

      ],

      threats: [

        "Avian disease outbreaks can cause mortality, movement restrictions, and demand disruption",

        "Large commercial operators can create strong price competition",

        "Severe summer heat can increase mortality and cooling requirements"

      ]

    },


    threats: {

      bottlenecks: [

        "Maintaining strong biosecurity and suitable shed ventilation",

        "Reliable access to day-old chicks, vaccines, feed, and veterinary support"

      ],

      seasonality:
        "Demand can vary by religious periods, festivals, weather, and seasonal consumption patterns",

      rawMaterial:
        "Significant exposure to poultry-feed ingredient prices, especially maize and protein-feed inputs",

      buyerRisk:
        "Moderate — dependence on traders or commission agents can create price and batch-clearance risk",

      riskLevel:
        "High"

    },


    pricing: {

      purchasingPower:
        "Medium; poultry meat and eggs are often treated as discretionary or periodic household expenditure",

      strategy:
        "Dynamic farmgate pricing based on prevailing local market rates, bird weight, quality, and batch demand",

      valueProp:
        "Healthy, consistently managed birds with reliable weight, low avoidable mortality, and dependable batch supply"

    }

  },


  // ==========================================================
  // 4. AGRO-PROCESSING
  // ==========================================================

  agro: {

    market: {

      targetAudience:
        "Local farming families, wheat and mustard cultivators, grain traders, and rural food businesses",

      reach:
        "5–15 km farming cluster across multiple nearby villages",

      segments:
        "B2C custom processing and B2B packaged regional flour, grain products, and mustard-oil sales",

      channels:
        "Custom job-work processing facility, farmgate collection, and locally distributed packaged products"

    },


    opportunity: {

      items: [

        "Cold-pressed mustard and sesame oil can target premium local and urban customers",

        "Branded stone-ground whole-wheat flour and useful by-products can create additional revenue streams",

        "Energy-efficient or solar-assisted milling can reduce dependence on conventional grid electricity"

      ],

      level:
        "Very High"

    },


    competitors: {

      players:
        "Village flour chakkis, small local processors, and commercial packaged flour and oil brands",

      level:
        "Low",

      insights:
        "Farmers may prefer nearby processing because of convenience and trust. Processing quality, recovery yield, cleanliness, and transparent charges can create customer loyalty."

    },


    swot: {

      strengths: [

        "Essential processing service with recurring local demand",

        "Dual monetization through job-work fees and sale of suitable by-products",

        "Direct access to agricultural raw material from the surrounding farming cluster"

      ],

      weaknesses: [

        "Higher upfront machinery and installation costs",

        "Dependence on reliable three-phase electricity or backup arrangements",

        "Requires mechanical maintenance and operational knowledge"

      ],

      opportunities: [

        "Eligible food-processing support schemes can reduce selected capital requirements",

        "Grain cleaning, destoning, and better sieving can improve product quality",

        "Oil cake and bran can be sold to nearby livestock and dairy businesses"

      ],

      threats: [

        "Unreliable rural electricity can interrupt production",

        "Crop failure from weather, drought, pests, or disease can reduce local processing volumes",

        "Large FMCG brands can compete through promotional pricing and distribution strength"

      ]

    },


    threats: {

      bottlenecks: [

        "Reliable three-phase power availability and access to machine-repair technicians",

        "Adequate dry, clean, and rodent-resistant storage space for grains"

      ],

      seasonality:
        "Processing demand generally increases around major Rabi and Kharif harvest periods",

      rawMaterial:
        "Local farm output directly affects available processing volume; crop failure can reduce raw-material availability",

      buyerRisk:
        "Low — many customers can pay directly for processing services, reducing long receivable cycles",

      riskLevel:
        "Medium"

    },


    pricing: {

      purchasingPower:
        "Generally linked to agricultural cash flow and crop-harvest cycles",

      strategy:
        "Standardized per-kilogram or per-unit processing charges with transparent rates for different services",

      valueProp:
        "Clean, reliable, transparent processing with strong product quality and minimal adulteration concerns"

    }

  },


  // ==========================================================
  // 5. RURAL RETAIL / TAILORING
  // ==========================================================

  retail: {

    market: {

      targetAudience:
        "Village women, school students, youth, agricultural workers, and families preparing for weddings or festivals",

      reach:
        "3–8 km radius covering the village center and nearby hamlets",

      segments:
        "B2C custom tailoring, alterations, ready-to-wear garments, school uniforms, and occasion wear",

      channels:
        "Dedicated village shopfront, doorstep measurement service, local referrals, and weekly haat displays"

    },


    opportunity: {

      items: [

        "Institutional contracts for school uniforms, sports kits, and local organizations",

        "Bridal wear, festive embroidery, customized blouses, and occasion-based tailoring",

        "Add-on retail of accessories, cosmetics, threads, dress materials, and selected garments"

      ],

      level:
        "Moderate"

    },


    competitors: {

      players:
        "Home-based independent tailors, weekly apparel haat vendors, and nearby-town readymade garment shops",

      level:
        "Medium",

      insights:
        "Fit accuracy, turnaround time, design choices, transparent pricing, and reliable delivery dates strongly influence repeat customers."

    },


    swot: {

      strengths: [

        "Potentially strong service margins on custom tailoring work",

        "Low perishability risk compared with food-based enterprises",

        "Small commercial space can be sufficient to begin operations"

      ],

      weaknesses: [

        "Daily revenue is constrained by the physical production capacity of the tailor",

        "Demand can fluctuate significantly around weddings and festivals",

        "Basic manual equipment can restrict production volume"

      ],

      opportunities: [

        "Electric sewing, overlock, and embroidery machines can increase production capacity",

        "Selling unstitched fabrics and accessories can increase average customer value",

        "Eligible artisan-support schemes may help with tools, training, or financing"

      ],

      threats: [

        "Low-cost factory-made garments from nearby towns can reduce tailoring demand",

        "Fitting disputes can result in rework and delayed payments",

        "Power outages can interrupt electric sewing and pressing operations"

      ]

    },


    threats: {

      bottlenecks: [

        "Availability of skilled assistant stitching labor during peak seasons",

        "Access to specialized accessories such as laces, buttons, zippers, and other tailoring materials"

      ],

      seasonality:
        "Demand often rises during wedding and festival seasons and may slow during prolonged monsoon periods",

      rawMaterial:
        "Wholesale price fluctuations in fabrics, threads, linings, canvas, and garment accessories",

      buyerRisk:
        "Moderate — some customers may delay collection or final payment for completed garments",

      riskLevel:
        "Low to Medium"

    },


    pricing: {

      purchasingPower:
        "Moderate; customers are price-conscious for everyday alterations but may spend more on festive and occasion wear",

      strategy:
        "Transparent fixed-rate menu for standard stitching and alterations, with separate pricing for customized or premium designs",

      valueProp:
        "Accurate fitting, dependable delivery timelines, modern design options, and convenient local tailoring service"

    }

  }

};


// ============================================================
// STRATEGIC DATA VALIDATION
// ============================================================

(function validateStrategicData() {

  const requiredCategories = [
    "dairy",
    "kirana",
    "poultry",
    "agro",
    "retail"
  ];


  const requiredSections = [
    "market",
    "opportunity",
    "competitors",
    "swot",
    "threats",
    "pricing"
  ];


  const requiredMarketFields = [
    "targetAudience",
    "reach",
    "segments",
    "channels"
  ];


  const requiredOpportunityFields = [
    "items",
    "level"
  ];


  const requiredCompetitorFields = [
    "players",
    "level",
    "insights"
  ];


  const requiredSwotFields = [
    "strengths",
    "weaknesses",
    "opportunities",
    "threats"
  ];


  const requiredThreatFields = [
    "bottlenecks",
    "seasonality",
    "rawMaterial",
    "buyerRisk",
    "riskLevel"
  ];


  const requiredPricingFields = [
    "purchasingPower",
    "strategy",
    "valueProp"
  ];


  requiredCategories.forEach((category) => {

    const categoryData =
      strategicData[category];


    if (!categoryData) {

      console.warn(
        `Strategic data missing for category: ${category}`
      );

      return;

    }


    // ----------------------------------------------------------
    // Section presence
    // ----------------------------------------------------------

    requiredSections.forEach((section) => {

      if (!categoryData[section]) {

        console.warn(
          `Missing ${section} data for category: ${category}`
        );

      }

    });


    // ----------------------------------------------------------
    // Market validation
    // ----------------------------------------------------------

    if (categoryData.market) {

      requiredMarketFields.forEach((field) => {

        const value =
          categoryData.market[field];


        if (
          value === undefined ||
          value === null ||
          String(value).trim() === ""
        ) {

          console.warn(
            `Missing market.${field} for category: ${category}`
          );

        }

      });

    }


    // ----------------------------------------------------------
    // Opportunity validation
    // ----------------------------------------------------------

    if (categoryData.opportunity) {

      requiredOpportunityFields.forEach((field) => {

        const value =
          categoryData.opportunity[field];


        if (field === "items") {

          if (!Array.isArray(value) || value.length === 0) {

            console.warn(
              `Missing opportunity.items for category: ${category}`
            );

          }

        }

        else if (
          value === undefined ||
          value === null ||
          String(value).trim() === ""
        ) {

          console.warn(
            `Missing opportunity.${field} for category: ${category}`
          );

        }

      });

    }


    // ----------------------------------------------------------
    // Competitor validation
    // ----------------------------------------------------------

    if (categoryData.competitors) {

      requiredCompetitorFields.forEach((field) => {

        const value =
          categoryData.competitors[field];


        if (
          value === undefined ||
          value === null ||
          String(value).trim() === ""
        ) {

          console.warn(
            `Missing competitors.${field} for category: ${category}`
          );

        }

      });

    }


    // ----------------------------------------------------------
    // SWOT validation
    // ----------------------------------------------------------

    if (categoryData.swot) {

      requiredSwotFields.forEach((field) => {

        const value =
          categoryData.swot[field];


        if (
          !Array.isArray(value) ||
          value.length === 0
        ) {

          console.warn(
            `Missing swot.${field} for category: ${category}`
          );

        }

      });

    }


    // ----------------------------------------------------------
    // Threat validation
    // ----------------------------------------------------------

    if (categoryData.threats) {

      requiredThreatFields.forEach((field) => {

        const value =
          categoryData.threats[field];


        if (field === "bottlenecks") {

          if (
            !Array.isArray(value) ||
            value.length === 0
          ) {

            console.warn(
              `Missing threats.bottlenecks for category: ${category}`
            );

          }

        }

        else if (
          value === undefined ||
          value === null ||
          String(value).trim() === ""
        ) {

          console.warn(
            `Missing threats.${field} for category: ${category}`
          );

        }

      });

    }


    // ----------------------------------------------------------
    // Pricing validation
    // ----------------------------------------------------------

    if (categoryData.pricing) {

      requiredPricingFields.forEach((field) => {

        const value =
          categoryData.pricing[field];


        if (
          value === undefined ||
          value === null ||
          String(value).trim() === ""
        ) {

          console.warn(
            `Missing pricing.${field} for category: ${category}`
          );

        }

      });

    }

  });


  // ------------------------------------------------------------
  // Global validation summary
  // ------------------------------------------------------------

  const totalCategories =
    requiredCategories.length;


  const availableCategories =
    requiredCategories.filter(
      (category) =>
        !!strategicData[category]
    ).length;


  if (
    availableCategories ===
    totalCategories
  ) {

    console.info(
      `Strategic Knowledge Base loaded successfully: ${availableCategories}/${totalCategories} categories.`
    );

  }

  else {

    console.warn(
      `Strategic Knowledge Base incomplete: ${availableCategories}/${totalCategories} categories available.`
    );

  }

})();


// ============================================================
// GLOBAL ACCESS
// ============================================================

if (
  typeof window !== "undefined"
) {

  window.strategicData =
    strategicData;

}
