import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SatelliteService} from "../satellite.service";
import Satellite from "../shared/satellite";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-satellite-create',
  templateUrl: './satellite-create.component.html',
  styleUrls: ['./satellite-create.component.css']
})
export class SatelliteCreateComponent implements OnInit {

  selectedImage: File | undefined;
  defaultImage: File | undefined;

  orbits: any;
  applications: any;
  manufacturers: any;
  agencies: any;


  constructor(private router: Router, private satelliteService: SatelliteService) {
  }

  ngOnInit(): void {
    this.getAllOrbits();
    this.getAllApplications();
    this.getAllManufacturers();
    this.getAllAgencies();
  }

  getAllOrbits() {
    this.satelliteService.getAllOrbits().subscribe((e: any) => {
      this.orbits = e;
    })
  }

  getAllApplications() {
    this.satelliteService.getAllApplications().subscribe((e: any) => {
      this.applications = e;
    })
  }

  getAllManufacturers() {
    this.satelliteService.getAllManufacturers().subscribe((e: any) => {
      this.manufacturers = e;
    })
  }

  getAllAgencies() {
    this.satelliteService.getAllAgencies().subscribe((e: any) => {
      this.agencies = e;
    })
  }

  submit(satelliteForm: any) {
    const satelliteFormData: any = {
      satelliteName: satelliteForm.satelliteName.trim(),
      description: satelliteForm.description.trim(),
      launchDate: satelliteForm.launchDate,
      launchMass: satelliteForm.launchMass,
      launchVehicle: satelliteForm.launchVehicle.trim(),
      orbitTypeId: +satelliteForm.orbitTypeId,
      applicationId: +satelliteForm.applicationId,
      manufacturerId: +satelliteForm.manufacturerId,
      agencyId: +satelliteForm.agencyId
    }
    this.satelliteService.uploadSatellite(satelliteFormData).subscribe((e: any) => {
      console.log(e);
      this.router.navigateByUrl("/satellites");
    });

    const formData = new FormData();
    if (this.selectedImage) {

      formData.append('file', this.selectedImage);
      formData.append('name', satelliteFormData.satelliteName);
      formData.append('ID', "0");

      this.satelliteService.uploadImage(formData).subscribe((e: any) => {
        console.log(e);
      });

    } else {
      fetch("/assets/images/space-2.jpg")
        .then(res => res.blob())
        .then(blob => {
          this.defaultImage = new File([blob], "default-image.png");

          formData.append('file', this.defaultImage);
          formData.append('name', satelliteFormData.satelliteName);
          formData.append('ID', "0");
          
          this.satelliteService.uploadImage(formData).subscribe((e: any) => {
            console.log(e);
          });
        });
    }

  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }
}
