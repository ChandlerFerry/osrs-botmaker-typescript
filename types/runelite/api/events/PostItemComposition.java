Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:

package net.runelite.api.events;

import lombok.Value;
import net.runelite.api.ItemComposition;

/**
 * An event called after a new {@link ItemComposition} is created and
 * its data is initialized.
 */
@Value
public class PostItemComposition
{
	/**
	 * The newly created item.
	 */
	private ItemComposition itemComposition;
}