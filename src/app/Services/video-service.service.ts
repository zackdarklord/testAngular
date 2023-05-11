import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../model/Video';
@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  api: string = 'http://localhost:3000/video';
  constructor(private HttpClient: HttpClient) { }
  getVideos(): Observable<Video[]> {
    return this.HttpClient.get<Video[]>(this.api);
  }
  getVideobyId(Id: number): Observable<Video> {
    return this.HttpClient.get<Video>(this.api + '/' + Id);
  }
 
  addVideo(p: Video): Observable<Video> {
    return this.HttpClient.post<Video>(this.api, p);
  }
  deleteVideo(Id: number) {
    return this.HttpClient.delete(this.api + '/' + Id);
  }
  updateVideo(p: Video): Observable<Video> {
    return this.HttpClient.put<Video>(this.api, p);
  }
}
