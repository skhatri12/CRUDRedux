import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    const newUser = { id: newUserId, name, email };
    console.log("Submitting new user:", newUser);

    dispatch(addUser(newUser));
    navigate("/");
  };

  return (
    <>
      <Box textAlign="center">
        <Heading>Create an user</Heading>
        <Box display="flex" justifyContent="center">
          <Box bg="gray.200" w="fit-content" p="20px" borderRadius="10px">
            <form onSubmit={handleSubmit}>
              <FormControl ml="10px" w="fit-content">
                <FormLabel>Name:</FormLabel>
                <Input
                  type="text"
                  name="name"
                  border="1px"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
                <FormLabel>Email Address:</FormLabel>
                <Input
                  type="text"
                  name="email"
                  border="1px"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button mt="10px">Submit</button>
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

export default CreateUser;
