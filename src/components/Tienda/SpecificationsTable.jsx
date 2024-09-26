import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Tfoot,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import React from "react";

export  function SpecificationsTable({
  especificaciones_tecnicas,
  titulo = "Especificaciones técnicas",
}) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th colSpan={2}>{titulo}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(especificaciones_tecnicas).map(
            ([key, value]) => (
              <Tr key={key}>
                <Td>{key.charAt(0).toUpperCase() + key.slice(1)}</Td>
                <Td>{value}</Td>
              </Tr>
            )
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
