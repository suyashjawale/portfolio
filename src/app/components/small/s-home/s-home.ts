import { Component, signal } from '@angular/core';
import { SNavbar } from "../s-navbar/s-navbar";
import { NgClass, NgStyle } from '@angular/common';
import { organization } from '../../../interfaces/organization';
import { LinearEquilibrium } from "../../common/linear-equilibrium/linear-equilibrium";
import { TechStack } from '../../../interfaces/tech-stack';
import { experience_data } from '../../../data/experience_data';
import { college_data } from '../../../data/education_data';
import { techstack_data } from '../../../data/techstack_data';

@Component({
	selector: 'app-s-home',
	imports: [SNavbar, NgStyle, NgClass, LinearEquilibrium],
	templateUrl: './s-home.html',
	styleUrl: './s-home.scss'
})
export class SHome {
	switchAgeTab = signal<boolean>(false);
	organizations = signal<organization[]>(experience_data);
	college = signal<organization[]>(college_data);
	tech_stack = signal<TechStack[]>(techstack_data);
	age = signal<number[]>([0, 0, 0]);

	ngOnInit() {
		this.age.set(this.calculateDateDifference(new Date("1999-08-03"), new Date()));
	}

	getAge() {
		return `${this.age()[0]} Years ${this.age()[1]} Months ${this.age()[2]} Days`;
	}

	getExperience(date1: Date, date2: Date | string) {
		let date3 = new Date();
		let exp = this.calculateDateDifference(date1, date2 == 'Present' ? date3 : date2 as Date)
		return `${date1.toLocaleString('default', { month: 'short' })} ${date1.getFullYear()}  -  ${date2 == "Present" ? "Present" : date2.toLocaleString('default', { month: 'short' }) + " " + (date2 as Date).getFullYear()}  •  ${exp[0]} yrs ${exp[1]} mos`;
	}

	calculateDateDifference(date1: Date, date2: Date) {
		let years = date2.getFullYear() - date1.getFullYear();
		let months = date2.getMonth() - date1.getMonth();
		let days = date2.getDate() - date1.getDate();

		if (days < 0) {
			months--;
			let lastMonth = new Date(date2.getFullYear(), date2.getMonth(), 0);
			days = lastMonth.getDate() - date1.getDate() + date2.getDate();
		}

		if (months < 0) {
			years--;
			months += 12;
		}
		return [years, months, days];
	}

	openLink(link: string) {
		window.open(link);
	}
}
