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
