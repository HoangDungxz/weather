const windySpeedLevel = (speed: number) => {
	switch (true) {
		case speed <= 1: {
			return 'Calm';
		}
		case speed <= 3: {
			return 'Light Air';
		}
		case speed <= 7: {
			return 'Light Breeze';
		}
		case speed <= 12: {
			return 'Gentle Breeze';
		}
		case speed <= 18: {
			return 'Moderate Breeze';
		}
		case speed <= 24: {
			return 'Fresh Breeze';
		}
		case speed <= 31: {
			return 'Strong Breeze';
		}
		case speed <= 38: {
			return 'Near Gale';
		}
		case speed <= 46: {
			return 'Gale';
		}
		case speed <= 54: {
			return 'Strong Gale';
		}
		case speed <= 63: {
			return 'Whole Gale';
		}
		case speed <= 75: {
			return 'Storm Force';
		}
		case speed > 75: {
			return 'Hurricane Force';
		}
		default: {
			return '';
		}
	}
};

export default windySpeedLevel;
