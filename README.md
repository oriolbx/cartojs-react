# README

## Problems seen when building React + CARTO.js map

In order to load the leaflet tiles correctly with react-leaflet I had to:

1- load Leaflet css in local and adding width and height to leaflet-container

.leaflet-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
	}

2- In order to avoid the error regarding leaflet.css and webpack css-loader
I had to run `npm run eject` and add the next alias on webpack dev and prod:

resolve: {
  ...
  alias:{
    ...
    './images/layers.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/layers.png'),
      './images/layers-2x.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/layers-2x.png'),
      './images/marker-icon.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/marker-icon.png'),
      './images/marker-icon-2x.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/marker-icon-2x.png'),
      './images/marker-shadow.png$': path.resolve(__dirname, '../node_modules/leaflet/dist/images/marker-shadow.png')
  }
}

