import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModifyService {
  updateneed?: object
  constructor() {
    this.updateneed = {}
  }

  updatedobject(item: any) {
    this.updateneed = item
  }


}
