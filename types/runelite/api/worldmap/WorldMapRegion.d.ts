/// <reference path="../../../java/index.d.ts" />
/// <reference path="WorldMapIcon.d.ts" />
declare namespace net.runelite.api.worldmap {
	export interface WorldMapRegion {
		/**
		 * Gets visible map icons. The underlying list is modified as the map is panned around.
		 * @return
		 */
		getMapIcons(): Collection<WorldMapIcon>;
	}
}
