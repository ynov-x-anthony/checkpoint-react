type Macaron = {
	id: number;
	accessory_id: string;
	accessory: string;
	color1: string;
	color2: string;
	color3: string;
	name: string;
};

type Accessory = {
	id: number;
	name: string;
	slug: string;
};

type MacaronArray = Macaron[];
type AccessoryArray = Accessory[];
