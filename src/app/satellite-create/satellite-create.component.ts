import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SatelliteService} from "../satellite.service";
import Satellite from "../shared/satellite";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-satellite-create',
  templateUrl: './satellite-create.component.html',
  styleUrls: ['./satellite-create.component.css']
})
export class SatelliteCreateComponent implements OnInit {

  selectedImage: File | undefined;
  defaultImage: File | undefined;

  allSatellites: any[] = [];
  orbits: any;
  applications: any;
  manufacturers: any;
  agencies: any;


  constructor(private router: Router, private satelliteService: SatelliteService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAllSatellites();
    this.getAllOrbits();
    this.getAllApplications();
    this.getAllManufacturers();
    this.getAllAgencies();
  }

  getAllSatellites() {
    this.satelliteService.getAllSatellites().subscribe((e: any) => {
      this.allSatellites = e;
    })
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


    let isPresent = false;
    let satelliteExists;

    this.allSatellites.forEach((s: any) => {
      const sName = s.satellite_name.toLocaleLowerCase();
      const value = satelliteFormData.satelliteName.toLocaleLowerCase().trim();
      if (sName === value.toLocaleLowerCase()) {
        satelliteExists = s.satellite_name;
        isPresent = true;
      }
      return;
    });

    if (isPresent) {
      const message = `Satellite with name ${satelliteExists} already exists`;
      this.messageService.add({severity: 'error', summary: message});

    } else {
      this.satelliteService.uploadSatellite(satelliteFormData).subscribe((e: any) => {

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


        this.messageService.add({
          severity: 'success',
          summary: 'Satellite added successfully!'
        });

        setTimeout(() => {
          this.router.navigateByUrl("/satellites");
        }, 1500);
      });

    }


  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }
}
