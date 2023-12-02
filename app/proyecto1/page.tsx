import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Card,
  CardBody,
  Image,
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
      <br></br>
      <p
        className="font-bold text-center "
        style={{ fontSize: 50, paddingBottom: "2.5%" }}
      >
        Proyecto 1: Identificando dígitos
      </p>

      <div className="min-w-[75%] max-w-[75%] mx-auto">
        <Card className=" py-4 flex">
          <CardBody>
            <div className="flex justify-center">
              <div className="px-10">
                <h4 className="text-white font-medium text-2xl">
                  En este proyecto se utilizaran 7 diferentes metodos de
                  agrupamiento para resolver el problema de identificar dígitos
                  escritos a mano, para despues analizar y comparar los
                  resultados y precisión de cada metodo en este problema
                  específico. Los metodos utilizados son:
                  <br></br>
                  <br></br>
                  <ul className="list-disc list-inside">
                    {" "}
                    <li>Regresión Logística</li>
                    <li>Random Forest</li> <li>SVM</li>{" "}
                    <li>Árbol de decisiones</li> <li>KNN</li> <li>GBM</li>{" "}
                    <li>Bayes Ingenuo</li>
                  </ul>
                  <br></br>
                  Para el problema se hara uso del Digits Dataset. Tambien se
                  usaran metodos de reduccion de dimensionalidad para visualizar
                  el dataset.
                </h4>
              </div>
            </div>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Análisis de datos
        </p>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              Primeramente, se cargan los datos del dataset para separarlos en
              entrenamiento y validación.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image
            src="https://i.ibb.co/gwGvfL1/Screenshot-2023-12-01-202926.png"
            alt=""
          ></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              Con esto, podemos notar que cada elemento cuenta con 64 variables
              (cada uno correspondiendo a un pixel, siendo una imagen de 8x8).
              64 variables son demasiadas para visualizar adecuadamente, por lo
              que se hara uso de metodos de reducción de dimensionalidad.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Reducción de dimensionalidad
        </p>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              Para comprender las variables de cada elemento, haremos uso de los
              metodos PCA y TSNE para reducir la dimensionalidad a solo 2
              variables.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image
            src="https://i.ibb.co/pb1Lpz4/Screenshot-2023-12-01-204137.png"
            alt=""
          ></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              Despues, utilizando las dos variables reducidas, graficamos ambos
              metodos para visualizarlos. Se obtuvieron los siguientes
              resultados:
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image src="https://i.ibb.co/M6LB6GW/dimres.png" alt=""></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              En estas gráficas se pueden observar la manera en la que los
              metodos PCA y TSNE reducen la dimensionalidad a solo 2 variables,
              donde cada color representa un grupo o clase. En TSNE se pueden
              observar grupos densos y discernibles, mientras que en PCA son
              grupos dispersos y ruidosos.<br></br>
              <br></br> Con las gráficas, se pueden responder las siguientes
              preguntas: <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>
                  <b>
                    ¿Cual método de reducción de dimensionalidad funciona mejor
                    en este caso?
                  </b>
                </li>
              </ul>{" "}
              TSNE. <br></br>
              <ul className="list-disc list-inside">
                <li>
                  <b>¿Que puedes deducir de esta imagen?</b>
                </li>
              </ul>{" "}
              Se puede observar que TSNE logro agrupar las clases de una manera
              mas efectiva y facil de visualizar que PCA, ya que PCA tiene
              grupos que, aunque sean discernibles, se pueden observar varios
              valores atípicos y grupos menos densos. <br></br>
              <ul className="list-disc list-inside">
                <li>
                  <b>¿Qué representa cada color en este caso?</b>
                </li>
              </ul>{" "}
              Cada color representa un grupo o clase de elementos dentro del
              dataset, que en este caso específico representa los números del 0
              al 9.
            </h4>
          </CardBody>
        </Card>

        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Implementación
        </p>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              En esta sección, se utilizaran los datos de training asi como sus
              respectivas etiquetas para entrenar a los distintos modelos. El
              entrenamiento que se llevara a cabo cuenta con las siguientes
              características: <br></br>
              <br></br>Se decidio usar 7 modelos diferentes, los cuales son los
              siguientes: <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>Regresión Logística</li> <li>Random Forest</li> <li>SVM</li>{" "}
                <li>Árbol de decisiones</li> <li>KNN</li> <li>GBM</li>{" "}
                <li>Bayes Ingenuo</li>
              </ul>{" "}
              <br></br>
              Mas adelante se explicaran mas a fondo estos modelos, asi como las
              expectativas de su rendimiento en este caso específico.
              <br></br>
              <br></br>
              Se normalizaran los datos para asegurar la precision e integridad
              de estos.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Entrenamiento
        </p>

        <br></br>

        <div className="flex justify-center h-1/2">
          <Image
            src="https://i.ibb.co/YWwP5fv/Screenshot-2023-12-01-210733.png"
            alt=""
          ></Image>
        </div>
        <div className="flex justify-center h-1/2">
          <Image
            src="https://i.ibb.co/W2gJhZ5/Screenshot-2023-12-01-211331.png"
            alt=""
          ></Image>
        </div>

        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Análisis de resultados
        </p>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              Antes de observar los resultados, se puede definir cada metodo,
              asi como la expectativa general. Cada metodo es de aprendizaje
              supervisado. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>Regresión Logística</li>
              </ul>{" "}
              Es un modelo simple y eficiente que puede ser adecuado para
              problemas de clasificación binaria, incluso en alta
              dimensionalidad. Es rápido de entrenar y puede manejar grandes
              conjuntos de datos. Es posible que su rendimiento no sea tan bueno
              como en problemas de baja dimensionalidad. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>Random Forest</li>
              </ul>{" "}
              Random Forest es un conjunto de árboles de decisión que se
              entrenan utilizando el método de ensamble. Cada árbol se entrena
              con una muestra aleatoria de datos Random Forest sirve para
              capturar relaciones complejas en los datos, lo cual puede ser
              conveniente en este caso. Es probable que tenga buen rendimiento.
              <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>SVM</li>
              </ul>{" "}
              Encuentra un hiperplano óptimo en el espacio de características
              que mejor separa las diferentes clases. SVM puede funcionar bien,
              ya que puede capturar las relaciones importantes sin importar el
              nivel de la dimensionalidad. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>Arbol de decisiones</li>
              </ul>
              Los árboles de decisión se basan en un conjunto de reglas de
              decisión para realizar predicciones. Este puede ser adecuado para
              el problema porque son faciles de interpretar, y seria efectivo en
              este tipo de problemas. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>KNN</li>
              </ul>{" "}
              Como el nombre indica, clasifica una instancia basándose en las
              clases de sus vecinos más cercanos. Ya que los digitos se agrupan
              bastante cerca, este metodo podria ser muy efectivo, aunque si
              habria la posibilidad de unos errores.
              <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>GBM</li>
              </ul>
              GBM es un conjunto de modelos de aprendizaje débil que se combinan
              para formar un modelo más fuerte. Cada modelo se entrena para
              corregir los errores del modelo anterior. Podra dar buenos
              resultados gracias a que sirve en problemas complejos, pero puede
              existir el riesgo de sobreajuste. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>Bayes Ingenuo</li>
              </ul>{" "}
              Es un modelo que se basa en el teorema de Bayes para calcular la
              probabilidad de que una instancia pertenezca a una clase. Este
              podria ser efectivo y rapido de entrenar.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Datos de validación en baja dimensionalidad
        </p>
        <div className="flex justify-center h-1/2">
          <Image
            src="https://i.ibb.co/TcQsdHn/Screenshot-2023-12-01-212416.png"
            alt=""
          ></Image>
        </div>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image src="https://i.ibb.co/2yJZGBS/sgsdf.png" alt=""></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-2xl">
              <ul className="list-disc list-inside">
                <li>
                  <b>¿Que representa cada color en las imagenes?</b>
                </li>
              </ul>{" "}
              Las clases o grupos, que serian los digitos. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>
                  <b>
                    Dada la imagen, ¿Parece que el modelo entrenado ha aprendido
                    algo con sentido? Explica tu razonamiento.
                  </b>
                </li>
              </ul>
              Se podria decir que todos los modelos aprendieron algo con sentido
              y logico, ya que en cada una de las graficas, se puede inferir
              como es que cada modelo decidio agrupar las clases, y tambien se
              puede observar que en para todos el proceso es efectivo de una
              manera u otra.
            </h4>
          </CardBody>
        </Card>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Visualizar imagenes en cada grupo/clase
        </p>
        <div className="flex justify-center h-1/2">
          <Image src="https://i.ibb.co/sR3HbBf/sgsdf.png" alt=""></Image>
        </div>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Comparar rendimento de distintos modelos
        </p>
        <div className="flex justify-center h-1/2">
          <Image
            src="https://i.ibb.co/QF2w9pd/Screenshot-2023-12-01-220034.png"
            alt=""
          ></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-xl">
              <ul className="list-disc list-inside">
                <li>
                  <b>
                    ¿Funcionó mejor usar un método de aprendizaje supervisado o
                    no supervisado?
                  </b>
                </li>
              </ul>{" "}
              No se hizo uso de métodos de aprendizaje no supervisado. Sin
              embargo, ya que el dataset cuenta con etiquetas, se podría decir
              que es mejor utilizar metodos de aprendizaje supervisado.{" "}
              <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>
                  <b>¿Probaste algún método de preprocesamiento distinto?</b>
                </li>
              </ul>
              No. <br></br>
              <br></br>
              <ul className="list-disc list-inside">
                <li>
                  <b>
                    ¿Funcionó mejor usar imágenes normalizadas o no
                    normalizadas?
                  </b>
                </li>
              </ul>
              Normalizadas, ya que estandariza la información de manera que los
              modelos pueden utilizarla mejor.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Conclusión
        </p>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-xl">
              Para concluir, se puede decir que el uso de la reducción de
              dimensionalidad con TSNE fue bastante util para visualizar los
              datos. De igual manera, se puede analizar que los metodos mas
              complejos, como SVM, Random Forest, y KNN, fueron los que mejor
              rendimiento tuvieron.
            </h4>
          </CardBody>
        </Card>
        <br></br>
      </div>
    </>
  );
};

export default proyecto1;
