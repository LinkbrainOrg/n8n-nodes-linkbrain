import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LinkbrainApi implements ICredentialType {
	name = 'linkbrainApi';

	displayName = 'Linkbrain API';
	icon = "node:n8n-nodes-linkbrain" as Icon;

	// Link to your community node's README
	documentationUrl = 'https://github.com/LinkbrainOrg/n8n-nodes-linkbrain?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://app.linkbrain.net/api/v1',
			url: '/links',
		},
	};
}
