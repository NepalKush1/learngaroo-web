// Simplified outlines of Australia's states and territories, projected to a
// 960 x 700 viewBox. Approximate shapes for a schematic map, not for navigation.

export interface MapShape {
  slug: string;
  path: string;
  // Label anchor in viewBox units.
  label: [number, number];
  // Where the ACT callout line should point from (label sits off-map).
  callout?: [number, number];
}

export const mapShapes: MapShape[] = [
  { slug: "western-australia", path: "M374 116.8 L341.0 103.0 L308 99.0 L286 118.8 L253.0 148.5 L224.4 168.3 L198 207.9 L154 217.8 L110 233.6 L66 247.5 L46.2 267.3 L33.0 297.0 L30.8 336.6 L44 376.2 L63.8 415.8 L81.4 455.4 L68.2 485.1 L66 502.9 L99.0 514.8 L132 514.8 L176 495.0 L220 493.0 L264 475.2 L308 461.3 L352 455.4 L374 449.5 Z", label: [220, 326.7] },
  { slug: "northern-territory", path: "M374 116.8 L385.0 108.9 L407.0 69.3 L418 63.4 L451.0 49.5 L473.0 55.4 L506 63.4 L539.0 55.4 L547.8 79.2 L528 99.0 L517.0 118.8 L539.0 134.6 L561.0 148.5 L572 154.4 L572 336.6 L374 336.6 Z", label: [473.0, 207.9] },
  { slug: "south-australia", path: "M374 336.6 L638 336.6 L638 495.0 L638 575.2 L627.0 570.2 L609.4 552.4 L605.0 534.6 L583.0 526.7 L583.0 506.9 L567.6 504.9 L565.4 516.8 L550 502.9 L567.6 475.2 L567.6 469.3 L539.0 499.0 L521.4 514.8 L495.0 479.2 L473.0 461.3 L440 455.4 L418 445.5 L374 449.5 Z", label: [517.0, 405.9] },
  { slug: "queensland", path: "M572 154.4 L605.0 168.3 L627.0 166.3 L638 138.6 L649.0 99.0 L655.6 69.3 L666.6 33.7 L675.4 39.6 L693.0 89.1 L715.0 108.9 L732.6 128.7 L737.0 156.4 L754.6 194.0 L770 203.9 L803.0 223.7 L825.0 267.3 L853.6 287.1 L869.0 306.9 L891.0 322.7 L902 346.5 L913.0 380.2 L858 394.0 L811.8 394.0 L638 394.0 L638 336.6 L572 336.6 Z", label: [726, 267.3] },
  { slug: "new-south-wales", path: "M913.0 380.2 L913.0 405.9 L906.4 435.6 L891.0 465.3 L873.4 477.2 L862.4 493.0 L853.6 514.8 L836 544.5 L833.8 564.3 L792 550.4 L770 536.6 L726 532.6 L638 495.0 L638 394.0 L811.8 394.0 L858 394.0 Z", label: [759.0, 455.4] },
  { slug: "victoria", path: "M638 495.0 L726 532.6 L770 536.6 L792 550.4 L833.8 564.3 L792 572.2 L759.0 590.0 L737.0 582.1 L723.8 572.2 L715.0 580.1 L693.0 590.0 L649.0 580.1 L638 575.2 Z", label: [710.6, 552.4] },
  { slug: "tasmania", path: "M719.4 627.7 L756.8 635.6 L789.8 629.6 L798.6 653.4 L789.8 677.2 L767.8 685.1 L732.6 659.3 L719.4 639.5 Z", label: [759.0, 657.4] },
  { slug: "australian-capital-territory", path: "M809.6 516.8 L822.8 516.8 L822.8 526.7 L809.6 526.7 Z", label: [862.4, 532.6], callout: [816.2, 521.7] },
];
