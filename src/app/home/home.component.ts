import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Apod } from '../model/apod';
import { NasaService } from '../nasa.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  date: Date;
  public nasaImgObj: Apod | undefined;

  constructor(private nasaApi: NasaService) {
    this.date = new Date();
  }

  ngOnInit(): void {
    this.getNasaObj();
  }

  onSelect(): void {
    this.getNasaObj();
  }

  getNasaObj(): void {
    this.nasaApi.getNasaImage(this.date).subscribe((response: Apod) => {
      this.nasaImgObj = response;
    });
  }


}
