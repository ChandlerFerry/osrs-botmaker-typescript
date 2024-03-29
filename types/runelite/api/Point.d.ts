declare namespace net.runelite.api {
	export class Point {
		constructor(x: number, y: number);

		getX(): number;
		getY(): number;

		/**
		 * Gets the distance between this point and another.
		 *
		 * @param other other point
		 * @return the distance
		 */
		distanceTo(other: Point): number;
	}
}
