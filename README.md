
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

A plot is created first by the initialization of `x_chart`, which is
appended by functions such as `e_line`, `e_point` and `e_bar` specifying
chart type. For example, a line graph of yearly average life expectancy
from the `gapminder` dataset is created as follows

``` r
library(xkcd)
library(dplyr)

df <- gapminder::gapminder |>
  filter(country %in% c("United States", "United Kingdom", "Canada", "Australia"))

df |>
  x_chart(title = "my xkcd line graph") |>
  x_line(x = "year", y = "lifeExp", color = "country") |>
  x_options(legend_position = 4)
```

![](../screenshots/readme-line.png)

See more examples at [Getting
Started](https://qiushiyan.github.io/xkcd/articles/xkcd.html)

# Development

``` bash
git clone https://github.com/qiushiyan/xkcd
pnpm install
yarn watch # esbuild compilation
```
