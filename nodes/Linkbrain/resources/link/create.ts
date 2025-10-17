import type { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties } from 'n8n-workflow';

const showOnlyForLinkCreate = {
	operation: ['create'],
	resource: ['link'],
};

export function transformTags(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const tags = this.getNodeParameter('tags', '') as string;

	if (tags) {
		requestOptions.body.tags = tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);
	}

	return Promise.resolve(requestOptions);
}

export const linkCreateDescription: INodeProperties[] = [
	{
		displayName: 'Url',
		name: 'url',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForLinkCreate,
		},
		description: 'Link Url. Must point to a supported domain.',
		routing: {
			send: {
				type: 'body',
				property: 'url',
			},
		},
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		default: '',
		required: false,
		displayOptions: {
			show: showOnlyForLinkCreate,
		},
		description: 'Comma separated list of Tags to assign to the created link',
		routing: {
			send: {
				preSend: [transformTags],
				type: 'body',
				property: 'tags',
			},
		},
	},
	{
		displayName: 'Allow Recycle',
		name: 'allowRecycle',
		type: 'boolean',
		default: true,
		required: false,
		displayOptions: {
			show: showOnlyForLinkCreate,
		},
		description: 'If a link exists pointing to the same Url, it will be re-used instead of creating a new one.',
		routing: {
			send: {
				type: 'body',
				property: 'allowRecycle',
			},
		},
	}
];
