interface EventDetail {
	message: string;
	public_profile: string;
}

export interface EventMap {
	[key: string]: EventDetail[];
}
