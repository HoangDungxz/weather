const coord = {
	lon: 0,
	lat: 0,
};
const weather = {
	description: '',
	icon: '',
	id: 0,
	main: '',
};
const main = {
	temp: 0,
	feels_like: 0,
	temp_min: 0,
	temp_max: 0,
	pressure: 0,
	humidity: 0,
	sea_level: 0,
	grnd_level: 0,
};

const wind = {
	speed: 0,
	deg: 0,
	gust: 0,
};

const clouds = {
	all: 0,
};

const sys1 = {
	country: '',
	id: 0,
	sunrise: 0,
	sunset: 0,
	type: '',
};

export const Sys = {
	coord: coord,
	weather: [weather],
	base: '',
	main: main,
	visibility: 0,
	wind: wind,
	clouds: clouds,
	dt: 0,
	sys: sys1,
	timezone: 0,
	id: 0,
	name: '',
	cod: 0,
};

// WeatherData

const temp = {
	day: 0,
	eve: 0,
	max: 0,
	min: 0,
	morn: 0,
	night: 0,
};

const weatherDataContent = {
	id: 0,
	main: '',
	description: '',
	icon: '',
};
export const WeatherData = {
	dt: 0,
	sunrise: 0,
	sunset: 0,
	temp: temp,
	feels_like: 0,
	pressure: 0,
	humidity: 0,
	dew_point: 0,
	uvi: 0,
	clouds: 0,
	visibility: 0,
	wind_speed: 0,
	wind_deg: 0,
	weather: [weatherDataContent],
	pop: 0,
};

// Weather Responser

export const current = {
	current: {
		...WeatherData,
		temp: 0,
	},
	sys: Sys,
};

export const daily = {
	daily: [WeatherData],
	sys: Sys,
};

export const WeatherRespone = {
	current: { ...WeatherData, temp: 0 },
	daily: [WeatherData],
	hourly: [WeatherData],
	sys: Sys,
};
