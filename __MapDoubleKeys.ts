export class MapDoubleKeys<T> {
	private map;
	constructor() {
		this.map = new Map<string, T>();
	}
	public set = (x: number, y: number, val: T) => {
		let str = x < y ? x + "-" + y : y + "-" + x;
		this.map.set(str, val);
	};
	public get = (x: number, y: number) => {
		let str = x < y ? x + "-" + y : y + "-" + x;
		return this.map.get(str);
	};
}
