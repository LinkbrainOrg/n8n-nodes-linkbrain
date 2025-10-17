import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLinkGet = {
	operation: ['get'],
	resource: ['link'],
};

export const linkGetDescription: INodeProperties[] = [
	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'string',
		displayOptions: { show: showOnlyForLinkGet },
		default: '',
		description: "The link's ID to retrieve",
	},
];
