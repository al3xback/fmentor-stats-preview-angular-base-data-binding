import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	project = {
		name: '',
		card: {
			title: 'Get <mark>insights</mark> that help your business grow.',
			description:
				'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.',
			imageUrl: '/assets/images/meeting.jpg',
			statuses: [
				{
					label: 'Companies',
					amount: '10K+'
				},
				{
					label: 'Templates',
					amount: '314'
				},
				{
					label: 'Queries',
					amount: '12M+'
				}
			]
		},
		creator: {
			name: 'Frontend Mentor',
			link: 'https://www.frontendmentor.io?ref=challenge'
		},
		coder: {
			name: 'al3xback',
			gitHubLink: 'https://github.com/al3xback'
		}
	};
}
