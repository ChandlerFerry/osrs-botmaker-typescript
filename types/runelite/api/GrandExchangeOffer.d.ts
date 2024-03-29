/// <reference path="GrandExchangeOfferState.d.ts" />
declare namespace net.runelite.api {
	/**
	 * Represents an offer in a grand exchange slot.
	 */
	export interface GrandExchangeOffer {
		/**
		 * Gets the quantity of bought or sold items.
		 *
		 * @return the quantity bought or sold
		 */
		getQuantitySold(): number;

		/**
		 * Gets the ID of the item being bought or sold.
		 *
		 * @return item ID
		 * @see ItemID
		 */
		getItemId(): number;

		/**
		 * Gets the total quantity being bought or sold.
		 *
		 * @return the total quantity
		 */
		getTotalQuantity(): number;

		/**
		 * Gets the offer or sell price per item.
		 *
		 * @return the offer price
		 */
		getPrice(): number;

		/**
		 * Gets the total amount of money spent so far.
		 *
		 * @return the amount spent
		 */
		getSpent(): number;

		/**
		 * Gets the current state of the offer.
		 *
		 * @return the offers state
		 */
		getState(): GrandExchangeOfferState;
	}
}
