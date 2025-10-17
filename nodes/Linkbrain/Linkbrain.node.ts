import { NodeConnectionType, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userDescription } from './resources/user';
import { companyDescription } from './resources/company';

export class Linkbrain implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Linkbrain',
		name: 'linkbrain',
		icon: { light: 'file:linkbrain.svg', dark: 'file:linkbrain.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Linkbrain API',
		defaults: {
			name: 'Linkbrain',
		},
		usableAsTool: true,
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [{ name: 'linkbrainApi', required: true }],
		requestDefaults: {
			baseURL: 'https://app.linkbrain.net/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Company',
						value: 'company',
					},
				],
				default: 'user',
			},
			...userDescription,
			...companyDescription,
		],
	};
}
