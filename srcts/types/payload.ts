export interface XYPayload {}

export interface Payload {
  data: {
    [key: string]: any[];
  };
  x?: string;
  y?: string;
  xlabels: any[];
  group?: string;
}

export type LinePayload =
  | Required<Pick<Payload, "data" | "x" | "y" | "xlabels">> & {
      group?: string;
    };

export type PointPayload =
  | Required<Pick<Payload, "data" | "x" | "y" | "xlabels">> & {
      group?: string;
    };

export type BarPayload =
  | Required<Pick<Payload, "data" | "x" | "y" | "xlabels">> & {
      group?: string;
    };

export type PiePayload = Required<Pick<Payload, "data" | "xlabels">>;

export enum ChartType {
  LINE = "line",
  POINT = "point",
  BAR = "bar",
  STACKED_BAR = "stacked_bar",
  PIE = "pie",
  RADAR = "radar",
}
