import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getEvents() {
    return this.http.get('http://json.j/actions/jsonProcessor/getEntries')
  }

  getMapStyling() {
    return [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"color":"#ff0000"}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#6c8080"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"color":"#d98080"},{"hue":"#eeff00"},{"lightness":100},{"weight":1.5}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]}];
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


}
