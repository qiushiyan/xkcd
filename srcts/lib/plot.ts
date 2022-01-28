import chartXkcd from "chart.xkcd";
import { ChartOptions } from "../types/options";

const plot = (svg: SVGElement, x: any) => {
  switch (x.type) {
    case "line":
      // @ts-ignore
      new chartXkcd.Line(
        svg,
        Object.assign(
          { ...x.chartOptions },
          {
            data: x.payload,
          }
        )
      );
      break;
  }
};

export default plot;
