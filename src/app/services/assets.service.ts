import { Injectable } from '@angular/core';
import { Asset } from '../Model/assets';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() { }

  private assets: Asset[] = [
    { name: 'Cars', type: 'vehicle', count: 2, img: '../../assets/auto_car-16.jpg' },
    { name: 'Trucks', type: 'vehicle', count: 3, img: '../../assets/vecteezy_vector-sign-truck-symbol-is-isolated-on-a-white-background_15842969.jpg' },
    { name: 'Generators', type: 'power', count: 1, img: '../../assets/vecteezy_energy-solar-sun-plug-turquoise-highlight-circle-point_14872672.jpg' },
    { name: 'Fridges', type: 'appliance', count: 3, img: '../../assets/Electronic_Devices_(6).jpg' }
  ];



  getAssets(): Asset[] {
    return this.assets;
  }

  getAssetCountByType(type: string): number {
    let count = 0;
    this.assets.forEach(asset => {
      if (asset.type === type) {
        count += asset.count;
      }
    });
    return count;
  }
}
