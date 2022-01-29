#' Line Graph
#' @param w an xkcd widget object
#' @param x: x variable
#' @param y: y variable
#' @param color: optional group variable mapped to colors
#' @export
x_line <- function(w, x, y, color = NULL) {
    check_xkcd(w)

    w$x$type <- "line"
    w$x$chartOptions$xLabel <- x
    w$x$chartOptions$yLabel <- y
    w$x$payload$x <- x
    w$x$payload$y <- y
    w$x$payload$xlabels <- unique(w$x$payload$data[[x]]) |> sort()
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