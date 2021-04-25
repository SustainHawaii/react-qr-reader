'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var containerStyle = {
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  paddingTop: '100%'
};
var hiddenStyle = { display: 'none' };
var previewStyle = {
  top: 0,
  left: 0,
  display: 'block',
  position: 'absolute',
  overflow: 'hidden',
  width: '100%',
  height: '100%'
};
var videoPreviewStyle = function videoPreviewStyle(mirrorVideo) {
  return _extends({}, previewStyle, {
    objectFit: 'cover',
    transform: mirrorVideo ? 'scaleX(-1)' : undefined
  });
};
var imgPreviewStyle = _extends({}, previewStyle, {
  objectFit: 'scale-down'
});

var viewFinderStyle = {
  top: 0,
  left: 0,
  zIndex: 1,
  boxSizing: 'border-box',
  border: '50px solid rgba(0, 0, 0, 0.3)',
  boxShadow: 'inset 0 0 0 5px rgba(255, 0, 0, 0.5)',
  position: 'absolute',
  width: '100%',
  height: '100%'
};

module.exports = {
  containerStyle: containerStyle,
  hiddenStyle: hiddenStyle,
  videoPreviewStyle: videoPreviewStyle,
  imgPreviewStyle: imgPreviewStyle,
  viewFinderStyle: viewFinderStyle
};