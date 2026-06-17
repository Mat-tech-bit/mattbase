export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  problem?: string;
  solution?: string;
  impact?: string;
};

export const projects: Project[] = [
  {
    title: "Gate Operations OS Console",
    description: "Live management of inbound and outbound yard traffic with OCR optical recognition, driver check-in kiosks, and automatic security logs.",
    image: "/gate-os.png",
    tech: ["Websockets Sync", "OCR Vision Models", "Next.js Console", "Node.js REST API"],
    github: "https://github.com/Mat-tech-bit/mattbase",
    live: "/#contact",
    category: "Gate & Safety",
    problem: "Traditional logistics yards experience severe pre-gate congestion, long driver check-in times (up to 45 mins), and error-prone manual logs.",
    solution: "Deployed OCR license and trailer scanners alongside automated gate control loops and self-service kiosks.",
    impact: "Reduced gate check-in time by 90% (from 45 minutes to under 2 minutes) and digitized security checklists."
  },
  {
    title: "Spotter Fleet Orchestrator",
    description: "Algorithmic routing and automatic dispatching system for spotter trucks. Streamlines shuttle trailer assignments in real-time.",
    image: "/spotter-fleet.png",
    tech: ["A* Path Optimization", "MQTT Broker", "React Rugged UI", "Drizzle ORM & Postgres"],
    github: "https://github.com/Mat-tech-bit/mattbase",
    live: "/#contact",
    category: "Orchestration",
    problem: "Spotters waste significant fuel, mileage, and active duty hours running empty trailers due to fragmented radio and paper dispatch dispatching.",
    solution: "Engineered a real-time auto-assignment engine that dispatches spotters to nearby trailers based on door urgency.",
    impact: "Boosted spotter hourly trailer moves by 35% and reduced overall yard fuel consumption by 15%."
  },
  {
    title: "Dock Door Smart Planner",
    description: "Gantt timeline planner that coordinates inbound trailers with warehouse door availability, matching carrier priorities and unloading times.",
    image: "/dock-door.png",
    tech: ["Timeline Scheduler", "ETA Forecasting", "TypeScript Engine", "Tailwind CSS"],
    github: "https://github.com/Mat-tech-bit/mattbase",
    live: "/#contact",
    category: "Orchestration",
    problem: "Misalignment between inbound carriers, cargo priorities, and warehouse loading docks results in massive demurrage fees and container delays.",
    solution: "Implemented an automated door assignment grid that prioritizes trailers by hot-SKUs and schedules unload teams.",
    impact: "Decreased dock turnaround time by 22% and eliminated warehouse dwell fee penalties entirely."
  },
  {
    title: "Asset Telemetry Reefers Monitor",
    description: "Continuous IoT sensor network monitoring refrigerated trailer positions, fuel levels, door openings, and cooling telemetry.",
    image: "/reefer-telemetry.png",
    tech: ["IoT MQTT Feeds", "TimescaleDB", "Framer Motion Gauges", "Better Auth Control"],
    github: "https://github.com/Mat-tech-bit/mattbase",
    live: "/#contact",
    category: "Sensors & API",
    problem: "Cold chain logistics hubs lack remote warning alerts for refrigerated trailer power outages or temperature spikes, leading to cargo spoilage.",
    solution: "Connected custom yard IoT sensors to our MQTT server to continuously log reefer health statistics and trigger auto-alerts.",
    impact: "Achieved a 100% reduction in perishable food wastage and automated historical temperature auditing."
  }
];
