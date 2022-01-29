// @ts-nocheck
import chartXkcd from "chart.xkcd";
import { ChartOptions } from "../types/options";
import { ChartType } from "../types/payload";

const buildOptions = (x: any): ChartOptions => {
  return Object.assign(
    { ...x.chartOptions },
    {
      data: x.payload,
    }
  );
};

const plot = (svg: SVGElement, x: any) => {
  const options = buildOptions(x);
  console.log(options);

  switch (x.type) {
    case ChartType.LINE:
      new chartXkcd.Line(svg, options);
      break;
    case ChartType.POINT:
      new chartXkcd.XY(svg, options);
      break;
    case ChartType.BAR:
      new chartXkcd.Bar(svg, options);
      break;
    case ChartType.STACKED_BAR:
      new chartXkcd.StackedBar(svg, options);
      break;
    case ChartType.PIE:
      new chartXkcd.Pie(svg, options);
      break;
    case ChartType.RADAR:
      new chartXkcd.Radar(svg, options);
      break;
  }
};

export default plot;
