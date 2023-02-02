import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    title: 'Checks',
    path: '',
    loadChildren: () =>
      import('../pages/checks-page/checks-page.module').then(
        (m) => m.ChecksPageModule
      ),
  },
  {
    title: 'Add check',
    path: 'add-check',
    loadChildren: () =>
      import('../pages/add-check-page/add-check-page.module').then(
        (m) => m.AddCheckPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
