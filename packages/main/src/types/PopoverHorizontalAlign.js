import DataType from "@ui5/webcomponents-base/src/sap/ui/webcomponents/base/types/DataType";

const PopoverHorizontalAligns = {
	Center: "Center",
	Left: "Left",
	Right: "Right",
	Stretch: "Stretch",
};

class PopoverHorizontalAlign extends DataType {
	static isValid(value) {
		return !!PopoverHorizontalAligns[value];
	}
}

PopoverHorizontalAlign.generataTypeAcessors(PopoverHorizontalAligns);

export default PopoverHorizontalAlign;
