`%||%` <- function(x, y) {
  if (is.null(x)) {
    y
  } else {
    x
  }
}

#' @importFrom rlang abort
check_xkcd <- function(w) {
  if (!("xkcd" %in% class(w))) {
    abort(c("the first argument is not an xkcd widget object",
      "*" = "did you forget to call `x_chart(data)` first?"
    ))
  }
}

set_common_options <- function(w, x, y, axis_label = TRUE, xlabels = TRUE, xlabels_sort = FALSE) {
  w$x$payload$x <- x
  w$x$payload$y <- y

  if (axis_label) {
    w$x$chartOptions$xLabel <- x
    w$x$chartOptions$yLabel <- y
  }


  if (xlabels) {
    xlabels_ <- unique(w$x$payload$data[[x]])
    if (xlabels_sort) {
      w$x$payload$xlabels <- sort(xlabels_)
    } else {
      w$x$payload$xlabels <- xlabels_
    }
  }

  w
}

make_data_split <- function(w, value_var, group_var) {
  w$x$payload$group <- group_var
  data <- w$x$payload$data[, c(value_var, group_var)]

  if (is.factor(data[[group_var]])) {
    data[[group_var]] <- as.character(data[[group_var]])
  }
  data_split <- split(data, data[[group_var]])
  groups <- names(data_split)
  out <- list()
  for (g in groups) {
    out[[g]] <- data_split[[g]][[value_var]]
  }
  w$x$payload$data <- out
  w
}