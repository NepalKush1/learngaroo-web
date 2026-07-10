"use client";

import { feature } from "topojson-client";
import type { MultiPolygon, Polygon, Position } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";
import countries110m from "world-atlas/countries-110m.json";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Approximate capital-city coordinates — decorative markers only, not
// tied to any migration statistics. Each source country also carries a
// label offset (dx, dy, text-anchor) hand-tuned to avoid overlapping
// labels where countries sit close together (verified by rendering).
const AUSTRALIA = { name: "Australia", lat: -35.3, lng: 149.1 };
const AUSTRALIA_ISO_ID = "036";

const SOURCE_COUNTRIES: {
  name: string;
  label: string;
  lat: number;
  lng: number;
  labelDx: number;
  labelDy: number;
  anchor: "start" | "middle" | "end";
  fontSize: number;
}[] = [
  { name: "India", label: "IN", lat: 28.6, lng: 77.2, labelDx: 0, labelDy: 17, anchor: "middle", fontSize: 13 },
  { name: "China", label: "China", lat: 39.9, lng: 116.4, labelDx: 0, labelDy: -13, anchor: "middle", fontSize: 15 },
  { name: "Nepal", label: "NP", lat: 27.7, lng: 85.3, labelDx: 12, labelDy: -7, anchor: "start", fontSize: 13 },
  { name: "Philippines", label: "Philippines", lat: 14.6, lng: 121.0, labelDx: 9, labelDy: 14, anchor: "start", fontSize: 14 },
  { name: "Vietnam", label: "Vietnam", lat: 21.0, lng: 105.8, labelDx: 10, labelDy: 15, anchor: "start", fontSize: 14 },
  { name: "UK", label: "UK", lat: 51.5, lng: -0.1, labelDx: 0, labelDy: -13, anchor: "middle", fontSize: 15 },
  { name: "Pakistan", label: "PK", lat: 33.7, lng: 73.0, labelDx: -12, labelDy: -7, anchor: "end", fontSize: 13 },
  { name: "Sri Lanka", label: "Sri Lanka", lat: 6.9, lng: 79.9, labelDx: 0, labelDy: 18, anchor: "middle", fontSize: 14 },
  { name: "South Africa", label: "South Africa", lat: -25.7, lng: 28.2, labelDx: 0, labelDy: -15, anchor: "middle", fontSize: 14 },
  { name: "Brazil", label: "Brazil", lat: -15.8, lng: -47.9, labelDx: 0, labelDy: -15, anchor: "middle", fontSize: 14 },
];

const VIEW_WIDTH = 1000;

// Cropped a bit tighter than a full world map: trims the mostly-empty
// high Arctic (north) and the mostly-empty Pacific/central North America
// (west, since Brazil is the westernmost point of interest) to cut down
// on unused space and zoom in on the countries that are actually used.
const LAT_MIN = -56;
const LAT_MAX = 60;
const LNG_MIN = -65;
const LNG_MAX = 165;
const VIEW_HEIGHT = (VIEW_WIDTH * (LAT_MAX - LAT_MIN)) / (LNG_MAX - LNG_MIN);

// Deterministic map projection — no rotation/visibility ambiguity (unlike
// a 3D globe, every point is always on-screen and its position is exact).
function project(lat: number, lng: number): { x: number; y: number } {
  return {
    x: ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * VIEW_WIDTH,
    y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * VIEW_HEIGHT,
  };
}

// Quadratic-bezier control point offset perpendicular to the midpoint,
// producing a gentle outward-bowing "flight arc" between two points.
function arcPath(
  from: { x: number; y: number },
  to: { x: number; y: number },
): string {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy);
  const curvature = 0.22;
  const cx = mx - dy * curvature;
  const cy = my + dx * curvature - length * 0.05;

  return `M ${from.x},${from.y} Q ${cx},${cy} ${to.x},${to.y}`;
}

