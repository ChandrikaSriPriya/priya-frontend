import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Api } from '../actions/api';

export const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
      const fetchStudents = async () => {
          try {
              const response = await axios.get(${Api}/students);
              setStudents(response.data);
          } catch (error) {
              console.error("Error fetching students:", error);
          }
      };

      fetchStudents();
  }, []);

  return (
      <TableContainer>
          <Table variant='striped' colorScheme='teal'>
              <TableCaption>Student Information</TableCaption>
              <Thead>
                  <Tr>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th isNumeric>Phone</Th>
                  </Tr>
              </Thead>
              <Tbody>
                  {students.map((student) => (
                      <Tr key={student.email}>
                          <Td>{student.name}</Td>
                          <Td>{student.email}</Td>
                          <Td isNumeric>{student.phone}</Td>
                      </Tr>
                  ))}
              </Tbody>
          </Table>
      </TableContainer>
  );
};