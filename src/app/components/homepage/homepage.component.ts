import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core';
import { Asset } from 'src/app/Model/assets';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  assets!: Asset[];
  // id = this.route.snapshot.params['id'];
  // title = this.route.snapshot.params['title'];
  title: any;
  assetType: any;
  asset: any;
  alertMe: any[] = [];
  isAlert: boolean = false;
  holdAsseets: any;

  @ViewChild(IonModal) modal!: IonModal;

  constructor(public assetService: AssetsService) {}

  ngOnInit() {
    this.assets = this.assetService.getAssets();
  }

  selectedItem(item: Asset) {
    this.title = item.name;
    this.asset = this.assetService.getAssetById(item.id);
    this.holdAsseets = this.assetService.getByType(this.asset.type);
    this.assetType = this.asset.type;
    this.getAlert();
  }

  isWithinTwoHours(dateString: string): boolean {
    const date = new Date(dateString);
    const now = new Date();
    const twoHoursInMilliseconds = 2 * 60 * 60 * 1000;
    return (
      date >= now && date.getTime() - now.getTime() <= twoHoursInMilliseconds
    );
  }

  getAlert() {
    this.alertMe = [];
    this.holdAsseets.forEach((element: any) => {
      switch (element.type) {
        case 'car': {
          if (element.speed > 120) {
            this.alertMe.push(
              element.name + ' have acceed the speed limit of 120km/h'
            );
            this.isAlert = true;
          }
          break;
        }
        case 'truck': {
          if (!this.isWithinTwoHours(element.timeWait)) {
            this.isAlert = true;
            this.alertMe.push(
              element.name +
                ' have been in a same position for more than 2 hours'
            );
          }
          break;
        }
        case 'fridge': {
          if (element.temperature > 10) {
            this.isAlert = true;
            this.alertMe.push(
              element.name + ' temperature is greater than 10 celcius'
            );
          }
          break;
        }
        case 'generator': {
          if ((element.status = 'running')) {
            this.isAlert = true;
            this.alertMe.push(
              element.name +
                ' is running, loadshedding kicked in / power dropped on the site'
            );
          }
          break;
        }
        default: {
        }
      }
    });
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