function ringsToPath(rings: Position[][]): string {
  return rings
    .map((ring) => {
      let prevLng: number | null = null;
      const points = ring
        .map(([lng, lat], i) => {
          const { x, y } = project(lat, lng);
          // A ring can legitimately cross the antimeridian (e.g. Russia,
          // Fiji): consecutive points then jump from ~+180° to ~-180°,
          // which are geographically adjacent but would otherwise draw a
          // spurious straight line all the way across the map. Break into
          // a new subpath instead of connecting across that jump.
          const wraps = prevLng !== null && Math.abs(lng - prevLng) > 180;
          prevLng = lng;
          return `${i === 0 || wraps ? "M" : "L"} ${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ");
      return `${points} Z`;
    })
    .join(" ");
}

function ringsWithinCrop(rings: Position[][]): Position[][] {
  const margin = 5;
  return rings.filter((ring) =>
    ring.some(
      ([lng, lat]) =>
        lng >= LNG_MIN - margin &&
        lng <= LNG_MAX + margin &&
        lat >= LAT_MIN - margin &&
        lat <= LAT_MAX + margin,
    ),
  );
}

function geometryRings(geometry: Polygon | MultiPolygon): Position[][] {
  if (geometry.type === "Polygon") return geometry.coordinates;
  return geometry.coordinates.flat();
}

// Build two separate map paths from the public-domain Natural Earth
// countries topology (bundled via the world-atlas package): the rest of
// the world's land, and Australia on its own so it can be highlighted
// with a distinct fill from every other country.
function buildMapPaths(): { otherLand: string; australia: string } {
  const topology = countries110m as unknown as Topology;
  const collection = feature(
    topology,
    topology.objects.countries as GeometryCollection,
  );

  const otherRings: Position[][] = [];
  let australiaRings: Position[][] = [];

  for (const f of collection.features) {
    const geometry = f.geometry as Polygon | MultiPolygon;
    if (geometry.type !== "Polygon" && geometry.type !== "MultiPolygon") continue;
    const rings = geometryRings(geometry);
    if (f.id === AUSTRALIA_ISO_ID) {
      australiaRings = rings;
    } else {
      otherRings.push(...rings);
    }
  }

  return {
    otherLand: ringsToPath(ringsWithinCrop(otherRings)),
    australia: ringsToPath(australiaRings),
  };
}

const MAP_PATHS = buildMapPaths();

const AUSTRALIA_POS = project(AUSTRALIA.lat, AUSTRALIA.lng);

const ROUTES = SOURCE_COUNTRIES.map((country, index) => {
  const from = project(country.lat, country.lng);
  return {
    ...country,
    from,
    d: arcPath(from, AUSTRALIA_POS),
    id: `flight-path-${index}`,
    delay: (index * 4.8) / SOURCE_COUNTRIES.length,
  };
});

export function WorldFlightMap() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animate = !prefersReducedMotion;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-md">
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full"
        role="img"
        aria-label="Map showing migration flight paths from India, China, Nepal, the Philippines, Vietnam, the UK, Pakistan, Sri Lanka, South Africa and Brazil converging on Australia"
      >
        <defs>
          <radialGradient id="world-flight-map-fade" cx="50%" cy="46%" r="65%">
            <stop offset="70%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </radialGradient>
          <mask id="world-flight-map-mask">
            <rect
              width={VIEW_WIDTH}
              height={VIEW_HEIGHT}
              fill="url(#world-flight-map-fade)"
            />
          </mask>
        </defs>

        <g mask="url(#world-flight-map-mask)">
          <path d={MAP_PATHS.otherLand} className="fill-white/[0.09]" fillRule="evenodd" />
          <path d={MAP_PATHS.australia} className="fill-brand-blue/80" fillRule="evenodd" />
        </g>

        {ROUTES.map((route) => (
          <path
            key={route.id}
            id={route.id}
            d={route.d}
            fill="none"
            stroke="currentColor"
            className="text-brand-teal/40"
            strokeWidth={1.5}
            strokeDasharray="4 5"
          />
        ))}

        {ROUTES.map((route) => (
          <g key={`${route.id}-marker`}>
            <circle cx={route.from.x} cy={route.from.y} r={5} className="fill-brand-teal" />
            <text
              x={route.from.x + route.labelDx}
              y={route.from.y + route.labelDy}
              textAnchor={route.anchor}
              fontSize={route.fontSize}
              className="fill-blue-50"
            >
              {route.label}
            </text>
          </g>
        ))}

        <circle
          cx={AUSTRALIA_POS.x}
          cy={AUSTRALIA_POS.y}
          r={11}
          className="fill-brand-blue"
        />
        <text
          x={AUSTRALIA_POS.x}
          y={AUSTRALIA_POS.y - 19}
          textAnchor="middle"
          className="fill-white text-[19px] font-semibold"
        >
          Australia
        </text>

        {animate &&
          ROUTES.map((route) => (
            <circle key={`${route.id}-flight`} r={4} className="fill-amber-300">
              <animateMotion
                dur="4.8s"
                begin={`${route.delay}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${route.id}`} />
              </animateMotion>
            </circle>
          ))}
      </svg>
    </div>
  );
}
