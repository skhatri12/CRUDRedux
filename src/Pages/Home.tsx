import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Table,
  Tbody,
  Thead,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../UserReducer";
const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  console.log(users);
  return (
    <>
      <Box>
        <Heading>CRUD App with JSON Server</Heading>
        <Box
          bg="green"
          w="fit-content"
          color="#ffffff"
          borderRadius="5px"
          ml="5px"
          p="5px"
        >
          <Link to="/create">Create +</Link>
        </Box>
        <Table mt="12px">
          <Thead bg="gray.600" color="#ffffff">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </Thead>
          <Tbody bg="gray.400" color="#ffffff" textAlign="center" border="1px">
            {users.map((user: any, index: number) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <ButtonGroup pb="10px">
                    <Link to={`/edit/${user.id}`}>
                      <Button colorScheme="gray" h="25px" mt="8px">
                        Edit
                      </Button>
                    </Link>
                    <Box bgColor="red" borderRadius="5px" mt="8px" h="25px">
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </Box>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Home;
