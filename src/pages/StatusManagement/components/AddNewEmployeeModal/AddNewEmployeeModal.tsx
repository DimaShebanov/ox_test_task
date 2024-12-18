import { Button, Group, Modal, Select, Stack, TextInput, Title } from "@mantine/core";
import React, { ChangeEventHandler, memo, useCallback, useEffect, useState } from "react";

import { EmployeeStatus } from "../../../../store/Employee/types";
import { INITIAL_EMPLOYEE, STATUS_OPTIONS } from "../../constants";

interface Props {
  onClose: () => void;
  open: boolean;
}

const AddNewEmployeeModal = ({ onClose, open }: Props) => {
  const [employee, setEmployee] = useState(INITIAL_EMPLOYEE);
  const { name, status } = employee;

  useEffect(() => {
    setEmployee(INITIAL_EMPLOYEE);
  }, [open]);

  const onNameChange: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    const normalizedValue = e.target.value.replace(/[^A-Za-z\s]/g, "");
    setEmployee(emp => ({
      ...emp,
      name: normalizedValue,
    }));
  }, []);

  const onStatusChange = useCallback((value: string | null) => {
    setEmployee(emp => ({
      ...emp,
      status: value as EmployeeStatus,
    }));
  }, []);

  const onSave = () => {
    console.log("new user:", employee);
    setEmployee(INITIAL_EMPLOYEE);
  };

  return (
    <Modal withCloseButton size="sm" opened={open} title={<Title order={4}>Create new user</Title>} onClose={onClose}>
      <Stack>
        <TextInput label="User name:" placeholder="Employee name" size="xs" value={name} onChange={onNameChange} />
        <Select
          label="Status:"
          size="xs"
          data={STATUS_OPTIONS}
          value={status}
          allowDeselect={false}
          onChange={onStatusChange}
        />
        <Group>
          <Button onClick={onSave}>Create</Button>
          <Button variant="subtle" onClick={onClose}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default memo(AddNewEmployeeModal);
