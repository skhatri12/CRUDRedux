import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";

const UpdateUser = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users);
  const existingUser = user.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <Box textAlign="center">
        <Heading>Update details of an user</Heading>
        <Box display="flex" justifyContent="center">
          <Box bg="gray.200" w="fit-content" p="20px" borderRadius="10px">
            <form onSubmit={handleUpdate}>
              <FormControl ml="10px" w="fit-content">
                <FormLabel>Name:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  border="1px"
                  placeholder="Enter name"
                  value={uname}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email Address:</FormLabel>
                <Input
                  type="text"
                  name="email"
                  border="1px"
                  placeholder="Enter email"
                  value={uemail}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button mt="10px">Update</button>
              </FormControl>
            </form>
          </Box>
        </Box>
        <Box ml="10px">
          <Link to="/">Back to user list</Link>
        </Box>
      </Box>
    </>
  );
};

export default UpdateUser;
