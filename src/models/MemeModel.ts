export default class MemeModel {
  id?: number;
  name?: string;
  url?: string;
  width?: number;
  height?: number;
  box_count?: number;

  constructor(
    id: number,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number
  ) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.width = width;
    this.height = height;
    this.box_count = box_count;
  }
}
