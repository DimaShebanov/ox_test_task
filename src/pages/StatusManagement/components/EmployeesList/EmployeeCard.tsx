import { Avatar, Card, Group, Image, Select, Stack, Title } from "@mantine/core";
import React, { memo } from "react";

import { Employee, EmployeeId, EmployeeStatus } from "../../../../store/Employee/types";
import { STATUS_OPTIONS } from "../../constants";

interface Props {
  employee: Employee;
  onStatusChange: (id: EmployeeId, newStatus: EmployeeStatus) => void;
}

const EmployeeCard = ({ employee, onStatusChange }: Props) => {
  const handleStatusChange = (newStatus: string | null) => {
    onStatusChange(employee.id, newStatus as EmployeeStatus);
  };

  return (
    <Card shadow="xs">
      <Group gap="sm" align="flex-end">
        <Avatar size="xl">
          <Image h="100%" src={employee?.img} />
        </Avatar>
        <Stack gap="0">
          <Title order={6}>{employee?.name}</Title>
          <Select
            variant="unstyled"
            data={STATUS_OPTIONS}
            value={employee?.status}
            allowDeselect={false}
            onChange={handleStatusChange}
          />
        </Stack>
      </Group>
    </Card>
  );
};

export default memo(EmployeeCard);
