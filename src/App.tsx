import { init, loadRemote, registerRemotes } from '@module-federation/runtime';
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const loadMFBottom = async () => {
	registerRemotes([{entry: 'https://unpkg.yy.com/@friend/mf-bottom@1.0.0-emp-fastmode.1/output/emp.js', name: 'MFBottom'}])
	const ss = await loadRemote('MFBottom/IndexCom');
    console.info('loadMFBottom',ss)
}

const loadPCYY = async () => {
	registerRemotes([{entry: 'https://unpkg.yy.com/@webbase/yybase@1.30.1/dist/emp.js', name: 'pcyyBase'}])
    const s1 = await loadRemote('pcyyBase/store/Provider')
    const s2 = await loadRemote('pcyyBase/components/BottomBar/ChannelBottomBar')
    const s3 = await loadRemote('pcyyBase/components/ChannelTree')
    const s4 = await loadRemote('pcyyBase/components/MicrophonePanel')
	console.info('loadPCYY #s1', s1)
    console.info('loadPCYY #s2', s2)
    console.info('loadPCYY #s3', s3)
    console.info('loadPCYY #s4', s4)
}
function App() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log(`use effect`)
		init({
			name: 'empAdepterProject',remotes: []
		})
		;(async () => {
			loadMFBottom()
			loadPCYY()
		})()
		
	}, [])

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React + TypeScript</h1>
			<div className="card">
				<button type="button" onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
		</div>
	);
}

export default App;
