import {Navbar as NavbarUi, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function Navbar (){
    return(
        <NavbarUi>
        <NavbarBrand>
          <p className="font-bold text-inherit">ML23_Los_Algoritmos_Alucines</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
            <Link href="/" color="foreground" aria-current="page">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/proyecto1">
              Proyecto 1
            </Link>
          </NavbarItem>
          
          <NavbarItem>
            <Link color="foreground" href="/proyecto2">
              Proyecto 2
            </Link>
          </NavbarItem>

        <NavbarItem>
            <Link color="foreground" href="/proyecto3">
              Proyecto 3
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarUi>
    )
}