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
const proyecto2 = () => {
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
          <NavbarItem>
            <Link color="foreground" href="/proyecto2">
              Proyecto 1
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current="page">Proyecto 2</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <p
        className="font-bold text-center "
        style={{ fontSize: 50, paddingBottom: "2.5%" }}
      >
        Proyecto 2: Reconocimiento de expresiones faciales
      </p>
      <div className="flex justify-center">
        <Image src="https://i.ibb.co/HT3dcBb/cnn2.png" alt=""></Image>
      </div>
      <br></br>
      <div className="px-96">
        <Card className=" py-4 flex">
          <CardBody>
            <div className="flex justify-center">
              <div className="px-10">
                <h4 className="text-white font-medium text-large">
                  Este proyecto consiste en el entrenamiento de un modelo de{" "}
                  <b>reconocimiento de emociones faciales</b> en base a un
                  conjunto de entrenamiento de 48x48px. La baja resolución
                  impone limitaciones en la capacidad del modelo para capturar
                  detalles finos y matices en las expresiones faciales, lo que
                  podría afectar la precisión del reconocimiento emocional.
                  Además, la resolución limitada también puede dificultar la
                  generalización del modelo a situaciones del mundo real con
                  imágenes de mayor calidad. Las variaciones en la iluminación,
                  el ángulo de la cara y otros factores ambientales pueden no
                  estar bien representados en un conjunto de entrenamiento de
                  baja resolución, lo que podría resultar en un modelo menos
                  efectivo cuando se enfrenta a datos más complejos.
                </h4>
              </div>
            </div>
          </CardBody>
        </Card>
        <br></br>

        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              Con propósito de aumento de datos, cada imagen tiene una
              probabilidad del 50% de ser volteada horizontalmente antes de
              llegar al modelo. De igual forma, se aplica una rotación aleatoria
              de entre -30° y 30°.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image src="https://i.ibb.co/DCkjKvr/emotions.png" alt=""></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              La red neuronal consiste en <b>tres capas de convolución</b>, con
              una salida de 32, 64 y 128 canales cada una. El tamaño de la
              matriz de imagen que cada capa recibe va disminuyendo desde los 48
              pixeles por lado iniciales, a 24 en la segunda capa, a 12 en la
              última. La primera capa debe de detectar características de bajo
              nivel, como bordes y texturas, mientras que las capas
              subsiguientes (con más filtros y capas más profundas) aprenderán
              características más abstractas y complejas, como patrones de
              expresiones faciales. La reducción progresiva de la resolución
              tiene el objetivo de reducir la carga computacional del modelo.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image src="https://i.ibb.co/g7JVVCY/377235580-1271318670365888-531272057900287018-n.png" alt=""></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              Seguido a las capas de convolución se aplica una capa de{" "}
              <i>dropout</i>, la cual introduce aleatoriamente la eliminación de
              unidades (neuronas) durante el entrenamiento, lo que significa
              que, en cada iteración, algunas de las neuronas se "apagan"
              temporalmente. Esto ayuda a prevenir la coadaptación de unidades
              al forzar a la red a aprender características más robustas y
              generalizables, ya que no puede depender demasiado de ninguna
              unidad particular.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <div className="flex justify-center h-1/2">
          <Image src="https://i.ibb.co/KFGSp0n/386856340-716384416656282-3601718657257782212-n.png" alt=""></Image>
        </div>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              Después del dropout los mapas de características tridimensionales
              producidos por las capas de convolución se transforman en tensores
              unidimensionales para su procesamiento. La capa siguiente, la cual
              ya es una capa lineal totalmente conectada, realiza una
              transformación lineal del tensor aplanado anterior a un espacio de
              características de 1024 dimensiones. Los parámetros de esta capa,
              es decir, los pesos y sesgos, son aprendidos durante el
              entrenamiento para mapear las características extraídas de las
              capas convolucionales a una representación más compacta y
              abstracta.
            </h4>
          </CardBody>
        </Card>

        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              Posteriormente, se utilizan dos capas totalmente conectadas
              adicionales para reducir la dimensionalidad del espacio de
              decisión a tan solo 7 neuronas, representando las 7 emociones que
              puede detectar el modelo.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              Posterior a cada capa de convolución y capa totalmente conectada
              se utilizan capas de activación ReLU. Estas introducen no
              linealidad al modelo (al convertir todo valor negativo en 0),
              permitiendo al sistema aprender de manera más efectiva patrones
              complejos y no lineales presentes en las expresiones faciales.
              Esta capacidad de modelar relaciones no lineales es esencial para
              capturar la diversidad y la complejidad de las expresiones
              emocionales humanas.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              Los hiperparametros utilizados fueron los siguientes:
            </h4>
            <br></br>
            <Image src="https://i.ibb.co/r5MnxMT/download.png" alt=""></Image>
          </CardBody>
        </Card>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-medium text-large">
              La red originalmente contaba con una capa adicional de convolución
              con el propósito de ayudar al modelo inferir detalles más finos.
              Sin embargo, esto ocasionó que la red fuera muy propensa al
              sobreentreno sin ningún beneficio en términos de precisión. De
              igual forma se intentó introducir una segunda capa de dropout, la
              cual tuvo un impacto negativo en la exactitud del modelo, por lo
              que fue descartada. La reducción en tamaño de la red permitió a su
              vez un aumento del learning rate, alcanzando el valor de 1e-4. Con
              la arquitectura anterior, este valor ocasionaba que el modelo
              rápidamente pierda el camino y empiece a aumentar la pérdida de
              validación. De igual forma, con el propósito de ayudar al modelo a
              generalizar, se introdujo decaimiento de peso dentro del
              optimizador Adam, lo cual impide que cualquier neurona tenga un
              valor demasiado grande. Se redujo el tamaño de batch, pero esto no
              pareció afectar al rendimiento del modelo significativamente. El
              modelo final alcanzó una <b>precisión del 60%</b>.
            </h4>
            <br></br>
            <div className="flex justify-center">
              <Image alt="" src="https://scontent.fmxl1-1.fna.fbcdn.net/v/t1.15752-9/400280502_225472077101659_2069618099870094012_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGBof9SiyNW-PAcUx81gvwNR2UsMPmCModHZSww-YIyh6BwsxsmwZtWkJhVU6Jaxpj3cL5QDhx6iVa07BuTNdQo&_nc_ohc=mQ0V93hNN-sAX_xZDP1&_nc_ht=scontent.fmxl1-1.fna&oh=03_AdTGKmTYc5tqZFesC0Kq5HkiQ5I3vsiqSexqLuryxwVklw&oe=657A2795"></Image>
            </div>
            <br></br>
            <div className="flex justify-center">
              <Image alt="" src="https://i.ibb.co/sbtTVkT/Figure-1.png"></Image>
            </div>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Predicciones
        </p>
        <Card className="px-4 py-4">
          <CardBody>
            <div className="flex">
              <Image alt="" src="https://i.ibb.co/fNFZs6q/pred1.png"></Image>
              <br></br>
              <Image alt="" src="https://i.ibb.co/gwkCBhf/pred2.png"></Image>
              <br></br>
              <Image alt="" src="https://i.ibb.co/dQG7xdt/pred3.png"></Image>
              <br></br>
              <Image alt="" src="https://i.ibb.co/x3ntqsp/pred4.png"></Image>
              <br></br>
            </div>
          </CardBody>
        </Card>
        <br></br>
        <p
          className="font-bold text-center "
          style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
          Conclusiones
        </p>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-bold text-3xl">Iñaki</h4>
            <br></br>
            <h4 className="text-white font-medium text-xl">
              Para concluir, este me parecio un proyecto muy interesante, ya que
              se logro aplicar la teoria vista a traves del periodo en un ambito
              real. Fue interesante ver como funcionaban los metodos de
              aumentacion de datos, y tambien fue bastante interesante estar
              manipulando los hiperparametros para observar que cambios
              presentaban y cuales eran los roles especificos que jugaban, lo
              cual en lo personal me dio un entendimiento mas claro de cada uno
              de estos hiperparametros.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-bold text-3xl">César</h4>
            <br></br>
            <h4 className="text-white font-medium text-xl">
              Por mi parte, el proceso de creación y mejora de la red neuronal
              fue sumamente interesante. El intento de diagnosticar y solucionar
              problemas con el modelo me llevó a una investigación profunda del
              desarrollo de redes y del aprendizaje profundo. Esta investigación
              llevó a la implementación de ciertos hiperparámetros que yo no
              conocía en un principio. El campo de visión por computadora es
              sumamente interesante y espero seguir aprendiendo sobre este.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-bold text-3xl">Diego</h4>
            <br></br>
            <h4 className="text-white font-medium text-xl">
              En resumen, mi experiencia colaborando en este proyecto ha sido
              gratificante. Me brindó la oportunidad de explorar y descubrir
              formas creativas de optimización. Este trabajo me permitió
              profundizar en el entendimiento sobre cómo se puede ajustar y
              mejorar la 'inteligencia' de una red. Este proyecto no solo fue un
              ejercicio de aprendizaje técnico, sino también una valiosa lección
              sobre el potencial y las posibilidades que la tecnología moderna
              puede ofrecer en diversos aspectos de la vida y el trabajo.
            </h4>
          </CardBody>
        </Card>
        <br></br>
        <Card className="px-4 py-4">
          <CardBody>
            <h4 className="text-white font-bold text-3xl">Luis</h4>
            <br></br>
            <h4 className="text-white font-medium text-xl">
              Por mi parte, el proceso de creación y mejora de la red neuronal
              fue sumamente interesante. El intento de diagnosticar y solucionar
              problemas con el modelo me llevó a una investigación profunda del
              desarrollo de redes y del aprendizaje profundo. Esta investigación
              llevó a la implementación de ciertos hiperparámetros que yo no
              conocía en un principio. El campo de visión por computadora es
              sumamente interesante y espero seguir aprendiendo sobre este.
            </h4>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default proyecto2;
