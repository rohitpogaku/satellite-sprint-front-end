import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SatelliteService} from "../satellite.service";
import {MessageService} from "primeng/api";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-satellite-edit',
  templateUrl: './satellite-edit.component.html',
  styleUrls: ['./satellite-edit.component.css']
})
export class SatelliteEditComponent implements OnInit {

  satelliteToBeEdited: any;
  allSatellites: any[] = [];
  orbits: any;
  applications: any;
  manufacturers: any;
  agencies: any;

  imageUrl: SafeUrl | undefined;
  selectedImage: File | undefined;
  imagePreview: string | ArrayBuffer | null | undefined;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private satelliteService: SatelliteService,
              private messageService: MessageService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.getSatellite(id);
    this.getAllSatellites();
    this.getAllOrbits();
    this.getAllApplications();
    this.getAllManufacturers();
    this.getAllAgencies();

  }

  getSatellite(id: number) {
    this.satelliteService.getSatelliteById(id).subscribe((e: any) => {
      this.satelliteToBeEdited = e;
      this.getImage(+this.satelliteToBeEdited.satelliteId);
    })
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

  getImage(id: number) {
    this.satelliteService.getImage(id).subscribe((e: any) => {
      let objectURL = URL.createObjectURL(e);
      this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    })
  }

  submit(satelliteForm: any) {
    let value = satelliteForm.satelliteName.toLocaleLowerCase().trim();
    let isPresent = false;
    let satelliteExists;

    this.allSatellites.forEach((s: any) => {
      const sName = s.satellite_name.toLocaleLowerCase();
      const currName = this.satelliteToBeEdited.satelliteName.toLocaleLowerCase();
      if (sName !== currName && sName === value.toLocaleLowerCase()) {
        satelliteExists = s.satellite_name;
        isPresent = true;
      }
      return;
    });

    if (isPresent) {
      const message = `Satellite with name ${satelliteExists} already exists`;
      this.messageService.add({severity: 'error', summary: message});

    } else {
      const satelliteFormData: any = {
        satelliteId: this.satelliteToBeEdited.satelliteId,
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

      this.satelliteService.updateSatellite(satelliteFormData).subscribe((e: any) => {

        if (this.selectedImage) {
          const formData = new FormData();
          formData.append('file', this.selectedImage);
          formData.append('name', satelliteFormData.satelliteName);
          formData.append('ID', satelliteFormData.satelliteId);

          this.satelliteService.updateImage(formData).subscribe((e: any) => {
            console.log(e);
          });

        }

        this.messageService.add({
          severity: 'success',
          summary: 'Satellite edited successfully!'
        });

        setTimeout(() => {
          this.router.navigateByUrl("/satellites");
        }, 1500);


      });
    }


  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.imagePreview = null;
    }
  }


}
