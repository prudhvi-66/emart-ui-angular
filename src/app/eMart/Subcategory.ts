import { Category } from './Category';

export interface SubCategory{
    id: number,
    name: string,
    categoryId:number,
    brief: string,
    gstPercent: number
}