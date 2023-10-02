import { useEffect } from 'react';
import OvenPlayer from 'ovenplayer';

export default function App() {
	useEffect(() => {
		/* Loop 64 tims */
		Array.from(Array(64).keys()).forEach((_, index) => {
			const test = OvenPlayer.create(`player${index}`, {
				autoStart: true,
				autoFallback: true,
				mute: false,
				sources: [
					{
						type: 'webrtc',
						file: 'ws://10.100.100.3:3333/app/test_ptz_cam',
					},
				],
			});
			test.play();
		});
	}, []);
	return (
		<div>
			<MyComponent />
		</div>
	);
}

export const MyComponent = () => {
	return (
		<div className='grid grid-cols-8'>
			{/* Loop 64 times */}
			{Array.from(Array(64).keys()).map((_, index) => {
				return (
					<div key={index} className='cols-span-1 border-2 border-green-400'>
						<div id={`player${index}`}></div>
					</div>
				);
			})}
			{/* <div className='w-[500px]'>
				<div id='player1'></div>
			</div> */}
		</div>
	);
};
