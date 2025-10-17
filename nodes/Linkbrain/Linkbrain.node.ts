import { NodeConnectionType, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { linkDescription } from './resources/link';

export class Linkbrain implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Linkbrain',
		name: 'linkbrain',
		icon: "file:linkbrain.svg",
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Linkbrain API',
		defaults: {
			name: 'Linkbrain',
		},
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
						name: 'Link',
						value: 'link',
					},
				],
				default: 'link',
			},
			...linkDescription
		],
		// @ts-expect-error: Unrecognized property usableAsTool, yet n8n-lint insists on its presence
		usableAsTool: true,
	};
}
