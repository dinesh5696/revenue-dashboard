import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import {Card} from 'react-bootstrap';
import { getColDefs } from './gridUtil';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
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
  const createChartParams=(params)=>{
    var createRangePieChartParams = {
        cellRange: {
          columns: ['Country', 'January'],
        },
        chartType: 'pie',
        chartContainer: document.querySelector('#pieChart'),
        aggFunc: 'sum',
      };
      var createRangeGroupedColumnChartParams = {
          cellRange: {
            columns: ['Company', 'January'],
          },
          chartType: 'groupedColumn',
          chartContainer: document.querySelector('#groupedColumn'),
          aggFunc: 'sum',
        };
      params.api.createRangeChart(createRangePieChartParams);
      params.api.createRangeChart(createRangeGroupedColumnChartParams);
  }
  const onFirstDataRendered = (params) => {
    createChartParams(params);
  };
    return(
        <>
            <div>
            <Card className="left-aligned">
                <Card.Body className="cardBody">
                    <h6>Revenue by Country</h6>
                    <div id="pieChart" className="pieChart"></div>
                </Card.Body>
            </Card>
            <Card className="right-aligned">
                <Card.Body className="cardBody">
                    <h6>Revenue by Company</h6>
                    <div id="groupedColumn" className="groupedColumn"></div>
                </Card.Body>
            </Card>
                    
                    
            </div>
            <div className="ag-theme-balham" style={{height: "400px", width: "100%"}}>
                <AgGridReact
                    columnDefs={state.columnDefs}
                    defaultColDef={state.defaultColDef}
                    getContextMenuItems={getContextMenuItems}
                    enableRangeSelection={true}
                    rowData={state.data}
                    onFirstDataRendered={onFirstDataRendered}
                />
            </div>
        </>
    )
}