#' Scatterplot
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable
#' @param fill optional group variable mapped to dot fill
#' @param size dot size
#' @param line if dots should be connected by line
#' @examples
#' data.frame(
#'   x = rnorm(50),
#'   y = rnorm(50)
#' ) |>
#'   x_chart() |>
#'   x_point(fill = "x") |>
#'   x_options(legend = FALSE)
#' @export
x_point <- function(w, x = "x", y = "y", fill = NULL, size = 1, line = FALSE) {
  check_xkcd(w)

  # if not specified, inherit from x_chart()
  if (missing(x)) {
    x <- w$x$payload$x
  }
  if (missing(y)) {
    y <- w$x$payload$y
  }

  w <- set_common_options(w, x, y, xlabels = FALSE)

  w$x$type <- "point"
  w$x$chartOptions$options$dotSize <- size
  w$x$chartOptions$options$showLine <- line



  data <- w$x$payload$data[, c(x, y, fill)]
  # chart.xkcd expects column to be named as "x", "y"
  names(data) <- c("x", "y", fill)

  if (!is.null(fill)) {
    w$x$payload$group <- fill
    if (is.factor(data[[fill]])) {
      data[[fill]] <- as.character(data[[fill]])
    }
    data_split <- split(data, data[[fill]])
    groups <- names(data_split)
    out <- list()
    for (g in groups) {
      out[[g]] <- jsonlite::toJSON(data_split[[g]][, c("x", "y")], "rows")
    }
    w$x$payload$data <- out
  } else {
    w$x$payload$data <- jsonlite::toJSON(data, "rows")
  }
  w
}
