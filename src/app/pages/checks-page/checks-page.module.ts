import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChecksPageComponent } from './checks-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'src/app/components/card/card.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { PageLayoutModule } from 'src/app/components/page-layout/page-layout.module';
import { CheckModule } from 'src/app/widgets/check/check.module';
import { ChecksSearchModule } from 'src/app/widgets/checks-search/checks-search.module';

const routes: Routes = [
  {
    path: '',
    component: ChecksPageComponent,
  },
];

@NgModule({
  declarations: [ChecksPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    LoaderModule,
    PageLayoutModule,
    CheckModule,
    ChecksSearchModule,
  ],
})
export class ChecksPageModule {}
