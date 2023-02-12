import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, LoaderModule],
  exports: [PageLayoutComponent],
})
export class PageLayoutModule {}
