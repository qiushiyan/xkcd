#' Common configuration options
#'
#' @description various functions for controlling guide elements such as title, axis label, legend, and fonts
#' @param w: an xkcd widget object
#' @param title: title
#' @param xlabel: title for x axis
#' @param ylabel: title for y axis
#' @param palette: color palette for different groups
#' @param font_family: font family
#' @param stroke: color for axis, title and legend box
#' @param background: background color
#' @param legend: if legend should be shown
#' @param legend_position: a integer controlling legend position, 1 (up left), 2 (up right), 3 (down left), 4 (down right)
#' @param time_format:  time format to use if the x values are time, chart.xkcd use \code{dayjs} to format time,  find the all the available formats at \url{https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#list-of-all-available-formats}
#' @param x_breaks number of breaks for x axis
#' @param y_breaks number of breaks for y axis
#' @name xkcd-option
#'
#' @rdname xkcd-options
#' @export
x_options <- function(w, title = NULL, xlabel = NULL, ylabel = NULL, palette = NULL, font_family = "xkcd", stroke = "black", background = "white", legend = TRUE, legend_position = 1, time_format = NULL, x_breaks = 3, y_breaks = 3, ...) {
  old <- w$x$chartOptions

  # common options
  w$x$chartOptions$title <- title %||% old$title
  w$x$chartOptions$xLabel <- xlabel %||% old$xLabel
  w$x$chartOptions$yLabel <- ylabel %||% old$yLabel
  w$x$chartOptions$options$fontFamily <- font_family %||% old$options$fontFamily
  w$x$chartOptions$options$strokeColor <- stroke %||% old$options$strokeColor
  w$x$chartOptions$options$backgroundColor <- background %||% old$options$backgroundColor
  w$x$chartOptions$options$showLegend <- legend %||% old$options$showLegend
  w$x$chartOptions$options$legendPosition <- legend_position

  w$x$chartOptions$options$xTickCount <- x_breaks %||% old$options$xTickCount
  w$x$chartOptions$options$yTickCount <- y_breaks %||% old$options$yTickCount



  # only include dataColors, timeFormat when it's non-null
  if (!is.null(palette)) {
    w$x$chartOptions$options$dataColors <- palette
  }

  if (!is.null(time_format)) {
    w$x$chartOptions$options$timeFormat <- format
  }

  w
}

#' @rdname xkcd-options
#' @export
x_label <- function(w, title = NULL, xlabel = NULL, ylabel = NULL) {
  w$x$chartOptions$title <- title
  w$x$chartOptions$xLabel <- xlabel
  w$x$chartOptions$yLabel <- ylabel
  w
}

#' @rdname xkcd-options
#' @export
x_title <- function(w, title = NULL) {
  w$x$chartOptions$title <- title
  w
}

#' @rdname xkcd-options
#' @export
x_legend <- function(w, legend = TRUE, legend_position = 1) {
  w$x$chartOptions$options$showLegend <- legend
  w$x$chartOptions$options$legendPosition <- legend_position
  w
}
