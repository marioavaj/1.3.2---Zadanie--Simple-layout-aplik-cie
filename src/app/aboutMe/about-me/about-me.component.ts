import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  @Input() message = 'Rád sa učím nové veci a rád objavujem ako veci fungujú. Vývoj softvéru ,konkrétne Front-End, sa stal mojou záľubou, v ktorej môžem naplno prejaviť svoje kreatívne cítenie. Myslím si, že práve spojenie kreativity a nadchnutia sa pre niečo, nás poháňa vpred.'

  ngOnInit(): void {
  }
}
