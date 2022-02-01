#' Bar, pie/doughnut charts
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable for bar height or arc length in pie chart
#' @param fill optional group variable mapped to bar fill
#' @param radius specify empty pie chart radius, default to 0.5 For pie chart set radius = 0
#' @examples
#' data.frame(
#'   x = LETTERS[1:6],
#'   y = abs(rnorm(6))
#' ) |>
#'   x_chart() |>
#'   x_bar()
#' @export
x_bar <- function(w, x = "x", y = "y", fill = NULL) {
  check_xkcd(w)

  # if not specified, inherit from x_chart()
  if (missing(x)) {
    x <- w$x$payload$x
  }
  if (missing(y)) {
    y <- w$x$payload$y
  }

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
x_pie <- function(w, x = "x", y = "y", radius = 0.5) {
  check_xkcd(w)
  w <- set_common_options(w, x, y, axis_label = FALSE)

  w$x$type <- "pie"
  w$x$chartOptions$options$innerRadius <- radius

  w$x$payload$data <- w$x$payload$data[[y]]
  w
}
