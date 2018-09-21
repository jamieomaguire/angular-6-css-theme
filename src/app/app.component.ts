import { Component, OnInit } from '@angular/core';
import cssVars from 'css-vars-ponyfill';
import { IBrandTheme } from './themes/models/IBrandTheme';
import { BrandThemeService } from './themes/brand-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Angular 6 CSS Themes';
  theme: IBrandTheme;
  errorMessage: string;
  // Temporary Fake brand ID 
  brandId: number;

  constructor(private brandThemeService: BrandThemeService) {
    this.brandId = 1;
  }

  changeColour(): void {
    // Overwrites the previous variable values
    // SCSS does not need to be recompiled to display the changes
    cssVars({
      variables: {
        '--primary-colour': 'red',
        '--secondary-colour': 'yellow',
        '--tertiary-colour': 'green',
        '--border-dark': 'purple',
        '--border-light': 'pink'
      }
    });
  }

  ngOnInit() {
    this.brandThemeService.getBrandTheme().subscribe(
      theme => {
        this.theme = theme;
        // Processes the css variables to work in IE
        // Override css custom property values
        cssVars({
          variables: {
            '--primary-colour': this.theme.primaryColour,
            '--secondary-colour': this.theme.secondaryColour,
            '--tertiary-colour': this.theme.tertiaryColour,
            '--border-dark': this.theme.borderDark,
            '--border-light': this.theme.borderLight
          }
        });
      },
      error => this.errorMessage = <any>error
    );


  }
}
