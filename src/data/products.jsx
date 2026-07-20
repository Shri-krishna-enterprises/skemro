import {
  FaCogs,
  FaIndustry,
  FaBolt,
  FaWater,
  FaTools,
  FaOilCan,
  FaMicrochip,
  FaShieldAlt,
  FaWrench,
  FaFan,
  FaBoxes,
} from "react-icons/fa";

const products = [
  {
    id: "bearings",
    name: "Industrial Bearings",
    category: "Bearings",
    icon: <FaCogs />,
    description:
      "High-quality industrial bearings for heavy-duty machinery and rotating equipment.",
    brands: ["SKF", "NSK", "NTN", "Nachi", "FAG"],
    applications: [
      "Motors",
      "Conveyors",
      "Gearboxes",
      "Pumps",
    ],
    industries: [
      "Steel",
      "Automobile",
      "Cement",
      "Power",
    ],
    features: [
      "Long Service Life",
      "High Precision",
      "Low Maintenance",
      "Reliable Performance",
    ],
  },

  {
    id: "power-transmission",
    name: "Power Transmission",
    category: "Power Transmission",
    icon: <FaIndustry />,
    description:
      "Complete power transmission solutions for industrial applications.",
    brands: ["Fenner", "Optibelt", "Lovejoy", "PIX"],
    applications: [
      "Conveyors",
      "Crushers",
      "Industrial Drives",
    ],
    industries: [
      "Mining",
      "Steel",
      "Manufacturing",
    ],
    features: [
      "Efficient Power Transfer",
      "Durable",
      "Low Wear",
    ],
  },

  {
    id: "electric-motors",
    name: "Electric Motors",
    category: "Electric Motors",
    icon: <FaBolt />,
    description:
      "Energy-efficient industrial motors for various manufacturing applications.",
    brands: ["ABB", "Siemens", "CG", "WEG"],
    applications: [
      "Pumps",
      "Compressors",
      "Fans",
      "Conveyors",
    ],
    industries: [
      "Power",
      "Manufacturing",
      "Chemical",
    ],
    features: [
      "Energy Efficient",
      "Low Noise",
      "High Torque",
    ],
  },

  {
    id: "pumps",
    name: "Industrial Pumps",
    category: "Pumps",
    icon: <FaWater />,
    description:
      "Reliable industrial pumps for fluid transfer and processing.",
    brands: ["Kirloskar", "Grundfos", "KSB", "CRI"],
    applications: [
      "Water Supply",
      "Chemical Transfer",
      "Boilers",
    ],
    industries: [
      "Chemical",
      "Water Treatment",
      "Power",
    ],
    features: [
      "Heavy Duty",
      "Corrosion Resistant",
      "High Flow Rate",
    ],
  },

  {
    id: "valves",
    name: "Industrial Valves",
    category: "Valves",
    icon: <FaTools />,
    description:
      "Industrial valves for flow control in demanding environments.",
    brands: ["L&T", "Audco", "Leader", "KSB"],
    applications: [
      "Pipelines",
      "Process Plants",
      "Utilities",
    ],
    industries: [
      "Oil & Gas",
      "Chemical",
      "Power",
    ],
    features: [
      "Leak Proof",
      "Heavy Duty",
      "Long Life",
    ],
  },

  {
    id: "hydraulics",
    name: "Hydraulic Products",
    category: "Hydraulics",
    icon: <FaOilCan />,
    description:
      "Hydraulic systems and components for industrial machinery.",
    brands: ["Parker", "Bosch Rexroth", "Yuken"],
    applications: [
      "Press Machines",
      "Construction",
      "Automation",
    ],
    industries: [
      "Engineering",
      "Construction",
      "Manufacturing",
    ],
    features: [
      "High Pressure",
      "Reliable",
      "Efficient",
    ],
  },

  {
    id: "automation",
    name: "Industrial Automation",
    category: "Automation",
    icon: <FaMicrochip />,
    description:
      "Automation products for improving industrial productivity.",
    brands: [
      "Siemens",
      "Schneider",
      "Omron",
      "ABB",
    ],
    applications: [
      "PLC",
      "SCADA",
      "Control Panels",
    ],
    industries: [
      "Manufacturing",
      "Food",
      "Pharma",
    ],
    features: [
      "Smart Control",
      "High Accuracy",
      "Reliable",
    ],
  },

  {
    id: "electrical",
    name: "Electrical Components",
    category: "Electrical",
    icon: <FaBolt />,
    description:
      "Industrial electrical products for safe and reliable power distribution.",
    brands: [
      "Schneider",
      "Legrand",
      "ABB",
      "L&T",
    ],
    applications: [
      "Panels",
      "Distribution",
      "Automation",
    ],
    industries: [
      "Commercial",
      "Industrial",
      "Infrastructure",
    ],
    features: [
      "Safe",
      "Certified",
      "Reliable",
    ],
  },

  {
    id: "safety",
    name: "Industrial Safety",
    category: "Safety",
    icon: <FaShieldAlt />,
    description:
      "Personal protective equipment and industrial safety products.",
    brands: ["3M", "Honeywell", "Karam", "Allen"],
    applications: [
      "Factory Safety",
      "Construction",
      "Maintenance",
    ],
    industries: [
      "Manufacturing",
      "Oil & Gas",
      "Power",
    ],
    features: [
      "Certified",
      "Comfortable",
      "Durable",
    ],
  },

  {
    id: "tools",
    name: "Industrial Tools",
    category: "Tools",
    icon: <FaWrench />,
    description:
      "Professional hand tools and maintenance equipment.",
    brands: [
      "Stanley",
      "Bosch",
      "Taparia",
      "Jonnesway",
    ],
    applications: [
      "Maintenance",
      "Assembly",
      "Repair",
    ],
    industries: [
      "Engineering",
      "Automobile",
      "Manufacturing",
    ],
    features: [
      "High Strength",
      "Precision",
      "Ergonomic Design",
    ],
  },
    {
    id: "pneumatics",
    name: "Pneumatic Products",
    category: "Pneumatics",
    icon: <FaFan />,
    description:
      "Pneumatic cylinders, valves and air preparation units for industrial automation.",
    brands: ["SMC", "Festo", "Janatics", "Camozzi"],
    applications: [
      "Automation",
      "Packaging",
      "Assembly Lines",
    ],
    industries: [
      "Manufacturing",
      "Food",
      "Automobile",
    ],
    features: [
      "Energy Efficient",
      "Reliable",
      "Compact Design",
    ],
  },

  {
    id: "fasteners",
    name: "Industrial Fasteners",
    category: "Fasteners",
    icon: <FaTools />,
    description:
      "Industrial bolts, nuts, washers and fastening solutions.",
    brands: ["Unbrako", "TVS", "Hilti"],
    applications: [
      "Assembly",
      "Construction",
      "Maintenance",
    ],
    industries: [
      "Steel",
      "Infrastructure",
      "Engineering",
    ],
    features: [
      "High Tensile",
      "Corrosion Resistant",
      "Long Life",
    ],
  },

  {
    id: "pipes",
    name: "Pipes & Fittings",
    category: "Pipes",
    icon: <FaWater />,
    description:
      "Industrial pipes, fittings and accessories for fluid systems.",
    brands: ["Astral", "Ashirvad", "Supreme"],
    applications: [
      "Water Supply",
      "Chemical Plants",
      "Utilities",
    ],
    industries: [
      "Chemical",
      "Infrastructure",
      "Manufacturing",
    ],
    features: [
      "Leak Resistant",
      "Durable",
      "Easy Installation",
    ],
  },

  {
    id: "lubricants",
    name: "Industrial Lubricants",
    category: "Lubricants",
    icon: <FaOilCan />,
    description:
      "Premium lubricants and greases for industrial equipment.",
    brands: ["Shell", "Castrol", "Mobil", "Servo"],
    applications: [
      "Bearings",
      "Gearboxes",
      "Hydraulic Systems",
    ],
    industries: [
      "Steel",
      "Power",
      "Manufacturing",
    ],
    features: [
      "Long Drain Life",
      "Excellent Protection",
      "Reduced Wear",
    ],
  },

  {
    id: "hvac",
    name: "HVAC Solutions",
    category: "HVAC",
    icon: <FaFan />,
    description:
      "Industrial HVAC products for ventilation and cooling systems.",
    brands: ["Daikin", "Blue Star", "Voltas"],
    applications: [
      "Factories",
      "Warehouses",
      "Commercial Buildings",
    ],
    industries: [
      "Food",
      "Pharma",
      "Manufacturing",
    ],
    features: [
      "Energy Efficient",
      "Reliable Cooling",
      "Low Maintenance",
    ],
  },

  {
    id: "instrumentation",
    name: "Instrumentation",
    category: "Instrumentation",
    icon: <FaMicrochip />,
    description:
      "Industrial measuring instruments and process control devices.",
    brands: ["Yokogawa", "Endress+Hauser", "WIKA"],
    applications: [
      "Process Control",
      "Monitoring",
      "Automation",
    ],
    industries: [
      "Chemical",
      "Oil & Gas",
      "Power",
    ],
    features: [
      "High Accuracy",
      "Reliable",
      "Digital Monitoring",
    ],
  },

  {
    id: "welding",
    name: "Welding Equipment",
    category: "Welding",
    icon: <FaBolt />,
    description:
      "Professional welding machines and welding accessories.",
    brands: ["ESAB", "Lincoln Electric", "Ador"],
    applications: [
      "Fabrication",
      "Repair",
      "Construction",
    ],
    industries: [
      "Steel",
      "Engineering",
      "Infrastructure",
    ],
    features: [
      "High Performance",
      "Durable",
      "Easy Operation",
    ],
  },

  {
    id: "cutting-tools",
    name: "Cutting Tools",
    category: "Cutting Tools",
    icon: <FaTools />,
    description:
      "Industrial cutting tools for machining and manufacturing.",
    brands: ["Sandvik", "Kennametal", "YG-1"],
    applications: [
      "Machining",
      "CNC",
      "Manufacturing",
    ],
    industries: [
      "Automobile",
      "Engineering",
      "Manufacturing",
    ],
    features: [
      "High Precision",
      "Long Tool Life",
      "Superior Finish",
    ],
  },

  {
    id: "material-handling",
    name: "Material Handling",
    category: "Material Handling",
    icon: <FaIndustry />,
    description:
      "Material handling equipment for industrial operations.",
    brands: ["Godrej", "Toyota", "Jungheinrich"],
    applications: [
      "Warehouses",
      "Factories",
      "Logistics",
    ],
    industries: [
      "Manufacturing",
      "Warehouse",
      "Logistics",
    ],
    features: [
      "Heavy Duty",
      "Safe Operation",
      "High Efficiency",
    ],
  },

  {
    id: "consumables",
    name: "Industrial Consumables",
    category: "Consumables",
    icon: <FaBoxes />,
    description:
      "Daily-use industrial consumables and maintenance products.",
    brands: ["3M", "Loctite", "Pidilite"],
    applications: [
      "Maintenance",
      "Assembly",
      "Production",
    ],
    industries: [
      "Manufacturing",
      "Engineering",
      "Automobile",
    ],
    features: [
      "Reliable",
      "Cost Effective",
      "Industrial Grade",
    ],
  }
];

export default products;