export type ChartOptions = Partial<{
  title?: string;
  xLabel?: string;
  yLabel?: string;
  data: any;
  options?: Partial<{
    // common options
    xTickCount: number;
    yTickCount: number;
    dataColors: string[];
    showLegend: boolean;
    legendPosition: PositionType;
    timeFormat: undefined;
    fontFamily: string;
    unxkcdify: boolean;
    strokeColor: string;
    backgroundColor: string;
    // chart-specific options
    dotSize: number;
    showLine: boolean;
    innerRadius: number;
    ticksCount: number;
    showLabels: boolean;
  }>;
}>;

export enum PositionType {
  UP_LEFT = 1,
  UP_RIGHT = 2,
  DOWN_LEFT = 3,
  DOWN_RIGHT = 4,
}
