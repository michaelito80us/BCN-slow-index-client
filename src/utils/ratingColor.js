export default function ratingToColor(rating) {
  rating = Math.max(0, Math.min(10, rating));

  // Define the start (green) and end (red) colors
  const endColor = { r: 87, g: 189, b: 54 };
  const startColor = { r: 174, g: 0, b: 0 };

  // Calculate the interpolated color
  let r = Math.round(
    startColor.r + (endColor.r - startColor.r) * (rating / 10),
  );
  let g = Math.round(
    startColor.g + (endColor.g - startColor.g) * (rating / 10),
  );
  let b = Math.round(
    startColor.b + (endColor.b - startColor.b) * (rating / 10),
  );

  // Convert the RGB values to a hex string
  let hexR = r.toString(16).padStart(2, "0");
  let hexG = g.toString(16).padStart(2, "0");
  let hexB = b.toString(16).padStart(2, "0");

  return `#${hexR}${hexG}${hexB}`;
}
