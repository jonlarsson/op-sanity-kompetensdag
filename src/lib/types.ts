export interface Speaker {
	name: string,
	title: string,
	imageUrl: string
}

export interface Talk {
	_id: string,
	title: string,
	time: Date,
	speaker: string,
}

export interface Day {
	_id: string,
	title: string,
	description: string,
	date: Date,
	talks: Talk[],
	speakers: Speaker[]
}

export interface Conference {
	_id: string;
	title: string;
	description: string;
	location: string;
	venue: string;
	startDate: Date;
	endDate: Date;
	talkCount: number;
	speakerCount: number;
	days: Day[]
}