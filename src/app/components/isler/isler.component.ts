import { Component, OnInit } from '@angular/core';
import { Is } from 'src/app/isModel';
import { liste } from '../db';
import { Model } from '../model';

@Component({
  selector: 'isler',
  templateUrl: './isler.component.html',
  styleUrls: ['./isler.component.css'],
})
export class IslerComponent implements OnInit {
  public model: Model;
  public hepsiniGoster: boolean = true;
  constructor() {
    this.model = new Model('Ergün');
  }

  ngOnInit(): void {}
  ekle(gorev: any) {
    if (gorev.value != '') {
      if (this.model.liste.filter((x) => x.gorev == gorev.value).length === 0) {

        this.model.liste.push({
          id:liste.length>0?
            (liste.sort((a, b) => Number(b.id) - Number(a.id))[0].id) + 1:1,
          gorev: gorev.value,
          tamamlandi: false,
        });
        //diziyi sırala
        this.model.liste.sort((a, b) => Number(a.id) - Number(b.id));
        gorev.placeholder = '';
      } else {
        alert('bu görev zaten listede yer alıyor');
      }
    } else {
      gorev.placeholder = 'görev yazınız';
    }
  }
  elemanlar(): Is[] {
    if (this.hepsiniGoster) return this.model.liste;
    else return this.model.liste.filter((x) => !x.tamamlandi);
  }
  tamamla(eleman: Is) {
     let xx=this.model.liste.find(x => x.id == eleman.id);
    if(xx)
     xx.tamamlandi=!eleman.tamamlandi

  }
  tamamlananGorevSayisi(){
    return this.model.liste.filter(x=>x.tamamlandi).length
  }
}
