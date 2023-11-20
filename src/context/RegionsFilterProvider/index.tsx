import React, { createContext, useState, useEffect } from "react";
import { useSearchParamsState } from "../../hooks/useSearchParams";
import { IRegion, IRegionContext, IRegionFilterProvider } from "./types";

import RegionsService from "../../services/RegionsService";
import useResponseToast from "../../hooks/useResponseToast";
import useAuth from "../../hooks/useAuth";

export const RegionFilterContext = createContext<IRegionContext>({} as IRegionContext);

export const RegionFilterProvider = ({children}: IRegionFilterProvider) => {
	const [regionsList, setRegionsList] = useState<IRegion[]>([]);
	const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [regionFilters, setRegionFilters] = useSearchParamsState("regionFilters");
	const filtersApplied = regionFilters?.split(",") || null;
	const { handleToastResponse } = useResponseToast();
	const auth = useAuth();

	async function getRegions() {
		try {
			setIsLoading(true);
			const regionsService = new RegionsService(auth.token);
			const data = await regionsService.getRegionsList();

			if(data.status === 401) {
				handleToastResponse({status: data.status, message: data.message});

				return null;
			}

			setRegionsList(data);
		} finally {
			setIsLoading(false);
		}
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
			handleRemoveFilters,
			isLoading
		}}>
			{children}
		</RegionFilterContext.Provider>
	);
};
