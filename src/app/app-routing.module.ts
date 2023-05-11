import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AddvideoComponent } from './addvideo/addvideo.component';

const routes: Routes = [

  { path: '', redirectTo: 'video', pathMatch: 'full' },
  { path: 'video', component: VideoComponent },
  { path: 'add', component: AddvideoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
