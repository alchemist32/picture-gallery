import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../../../domain/models/picture.model';

@Component({
  selector: 'gallery-picture',
  standalone: true,
  imports: [],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})

export class PictureComponent implements OnInit{
  @Input() picture: Picture;

  public url: string;

  constructor() {
    this.url = '';
  }

  ngOnInit(): void {
    this.url = this.picture.urls.small;
  }
}
