import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLinkCreate = {
	operation: ['create'],
	resource: ['link'],
};

export const linkCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForLinkCreate,
		},
		description: 'The name of the user',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
