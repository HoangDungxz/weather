import { Sys } from './Sys';
import { WeatherData } from './WeatherData';

export interface WeatherRespone {
	current: WeatherData;
	daily: WeatherData[];
	hourly: WeatherData[];
	sys: Sys;
}
