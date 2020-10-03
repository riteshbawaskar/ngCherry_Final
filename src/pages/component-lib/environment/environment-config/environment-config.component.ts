import { fuseAnimations } from './../../../../theme/animation';
import { MatTableDataSource } from '@angular/material/table';
import { EnvironmentConfigService } from './../../../../services/environment-config.service';
import { EnvironmentConfig } from './../../../../models/environment-config';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Environment } from 'models/environment';

@Component({
  selector: 'app-environment-config',
  templateUrl: './environment-config.component.html',
  styleUrls: ['./environment-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class EnvironmentConfigComponent implements OnInit {
  @Input() environment: Environment;
  environmentConfig: EnvironmentConfig;

  displayedColumns = ['position', 'name', 'value'];
  dataSource: any;

  constructor(public envConfigService: EnvironmentConfigService) { }

  ngOnInit(): void { this.loadEnvConfig(); }

  SaveConfig(): void {
    console.log('saving config' + JSON.stringify(this.environmentConfig));
    this.envConfigService.addEnvironmentConfig(this.environmentConfig).subscribe(resp => {
      console.log(resp);
    });
  }

  loadEnvConfig(): void {

    this.envConfigService.getEnvironmentConfig(this.environment._id).subscribe(resp => {

      if (resp == null) {
        this.environmentConfig = new EnvironmentConfig();
        this.environmentConfig.config = [{ key: '', value: '' }];
        this.environmentConfig.environmentid = this.environment._id;
        this.environmentConfig.componentid = '1';
      }
      else {
        this.environmentConfig = resp;

      }
      this.dataSource = new MatTableDataSource(this.environmentConfig.config);
    });
  }

}
