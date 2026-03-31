import { Component } from '@angular/core';
import { Nav }          from './components/nav/nav';
import { Hero }         from './components/hero/hero';
import { About }        from './components/about/about';
import { Skills }       from './components/skills/skills';
import { Experience }   from './components/experience/experience';
// import { Education }    from './components/education/education';
import { Projects }     from './components/projects/projects';
import { Photography }  from './components/photography/photography';
import { Contact }      from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, About, Skills, Experience, Projects, Photography, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
