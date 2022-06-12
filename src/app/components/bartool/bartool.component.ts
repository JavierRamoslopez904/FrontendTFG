import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';
import { selectCountProducts } from '../../store/selector/cartSelector';

@Component({
  selector: 'app-bartool',
  templateUrl: './bartool.component.html',
  styleUrls: ['./bartool.component.css']
})
export class BartoolComponent implements OnInit {

  countProducts$ : Observable<number>;

  constructor(private route : Router, private store : Store<AppState>) {
    this.countProducts$ = store.select(selectCountProducts);
  }

  ngOnInit(): void {
  }

  goToCart(){
    this.route.navigate(['/cart']);
  }

  goToPerfil(){
    this.route.navigate(['/perfil']);
  }

}
