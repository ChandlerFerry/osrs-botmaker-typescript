/// <reference path="Renderable.d.ts" />
/**
 * Represents an item inside an ItemLayer.
 */
interface TileItem extends Renderable {
	/**
	 * @return the ID of the item
	 * @see ItemID
	 */
	getId(): number;

	getQuantity(): number;
}