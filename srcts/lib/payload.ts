import { ChartType, Payload, LinePayload } from "../types/payload";

const lineTransformer = (payload: LinePayload) => {
  let datasets: {}[];
  if (payload.group) {
    datasets = [];
    for (let group in payload.data) {
      datasets.push({
        label: group,
        data: payload.data[group],
      });
    }
    console.log("datasets", datasets);
  } else {
    const ydata = payload.data[payload.y];
    datasets = [
      {
        label: payload.y,
        data: ydata,
      },
    ];
  }

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const barTransformer = (payload: any) => {};

const pointTransformer = (payload: any) => {};

const pieTransformer = (payload: any) => {};

const donutTransformer = (payload: any) => {};

const stackedBarTransformer = (payload: any) => {};

const radarTransformer = (payload: any) => {};

const config = {
  bar: barTransformer,
  line: lineTransformer,
  point: pointTransformer,
  pie: pieTransformer,
  donut: donutTransformer,
  stacked_bar: stackedBarTransformer,
  radar: radarTransformer,
};

export const transformPayload = (payload: Payload, type: ChartType) => {
  let transformer = config[type];
  return transformer(payload as any);
};
