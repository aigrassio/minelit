/// Shorthand mixin for offset positioning
/// @param {String} $position - Either `relative`, `absolute` or `fixed`
/// @param {Length} $top [null] - Top offset
/// @param {Length} $right [null] - Right offset
/// @param {Length} $bottom [null] - Bottom offset
/// @param {Length} $left [null] - Left offset
@mixin position($position, $top: null, $right: null, $bottom: null, $left: null) {
  position: $position;
  top: $top;
  right: $right;
  bottom: $bottom;
  left: $left;
}
