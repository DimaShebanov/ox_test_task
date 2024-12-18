import { Button, Divider, Group, Select, TextInput } from "@mantine/core";
import React, { ChangeEventHandler } from "react";

import { EmployeeStatus } from "../../../store/Employee/types";
import { STATUS_OPTIONS } from "../constants";

interface Props {
  selectedStatus: EmployeeStatus | null;
  onSelectedStatusChange: (selectedStatus: EmployeeStatus) => void;
  search: string;
  onSearchChange: (search: string) => void;
  onCreate: () => void;
}

const ActionsBar = ({ onSearchChange, search, onSelectedStatusChange, selectedStatus, onCreate }: Props) => {
  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = e => {
    onSearchChange(e.target.value);
  };

  const handleStatusChange = (value: string | null) => {
    onSelectedStatusChange(value as EmployeeStatus);
  };

  return (
    <Group gap="xs">
      <Button size="md" onClick={onCreate}>
        Create +
      </Button>
      <Group align="center" h="100%" flex="1" px="xs" bg="white" style={{ borderRadius: 4 }}>
        <TextInput
          variant="unstyled"
          size="md"
          flex="1"
          placeholder="🔍 Type to search"
          value={search}
          onChange={handleSearchChange}
        />
        <Divider orientation="vertical" h="xl" my="auto" />
        <Select
          clearable
          value={selectedStatus}
          placeholder="Filter by status"
          variant="unstyled"
          data={STATUS_OPTIONS}
          onChange={handleStatusChange}
        />
      </Group>
    </Group>
  );
};

export default ActionsBar;
