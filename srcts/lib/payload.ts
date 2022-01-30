import {
  ChartType,
  Payload,
  LinePayload,
  BarPayload,
  PointPayload,
  PiePayload,
} from "../types/payload";

const buildDatasets = (
  payload: any,
  label_single: boolean = true,
  label_group: boolean = true
) => {
  let datasets: {}[];
  if (payload.group) {
    datasets = [];
    for (let group in payload.data) {
      if (label_group) {
        datasets.push({
          label: group,
          data: payload.data[group],
        });
      } else {
        datasets.push({
          data: payload.data[group],
        });
      }
    }
  } else {
    const ydata = payload.data[payload.y];
    if (label_single) {
      datasets = [
        {
          label: payload.y,
          data: ydata,
        },
      ];
    } else {
      datasets = [
        {
          data: ydata,
        },
      ];
    }
  }

  return datasets;
};

const lineTransformer = (payload: LinePayload) => {
  const datasets = buildDatasets(payload);

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const barTransformer = (payload: BarPayload) => {
  const datasets = buildDatasets(payload, false);

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const pointTransformer = (payload: PointPayload) => {
  // point use different input standard so buildDatasets is not applicable
  let datasets: {}[] = [];
  if (payload.group) {
    for (let group in payload.data) {
      datasets.push({
        label: group,
        data: payload.data[group],
      });
    }
  } else {
    datasets = [
      {
        label: payload.y,
        data: payload.data,
      },
    ];
  }

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const pieTransformer = (payload: PiePayload) => {
  // pie chart does not require manipulation
  const datasets = [
    {
      data: payload.data,
    },
  ];

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const radarTransformer = (payload: any) => {
  const datasets = buildDatasets(payload);

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const config = {
  bar: barTransformer,
  stacked_bar: barTransformer,
  line: lineTransformer,
  point: pointTransformer,
  pie: pieTransformer,
  radar: radarTransformer,
};

export const transformPayload = (payload: Payload, type: ChartType) => {
  let transformer = config[type];
  return transformer(payload as any);
};
