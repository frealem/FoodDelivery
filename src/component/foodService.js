import { sampleData, sampleTags } from "./food";

export const getAll=async()=>sampleData;

export const search=async searchTerm=>
sampleData.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));
export const getAllTags=async () =>sampleTags;
//to be got by tag
export const getAllTag=async tag=>{
    if (tag==='All') return getAll();
    return sampleData.filter(item=>item.tags?.includes(tag));
}
//detail about each clicked food
export const getById=async foodId=>
sampleData.find(item=>item.id===foodId);