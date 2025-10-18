import type { INodeProperties } from 'n8n-workflow';
import { channelGetDescription } from './get';
import { channelDeleteDescription } from './delete';
import { channelProcessDescription } from './process';

const showOnlyForChannels = {
	resource: ['channel'],
};

// const showOnlyForChannelIndex = {
// 	resource: ['channel'],
// 	operation: ['index'],
// };

export const channelDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChannels,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get channels',
				description: 'Get many Channels',
				routing: {
					request: {
						method: 'GET',
						url: '/channels',
					}
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a channel',
				description: 'Get the data of a single Channel',
				routing: {
					request: {
						method: 'GET',
						url: '=/channels/{{$parameter.channelId}}',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Disconnect a channel',
				description: 'Disconnect a Channel',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/channels/{{$parameter.channelId}}',
					},
				},
			},
			{
				name: 'Process',
				value: 'process',
				action: 'Process a channel',
				description: 'Queues the channel for an asynchronous update of all of its posts',
				routing: {
					request: {
						method: 'POST',
						url: '=/channels/{{$parameter.channelId}}/process',
					},
				},
			},
		],
		default: 'getAll',
	},
	...channelGetDescription,
	...channelDeleteDescription,
	...channelProcessDescription,
];
