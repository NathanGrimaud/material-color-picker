export interface MaterialColorPickerConfig {
  elementName: string;
  createIcon: boolean;
  defaultColor: string;
}
export default function MaterialColorPicker(config: MaterialColorPickerConfig): EventEmitter;
