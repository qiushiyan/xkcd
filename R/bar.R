#' Bar, pie/doughnut charts
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable for bar height or arc length in pie chart
#' @param fill optional group variable mapped to bar fill
#' @param radius specify empty pie chart radius, default to 0.5 For pie chart set radius = 0
#' @export
x_bar <- function(w, x, y, fill = NULL) {
  check_xkcd(w)

  w <- set_common_options(w, x, y)

  if (!is.null(fill)) {
    w$x$type <- "stacked_bar"
    w <- make_data_split(w, y, fill)
  } else {
    w$x$type <- "bar"
    w$x$payload$data <- w$x$payload$data[, c(x, y)]
  }
  w
}

#' @export
#' @rdname x_bar
x_pie <- function(w, x, y, radius = 0.5) {
  check_xkcd(w)
  w <- set_common_options(w, x, y, axis_label = FALSE)

  w$x$type <- "pie"
  w$x$chartOptions$options$innerRadius <- radius

  w$x$payload$data <- w$x$payload$data[[y]]
  w
}