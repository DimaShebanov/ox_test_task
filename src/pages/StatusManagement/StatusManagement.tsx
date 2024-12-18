import { Box, Center, Container, Loader, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useDeferredValue, useMemo, useState } from "react";

import { employeesQuery } from "../../store/Employee/queries";
import { EmployeeStatus } from "../../store/Employee/types";
import { QueryKeys } from "../../store/queryKeys";
import ActionsBar from "./components/ActionsBar";
import AddNewEmployeeModal from "./components/AddNewEmployeeModal/AddNewEmployeeModal";
import EmployeesList from "./components/EmployeesList/EmployeesList";

const StatusManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState<EmployeeStatus | null>(null);
  const [search, setSearch] = useState<string>("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const deferredSearch = useDeferredValue(search);

  const { isLoading, data } = useQuery({
    queryKey: [QueryKeys.EMPLOYEES],
    queryFn: employeesQuery,
  });

  const filteredEmployees = useMemo(() => {
    const lowerSearch = deferredSearch.toLowerCase();

    return (
      data?.filter(emp => {
        let canShow = true;
        if (selectedStatus) {
          canShow = emp.status === selectedStatus;
        }

        if (lowerSearch) {
          canShow = emp.name.toLowerCase().includes(lowerSearch);
        }

        return canShow;
      }) ?? []
    );
  }, [data, deferredSearch, selectedStatus]);

  const openCreateModal = useCallback(() => {
    setIsCreateModalOpen(true);
  }, []);

  const closeCreateModal = useCallback(() => {
    setIsCreateModalOpen(false);
  }, []);

  return (
    <>
      <Box flex="1 0 auto" bg="gray.1">
        <Container py="lg" size="lg" h="100%">
          <Stack gap="md" h="100%">
            <ActionsBar
              selectedStatus={selectedStatus}
              search={search}
              onSelectedStatusChange={setSelectedStatus}
              onSearchChange={setSearch}
              onCreate={openCreateModal}
            />
            {isLoading ? (
              <Center flex="1">
                <Loader size="xl" />
              </Center>
            ) : (
              <EmployeesList employees={filteredEmployees} />
            )}
          </Stack>
        </Container>
      </Box>
      <AddNewEmployeeModal open={isCreateModalOpen} onClose={closeCreateModal} />
    </>
  );
};

export default StatusManagement;
