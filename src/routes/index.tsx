import { RGBSettings } from "@/components/RGBSettings.tsx";
import { Button } from "@/components/ui/button.tsx";
import { PRODUCT_ID, VENDOR_ID, useDevice } from "@/hooks/useDevice.ts";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { device, connected, prompt, disconnect } = useDevice();

	return (
		<div className="flex flex-col gap-2 px-4">
			<div className="flex gap-2 items-center">
				<span>Status: {connected ? "Connected" : "Disconnected"}</span>
				{connected ? (
					<Button
						onClick={(e) => {
							e.preventDefault();
							disconnect();
						}}
					>
						Disconnect
					</Button>
				) : (
					<Button
						onClick={(e) => {
							e.preventDefault();
							prompt(VENDOR_ID, PRODUCT_ID);
						}}
					>
						Connect
					</Button>
				)}
			</div>

			<RGBSettings device={device} />

			{/* <section>
				<h2 className="text-2xl font-bold">Remap</h2>

				<div className="space-y-1 max-w-[1024px]">
					<div className="grid gap-1 grid-cols-[repeat(13,1fr)_1.75fr_1fr]">
						<Button>Esc</Button>
						<Button>1</Button>
						<Button>2</Button>
						<Button>3</Button>
						<Button>4</Button>
						<Button>5</Button>
						<Button>6</Button>
						<Button>7</Button>
						<Button>8</Button>
						<Button>9</Button>
						<Button>0</Button>
						<Button>_-</Button>
						<Button>=+</Button>
						<Button>Backspace</Button>
						<Button>Ins</Button>
					</div>
					<div className="grid gap-1 grid-cols-[1.25fr_repeat(12,1fr)_1.5fr_1fr]">
						<Button>Tab</Button>
						<Button>Q</Button>
						<Button>W</Button>
						<Button>E</Button>
						<Button>R</Button>
						<Button>T</Button>
						<Button>Y</Button>
						<Button>U</Button>
						<Button>I</Button>
						<Button>O</Button>
						<Button>P</Button>
						<Button>{"{"}</Button>
						<Button>{"}"}</Button>
						<Button>\|</Button>
						<Button>Del</Button>
					</div>
					<div className="grid gap-1 grid-cols-[1.5fr_repeat(11,1fr)_2fr_1fr]">
						<Button>CapsLock</Button>
						<Button>A</Button>
						<Button>S</Button>
						<Button>D</Button>
						<Button>F</Button>
						<Button>G</Button>
						<Button>H</Button>
						<Button>J</Button>
						<Button>K</Button>
						<Button>L</Button>
						<Button>;:</Button>
						<Button>'"</Button>
						<Button>Enter</Button>
						<Button>PgUp</Button>
					</div>
					<div className="grid gap-1 grid-cols-[2fr_repeat(10,1fr)_1.5fr_1fr_1fr]">
						<Button>Left Shift</Button>
						<Button>Z</Button>
						<Button>X</Button>
						<Button>C</Button>
						<Button>V</Button>
						<Button>B</Button>
						<Button>N</Button>
						<Button>M</Button>
						<Button>{"<"}</Button>
						<Button>{">"}</Button>
						<Button>/</Button>
						<Button>Right Shift</Button>
						<Button>ArrUp</Button>
						<Button>PgDown</Button>
					</div>
					<div className="grid gap-1 grid-cols-[repeat(3,1.25fr)_6fr_repeat(6,1fr)]">
						<Button>Left Ctrl</Button>
						<Button>Left GUI</Button>
						<Button>Left Alt</Button>
						<Button>Space</Button>
						<Button>Right Alt</Button>
						<Button>Fn</Button>
						<Button>Right Ctrl</Button>
						<Button>ArrLeft</Button>
						<Button>ArrDown</Button>
						<Button>ArrRight</Button>
					</div>
				</div>
			</section> */}
		</div>
	);
}
