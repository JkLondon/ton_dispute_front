import {Button, List, Section} from "@xelene/tgui";
import react from "@vitejs/plugin-react";
import InputWithButton from "./components/InputWithButton";
import {Player, Controls} from "@lottiefiles/react-lottie-player";

export function SearchFragment() {

	return (
		<List
			className="p-10 w-300"
			style={{
				background: 'var(--tgui--secondary_bg_color)',
			}}
		>

			<Section>
				<div className="p-4 flex flex-col gap-2.5">
					<Player
						autoplay
						loop
						src="https://lottie.host/475236bc-b965-4dca-8c2d-543c909854ce/svidw6SP3C.json"
						style={{ height: '300px', width: '300px' }}
					>
						{/*<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />*/}
					</Player>
					<InputWithButton/>
					<Button> Done </Button>
				</div>
			</Section>
		</List>
	)
}

