declare namespace HTMLWidgets {
  export function widget(params: any): any;
}
declare module "chart.xkcd" {
  export function Line(el: SVGElement, options: ChartOptions): void;
  export function XY(el: SVGElement, options: ChartOptions): void;
  export function Radar(el: SVGElement, options: ChartOptions): void;
  export function Pie(el: SVGElement, options: ChartOptions): void;
  export function Bar(el: SVGElement, options: ChartOptions): void;
  export function StackedBar(el: SVGElement, options: ChartOptions): void;
}
