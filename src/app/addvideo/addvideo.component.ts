import { Component, OnInit } from '@angular/core';
import { Video } from '../model/Video';
import { VideoServiceService } from '../Services/video-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  video!: Video;
  test: any = false;
  ider: any;
  constructor(private svideo: VideoServiceService, private route: Router, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.ider = this.router.snapshot.queryParams['id'];
    if (this.ider != undefined) {
      this.test = true;
      this.getvideo();
    }
    else {
      this.video = new Video();
      this.test = false;
    }
  }
  ajoutervideo() {
    this.svideo.addVideo(this.video).subscribe(
      () => {
        this.route.navigate(['/video']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getvideo() {
    this.svideo.getVideobyId(this.ider).subscribe(
      (data) => {
        this.video = data;
        console.log(data);
      }
    )
  }
  update() {
    console.log(this.video);
    
    this.svideo.updateVideo(this.video).subscribe(
      () => {
        // this.route.navigate(['/video']);
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
