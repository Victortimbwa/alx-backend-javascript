import * as CRUD from './crud';
import { rowID, rowElement } from './crud';


const row : RowElement = {
    firstName: 'Victor',
    lastName: 'Timbwa'
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(newRowID);
