import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelDelete = {
	operation: ['delete'],
	resource: ['channel'],
};

export const channelDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		displayOptions: { show: showOnlyForChannelDelete },
		default: '',
		description: "The channel's ID to disconnect",
	},
];
