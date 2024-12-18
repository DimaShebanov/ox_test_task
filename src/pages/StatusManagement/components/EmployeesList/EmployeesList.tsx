import { Grid } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import React, { useCallback } from "react";

import { updateEmployeeStatusMutation } from "../../../../store/Employee/mutations";
import { Employee, EmployeeId, EmployeeStatus } from "../../../../store/Employee/types";
import EmployeeCard from "./EmployeeCard";

interface Props {
  employees: Employee[];
}

const EmployeesList = ({ employees }: Props) => {
  const { mutateAsync } = useMutation({ mutationFn: updateEmployeeStatusMutation });

  const onEmployeeStatusChange = useCallback(
    (id: EmployeeId, newStatus: EmployeeStatus) => {
      try {
        mutateAsync({ status: newStatus, id });
      } catch (e) {
        alert("Something went wrong!");
      }
    },
    [mutateAsync]
  );

  return (
    <Grid>
      {employees?.map(emp => (
        <Grid.Col key={emp.id} span={4}>
          <EmployeeCard employee={emp} onStatusChange={onEmployeeStatusChange} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default EmployeesList;
