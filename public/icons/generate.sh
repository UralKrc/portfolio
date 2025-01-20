#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first."
    exit 1
fi

# Source SVG file
SVG_FILE="u-icon.svg"

# Generate favicon.ico (multi-size)
convert -background none -density 256x256 $SVG_FILE -define icon:auto-resize=16,32,48,64 "../favicon.ico"

# Generate PNG icons
convert -background none -density 384x384 $SVG_FILE -resize 192x192 "../icon-192x192.png"
convert -background none -density 1024x1024 $SVG_FILE -resize 512x512 "../icon-512x512.png"

# Generate OG image
convert -background none -density 2400x2400 $SVG_FILE -resize 1200x1200 -gravity center -background "#F9FAFB" -extent 1200x630 "../og-image.png"

echo "Icons generated successfully!"
