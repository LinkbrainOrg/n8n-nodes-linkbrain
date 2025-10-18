import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChannelGet = {
	operation: ['get'],
	resource: ['channel'],
};

export const channelGetDescription: INodeProperties[] = [
	{
		displayName: 'Channel ID',
		name: 'channelId',
		type: 'string',
		displayOptions: { show: showOnlyForChannelGet },
		default: '',
		description: "The channel's ID to retrieve",
	},
];
