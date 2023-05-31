
export default function getById(items:any[],idToMatch?:string|number){
	return items.find(({id}) => id == idToMatch);
}