import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentSuppliersComponent } from './content-suppliers/content-suppliers.component';
import { ContentSupplierDetailComponent } from './content-supplier-detail/content-supplier-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContentNewGridComponent } from './content-new-grid/content-new-grid.component';
import { ContentNewDetailComponent } from './content-new-detail/content-new-detail.component';
import { ContentContactComponent } from './content-contact/content-contact.component';
import { ContentAboutusComponent } from './content-aboutus/content-aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentHomeComponent,
    ContentSuppliersComponent,
    ContentSupplierDetailComponent,
    ProductsComponent,
    ProductDetailComponent,
    ContentNewGridComponent,
    ContentNewDetailComponent,
    ContentContactComponent,
    ContentAboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
