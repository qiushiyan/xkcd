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

const barTransformer = (payload: any) => {
  let datasets: {}[] = [];
  if (payload.group) {
    for (let group in payload.data) {
      datasets.push({
        label: group,
        data: payload.data[group],
      });
    }
  } else {
    const ydata = payload.data[payload.y];
    datasets = [
      {
        data: ydata,
      },
    ];
  }

  return {
    labels: payload.xlabels,
    datasets,
  };
};

const pointTransformer = (payload: any) => {
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

const pieTransformer = (payload: any) => {
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
  let datasets: {}[];
  if (payload.group) {
    datasets = [];
    for (let group in payload.data) {
      datasets.push({
        label: group,
        data: payload.data[group],
      });
    }
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
