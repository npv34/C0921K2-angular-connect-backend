import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'users',
        loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'posts',
        loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
