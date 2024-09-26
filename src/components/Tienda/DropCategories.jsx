import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export  function DropCategories({categorias}) {
  return (
    <Menu >
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Categorias
      </MenuButton>
      <MenuList zIndex={'1000'}>
      <Link to={'/productos'}>
            <MenuItem textColor={useColorModeValue('black', 'white')} >Todos</MenuItem>
      </Link>
        {
          categorias.map((cat) => (
            <Link key={cat.categoria_id} to={'/productos/category/' + cat.categoria_id}>
            <MenuItem textColor={useColorModeValue('black', 'white')} >{cat.nombre}</MenuItem>
            </Link>
          ))
        }
      </MenuList>
    </Menu>
  );
}
