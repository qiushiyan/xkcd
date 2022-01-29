#' Initialize
#'
#' Initialize a xkcd widget
#' @description for specific chart types, either one of \code{x_line}, \code{x_point}, \code{x_bar}, \code{x_pie} or \code{x_radar} needs to be appended after \code{x_chart}
#' @param data data frame
#' @param title chart title
#' @param ... other configuration options, see \code{\link{x_options}}
#' @import htmlwidgets
#' @name init
#' @export
x_chart <- function(data, title = NULL, ..., width = NULL, height = NULL, elementId = NULL) {
  x <- list(
    payload = list(data = data),
    chartOptions = list(title = title)
  )

  # create widget
  htmlwidgets::createWidget(
    name = "xkcd",
    x,
    width = width,
    height = height,
    package = "xkcd",
    elementId = elementId
  )
}

xkcd_html <- function(..., style = ""){
  htmltools::tags$div(..., style = c(style, "height: 100%;"))
}

#' Shiny bindings for xkcd
#'
#' Output and render functions for using xkcd within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a xkcd
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name xkcd-shiny
#'
#' @export
xkcdOutput <- function(outputId, width = "100%", height = "100%") {
  htmlwidgets::shinyWidgetOutput(outputId, "xkcd", width, height, package = "xkcd")
}

#' @rdname xkcd-shiny
#' @export
renderXkcd <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) {
    expr <- substitute(expr)
  } # force quoted
  htmlwidgets::shinyRenderWidget(expr, xkcdOutput, env, quoted = TRUE)
}
