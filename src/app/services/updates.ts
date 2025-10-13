import { computed, Injectable, Signal, signal } from '@angular/core';
import { Highlights } from '../interfaces/highlight';
import { birthday_data } from '../data/birthday_data';
import { EventMap } from '../interfaces/event-map';

@Injectable({
	providedIn: 'root'
})
export class Updates {

	birthDay = signal<EventMap>(birthday_data)

	private getTodayKey(): string {
		const today = new Date();
		return `${today.getDate()}-${today.getMonth() + 1}`;
	}

	public todaysBirthdayHighlights: Signal<Highlights[]> = computed(() => {
		const todayKey = this.getTodayKey();
		const allEvents = this.birthDay();
		const todaysEvents = allEvents[todayKey] || [];

		return todaysEvents.map((obj) => ({
			hasImage: false,
			content: obj.message
		} as unknown as Highlights));
	});
}
