import { IExecuteSingleFunctions, INodeExecutionData, IN8nHttpFullResponse } from "n8n-workflow";
export async function UsersPostReceiveAction(
	this: IExecuteSingleFunctions, items: INodeExecutionData[], response: IN8nHttpFullResponse
): Promise<INodeExecutionData[]> {
	const newItems: INodeExecutionData[] = [];

	items.forEach((item, index) => {
		const json = item.json;
		if (json && json.users) {
			(json.users as [number, string][]).forEach(([id, name]) => {
				newItems.push({json: { id, name }})
			});
		}
	});

	return newItems;
}
