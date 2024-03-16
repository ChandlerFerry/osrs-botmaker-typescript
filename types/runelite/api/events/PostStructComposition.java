Convert this Java code to a typescript .d.ts file. Use external references with naming intention instead of imports, maintain comments, and do not export anything. Only return the code block:


package net.runelite.api.events;

import lombok.Data;
import net.runelite.api.StructComposition;

/**
 * An event called after a new {@link StructComposition} is created and
 * its data is initialized.
 */
@Data
public class PostStructComposition
{
	/**
	 * The newly created struct.
	 */
	private StructComposition structComposition;
}