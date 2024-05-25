import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./controls/navbar/navbar.component";
import { FooterComponent } from "./controls/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'Nike';
}
