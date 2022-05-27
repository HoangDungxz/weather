import httpService from '../httpService';
import url from '../urls';

const CityApi = {
	getCityByName: (cityName: string) => {
		const uri = url.citis;
		return httpService.GET(uri, '', {
			city_like: cityName,
			_limit: 7,
		});
	},
	getCurrentPosition: async () => {
		const pos: any = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
		return {
			long: pos.coords.longitude,
			lat: pos.coords.latitude,
		};
	},
};
export default CityApi;
