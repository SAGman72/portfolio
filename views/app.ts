import { Router } from 'aurelia-router';

export class App {

	router:Router;

  configureRouter(config, router:Router){

		config.title = 'Sverre Andre Grand';

		config.map([
      { route: ['','about'],	moduleId: './about',  nav: true, title:'About' },
			{ route: 'resume',			moduleId: './resume',   nav: true },
			{ route: 'projects',    moduleId: './projects',	nav: true },
			{ route: 'skills',      moduleId: './skills',   nav: true }
    ]);

    this.router = router;
  }
}
