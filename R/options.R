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
#' @name xkcd-options


#' @rdname xkcd-options
#' @export
x_options <- function(w, title = NULL, xlabel = NULL, ylabel = NULL, palette = NULL, font_family = "xkcd", stroke = "black", background = "white", legend = TRUE, legend_position = 1, ...) {
    old <- list(
        title = w$x$chartOptions$title,
        xLabel = w$x$chartOptions$xLabel,
        yLabel = w$x$chartOptions$yLabel
    )


    w$x$chartOptions <- list(
        title = title %||% old$title,
        xLabel = xlabel %||% old$xLabel,
        yLabel = ylabel %||% old$yLabel,
        options = list(
            fontFamily = font_family,
            showLegend = legend,
            legendPosition = legend_position,
            strokeColor = stroke,
            backgroundColor = background
        )
    )

    # only include dataColors when it's non-null
    if (!is.null(palette)) {
      w$x$chartOptions$options$dataColors <- palette
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
