import { Line, Point } from "./types";

export const calculateHexagonPoints = (size: number): Point[] => {
  const center = { x: 0, y: 0 };
  return Array.from({ length: 6 }).map((_, i) => {
    const angle = (i * Math.PI) / 3 - Math.PI / 2;
    return {
      x: center.x + size * Math.cos(angle),
      y: center.y + size * Math.sin(angle),
    };
  });
};

export const createLineSegments = (points: Point[]): Line[] => {
  return points.map((point, i) => {
    const nextPoint = points[(i + 1) % points.length];
    return {
      x1: point.x,
      y1: point.y,
      x2: nextPoint.x,
      y2: nextPoint.y,
    };
  });
};
