declare namespace net.runelite.api {
	export interface AABB {
		getCenterX(): number;
		getCenterY(): number;
		getCenterZ(): number;

		getExtremeX(): number;
		getExtremeY(): number;
		getExtremeZ(): number;
	}
}
