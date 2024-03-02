import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutmeComponent } from "./components/aboutme/aboutme.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    imports: [RouterOutlet, NavbarComponent, AboutmeComponent, ExperienceComponent, ProjectsComponent, FooterComponent, SkillsComponent]
})
export class AppComponent {
  title = 'Portafolio-guillermo';
}
