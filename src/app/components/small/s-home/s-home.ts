import { Component, signal } from '@angular/core';
import { SNavbar } from "../s-navbar/s-navbar";
import { NgClass, NgStyle } from '@angular/common';
import { organization } from '../../../interfaces/organization';
import { LinearEquilibrium } from "../../common/linear-equilibrium/linear-equilibrium";
import { TechStack } from '../../../interfaces/tech-stack';


@Component({
	selector: 'app-s-home',
	imports: [SNavbar, NgStyle, NgClass, LinearEquilibrium],
	templateUrl: './s-home.html',
	styleUrl: './s-home.scss'
})
export class SHome {
	switchAgeTab = signal<boolean>(false);
	organizations = signal<organization[]>([
		{
			org_name: "Tata Consultancy Services",
			joined_date: new Date("2021-01-21"),
			end_date: "Present",
			logo_name: "tcs_logo.png",
			roles: [
				{
					role_name: "System Engineer",
					role_start: new Date("2023-04-01"),
					role_end: "Present",
					tag_line: "ss",
					projects: [
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false,
						},
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false
						},
					]
				},
				{
					role_name: "Assistant System Engineer",
					role_start: new Date("2023-04-21"),
					role_end: "Present",
					tag_line: "ss",
					projects: [
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false,
						},
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false
						},
					]
				},
				{
					role_name: "Graduate Trainee",
					role_start: new Date("2021-06-10"),
					role_end: new Date("2021-06-10"),
					tag_line: "Was allocated in TCS Internal Project. Which is e-learning platform named iEvolve",
					projects: [
						{
							project_name: "Attrition Analysis",
							project_content: ["Made a python analysis code which predicted when an employee will leave the company", "I used various algorithms from sklearn library to predict if he will leave on not", "Ended up using random forest since it gave accurate results. We had access to all data like experience, his learnings, domain , age, roles", "We had past data of employess who already left also with there reasons for leaving", " The project was good but the salary data was denied due to security restictions", "The project never went to production, since we were collaborating with HR Team. The development was done Jupyter notebook and we shared the notebook with the HR Team."],
							tech_stack: ["Python", "Jupyter notebook", "Sklearn"],
							show: false,
						},
						{
							project_name: "Learning and Recommendation Engine",
							project_content: ["This is an recommendation engine which recommends courses to users.", "Its takes a single course and recommends 10 other courses similar to it.", "We had data for around 50k courses. The description title, focus area, sub sub focus area, geography, language and many other things.", "I created a bag of words of all of this put it all in word2vec algorithm", "Now for each course the algo gives me numerical vectors now i put it all in a multidimesinal array and pass it in chunks to cosine similaity from sklearn", " So we get simailar courses", " Each course will have its own 49,999 neighbours lined up", "I pick the top closest", "And this is it", "Further i push this in postgres db though procedure for which the data is formatted as sql proc input", "Now the DB developer will write logic like for each employee he will generate recommendation based on unit,grade and past history and other non neccesaary things which are termed as business requirements.", " This is in production running great.", " Its deployed on linux and a bash script is triggered to run it"],
							tech_stack: ["Python", "Word2Vec", "Sklearn"],
							show: false
						},
						{
							project_name: "Linkedin Mapping",
							project_content: ["This is an recommendation engine which recommends courses to users.", "Its takes a single course and recommends 10 other courses similar to it.", "We had data for around 50k courses. The description title, focus area, sub sub focus area, geography, language and many other things.", "I created a bag of words of all of this put it all in word2vec algorithm", "Now for each course the algo gives me numerical vectors now i put it all in a multidimesinal array and pass it in chunks to cosine similaity from sklearn", " So we get simailar courses", " Each course will have its own 49,999 neighbours lined up", "I pick the top closest", "And this is it", "Further i push this in postgres db though procedure for which the data is formatted as sql proc input", "Now the DB developer will write logic like for each employee he will generate recommendation based on unit,grade and past history and other non neccesaary things which are termed as business requirements.", " This is in production running great.", " Its deployed on linux and a bash script is triggered to run it"],
							tech_stack: ["Python", "Word2Vec", "Sklearn"],
							show: false
						},
					]
				},
				{
					role_name: "Graduate Trainee (Ignite Batch B26)",
					role_start: new Date("2021-01-21"),
					role_end: new Date("2021-06-6"),
					tag_line: "Joined TCS as a fresher. Was trained in TCS Ignite Batch where they tought a lot of new things. Some of the projects are listed below.",
					projects: [
						{
							project_name: "Weather and News App",
							project_content: ["Made a webapp using flask which used Voice Recognition Showed news and weather", ". Which had two modules Weather forecast for next 10 days and current weather which was fetched from api. The app showed different reference images based on weather condition. Eg. Haze so haze image, sunny so sunny", "News app fetched news on the topic searched thorugh search bar. The search bar was made like google and had voice recongiton. The news also had a sentiment analysis which differentaited good bad and neutral news."],
							tech_stack: ["Python Flask", "HtML", "Jquery", "Apis for Data", "Python libraries for sentiment analysis"],
							show: false,
						},
						{
							project_name: "Generatives",
							project_content: ["This project was building about intricate design patterns", "using code and javascript and html canvas", "It used a bunch of alogoithms like fibonacci and other like bezier curve etc etc", "Its was handloom project which generated mesmerizing patterns for sarees. Tata Product which is named as Taneira"],
							tech_stack: ["Javascript", "HTML"],
							show: false
						},
					]
				}
			]
		}
	]);


	age = signal<number[]>([0,0,0]);
	college = signal<organization[]>([
		{
			org_name: "Savitribai Phule Pune University",
			joined_date: new Date("2017-06-15"),
			end_date: new Date("2022-09-10"),
			logo_name: "sppu_logo.png",
			roles: [
				{
					role_name: "Masters In Computer Science",
					role_start: new Date("2023-04-01"),
					role_end: "Present",
					tag_line: "ss",
					projects: [
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false,
						}
					]
				},
				{
					role_name: "Bachelor In Computer Science",
					role_start: new Date("2023-04-21"),
					role_end: "Present",
					tag_line: "ss",
					projects: [
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false,
						},
						{
							project_name: "Migration",
							project_content: ["hello", "world"],
							tech_stack: ["Java", "Angular"],
							show: false
						},
					]
				}
			]
		}
	]);

	tech_stack = signal<TechStack[]>([
		{
			stack_name: "Current Stack",
			tech_name : [
				"Java 17",
				"Angular 17 +"
			]
		},
		{
			stack_name: "Previous Stack",
			tech_name : [
				"Python",
				"Rust"
			]
		}
	]);

	ngOnInit(){
		this.age.set(this.calculateDateDifference(new Date("1999-08-03"),new Date()));
	}

	getAge(){
		return `${this.age()[0]} Years ${this.age()[1]} Months ${this.age()[2]} Days`;
	}

	getExperience(date1: Date, date2: Date | string) {
		let date3 = new Date();
		let exp = this.calculateDateDifference(date1, date2 == 'Present' ? date3 : date2 as Date)
		// Apr 2023 - Present &nbsp;·&nbsp; 4 yrs 8 mos
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

	openLink(link:string){
		window.open(link);
	}
}
