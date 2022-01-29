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
  switch (x.type) {
    case ChartType.LINE:
      new chartXkcd.Line(svg, buildOptions(x));
      break;
    case ChartType.POINT:
      new chartXkcd.XY(svg, buildOptions(x));
      break;
    case ChartType.BAR:
      new chartXkcd.Bar(svg, buildOptions(x));
      break;
    case ChartType.STACKED_BAR:
      new chartXkcd.StackedBar(svg, buildOptions(x));
      break;
    case ChartType.PIE:
      new chartXkcd.Pie(svg, buildOptions(x));
      break;
    case ChartType.RADAR:
      new chartXkcd.Radar(svg, buildOptions(x));
      break;
  }
};

export default plot;
