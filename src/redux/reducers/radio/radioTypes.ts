import { StationProps } from '../../../stationsObject';
export const TOGGLE_STATIONS_LOADING = 'TOGGLE_STATIONS_LOADING';
export const SET_STATION = 'SET_STATION';
export const GET_STATIONS = 'GET_STATIONS';
export const TOGGLE_STATION_LOADING = 'TOGGLE_STATION_LOADING';

interface ToggleLoadingStationsAction {
  type: typeof TOGGLE_STATIONS_LOADING;
}

interface SetStationAction {
  type: typeof SET_STATION;
  payload: number;
}
interface GetStationsAction {
  type: typeof GET_STATIONS;
  payload: Array<StationProps>;
}

interface ToggleStationLoadingAction {
  type: typeof TOGGLE_STATION_LOADING;
}

export interface RadioState {
  isLoading: boolean;
  stations: Array<StationProps> | [];
  currentStationIndex: number | null;
  currentStation: string | null;
  stationLoading: boolean;
}

export type RadioActionTypes =
  | ToggleLoadingStationsAction
  | SetStationAction
  | GetStationsAction
  | ToggleStationLoadingAction;
