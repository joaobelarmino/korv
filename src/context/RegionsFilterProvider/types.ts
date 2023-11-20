import { Dispatch, SetStateAction } from "react";

export interface IRegionFilterProvider {
    children: React.ReactNode
}

export interface IRegion {
	name: string,
	id: number,
}

export interface IRegionContext {
	regionsList: IRegion[],
	selectedRegions: string[],
	filtersApplied: string[] | null,
	setSelectedRegions: Dispatch<SetStateAction<string[]>>,
	handleRemoveFilters: () => void,
	setFilterParams: (selectedCheckboxes: string[]) => void,
	isLoading: boolean;
}
