import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Card,
  CardBody,
} from "@nextui-org/react";
const proyecto1 = () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">ML23_Los_Algoritmos_Alucines</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page">Proyecto 1</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/proyecto2">
              Proyecto 2
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default proyecto1;
