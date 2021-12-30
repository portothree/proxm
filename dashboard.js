import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';

const colorscheme = {
	highlight: '#ffa500',
	background: '#000000',
	headline: '#ffffff',
};

const screen = blessed.screen({
	autoPadding: true,
	smartCSR: true,
	title: 'Proxm',
});

const clusterResourcesData = [
	{
		maxmem: 2147483648,
		node: 'porto',
		netin: 1936015,
		mem: 280092672,
		uptime: 25537,
		status: 'running',
		maxdisk: 34359738368,
		netout: 664658,
		maxcpu: 2,
		id: 'qemu/100',
		type: 'qemu',
		cpu: 0.000498836418156463,
		diskwrite: 149274624,
		template: 0,
		disk: 0,
		vmid: 100,
		name: 'Pi-hole',
		diskread: 217648830,
	},
	{
		netin: 2284416,
		status: 'running',
		uptime: 25533,
		mem: 2423177216,
		node: 'porto',
		maxmem: 4294967296,
		disk: 0,
		name: 'k8s-1',
		diskread: 1025881824,
		vmid: 101,
		diskwrite: 5636371456,
		cpu: 0.060359206596932,
		template: 0,
		id: 'qemu/101',
		type: 'qemu',
		maxcpu: 2,
		maxdisk: 68719476736,
		netout: 118156,
	},
	{
		disk: 103918727168,
		level: '',
		cpu: 0.0126578136332205,
		type: 'node',
		id: 'node/porto',
		maxcpu: 16,
		maxdisk: 249893834752,
		uptime: 25549,
		mem: 8649355264,
		status: 'online',
		node: 'porto',
		maxmem: 16719220736,
	},
	{
		type: 'storage',
		shared: 0,
		content: 'vztmpl,iso,rootdir,backup,images,snippets',
		id: 'storage/porto/local',
		node: 'porto',
		maxdisk: 249893834752,
		plugintype: 'dir',
		disk: 103918727168,
		status: 'available',
		storage: 'local',
	},
];

screen.key(['escape', 'q', 'C-c'], () => process.exit(0));

const Resource = ({
	left = 0,
	width = '30%',
	height = '30%',
	data: { id, status },
}) => (
	<box
		top="center"
		left={left}
		width={width}
		height={height}
		border={{ type: 'line' }}
		style={{
			fg: colorscheme.headline,
			bg: colorscheme.background,
			border: { fg: colorscheme.highlight },
			hover: { bg: colorscheme.headline },
		}}
	>
		{[`ID: ${id}`, `Status: ${status}`].join('\n')}
	</box>
);

const App = () => (
	<box
		top="center"
		left="center"
		width="80%"
		height="50%"
		border={{ type: 'line' }}
		style={{
			fg: colorscheme.headline,
			bg: colorscheme.background,
			border: { fg: colorscheme.highlight },
			hover: { bg: colorscheme.headline },
		}}
	>
		QEMU VMs
		{clusterResourcesData.map((resource, index) => (
			<Resource key={index} left={index * 50} data={resource} />
		))}
	</box>
);

render(<App />, screen);
