import React, { createContext, useState, useEffect } from "react";
import { useSearchParamsState } from "../../hooks/useSearchParams";
import { IRegion, IRegionContext, IRegionFilterProvider } from "./types";

import RegionsService from "../../services/RegionsService";

export const RegionFilterContext = createContext<IRegionContext>({} as IRegionContext);

export const RegionFilterProvider = ({children}: IRegionFilterProvider) => {
	const [regionsList, setRegionsList] = useState<IRegion[]>([]);
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [regionFilters, setRegionFilters] = useSearchParamsState("regionFilters");
	const filtersApplied = regionFilters?.split(",") || null;

	async function getRegions() {
		const regions = await RegionsService.getRegionsList();

		setRegionsList(regions);
	}

	function setFilterParams(selectedCheckboxes: string[]) {
		if (!selectedCheckboxes[0]) {
			setRegionFilters(null);

			return;
		}
		const regionsString = selectedCheckboxes.join(",");

		setRegionFilters(regionsString);
	}

	function handleRemoveFilters() {
		setSelectedRegions([]);
		setRegionFilters(null);
	}

	useEffect(() => {
		if (filtersApplied && !!filtersApplied[0]) {
			setSelectedRegions(filtersApplied);
		}
	}, [regionFilters]);

	useEffect(() => {
		getRegions();
	}, []);

	return (
		<RegionFilterContext.Provider value={{
			regionsList,
			selectedRegions,
			filtersApplied,
			setSelectedRegions,
			setFilterParams,
			handleRemoveFilters
		}}>
			{children}
		</RegionFilterContext.Provider>
	);
};
