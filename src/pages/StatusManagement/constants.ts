import { ComboboxItem } from "@mantine/core/lib/components/Combobox/Combobox.types";

import { Employee, EmployeeStatus } from "../../store/Employee/types";

export const STATUS_OPTIONS: ComboboxItem[] = [
  {
    value: EmployeeStatus.WORKING,
    label: "🟢 Working",
  },
  {
    value: EmployeeStatus.LUNCH,
    label: "🟡 Lunch",
  },
  {
    value: EmployeeStatus.TRIP,
    label: "🟣 Trip",
  },
  {
    value: EmployeeStatus.VACATION,
    label: "🔴 Vacation",
  },
];

export const INITIAL_EMPLOYEE: Partial<Employee> = {
  status: EmployeeStatus.WORKING,
  name: "",
  img: "",
};
