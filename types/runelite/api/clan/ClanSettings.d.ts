/// <reference path="../../../java/index.d.ts" />
/// <reference path="ClanMember.d.ts" />
/// <reference path="ClanRank.d.ts" />
/// <reference path="ClanTitle.d.ts" />
declare namespace net.runelite.api.clan {
	/**
	 * A clan's settings.
	 */
	export interface ClanSettings {
		/**
		 * The clan name
		 * @return
		 */
		getName(): string;

		/**
		 * The members of the clan. This includes all members, whether online or offline.
		 * @return
		 */
		getMembers(): Array<ClanMember>; // TODO: Validate that this is not a Java List

		/**
		 * Find a member of the clan.
		 * @param name
		 * @return
		 */

		findMember(name: string): ClanMember | null;

		/**
		 * Get the clan title for a clan rank.
		 * @param clanRank the rank
		 * @see ClanRank
		 * @return
		 */

		titleForRank(clanRank: ClanRank): ClanTitle | null;
	}
}
