import OvenPlayer from 'ovenplayer';
import { useEffect } from 'react';

export default function App() {
	useEffect(() => {
		OvenPlayer.create('player1', {
			autoStart: true,
			autoFallback: true,
			mute: false,
			sources: [
				{
					type: 'webrtc',
					file: 'ws://your.path.here',
				},
			],
		});

		OvenPlayer.create('player2', {
			autoStart: true,
			autoFallback: true,
			mute: false,
			sources: [
				{
					type: 'webrtc',
					file: 'ws://your.path.here',
				},
			],
		});

		// console.log('videoSrc', videoSrc);
		// videoSrc.play();
	}, []);
	return (
		<div>
			<MyComponent />
		</div>
	);
}

export const MyComponent = () => {
	return (
		<div className='flex'>
			<div className='w-[500px]'>
				<div id='player1'></div>
			</div>
			<div className='w-[500px]'>
				<div id='player2'></div>
			</div>
		</div>
	);
};
