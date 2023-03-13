import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/Model/assets';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent  implements OnInit {

  assets!: Asset[];

  constructor(public assetService: AssetsService) {}

  ngOnInit() {
    this.assets = this.assetService.getAssets();
    console.log(this.assetService.assetCounts)
  }

}
