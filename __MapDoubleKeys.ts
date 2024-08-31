export class MapDoubleKeys {
	private map;
	constructor() {
		this.map = new Map<string, number>();
	}
	public set = (x: number, y: number, val: number) => {
		let str = x < y ? x + "-" + y : y + "-" + x;
		this.map.set(str, val);
	};
	public get = (x: number, y: number) => {
		let str = x < y ? x + "-" + y : y + "-" + x;
		return this.map.get(str);
	};
}
