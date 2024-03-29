/// <reference path="TileObject.d.ts" />
/// <reference path="../../java/index.d.ts" />
/// <reference path="Renderable.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents one or two walls on a tile
	 */
	export interface WallObject extends TileObject {
		/**
		 * A bitfield with the orientation of the first wall
		 * 1 = West
		 * 2 = North
		 * 4 = East
		 * 8 = South
		 * 16 = North-west
		 * 32 = North-east
		 * 64 = South-east
		 * 128 = South-west
		 */
		getOrientationA(): number;

		/**
		 * A bitfield with the orientation of the second wall
		 * 1 = West
		 * 2 = North
		 * 4 = East
		 * 8 = South
		 * 16 = North-west
		 * 32 = North-east
		 * 64 = South-east
		 * 128 = South-west
		 */
		getOrientationB(): number;

		/**
		 * A bitfield containing various flags:
		 * <pre>{@code
		 * object type id = bits & 0x20
		 * orientation (0-3) = bits >>> 6 & 3
		 * supports items = bits >>> 8 & 1
		 * }</pre>
		 */
		getConfig(): number;

		/**
		 * Gets the convex hull of the objects model.
		 *
		 * @return the convex hull
		 * @see net.runelite.api.model.Jarvis
		 */
		getConvexHull(): Shape;
		getConvexHull2(): Shape;

		getRenderable1(): Renderable;
		getRenderable2(): Renderable;
	}
}
