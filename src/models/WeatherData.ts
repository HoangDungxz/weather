export interface WeatherData {
	dt?: number;
	sunrise?: number;
	sunset?: number;
	temp?: any;
	feels_like?: number;
	pressure?: number;
	humidity?: number;
	dew_point?: number;
	uvi?: number;
	clouds?: number;
	visibility?: number;
	wind_speed?: number;
	wind_deg?: number;
	weather?: weatherDataContent[];
	pop?: number;
}

interface temp {
	day: number;
	eve: number;
	max: number;
	min: number;
	morn: number;
	night: number;
}

interface weatherDataContent {
	id?: number;
	main?: string;
	description?: string;
	icon?: string;
}

export interface WeatherDataCurrent extends WeatherData {}
