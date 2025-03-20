import { Injectable } from '@nestjs/common';
import { InfluxDB, QueryApi } from '@influxdata/influxdb-client';

@Injectable()
export class TempServiceService {
    private influxDB: InfluxDB;
    private queryApi: QueryApi;

    constructor(){
        const url = "http://localhost:8086";
        const token = "hcnu3NG275oCyjVOY7_CyCCI7IE26kOQmgaUDWeFKZqj36bVX1xVHmDi6s-WoAqIHI2UDJUVJxghCkWfVPghYw==";
        const org = "B-SAFFER";
        this.influxDB = new InfluxDB({ url, token });
        this.queryApi = this.influxDB.getQueryApi(org);
    }

    async getData(): Promise<any[]> {
        // Customize your Flux query as needed
        const fluxQuery = `from(bucket:"${"B-SAFFER_data"}") |> range(start: -1h)`;
        const results: any[] = [];
        return new Promise((resolve, reject) => {
          this.queryApi.queryRows(fluxQuery, {
            next(row, tableMeta) {
              const o = tableMeta.toObject(row);
              results.push(o);
              console.log(o)
            },
            error(error) {
              console.error('Query error:', error);
              reject(error);
            },
            complete() {
              resolve(results);
            },
          });
        });
    }
}
