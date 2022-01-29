#' Bar, pie/doughnut charts
#' @param w an xkcd widget object
#' @param x x variable
#' @param y y variable for bar height or arc length in pie chart
#' @param fill optional group variable mapped to bar fill
#' @param radius specify empty pie chart radius, default to 0.5 For pie chart set radius = 0
#' @export
x_bar <- function(w, x, y, fill = NULL) {
  check_xkcd(w)

  w$x$chartOptions$xLabel <- x
  w$x$chartOptions$yLabel <- y
  w$x$payload$x <- x
  w$x$payload$y <- y
  w$x$payload$xlabels <- unique(w$x$payload$data[[x]])


  if (!is.null(fill)) {
    w$x$type <- "stacked_bar"
    w$x$payload$group <- fill
    data <- w$x$payload$data[, c(y, fill)]

    if (is.factor(data[[fill]])) {
      data[[fill]] <- as.character(data[[fill]])
    }
    data_split <- split(data, data[[fill]])
    groups <- names(data_split)
    out <- list()
    for (g in groups) {
      out[[g]] <- data_split[[g]][[y]]
    }
    w$x$payload$data <- out
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

  w$x$type <- "pie"
  w$x$chartOptions$options$innerRadius <- radius


  w$x$payload$x <- x
  w$x$payload$y <- y
  w$x$payload$xlabels <- unique(w$x$payload$data[[x]])
  w$x$payload$data <- w$x$payload$data[[y]]
  w
}
