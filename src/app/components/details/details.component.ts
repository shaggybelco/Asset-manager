import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private assetService: AssetsService) { }

  id = this.route.snapshot.params['id'];
  title = this.route.snapshot.params['title']

  holdAsseets: any;
  ngOnInit() {
    console.log(this.id);
    const asset = this.assetService.getAssetById(this.id)
    console.log(asset)
    this.holdAsseets = this.assetService.getByType(asset.type);
    console.log(this.holdAsseets);

  }

}
