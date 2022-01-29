#' Radar chart
#' @param w an xkcd widget object
#' @param x x variable (dimension)
#' @param y y variable (spoke length)
#' @param color optional group variable mapped to colors
#' @param label display labels for each dimension
#' @param size dot size
#' @param ticks number of ticks on the main line
#' @export
x_radar <- function(w, x, y, color = NULL, label = TRUE, size = 1, ticks = 3) {
  check_xkcd(w)

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