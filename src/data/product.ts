// src/data/products.ts

export type RustProductCategory =
  | 'Rust Remover'
  | 'Rust Preventor'
  | 'Derusting Chemical'
  | 'Other';

export type RustProduct = {
  slug: string;
  name: string;
  category: RustProductCategory;
  shortDescription: string;
  techSummary: string;
  features: string[];
  applications: string[];
  image: string; // public path, e.g. /images/products/xyz.jpg
};

export const RUST_PRODUCTS: RustProduct[] = [
  // ----------------- RUST REMOVER RANGE -----------------
  {
    slug: 'rustonil-fz-105',
    name: 'Rustonil FZ 105',
    category: 'Rust Remover',
    image: '/images/products/rustonil-fz-105.jpg',
    shortDescription:
      'Heavy-duty Rustonil grade for stubborn rust on engine blocks, castings and large machinery parts.',
    techSummary:
      'Acid-activated liquid designed for severe rust on complex castings with controlled base-metal attack.',
    features: [
      'High penetration into intricate cavities and water jackets',
      'Removes heavy rust and oxide scale with predictable metal loss',
      'Gives a clean, conversion-ready surface for further treatment',
    ],
    applications: [
      'Automotive and diesel engine reconditioning',
      'Cylinder heads, blocks and large cast iron components',
      'Heavy machinery overhauls and refurbishment',
    ],
  },
  {
    slug: 'rustonil',
    name: 'Rustonil',
    category: 'Rust Remover',
    image: '/images/products/rustonil.jpg',
    shortDescription:
      'Flagship Rustonil formulation for general-purpose rust removal and conversion on fabricated steel.',
    techSummary:
      'Balanced formulation that dissolves rust and converts remaining oxides into a more stable layer.',
    features: [
      'One-step rust removal and conversion',
      'Suitable for many common steel fabrications and plant equipment',
      'Leaves a darker, paint-ready surface',
    ],
    applications: [
      'Fabricated structures and guards',
      'Plant equipment and maintenance work',
      'General workshop rust removal jobs',
    ],
  },
  {
    slug: 'industrial-rust-remover',
    name: 'Industrial Rust Remover',
    category: 'Rust Remover',
    image: '/images/products/industrial-rust-remover.jpg',
    shortDescription:
      'Industrial-grade remover for structures, tanks and large fabrications exposed to aggressive environments.',
    techSummary:
      'Formulated for immersion or spray systems where large surface areas require uniform rust removal.',
    features: [
      'Works on structural steel, tanks and heavy fabrications',
      'Stable bath with predictable life under normal loading',
      'Compatible with mechanical pre-cleaning (wire brushing, blasting)',
    ],
    applications: [
      'Storage tanks, supports and structural members',
      'Fabrication yards and structural workshops',
      'Industrial maintenance and repair operations',
    ],
  },
  {
    slug: 'surface-rust-remover',
    name: 'Surface Rust Remover',
    category: 'Rust Remover',
    image: '/images/products/surface-rust-remover.jpg',
    shortDescription:
      'Rust remover for lighter to medium rust on machined or finished surfaces where finish matters.',
    techSummary:
      'Optimised for surface rust removal with minimal impact on underlying finish when used as recommended.',
    features: [
      'Best suited for light / medium corrosion',
      'Helps restore surface appearance before coating',
      'Low residue and easy rinsing',
    ],
    applications: [
      'Machined components with light rust',
      'Finished surfaces prior to painting or packing',
      'Maintenance of tools, fixtures and jigs',
    ],
  },
  {
    slug: 'water-based-rust-remover',
    name: 'Water Based Rust Remover',
    category: 'Rust Remover',
    image: '/images/products/water-based-rust-remover.jpg',
    shortDescription:
      'Water based rust remover where lower odour and easier handling are desired.',
    techSummary:
      'Aqueous system designed to remove rust with reduced solvent content while maintaining good cleaning power.',
    features: [
      'Water based system for improved operator comfort',
      'Suitable for dip tanks and trays',
      'Easier handling and disposal compared to many solvent systems',
    ],
    applications: [
      'Workshops preferring water-based processes',
      'Components with moderate rust and contamination',
      'General purpose derusting before further treatment',
    ],
  },
  {
    slug: 'machine-engine-rust-remover',
    name: 'Machine Engine Rust Remover',
    category: 'Rust Remover',
    image: '/images/products/machine-engine-rust-remover.jpg',
    shortDescription:
      'Rust remover for machinery and engine assemblies in plant and heavy industry.',
    techSummary:
      'Formulated to remove corrosion from large assemblies, frames and machine parts prior to overhaul or repainting.',
    features: [
      'Cleans structural members, machine bases and assemblies',
      'Helps restore surfaces for inspection or repair',
      'Adaptable to brush, spray or immersion usage',
    ],
    applications: [
      'Machine frames and bases',
      'Industrial engine and compressor skids',
      'On-site maintenance and shutdown work',
    ],
  },

  // ----------------- RUST PREVENTOR RANGE -----------------
  {
    slug: 'metallic-pipe-rust-preventer',
    name: 'Metallic Pipe Rust Preventer',
    category: 'Rust Preventor',
    image: '/images/products/metallic-pipe-rust-preventer.jpg',
    shortDescription:
      'Rust preventor oil for metallic pipes and tubular components stored before use or coating.',
    techSummary:
      'Protective film-forming oil designed to guard iron and steel pipes against atmospheric corrosion.',
    features: [
      'Forms a protective film on internal and external surfaces',
      'Suitable for pipes stored in open yard conditions',
      'Helps minimise flash rust before fabrication or coating',
    ],
    applications: [
      'Metallic line pipes and tubulars',
      'Fabrication yards and pipe storage yards',
      'Interim protection before coating or erection',
    ],
  },
  {
    slug: 'rust-prevention-chemical',
    name: 'Rust Prevention Chemical',
    category: 'Rust Preventor',
    image: '/images/products/rust-prevention-chemical.jpg',
    shortDescription:
      'Rust prevention chemical for components after derusting, machining or cleaning.',
    techSummary:
      'Blend of inhibitors and film formers for short to medium term storage of cleaned ferrous components.',
    features: [
      'Helps prevent flash rust after derusting operations',
      'Suitable for dip or spray application',
      'Compatible with many downstream painting systems',
    ],
    applications: [
      'Cleaned and machined ferrous parts',
      'Components awaiting assembly or packing',
      'Inter-process protection in production lines',
    ],
  },

  // ----------------- OTHER / SUPPORT PRODUCTS -----------------
  {
    slug: 'iron-pipes-antirust-chemical',
    name: 'Iron Pipes Antirust Chemical',
    category: 'Other',
    image: '/images/products/iron-pipes-antirust-chemical.jpg',
    shortDescription:
      'Anti-rust treatment tailored for iron pipes exposed to aggressive outdoor and process environments.',
    techSummary:
      'Chemical system designed to protect iron pipe surfaces and reduce under-film corrosion risk.',
    features: [
      'Developed specifically for iron pipes and tubulars',
      'Provides protection in humid or industrial atmospheres',
      'Integrates with typical pipe-coating workflows',
    ],
    applications: [
      'Iron pipes in utilities and industrial plants',
      'Fabrication shops and storage yards',
      'Pre-treatment before coating systems',
    ],
  },
  {
    slug: 'derusting-chemicals',
    name: 'Derusting Chemicals',
    category: 'Derusting Chemical',
    image: '/images/products/derusting-chemicals.jpg',
    shortDescription:
      'Complementary derusting chemicals for process lines and special applications.',
    techSummary:
      'Range of derusting and conditioning chemicals used with Rustonil systems for complete process design.',
    features: [
      'Supports multi-stage derusting and cleaning lines',
      'Can be tailored for specific component and bath conditions',
      'Helps optimise overall process performance',
    ],
    applications: [
      'Special-purpose derusting tanks',
      'Custom process lines designed around Rustonil',
      'Plants needing tailored derusting chemistry',
    ],
  },
];

// helper
export function getProductBySlug(slug: string): RustProduct | undefined {
  return RUST_PRODUCTS.find((p) => p.slug === slug);
}
