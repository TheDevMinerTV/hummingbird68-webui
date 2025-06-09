import { useCallback, useState } from "react";

export const VENDOR_ID = 0x1c4f;
export const PRODUCT_ID = 0xee88;

export const RGBEffectID = {
	None: -1,
	Waves: 0,
	Circles: 1,
	Bubbles: 2,
	Sine: 3,
	Blocks: 4,
	Drop: 5,
	Spiral: 6,
	Star: 7,
	Colorwheel: 8, // Supernova
	"3/4 Circle": 9,
	"1/2 Circle": 10,
	Flower: 11,
	Eraser: 12,
	Ball: 13,
};
type RGBEffectID = (typeof RGBEffectID)[keyof typeof RGBEffectID];

type RGBEffect = {
	effectID: RGBEffectID;
	brightness: 0 | 1 | 2 | 3 | 4;
	speed: 0 | 1 | 2 | 3 | 4;
	reverse: boolean;
	sleepTime: number;
};

export class Hummingbird68 {
	#hid: HIDDevice;

	static async open(hidDevice: HIDDevice) {
		await hidDevice.open();

		const keyboard = new Hummingbird68(hidDevice);
		await keyboard.init();

		return keyboard;
	}

	private constructor(hidDevice: HIDDevice) {
		this.#hid = hidDevice;
		this.#hid.oninputreport = (evt) => {
			console.debug(evt);
			this.#handleDeviceResponse(evt.data);
		};
	}

	private async init() {
		// TODO
		await this.#hid.sendReport(
			0,
			new Uint8Array([
				0x5c,
				0x02,
				0x01,
				0x93,
				...new Array(64 - 4).fill(0xff),
			]),
		);
	}

	get #number() {
		return (
			Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) &
			0x00000000ffffffff
		);
	}

	#handleDeviceResponse(view: DataView<ArrayBufferLike>) {
		function dataViewToHexString(dataView: DataView) {
			if (!(dataView instanceof DataView)) {
				throw new Error("Input must be a DataView instance.");
			}

			let hexString = "";
			for (let i = 0; i < dataView.byteLength; i++) {
				const byte = dataView.getUint8(i); // Get the byte at the current offset
				hexString += byte.toString(16).padStart(2, "0"); // Convert to hex and pad with leading zero if needed
			}
			return hexString;
		}

		console.log(dataViewToHexString(view));
	}

	async changeRGB(effect: RGBEffect) {
		console.log("sending", effect);
		await this.#hid.sendReport(
			0,
			new Uint8Array([
				0x5c,
				0x2c,
				0x18,
				0xd4,
				0x1,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0xff,
				0xff,
				0x0,
				0xff,
				0x0,
				0xff,
				0x0,
				0x7f,
				0x7f,
				0xff,
				0xff,
				0x0,
				0x0,
				0xff,
				0x7f,
				0x0,
				0x7f,
				0xff,
				0x7f,
				0x7f,
				0x0,
				0xff,
				0x7f,
				0x7f,
				0x7f,
				0xff,
				0x0,
				0x0,
				0x0,
				0x0,
				effect.reverse ? 0xc3 : 0xc1,
				effect.brightness,
				effect.effectID,
				effect.speed,
				Math.round(effect.sleepTime),
				0xff,
				0xff,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
				0x0,
			]),
		);
	}

	close() {
		return this.#hid.close();
	}
}

export function useDevice() {
	const [device, setDevice] = useState<Hummingbird68>();

	const prompt = useCallback(
		async (vendorID: number, productID: number) => {
			await device?.close();
			setDevice(undefined);

			const devices = await window.navigator.hid.requestDevice({
				filters: [{ vendorId: vendorID, productId: productID }],
			});

			if (devices.length === 0) {
				throw new Error("didnt get a device");
			}

			const newDevice = devices[0];

			const kochi = await Hummingbird68.open(newDevice);

			setDevice(kochi);
		},
		[device],
	);

	const disconnect = useCallback(async () => {
		await device?.close();
		setDevice(undefined);
	}, [device]);

	return { device, connected: !!device, prompt, disconnect };
}
