'use client'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';

export default function ParametersTable() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Parámetros</TableColumn>
        <TableColumn>Valores</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="2">
          <TableCell>Gamma</TableCell>
          <TableCell>0.99</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Epsilon</TableCell>
          <TableCell>1.0</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Tasa de Aprendizaje (lr)</TableCell>
          <TableCell>0.0001</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Dimensiones de Entrada (input_dims)</TableCell>
          <TableCell>2</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Número de Acciones (n_actions)</TableCell>
          <TableCell>3</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell>Tamaño del Lote (batch_size)</TableCell>
          <TableCell>64</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell>Acciones Máximas (max_actions)</TableCell>
          <TableCell>1000</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell>Epsilon Final (eps_end)</TableCell>
          <TableCell>0.01</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell>Decremento de Epsilon (eps_dec)</TableCell>
          <TableCell>1e-5</TableCell>
        </TableRow>
        <TableRow key="11">
          <TableCell>Intervalo de Actualización de la Red Objetivo (target_update_interval)</TableCell>
          <TableCell>1000</TableCell>
        </TableRow>
        <TableRow key="12">
          <TableCell>Dimensiones de la Primera Capa (fc1_dims)</TableCell>
          <TableCell>256</TableCell>
        </TableRow>
        <TableRow key="13">
          <TableCell>Dimensiones de la Segunda Capa (fc2_dims)</TableCell>
          <TableCell>256</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}


