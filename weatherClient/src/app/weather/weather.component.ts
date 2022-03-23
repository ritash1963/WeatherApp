import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { WeatherVM } from '../_models/weatherVM';
import { WeatherService } from '../_services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: WeatherVM[];
  tempNum: number[];
  labelStr: string[];
   public barChartOptions: ChartOptions = {
    responsive: true,
    };
  public barChartLabels = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataset[] = [
     { data: [], label: 'Tel Aviv' }
   ];  

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.getWeatherData();  
  }

  getWeatherData() {
    this.weatherService.getWeather().subscribe(result => {
       this.weather = result;
       this.tempNum = this.weather.map(a => a.weatherTemp);
       this.barChartData[0].data = this.tempNum;
       this.labelStr = this.weather.map(a => a.weatherDate);
       this.barChartLabels = this.labelStr;
       },error => {
       console.log(error);
       });
    
      }  
}
