import type { INodeProperties } from 'n8n-workflow';
import { linkCreateDescription } from './create';
import { linkGetDescription } from './get';
import { linkDeleteDescription } from './delete';

const showOnlyForLinks = {
	resource: ['link'],
};

const showOnlyForLinkIndex = {
	resource: ['link'],
	operation: ['getAll'],
};

export const linkDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForLinks,
		},
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get links',
				description: 'Get a page of Links',
				routing: {
					request: {
						method: 'GET',
						url: '/links',
						qs: {
							page: '={{$parameter["page"]}}',
							pageSize: '={{$parameter["pageSize"]}}',
						},
					},
					output: {
						postReceive: [
							{
								type: 'rootProperty',
								properties: {
									property: 'rows',
								},
							},
						],
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a link',
				description: 'Get the data of a single Link',
				routing: {
					request: {
						method: 'GET',
						url: '=/links/{{$parameter.linkId}}',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new link',
				description: 'Create a new Link',
				routing: {
					request: {
						method: 'POST',
						url: '/links',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a link',
				description: 'Delete a Link',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/links/{{$parameter.linkId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	{
		displayName: 'Page Number',
		name: 'page',
		type: 'number',
		default: 0,
		displayOptions: {
			show: showOnlyForLinkIndex,
		},
		description: 'Page to return, starting from 0',
	},
	{
		displayName: 'Page Size',
		name: 'pageSize',
		type: 'number',
		default: 50,
		typeOptions: {
			minValue: 1,
			maxValue: 50,
		},
		displayOptions: {
			show: showOnlyForLinkIndex,
		},
		description: 'Number of results to return per page',
	},
	...linkGetDescription,
	...linkCreateDescription,
	...linkDeleteDescription,
];
