import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import { getColDefs } from './gridUtil';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './grid.css';
export default function Grid(props){
    const state={
        data:props.data,
        columnDefs:getColDefs(),
        defaultColDef:{
            minWidth:100,
            sortable:true,
            filter:true,
            resizable: true,
        }
    }
    const getContextMenuItems = (params) => {
        var result = [
                'copy',
                'separator',
                'chartRange',
            ];
        return result;
  };
    return(
        <>
            <div className="ag-theme-balham" style={{height: "500px", width: "100%"}}>
                <AgGridReact
                    columnDefs={state.columnDefs}
                    defaultColDef={state.defaultColDef}
                    getContextMenuItems={getContextMenuItems}
                    enableRangeSelection={true}
                    rowData={state.data}
                />
            </div>
        </>
    )
}