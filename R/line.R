#' Line Graph
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable
#' @param color optional group variable mapped to colors
#' @export
x_line <- function(w, x, y, color = NULL) {
  check_xkcd(w)
  w <- set_common_options(w, x, y, xlabels_sort = TRUE)
  w$x$type <- "line"

  if (!is.null(color)) {
    w <- make_data_split(w, y, color)
  } else {
    w$x$payload$data <- w$x$payload$data[, c(x, y)]
  }
  w
}