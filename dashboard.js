import React, { Component } from 'react';
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

const qemuOverviewData = [
	{
		netout: 5253293,
		name: 'Pi-hole',
		maxmem: 2147483648,
		mem: 326185963,
		netin: 15046780,
		cpus: 2,
		uptime: 216958,
		disk: 0,
		maxdisk: 34359738368,
		status: 'running',
		vmid: 100,
		diskread: 0,
		pid: 2294,
		diskwrite: 0,
		cpu: 0.00088086718505653,
	},
	{
		disk: 0,
		maxdisk: 68719476736,
		uptime: 86603,
		balloon_min: 2147483648,
		netin: 5121438,
		cpus: 2,
		maxmem: 4294967296,
		mem: 2509918749,
		netout: 298760,
		name: 'k8s-1',
		shares: 1000,
		cpu: 0.0603732816834898,
		pid: 1324639,
		diskwrite: 0,
		diskread: 0,
		vmid: 101,
		status: 'running',
	},
];

screen.key(['escape', 'q', 'C-c'], (ch, key) => {
	return process.exit(0);
});

const App = () => (
	<box
		top="center"
		left="center"
		width="50%"
		height="50%"
		border={{ type: 'line' }}
		style={{
			fg: colorscheme.headline,
			bg: colorscheme.background,
			border: { fg: colorscheme.highlight },
			hover: { bg: colorscheme.headline },
		}}
	>
		QEMU VM index
	</box>
);

render(<App />, screen);
