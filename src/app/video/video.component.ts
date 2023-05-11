import { Component, OnInit } from '@angular/core';
import { VideoServiceService } from '../Services/video-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {


  constructor(private vservice: VideoServiceService, private route: Router) { }
  video: any;
  ngOnInit(): void {
    this.getvideo();
  }
  getvideo() {
    this.vservice.getVideos().subscribe(
      (data) => {
        this.video = data;
        console.log(data);
      }
    )
  }
  // this.listeArticles = this.listeArticles.filter(article => article.categorie !== 'Travail');
  searchbyGenre(e: any) {
    this.video = this.video.filter((video: any) => {
      if (video.genre !== e)
        this.video = video
      console.log(video);

    });

  }
  redirect(id: any) {
    this.route.navigate(
      ['/add/'],
      { queryParams: { id: id } }
    );
  }
  increment(v: any) {
    v.nbrShared++;
    this.vservice.updateVideo(v).subscribe(
      () => {
        this.getvideo();
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
