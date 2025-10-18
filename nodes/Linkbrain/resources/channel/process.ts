import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelProcess = {
	operation: ['process'],
	resource: ['channel'],
};

export const channelProcessDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		displayOptions: { show: showOnlyForChannelProcess },
		default: '',
		description: "The channel's ID to disconnect",
	},
];
