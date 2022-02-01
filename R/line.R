#' Line Graph
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable
#' @param color optional group variable mapped to colors
#' @examples
#' subset(airquality, Month == 5) |>
#'  x_chart() |>
#'  x_line(x = "Day", y = "Temp")
#' @export
x_line <- function(w, x = "x", y = "y", color = NULL) {
  check_xkcd(w)

  # if not specified, inherit from x_chart()
  if (missing(x)) {
    x <- w$x$payload$x
  }
  if (missing(y)) {
    y <- w$x$payload$y
  }

  w <- set_common_options(w, x, y, xlabels_sort = TRUE)
  w$x$type <- "line"

  if (!is.null(color)) {
    w <- make_data_split(w, y, color)
  } else {
    w$x$payload$data <- w$x$payload$data[, c(x, y)]
  }
  w
}
