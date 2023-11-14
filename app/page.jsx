import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button
} from "@nextui-org/react";
export default function Home() {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">ML23_Los_Algoritmos_Alucines</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
            <Link href="#" aria-current="page">
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
        </NavbarContent>
        
      </Navbar>
      <br></br>
      <p className="font-bold text-center " style={{ fontSize: 50, paddingBottom:'2.5%' }}>
        El mejor equipo de aprendizaje de máquina
      </p>
      
    
    
    <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto">
      
    <Card  className="col-span-12 sm:col-span-4 h-[300px] flex justify-end">
      
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Proyecto 1</p>
        <h4 className="text-white font-medium text-large">Identificando dígitos</h4>
      </CardHeader>
      <Link href="/proyecto1">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-56 object-cover "
        src="https://i0.wp.com/sefiks.com/wp-content/uploads/2017/09/mnist.png?resize=289%2C289&ssl=1"
      />
      </Link>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px] flex justify-end">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Proyecto 2</p>
        <h4 className="text-white font-medium text-large">Reconocimiento de expresiones faciales</h4>
      </CardHeader>
      <Link href="/proyecto2">
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-56 object-cover "
        src="https://i.ibb.co/G7Zmcc8/test.jpg"
      />
      </Link>
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Proyecto final</p>
        <h4 className="text-white font-medium text-large">???</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover blur-sm"
        src="/images/card-example-2.jpeg"
      />
    </Card>
    
  </div>
      </>
  );
}
