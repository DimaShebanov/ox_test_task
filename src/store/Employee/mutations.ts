import { MutationFunction } from "@tanstack/react-query";

import { api } from "../../services/api";
import queryClient from "../queryClient";
import { QueryKeys } from "../queryKeys";
import { Employee, UpdateEmployeeStatusVariables } from "./types";

export const updateEmployeeStatusMutation: MutationFunction<unknown, UpdateEmployeeStatusVariables> = async ({
  status,
  id,
}) => {
  const backupEmployees = queryClient.getQueryData([QueryKeys.EMPLOYEES]);

  queryClient.setQueryData([QueryKeys.EMPLOYEES], (employees: Employee[]) =>
    employees.map(emp => (emp.id === id ? { ...emp, status } : emp))
  );

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return await api.post(`users/${id}`, { status });
  } catch (e) {
    queryClient.setQueryData([QueryKeys.EMPLOYEES], backupEmployees);
    throw e;
  }
};
