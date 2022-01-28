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
          throw new Error("xkcd: a chart type is required after x_chart()");
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
