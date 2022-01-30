import { transformPayload } from "./lib/payload";
import plot from "./lib/plot";
import { createSvg } from "./lib/svg";

HTMLWidgets.widget({
  name: "xkcd",

  type: "output",

  factory: function (el: HTMLElement, width: number, height: number) {
    // TODO: define shared variables for this instance

    return {
      renderValue: function (x: any) {
        if (!x["type"]) {
          console.warn(
            "xkcd: a chart type is required after x_chart(), e.g. x_chart(data.frame(x = 1:10, y = 1:10)) |> x_line(x = 'x', y = 'y'), see https://qiushiyan.github.io/xkcd/index.html for documentation"
          );
          return;
        }

        const svg = createSvg();
        el.appendChild(svg);
        x["payload"] = transformPayload(x["payload"], x["type"]);
        plot(svg, x);
      },

      resize: function (width: number, height: number) {
        // TODO: code to re-render the widget with a new size
      },
    };
  },
});
