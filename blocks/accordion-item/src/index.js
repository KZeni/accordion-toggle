/**
 * WordPress dependeincies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon";

import metadata from "../block.json";
import attributes from "./attributes";

const { ebConditionalRegisterBlockType } = EBAccordionControls;

ebConditionalRegisterBlockType(metadata, {
	icon: Icon,
	attributes,
	edit: Edit,
	save: Save,
});
