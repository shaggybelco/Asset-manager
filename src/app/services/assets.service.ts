import { Injectable } from '@angular/core';
import { Asset } from '../Model/assets';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor() { }

  // Assets data
  asset = [
    {
      id: 1,
      name: 'Car 1',
      make: 'Toyota',
      model: 'Camry',
      year: 2018,
      odometer: 50000,
      fuelLevel: 75,
      latitude: -33.8688,
      longitude: 151.2093,
      type: 'car'
    },
    {
      id: 2,
      name: 'Car 2',
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      odometer: 25000,
      fuelLevel: 50,
      latitude: -33.8656,
      longitude: 151.2071,
      type: 'car'
    },
    {
      id: 3,
      name: 'Truck 1',
      make: 'Ford',
      model: 'F-150',
      year: 2019,
      odometer: 100000,
      fuelLevel: 25,
      latitude: -33.8705,
      longitude: 151.2067,
      type: 'truck'
    },
    {
      id: 4,
      name: 'Truck 2',
      make: 'Chevrolet',
      model: 'Silverado',
      year: 2017,
      odometer: 75000,
      fuelLevel: 60,
      latitude: -33.8697,
      longitude: 151.2085,
      type: 'truck'
    },
    {
      id: 5,
      name: 'Truck 3',
      make: 'Dodge',
      model: 'Ram',
      year: 2021,
      odometer: 10000,
      fuelLevel: 100,
      latitude: -33.8690,
      longitude: 151.2104,
      type: 'truck'
    },
    {
      id: 6,
      name: 'Generator 1',
      make: 'Cummins',
      model: 'RS20A',
      year: 2020,
      status: 'running',
      latitude: -33.8727,
      longitude: 151.2086,
      type: 'generator'
    },
    {
      id: 7,
      name: 'Fridge 1',
      make: 'Samsung',
      model: 'RS64R5311M9',
      year: 2021,
      temperature: 5,
      latitude: -33.8744,
      longitude: 151.2075,
      type: 'fridge'
    },
    {
      id: 8,
      name: 'Fridge 2',
      make: 'LG',
      model: 'LFXS30796S',
      year: 2019,
      temperature: 3,
      latitude: -33.8739,
      longitude: 151.2098,
      type: 'fridge'
    },
    {
      id: 9,
      name: 'Fridge 3',
      make: 'Whirlpool',
      model: 'WRS588FIHZ',
      year: 2018,
      temperature: 8,
      latitude: -33.8728,
      longitude: 151.2076,
      type: 'fridge'
    }
  ];

   assetImages: any = {
    car: '../../assets/auto_car-16.jpg',
    truck: '../../assets/vecteezy_vector-sign-truck-symbol-is-isolated-on-a-white-background_15842969.jpg',
    generator: '../../assets/vecteezy_energy-solar-sun-plug-turquoise-highlight-circle-point_14872672.jpg',
    fridge: '../../assets/Electronic_Devices_(6).jpg'
  }


  private assets: Asset[] = [
    {id: 1, name: 'Cars', type: 'car', count: 2, img: '../../assets/auto_car-16.jpg' },
    {id: 2, name: 'Trucks', type: 'truck', count: 3, img: '../../assets/vecteezy_vector-sign-truck-symbol-is-isolated-on-a-white-background_15842969.jpg' },
    {id: 3, name: 'Generators', type: 'generator', count: 1, img: '../../assets/vecteezy_energy-solar-sun-plug-turquoise-highlight-circle-point_14872672.jpg' },
    {id: 4, name: 'Fridges', type: 'fridge', count: 3, img: '../../assets/Electronic_Devices_(6).jpg' }
  ];

  getAssetImage(type: any) {
    return this.assetImages[type];
  }

  assetCount(type: any){
    return this.assetCounts[type];
  }



  getAssets(): any[]{
    return this.assets;
  }

  count = 0;

  getAssetCountByType(type: string): number {
    this.asset.forEach(assets => {
      if (assets.type === type) {
        this.count += this.count;
      }
    });

    console.log(type)
    return this.count;
  }

  assetCounts = this.asset.reduce((counts: any, asset: any) => {
    if (counts.hasOwnProperty(asset.type)) {
      counts[asset.type]++;
    } else {
      counts[asset.type] = 1;
    }
    return counts;
  }, {});
  
  
}
