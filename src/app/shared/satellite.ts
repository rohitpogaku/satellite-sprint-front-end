export default interface Satellite {
  satellite_id: number;
  satellite_name: string;
  description: string;
  launch_date: string;
  launch_mass: number;
  launch_vehicle: string;
  orbit_type: string;
  application: string;
  manufacturer: string;
  manufacturer_country: string;
  agency: string;
  agency_country: string;
}
