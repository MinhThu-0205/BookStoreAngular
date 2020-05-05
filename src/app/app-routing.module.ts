import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentSuppliersComponent } from './content-suppliers/content-suppliers.component';
import { ContentSupplierDetailComponent } from './content-supplier-detail/content-supplier-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContentNewGridComponent } from './content-new-grid/content-new-grid.component';
import { ContentNewDetailComponent } from './content-new-detail/content-new-detail.component';
import { ContentContactComponent } from './content-contact/content-contact.component';
import { ContentAboutusComponent } from './content-aboutus/content-aboutus.component';


const routes: Routes = [
  { path: 'home', component: ContentHomeComponent },
  { path: 'suppliers', component: ContentSuppliersComponent },
  { path: 'supplier-detail', component: ContentSupplierDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'new-grid', component: ContentNewGridComponent },
  { path: 'new-detail', component: ContentNewDetailComponent },
  { path: 'contact', component: ContentContactComponent },
  { path: 'about-us', component: ContentAboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
