import { Button } from "@/components/ui/button.tsx";
import { Slider } from "@/components/ui/slider.tsx";
import { Toggle } from "@/components/ui/toggle.tsx";
import { type Hummingbird68, RGBEffectID } from "@/hooks/useDevice.ts";
import { useState } from "react";

export function RGBSettings({ device }: { device: Hummingbird68 | undefined }) {
	const [reverseEffect, setReverseEffect] = useState(false);
	const [sleepTime, setSleepTime] = useState(1);
	const [brightness, setBrightness] = useState<0 | 1 | 2 | 3 | 4>(3);
	const [speed, setSpeed] = useState<0 | 1 | 2 | 3 | 4>(3);

	return (
		<section>
			<h2 className="text-2xl font-bold">RGB Effects</h2>
			<div className="flex gap-2 w-full">
				<div className="grid grid-cols-3 gap-2 w-fit">
					{Object.entries(RGBEffectID).map(([key, effectID]) => {
						return (
							<Button
								onClick={(e) => {
									e.preventDefault();
									device?.changeRGB({
										effectID,
										brightness,
										speed,
										reverse: reverseEffect,
										sleepTime,
									});
								}}
								key={effectID}
								disabled={!device}
							>
								{key}
							</Button>
						);
					})}
				</div>
				<div className="flex-1">
					<Toggle
						pressed={reverseEffect}
						onPressedChange={(reversed) =>
							setReverseEffect(reversed)
						}
					>
						Reverse
					</Toggle>
					<div className="flex gap-2 items-center">
						<span>Speed</span>
						<Slider
							defaultValue={[3]}
							min={0}
							step={1}
							max={4}
							onValueChange={([v]) =>
								setSpeed(v as 0 | 1 | 2 | 3 | 4)
							}
						/>
						<span>{speed}</span>
					</div>
					<div className="flex gap-2 items-center">
						<span>Brightness</span>
						<Slider
							defaultValue={[3]}
							min={0}
							step={1}
							max={4}
							onValueChange={([v]) =>
								setBrightness(v as 0 | 1 | 2 | 3 | 4)
							}
						/>
						<span>{brightness}</span>
					</div>
					<div className="flex gap-2 items-center">
						<span>Sleep time</span>
						<Slider
							defaultValue={[1]}
							min={1}
							step={1}
							max={60}
							onValueChange={([v]) => setSleepTime(v)}
						/>
						<span>{sleepTime} minutes</span>
					</div>
				</div>
			</div>
		</section>
	);
}
