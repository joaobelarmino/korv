import { useSearchParams } from "react-router-dom";

export function useSearchParamsState(
	searchParamName: string
): readonly [
  searchParamsState: string | null,
  setSearchParamsState: (newState: string | null) => void
] {
	const [searchParams, setSearchParams] = useSearchParams();

	const searchParamsState = searchParams.get(searchParamName);

	const setSearchParamsState = (newState: string | null) => {
		if(!newState) {
			setSearchParams();
		} else {
			const nextSearchParams = new URLSearchParams(searchParams.toString());

			nextSearchParams.set(searchParamName, newState);
			setSearchParams(nextSearchParams, {replace: true});
		}
	};

	return [searchParamsState, setSearchParamsState];
}
