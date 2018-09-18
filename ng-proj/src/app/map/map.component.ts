import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

  // Add this:
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(-15px)' }),
              stagger(
                  '50ms',
                  animate(
                      '550ms ease-out',
                      style({ opacity: 1, transform: 'translateY(0px)' })
                  )
              )
            ],
            { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])

  ]

})

export class MapComponent implements OnInit {

  events$: Object;

  constructor(
              private data: DataService,
              public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  p: number = 1;
  hightlightStatus: Array<boolean> = [];
  wrapperClass: 'split';
  geocoder:any;

  ngOnInit() {
    this.data.getEvents().subscribe(
        data => this.events$ = data
    );
  }

  public location:Location = {
    lat: 55.3781,
    lng: 3.4360,
    zoom: 5
  };

  private convertStringToNumber(value: string): number {
    return +value;
  }

  state: string = 'inactive';

  setClass(newClass) {
    this.wrapperClass = newClass;
  }

  updateOnMap(id) {
    this.location.lat = this.convertStringToNumber(this.events$[id].latitude);
    this.location.lng = this.convertStringToNumber(this.events$[id].longitude);
    this.location.zoom = 17;
  }

  @ViewChild(AgmMap) map: AgmMap;
}