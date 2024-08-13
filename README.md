# Leaflet Earthquake Visualization

## Overview

This project is a visualization tool created for the United States Geological Survey (USGS) to map earthquake data from around the world. The tool is built using the Leaflet.js library for interactive maps and D3.js for data fetching and manipulation.

## Project Structure

1. **Data Source**:
   - The earthquake data is sourced from the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). For this project, we use the dataset of all earthquakes from the past 7 days.

2. **Map Creation**:
   - We use Leaflet to create a map centered on a default location.
   - Earthquakes are plotted as circle markers on the map, with the size of each marker representing the magnitude of the earthquake and the color representing the depth.

3. **Interactive Features**:
   - Each marker is clickable, showing a popup with detailed information about the earthquake, such as its location, magnitude, and depth.
   - A legend is included to help users understand the color coding of the markers.
