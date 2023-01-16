import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebServiceService {
  // public apiURL = {
  //   fiveDayForcast: '',
  //   dailyForecast: '/weather?units=metric&q='
  // }
  public weatherIconList: any = undefined;
  // private globalurl = 'http://api.openweathermap.org/data/2.5'
  // private apiKey = '&appid=15d7fd1fbdabd13f8acff294c2f2141c'
  constructor(private _httpClient: HttpClient) {}
  private apiKey:string = '417b915bbcmshef1687688c31870p199ccejsn264e2fc9dbe4' 

  private apiURLS: { [key: string]: { url: string; options: any } } = {
    getCityApi: {
      url: 'https://spott.p.rapidapi.com/places/autocomplete?limit=5&skip=0&type=CITY&q=',
      options: {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': 'spott.p.rapidapi.com',
        },
      },
    },
    getWeatherApi: {
      url: 'https://bestweather.p.rapidapi.com/weather/', //send csv lat,lon 
      // url: 'https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&contentType=json&unitGroup=metric&location=', //send csv lat,lon 
      options: {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': this.apiKey,
          'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
        }
      }
    },
  };

  async Get(apiName: string, values?: string): Promise<any> {
    try {
      let path = this.apiURLS[apiName].url + values;

      return await firstValueFrom(
        this._httpClient.get<any>(path, this.apiURLS[apiName].options)
      );
    } catch (e: any) {
      return { condition: 'False', message: e?.message };
    }
  }
}
