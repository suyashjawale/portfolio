import { Component } from '@angular/core';
import { SSidebar } from '../s-sidebar/s-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-s-landing',
	imports: [SSidebar, RouterOutlet],
	templateUrl: './s-landing.html',
	styleUrl: './s-landing.scss'
})
export class SLanding {

}
