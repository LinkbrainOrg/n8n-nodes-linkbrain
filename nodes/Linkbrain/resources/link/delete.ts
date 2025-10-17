import type { INodeProperties } from 'n8n-workflow';

const showOnlyForLinkDelete = {
	operation: ['delete'],
	resource: ['link'],
};

export const linkDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Link ID',
		name: 'linkId',
		type: 'string',
		displayOptions: { show: showOnlyForLinkDelete },
		default: '',
		description: "The link's ID to delete",
	},
];
