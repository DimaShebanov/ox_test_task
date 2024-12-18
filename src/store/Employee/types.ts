export type EmployeeImgUrl = string; // to distinct img urls from other strings
export type EmployeeId = number;

export enum EmployeeStatus {
  WORKING = "Working",
  VACATION = "OnVacation",
  LUNCH = "LunchTime",
  TRIP = "BusinessTrip",
}

export interface Employee {
  id: EmployeeId;
  name: string;
  status: string;
  img: EmployeeImgUrl;
}

export interface UpdateEmployeeStatusVariables {
  status: EmployeeStatus;
  id: EmployeeId;
}
