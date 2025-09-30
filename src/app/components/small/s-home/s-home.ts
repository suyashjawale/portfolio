import { Component, signal } from '@angular/core';
import { SNavbar } from "../s-navbar/s-navbar";
import { NgStyle } from '@angular/common';

interface projects {
	project_name: string,
	project_content: string[],
	tech_stack: string[],
	show: boolean
}

interface roles {
	role_name: string,
	role_start: Date,
	role_end: Date | string,
	tag_line: string,
	projects: projects[]
}

interface organization {
	org_name: string,
	joined_date: Date,
	end_date: Date | string,
	logo_name: string,
	roles: roles[]
}


@Component({
	selector: 'app-s-home',
	imports: [SNavbar, NgStyle],
	templateUrl: './s-home.html',
	styleUrl: './s-home.scss'
})
export class SHome {
	attritionDesc = signal<boolean>(false);

	organizations = signal<organization[]>([
		{
			org_name: "Tata Consultancy Services",
			joined_date: new Date("2021-01-21"),
			end_date: "Present",
			logo_name: "tcs_logo.png",
			roles: [
				{
					role_name: "Systems Engineer",
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
					role_name: "Systems Engineer",
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
}
