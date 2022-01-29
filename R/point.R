#' Scatterplot
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable
#' @param fill optional group variable mapped to dot fill
#' @param size dot size
#' @param line if dots should be connected by line
#' @export
x_point <- function(w, x, y, fill = NULL, size = 1, line = FALSE) {
  check_xkcd(w)

  w$x$type <- "point"
  w$x$chartOptions$xLabel <- x
  w$x$chartOptions$yLabel <- y
  w$x$chartOptions$options$dotSize <- size
  w$x$chartOptions$options$showLine <- line

  w$x$payload$x <- x
  w$x$payload$y <- y


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
