import { QueryFunction } from "@tanstack/react-query";

import { api } from "../../services/api";
import { QueryKeys } from "../queryKeys";
import { Employee } from "./types";

export const employeesQuery: QueryFunction<Employee[], [QueryKeys.EMPLOYEES]> = async () => {
  const { data } = await api.get<Employee[]>("/users");

  return data;
};
