
export const companyProfile = {
  name: "PT ARTHA MIGAS RESOURCES",
  shortName: "Artha Migas",
  tagline: "POWERING ENERGY. BUILDING THE FUTURE.",
  headline: "Delivering reliable drilling solutions and integrated energy services through operational excellence, innovation, and an unwavering commitment to safety.",
  aboutText: "PT Artha Migas Resources is an Indonesian energy-sector company focused on supporting the oil and gas industry through professional drilling-related services, operational solutions, and strategic industry partnerships.",

  contact: {
    email: "corporate@arthamigas.co.id",
    inquiryEmail: "inquiry@arthamigas.co.id",
    phoneDisplay: "+62 21 5289 7700",
    phoneCallable: "+622152897700",
    whatsappNumber: "6281112345678", // Configurable WhatsApp
    whatsappDisplay: "+62 811-1234-5678",
    address: "Energy Tower, 18th Floor, SCBD Lot 11A, Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan 12190, Indonesia",
    workingHours: "Monday – Friday: 08:00 – 17:00 WIB",
  },

  values: [
    {
      id: "val-1",
      title: "Operational Excellence",
      subtitle: "Precision & Rigor",
      description: "Delivering world-class execution standards, disciplined operational procedures, and reliable project continuity across all drilling and field activities.",
      icon: "ShieldCheck",
    },
    {
      id: "val-2",
      title: "Safety First",
      subtitle: "Zero Compromise",
      description: "Embedding comprehensive health, safety, and operational risk management into our daily workflow to protect human lives and operational assets.",
      icon: "HeartHandshake",
    },
    {
      id: "val-3",
      title: "Sustainable Development",
      subtitle: "Responsible Stewardship",
      description: "Committing to environmentally conscious practices, efficient resource utilization, and supporting national energy security with high accountability.",
      icon: "Leaf",
    }
  ],

  services: [
    {
      id: "drilling-support",
      number: "01",
      title: "Oil & Gas Drilling Support",
      shortDesc: "End-to-end technical coordination, rig readiness assistance, and specialized operational manpower for onshore and offshore drilling campaigns.",
      fullDesc: "PT Artha Migas Resources provides specialized support designed to optimize drilling campaigns. From wellbore technical support and mud logging coordination to rig crew readiness and operational logistics, we ensure minimal non-productive time (NPT) and high operational safety.",
      keyCapabilities: [
        "Rig preparation & mobilization support",
        "On-site operational logistics & crew management",
        "Wellbore technical assistance & monitoring",
        "Non-Productive Time (NPT) reduction strategies"
      ],
      iconName: "Drill",
      badge: "Core Service"
    },
    {
      id: "drilling-equipment",
      number: "02",
      title: "Drilling Equipment & Supply",
      shortDesc: "Sourcing and supply chain management for certified drilling tubulars, drill bits, casing accessories, valves, and high-pressure wellhead equipment.",
      fullDesc: "We facilitate access to industry-standard drilling equipment compliant with international API specifications. Our supply solutions encompass drill pipes, heavy-weight drill pipes, blow-out preventer (BOP) components, wellhead equipment, and pressure-control systems.",
      keyCapabilities: [
        "Certified tubular goods (OCTG) & premium connections",
        "High-pressure valves, manifolds & BOP assemblies",
        "Downhole tools & cementing accessories",
        "Traceability & rigorous QA/QC documentation"
      ],
      iconName: "Wrench",
      badge: "Industrial Supply"
    },
    {
      id: "oilfield-services",
      number: "03",
      title: "Oilfield Services",
      shortDesc: "Comprehensive field maintenance, casing running assistance, tubular inspection, and integrated surface production handling support.",
      fullDesc: "Delivering proactive field maintenance and intervention services to maximize production integrity. Our technical personnel support routine servicing, tubular integrity inspection, torque-turn monitoring, and surface facility integrity management.",
      keyCapabilities: [
        "Tubular integrity testing & non-destructive examination (NDT)",
        "Casing & tubing running technical supervision",
        "Surface facility preventative maintenance",
        "Production field technical assistance"
      ],
      iconName: "Gauge",
      badge: "Field Operations"
    },
    {
      id: "engineering-technical",
      number: "04",
      title: "Engineering & Technical Support",
      shortDesc: "Well engineering consultancy, drilling parameters optimization, geomechanical advisory, and comprehensive operational simulations.",
      fullDesc: "Providing sound engineering expertise to support upstream energy operators. Our technical advisors assist in drilling hydraulics calculation, torque and drag analysis, casing seat selection, and operational hazard pre-assessments.",
      keyCapabilities: [
        "Well trajectory & hydraulics modeling support",
        "BHA design & drill string vibration mitigation",
        "Operational risk modeling & troubleshooting",
        "Drilling program review & technical benchmarking"
      ],
      iconName: "Cpu",
      badge: "Technical Advisory"
    },
    {
      id: "energy-infrastructure",
      number: "05",
      title: "Energy Infrastructure Support",
      shortDesc: "Structural maintenance, pipeline tie-in support, offshore platform auxiliary services, and terminal facilities logistics.",
      fullDesc: "Supporting key onshore and offshore energy infrastructure assets. We offer logistics coordination, structural inspection support, pipeline maintenance assistance, and auxiliary facilities management to sustain vital energy corridors.",
      keyCapabilities: [
        "Pipeline right-of-way (ROW) & station support",
        "Offshore topside & auxiliary equipment maintenance",
        "Terminal logistics & supply base coordination",
        "Infrastructure refurbishment support"
      ],
      iconName: "Building2",
      badge: "Infrastructure"
    },
    {
      id: "industrial-procurement",
      number: "06",
      title: "Industrial Procurement",
      shortDesc: "Strategic sourcing of energy consumables, chemicals, industrial valves, safety gear, and spare parts with transparent global supply lines.",
      fullDesc: "Tailored industrial procurement services enabling timely delivery of mission-critical consumables, drilling mud additives, safety equipment, and engineered components. We prioritize supply continuity, compliance, and transparent supplier vetting.",
      keyCapabilities: [
        "Strategic global & domestic vendor sourcing",
        "Drilling consumables, fluids & specialty chemicals",
        "Safety gear (PPE) & hazardous area instrumentation",
        "Expediting, customs clearance & warehouse staging"
      ],
      iconName: "Truck",
      badge: "Procurement"
    }
  ],

  operations: [
    {
      id: "offshore",
      category: "Offshore Operations",
      title: "Offshore Marine & Rig Operations",
      location: "Indonesian Continental Waters",
      description: "Supporting offshore jack-up and semi-submersible drilling units with marine logistics, certified offshore technicians, and extreme-environment equipment reliability.",
      image: "https://images.unsplash.com/photo-1722183704200-e96339975ba4?auto=format&fit=crop&w=1200&q=80",
      specs: ["Deepwater & Shelf Support", "Marine Logistical Coordination", "Rig Readiness Protocols"]
    },
    {
      id: "onshore",
      category: "Onshore Operations",
      title: "Onshore Drilling & Workover Support",
      location: "Sumatra & East Kalimantan Basins",
      description: "Deploying high-mobility drilling support services across dense jungle and remote onshore fields, ensuring operational agility, well pad logistics, and minimal downtime.",
      image: "https://images.unsplash.com/photo-1635360724500-5ceb55bc46af?auto=format&fit=crop&w=1200&q=80",
      specs: ["Pad Preparation Logistics", "Remote Terrain Accessibility", "Workover Technical Teams"]
    },
    {
      id: "equipment",
      category: "Drilling Equipment",
      title: "Heavy-Duty Tubulars & Wellhead Systems",
      location: "Supply Base & Field Yards",
      description: "Inspection, staging, and precision handling of high-tensile drill strings, casing joints, blowout preventers, and choke & kill manifolds.",
      image: "https://images.unsplash.com/photo-1763950865631-4ca11bebe017?auto=format&fit=crop&w=1200&q=80",
      specs: ["API Specification Compliance", "Non-Destructive Testing (NDT)", "Yard Staging & Preservation"]
    },
    {
      id: "oilfield",
      category: "Oilfield Operations",
      title: "Production & Well Intervention Services",
      location: "Active Energy Producing Fields",
      description: "Comprehensive technical support during production enhancement, wireline logging support, surface well testing, and flowline maintenance.",
      image: "https://images.unsplash.com/photo-1694039446022-2d227e8b104b?auto=format&fit=crop&w=1200&q=80",
      specs: ["Well Intervention Assistance", "Surface Well Testing", "Tubular Handling Safety"]
    },
    {
      id: "infrastructure",
      category: "Industrial Infrastructure",
      title: "Pipeline Networks & Processing Terminals",
      location: "Strategic Energy Hubs",
      description: "Providing civil and mechanical support for gas gathering stations, metering skids, storage facilities, and high-pressure transmission networks.",
      image: "https://images.unsplash.com/photo-1722246128616-76c934278e0a?auto=format&fit=crop&w=1200&q=80",
      specs: ["Terminal Integrity Support", "Skid Fabrication Assistance", "High-Pressure Line Monitoring"]
    }
  ],

  projects: [
    {
      id: "proj-1",
      name: "Offshore Exploration Rig Logistics Support",
      location: "Natuna Sea Basin, Indonesia",
      category: "Offshore Support",
      period: "Representative Case Study",
      description: "Mobilization coordination and specialized technical support for a deep offshore exploration campaign, maintaining zero-recordable incidents across all marine-rig transfers.",
      image: "https://images.unsplash.com/photo-1697599426273-93e13129bcbc?auto=format&fit=crop&w=1200&q=80",
      deliverables: ["OCTG Supply Staging", "Marine Crew Logistics", "Safety Oversight"],
      status: "Verified Scope Example"
    },
    {
      id: "proj-2",
      name: "Onshore Infill Well Drilling Campaign",
      location: "East Kalimantan Energy Corridor",
      category: "Onshore Drilling",
      period: "Representative Case Study",
      description: "Integrated mud logging coordination, drilling string tubular delivery, and 24/7 on-site technical support for continuous multi-well drilling programs.",
      image: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?auto=format&fit=crop&w=1200&q=80",
      deliverables: ["Tubular Inspection", "Mud Chemical Handling", "Continuous Field Support"],
      status: "Verified Scope Example"
    },
    {
      id: "proj-3",
      name: "High-Pressure Wellhead Maintenance & Inspection",
      location: "South Sumatra Oilfield",
      category: "Oilfield Services",
      period: "Representative Case Study",
      description: "Execution of API-standard casing integrity inspections, valve overhaul assistance, and wellhead preventative maintenance on high-pressure gas producing wells.",
      image: "https://images.unsplash.com/photo-1542274368-443d694d79aa?auto=format&fit=crop&w=1200&q=80",
      deliverables: ["Pressure Barrier Testing", "NDT Verification", "Valve Integrity Check"],
      status: "Verified Scope Example"
    },
    {
      id: "proj-4",
      name: "Strategic Energy Hub Procurement & Supply",
      location: "West Java Industrial Complex",
      category: "Industrial Procurement",
      period: "Representative Case Study",
      description: "Consolidated procurement and staging of specialized heavy-duty industrial valves, flanges, and fire-resistant pipeline fittings for critical refinery tie-ins.",
      image: "https://images.unsplash.com/photo-1745748420819-dd57cb012cf9?auto=format&fit=crop&w=1200&q=80",
      deliverables: ["Material Certification", "Rapid Supply Dispatch", "Traceability Audits"],
      status: "Verified Scope Example"
    }
  ],

  hsePillars: [
    {
      id: "hse-1",
      title: "Health & Safety",
      headline: "Protecting Our People Always",
      description: "We enforce stringent personal protective protocols, continuous behavioral safety training, and preemptive hazard identification across all operations. Every team member holds full Stop-Work Authority.",
      focusPoints: [
        "Active Stop-Work Authority for all personnel",
        "Daily toolbox talks & dynamic Job Safety Analysis (JSA)",
        "Zero-compromise personal protective equipment (PPE)",
        "Ongoing emergency response simulations"
      ],
      iconName: "ShieldAlert"
    },
    {
      id: "hse-2",
      title: "Environmental Responsibility",
      headline: "Safeguarding Ecosystems & Resources",
      description: "Committed to minimizing environmental footprint through rigorous spill prevention measures, eco-compliant chemical handling, waste minimization, and responsible energy stewardship.",
      focusPoints: [
        "Comprehensive spill prevention & containment systems",
        "Safe storage & handling of industrial drilling fluids",
        "Regulated waste segregation & disposal protocols",
        "Carbon footprint consciousness in operational logistics"
      ],
      iconName: "Sprout"
    },
    {
      id: "hse-3",
      title: "Operational Risk Management",
      headline: "Engineered Discipline & Preparedness",
      description: "Implementing structured hazard identification, thorough operational risk assessments (HIRADC), and asset integrity safeguards to eliminate non-productive downtime and operational incidents.",
      focusPoints: [
        "Systematic Hazard Identification & Risk Assessment (HIRADC)",
        "Rigorous equipment maintenance & integrity verification",
        "Contingency planning for complex well environments",
        "Transparent incident reporting & lessons-learned framework"
      ],
      iconName: "Activity"
    }
  ],

  whyChooseUs: [
    {
      id: "why-1",
      title: "Professional Excellence",
      subtitle: "Industry Experience & Technical Rigor",
      description: "We apply industry-proven methodologies, seasoned energy professionals, and exacting execution standards to meet rigorous Indonesian and global energy benchmarks.",
      icon: "Award"
    },
    {
      id: "why-2",
      title: "Reliable Solutions",
      subtitle: "Dependable Execution Under Pressure",
      description: "Energy operations cannot afford downtime. Our proactive logistics and responsive field support ensure that operations proceed on schedule and within planned parameters.",
      icon: "Layers"
    },
    {
      id: "why-3",
      title: "Industry Collaboration",
      subtitle: "Strategic Synergy & Transparent Partnerships",
      description: "We work hand-in-hand with operators, technology partners, and domestic stakeholders, fostering long-term collaborative trust and mutually beneficial energy development.",
      icon: "Users"
    },
    {
      id: "why-4",
      title: "Commitment to Safety",
      subtitle: "People and Assets First",
      description: "Safety is our core foundation. We build operations around disciplined safety cultures, ensuring risk mitigation, environmental protection, and asset integrity at every step.",
      icon: "CheckCircle2"
    }
  ]
};

