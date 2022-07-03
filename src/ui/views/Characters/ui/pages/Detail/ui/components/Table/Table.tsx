import * as React from 'react'
import {
  Table as MUITable,
  TableBody,
  TableRow,
  Paper,
  TableCell,
  TableContainer,
} from '@mui/material'

import { Maybe } from 'src/common/utils'
import { TypeEntries } from 'src/common/types'

interface ITable {
  data: TypeEntries<any>
}

const Table: React.FC<ITable> = ({ data = [] }) => {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 500 }}>
        <TableBody>
          {data?.map((row: any, rowIndex) => (
            <TableRow key={`tr-${rowIndex}`}>
              {row.map((rowItem: string, index: number) => (
                <TableCell
                  key={`th-${rowIndex}-${index}`}
                  component='th'
                  scope='row'
                >
                  {Maybe.isArrayOrString(rowItem)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  )
}

export default Table
