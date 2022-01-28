
<!-- README.md is generated from README.Rmd. Please edit that file -->

# xkcd (WIP)

<!-- badges: start -->

[![Lifecycle:
experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://lifecycle.r-lib.org/articles/stages.html#experimental)
<!-- badges: end -->

This package is a wrapper around the javascript
[chart.xkcd](https://github.com/timqian/chart.xkcd) library to create
xkcd-styled chart for R.

## Installation

You can install the development version of xkcd like so:

``` r
remotes::install_github("qiushiyan/xkcd")
```

# Chart Types

``` r
library(xkcd)
library(dplyr)
df <- gapminder::gapminder |>
  filter(country %in% c("United States", "United Kingdom", "Canada", "Australia"))
```

## Line

``` r
df |>
  x_chart(title = "my xkcd line graph") |>
  x_line(x = "year", y = "lifeExp", color = "country") |>
  x_options(legend_position = 4)
```

<div id="htmlwidget-cac01538d81702cb79ca" style="width:100%;height:480px;" class="xkcd html-widget"></div>
<script type="application/json" data-for="htmlwidget-cac01538d81702cb79ca">{"x":{"payload":{"data":{"Australia":[69.12,70.33,70.93,71.1,71.93,73.49,74.74,76.32,77.56,78.83,80.37,81.235],"Canada":[68.75,69.96,71.3,72.13,72.88,74.21,75.76,76.86,77.95,78.61,79.77,80.653],"United Kingdom":[69.18,70.42,70.76,71.36,72.01,72.76,74.04,75.007,76.42,77.218,78.471,79.425],"United States":[68.44,69.49,70.21,70.76,71.34,73.38,74.65,75.02,76.09,76.81,77.31,78.242]},"x":"year","y":"lifeExp","xlabels":[1952,1957,1962,1967,1972,1977,1982,1987,1992,1997,2002,2007],"group":"country"},"chartOptions":{"title":"my xkcd line graph","xLabel":"year","yLabel":"lifeExp","options":{"fontFamily":"xkcd","showLegend":true,"legendPosition":4,"strokeColor":"black","backgroundColor":"white"}},"type":"line"},"evals":[],"jsHooks":[]}</script>

## Scatterplot

# Development

``` bash
git clone https://github.com/qiushiyan/xkcd
pnpm install
yarn watch # esbuild compilation
```
