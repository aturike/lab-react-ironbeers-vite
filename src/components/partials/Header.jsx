import { Box, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <Box bg="#00afdb" p={4}>
      <Flex justify="center" align="center" h="100%">
        <Link to="/">
          <Icon as={FaHome} w={12} h={12} color="white" />
        </Link>
      </Flex>
    </Box>
  );
}

export default Header;
