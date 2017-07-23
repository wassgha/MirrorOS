/**
 * WidgetInterface defines the methods and variables that every MirrorOS widget
 * should implement.
 *
 * @interface
 */
export class WidgetInterface {

	/**
	 * Returns a description of the Widget
	 * @return metaDataDef
	 */
	get metaData() {}

	getHtml() {}

	getStylesheets() {}

	getScripts() {}

}

/**
 * @typedef {{
 *   name: string,
 *   description: string,
 *   icon: string,
 *   color: string,
 * }}
 */
export let metaDataDef;
