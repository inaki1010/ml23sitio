'use client'
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Tabs, 
  Tab,
  Spacer,
} from "@nextui-org/react";
import Gist from "react-gist";
import ParametersTable from "./components/ParametersTable";

export default function proyecto3 (){
    return (
      <> 
        <p
            className="font-bold text-center "
            style={{ fontSize: 50, paddingBottom: "2.5%" }}
        >
            Proyecto Final: Mountain Car
        </p>

        <div className="min-w-[75%] max-w-[75%] mx-auto">
            <Card className=" py-4 flex">
                <CardBody>
                    <div className="flex justify-center">
                    <div className="px-10">
                        <h4 className="text-white font-medium text-2xl">
                            Este proyecto explora el entrenamiento de un agente de inteligencia artificial
                            en el entorno MountainCar-v0 de Gymnasium, utilizando una red neuronal profunda 
                            Q (Deep Q-Network, DQN). A pesar de la aparente simplicidad del entorno, la tarea
                            plantea retos significativos debido a la limitada información visual y a la estructura 
                            de recompensas. Estas restricciones se convierten en un campo de pruebas para evaluar y 
                            mejorar la capacidad de aprendizaje y adaptación del agente, destacando la importancia 
                            de estrategias efectivas para enfrentar entornos con limitaciones y promoviendo la 
                            precisión.
                        </h4>
                    </div>
                    </div>
                </CardBody>
            </Card>
            <p
                className="font-bold text-center "
                style={{ fontSize: 50, paddingBottom: "2.5%" }}
                >
                Teoría
            </p>
            <div className="flex w-full flex-col">
            <Tabs aria-label="Options">
                <Tab key="EstadosyAcciones" title="Estados y Acciones">
                    <Card>
                        <CardBody>
                            <p>
                                - En Q-Learning, un agente interactúa con un entorno que se encuentra en un estado particular.
                            </p>
                            <p>
                                - El agente puede tomar diversas acciones, y cada acción lleva al entorno a un nuevo estado.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="FuncionQ" title="Función Q">
                    <Card>
                        <CardBody>
                            <p>
                                - El corazón del Q-Learning es la función Q, que asocia un valor (Q-valor) a cada par de estado-acción.
                            </p>
                            <p>
                                - Este valor es una estimación de la utilidad o recompensa que se espera obtener al tomar una acción en un estado dado y seguir luego la política óptima.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="PoliticaOptima" title="Política Óptima">
                    <Card>
                        <CardBody>
                            <p>
                                - Una política define la estrategia que el agente sigue, es decir, qué acción tomar en cada estado.
                            </p>
                            <p>
                                - La política óptima maximiza la recompensa total que el agente puede esperar obtener a lo largo del tiempo.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="EcuaciondeBellman" title="Ecuación de Bellman">
                    <Card>
                        <CardBody>
                            <p>
                                - Los Q-valores se actualizan utilizando la Ecuación de Bellman. 
                            </p>
                            <p>
                                - En su forma más básica, la ecuación es: Q(s,a) = Q(s,a) + α [R(s,a) + γ maxa{"'"} Q(s{"'"},a{"'"}) - Q(s,a)].
                            </p>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="ExploracionvsExplotacion" title="Exploración vs. Explotación">
                    <Card>
                        <CardBody>
                            <p>
                                - La exploración (probar acciones nuevas) y la explotación (usar acciones conocidas que dan buenas recompensas) son conceptos clave en el Q-Learning.
                            </p>
                            <p>
                                - Un balance entre ambos es crucial para encontrar la política óptima.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="Convergencia" title="Convergencia">
                    <Card>
                        <CardBody>
                            <p>
                                - Bajo ciertas condiciones, se garantiza que el Q-Learning converja hacia la política óptima.
                            </p>
                            <p>
                                - Estas condiciones incluyen una tasa de aprendizaje adecuada y asegurarse de que todas las acciones sean exploradas suficientemente.
                            </p>
                        </CardBody>
                    </Card>
                </Tab>
                </Tabs>
            </div>

            <p
                className="font-bold text-center "
                style={{ fontSize: 50, paddingBottom: "2.5%" }}
                >
                Entendiendo el ambiente
            </p>
            <div>
                <Card>
                    <CardBody>
                    <p><strong>Agente</strong></p>
                    <p>
                        El agente utiliza Q-learning para controlar un automóvil en el entorno MountainCar-v0 de Gymnasium.
                    </p>
                    </CardBody>
                </Card>
                <Spacer y={2} />
                <Card>
                    <CardBody>
                    <p><strong>Estados</strong></p>
                    <p>
                        Los estados se definen por la posición y la velocidad del automóvil en la colina.
                    </p>
                    <p>
                        El agente elige acciones para maximizar recompensas y aprender una política óptima.
                    </p>
                    </CardBody>
                </Card>
            </div>

            <p
            className="font-bold text-center "
            style={{ fontSize: 50, paddingBottom: "2.5%" }}
            >
                Implementacion de la red neuronal
            </p>
            <Gist id="ad948e16eebdd8e39b42c04baff5cb63" />
            <Card className="m-8">
                <CardBody>
                <p>
                La red neuronal definida en la clase DeepQNetwork es una red neuronal de alimentación directa (feedforward) con tres capas completamente conectadas
                <br></br>
                Tambien tienes self.target que es una copia de la red.
                </p>
                </CardBody>
            </Card>

            <Gist id="8d52c2f1ecfdc437e695567eb5ecb573" />
            <Card className="m-8">
                <CardBody>
                <p>
                    Se utiliza una red objetivo (TargetNetwork) para mejorar la estabilidad 
                    durante el entrenamiento en el Q-learning profundo. Esta red objetivo tiene
                    la misma arquitectura que la red principal, pero sus pesos se actualizan de
                    forma diferida y menos frecuente.

                </p>
                </CardBody>
            </Card>



            <Gist id="1f0521af31d36129942dc873016b6f11" />
            <Card className="m-8">
                <CardBody>
                <p>
                    Se utiliza una relu para una activacion no lineal entre las capas completamente conectadas.
                </p>
                </CardBody>
            </Card>

            <p
            className="font-bold text-center "
            style={{ fontSize: 50, paddingBottom: "2.5%" }}
            >
                Implementacion del agente
            </p>
            <Gist id="7c38a951bf28be1e20be503c7dd83366" />
            <Card className="m-8">
                <CardBody>
                    <p>
                        El constructor <code>__init__</code> de <code>Agent</code> configura el aprendizaje por refuerzo. Establece parámetros como <code>gamma</code> (factor de descuento), <code>epsilon</code> (para exploración y explotación), y <code>lr</code> (tasa de aprendizaje). Inicializa la red <code>DeepQNetwork</code> y memorias para experiencias (estados, acciones, recompensas). Define <code>mem_size</code>, <code>batch_size</code>, y <code>target_update_interval</code> para controlar el aprendizaje y la actualización de la red objetivo.
                    </p>
                </CardBody>
            </Card>

            <Gist id="4a728fa9335f4f379f42c81aa7623001" />
            <Card className="m-8">
                <CardBody>
                    <p>
                        La función <code>store_transition</code> en la clase <code>Agent</code> es crucial para el aprendizaje por refuerzo, ya que se encarga de almacenar las experiencias del agente en la memoria. Cada experiencia, compuesta por el estado actual, la acción tomada, la recompensa recibida, el nuevo estado y si el episodio terminó, se guarda en matrices específicas. El índice para almacenar cada experiencia se determina por <code>self.mem_cntr</code>, asegurando un almacenamiento cíclico en la memoria. Esto permite al agente recordar y aprender de experiencias pasadas, formando la base para decisiones futuras y ajustes en su estrategia de aprendizaje.
                    </p>
                </CardBody>
            </Card>

            <Gist id="6ab3ab02e422695ab61bf19b90a6932c" />
            <Card className="m-8">
                <CardBody>
                    <p>
                        La función <code>choose_action</code> de la clase <code>Agent</code> determina la acción que el agente debe tomar en un estado dado. Utiliza la política ε-greedy, que equilibra entre explorar acciones aleatorias y explotar el conocimiento aprendido. Si un número aleatorio es mayor que <code>epsilon</code>, el agente elige la acción con la mayor estimación de valor según su red neuronal (<code>DeepQNetwork</code>). De lo contrario, selecciona una acción al azar. Esta estrategia permite al agente explorar el entorno de manera efectiva mientras refina gradualmente su política de decisiones basada en el aprendizaje acumulado.
                    </p>
                </CardBody>
            </Card>


            <Gist id="a409ae8a727ff2adac5dc9689ad00152" />
            <Card className="m-8">
                <CardBody>
                    <p>
                        La función <code>learn</code> en la clase <code>Agent</code> es el núcleo del proceso de aprendizaje. Esta función se activa solo si la memoria del agente ha acumulado suficientes experiencias (determinadas por <code>self.batch_size</code>). Durante el aprendizaje, se selecciona un lote aleatorio de experiencias para actualizar la red neuronal (<code>DeepQNetwork</code>). La función calcula la diferencia entre los valores Q predichos y los valores Q objetivo (basados en las recompensas recibidas y las estimaciones de la red objetivo para el nuevo estado), y ajusta los pesos de la red para minimizar esta diferencia. Además, ajusta gradualmente <code>epsilon</code> para reducir la exploración aleatoria con el tiempo. La función también verifica si es necesario actualizar la red objetivo, lo cual es crucial para mantener estables los valores Q objetivo durante el aprendizaje.
                    </p>
                </CardBody>
            </Card>

            <p
            className="font-bold text-center "
            style={{ fontSize: 50, paddingBottom: "2.5%" }}
            >
                Implementacion del agente
            </p>

            <Gist id="fd3f2489ab3b16adcd69e6325a919654" />
            <Card className="m-8">
                <CardBody>
                    <p>
                        Aqui se ejecuta un proceso de entrenamiento a través de un número definido de episodios (<code>num_episodes</code>). En cada episodio, el entorno se reinicia y se establecen las variables iniciales como el total de recompensas y acciones tomadas. Durante cada episodio, el agente realiza una serie de acciones: elige la mejor acción basada en su estado actual, ejecuta esta acción en el entorno, y luego almacena la experiencia (estado actual, acción, recompensa, nuevo estado) para su aprendizaje futuro. El agente también se actualiza después de cada acción mediante el aprendizaje de las experiencias almacenadas. Este ciclo continúa hasta que el episodio termina, ya sea por la conclusión natural del episodio o porque se ha alcanzado el número máximo de acciones (<code>max_actions</code>). Tras completar un episodio, se evalúa el rendimiento total y se guarda el modelo si se ha logrado una nueva recompensa máxima, asegurando que el agente mejore y se adapte con cada episodio.
                    </p>
                </CardBody>
            </Card>


            <p
            className="font-bold text-center "
            style={{ fontSize: 50, paddingBottom: "2.5%" }}
            >
                Pruebas y entrenamiento
            </p>
            <ParametersTable></ParametersTable>

            AQUI FALTA PONER IMAGENES DE LAS GRAFICAS Y EXPLICARLAS

            <p
            className="font-bold text-center "
            style={{ fontSize: 50, paddingBottom: "2.5%" }}
            >
                Pruebas y entrenamiento
            </p>

            FALTA CONCLUSION 
        </div>
      </>
    );
}