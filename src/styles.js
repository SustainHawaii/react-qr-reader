const containerStyle = {
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  paddingTop: '100%',
}
const hiddenStyle = { display: 'none' }
const previewStyle = {
  top: 0,
  left: 0,
  display: 'block',
  position: 'absolute',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
}
const videoPreviewStyle = (mirrorVideo) => ({
  ...previewStyle,
  objectFit: 'cover',
  transform: mirrorVideo ? 'scaleX(-1)' : undefined,
})
const imgPreviewStyle = {
  ...previewStyle,
  objectFit: 'scale-down',
}

const viewFinderStyle = {
  top: 0,
  left: 0,
  zIndex: 1,
  boxSizing: 'border-box',
  border: '50px solid rgba(0, 0, 0, 0.3)',
  boxShadow: 'inset 0 0 0 5px rgba(255, 0, 0, 0.5)',
  position: 'absolute',
  width: '100%',
  height: '100%',
}

module.exports = {
  containerStyle,
  hiddenStyle,
  videoPreviewStyle,
  imgPreviewStyle,
  viewFinderStyle
}