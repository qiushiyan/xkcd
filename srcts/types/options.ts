export type ChartOptions = Partial<{
  title?: string;
  xLabel?: string;
  yLabel?: string;
  data: any;
  options?: Partial<{
    xTickCount: number;
    yTickCount: number;
    showLegend: boolean;
    legendPosition: PositionType;
    showLine: boolean;
    timeFormat: undefined;
    dotSize: number;
    fontFamily: string;
    unxkcdify: boolean;
    strokeColor: string;
    backgroundColor: string;
    dataColors: string[];
  }>;
}>;

export enum PositionType {
  UP_LEFT = 1,
  UP_RIGHT = 2,
  DOWN_LEFT = 3,
  DOWN_RIGHT = 4,
}
