// @ts-nocheck
import chartXkcd from "chart.xkcd";
import { ChartType } from "../types/payload";

const buildOptions = (x: any) => {
  return Object.assign(
    { ...x.chartOptions },
    {
      data: x.payload,
    }
  );
};

const plot = (svg: SVGElement, x: any) => {
  switch (x.type) {
    case ChartType.LINE:
      new chartXkcd.Line(svg, buildOptions(x));
      break;
    case ChartType.POINT:
      new chartXkcd.XY(svg, buildOptions(x));
      break;
    case ChartType.BAR:
      console.log(buildOptions(x));
      new chartXkcd.Bar(svg, buildOptions(x));
    case ChartType.STACKED_BAR:
      new chartXkcd.StackedBar(svg, buildOptions(x));
  }
};

export default plot;
