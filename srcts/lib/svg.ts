export const createSvg = (type: string = "svg"): SVGElement => {
  return document.createElementNS("http://www.w3.org/2000/svg", type);
};
