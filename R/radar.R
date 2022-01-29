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

  w$x$type <- "radar"
  w$x$chartOptions$options$showLabels <- label
  w$x$chartOptions$options$dotSize <- size
  w$x$chartOptions$options$ticksCount <- ticks



  w$x$payload$x <- x
  w$x$payload$y <- y
  w$x$payload$xlabels <- unique(w$x$payload$data[[x]]) |> sort()
  print(w$x$payload$xlabels)
  if (!is.null(color)) {
    w$x$payload$group <- color
    data <- w$x$payload$data[, c(y, color)]

    if (is.factor(data[[color]])) {
      data[[color]] <- as.character(data[[color]])
    }
    data_split <- split(data, data[[color]])
    groups <- names(data_split)
    out <- list()
    for (g in groups) {
      out[[g]] <- data_split[[g]][[y]]
    }
    w$x$payload$data <- out
  } else {
    w$x$payload$data <- w$x$payload$data[, c(x, y)]
  }
  w
}
