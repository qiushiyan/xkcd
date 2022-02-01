#' Radar chart
#' @param w an xkcd widget object
#' @param x x variable (dimension)
#' @param y y variable (spoke length)
#' @param color optional group variable mapped to colors
#' @param label display labels for each dimension
#' @param size dot size
#' @param ticks number of ticks on the main line
#' @examples
#' data.frame(
#'  x = rep(c("strength", "patience", "skillfulness", "resilience", "flexibility"), 2),
#'  y = abs(rnorm(10)),
#'  g = rep(c("tiger", "lion"), each = 5)
#' ) |>
#'  x_chart(title = "Tiger and lion: a random comparison") |>
#'  x_radar(color = "g")
#' @export
x_radar <- function(w, x = "x", y = "y", color = NULL, label = TRUE, size = 1, ticks = 3) {
  check_xkcd(w)

  # if not specified, inherit from x_chart()
  if (missing(x)) {
    x <- w$x$payload$x
  }
  if (missing(y)) {
    y <- w$x$payload$y
  }

  w <- set_common_options(w, x, y, axis_label = FALSE)

  w$x$type <- "radar"
  w$x$chartOptions$options$showLabels <- label
  w$x$chartOptions$options$dotSize <- size
  w$x$chartOptions$options$ticksCount <- ticks

  if (!is.null(color)) {
    w <- make_data_split(w, y, color)
  } else {
    w$x$payload$data <- w$x$payload$data[, c(x, y)]
  }
  w
}
