import React, { Component } from 'react';
import ReactTable from 'react-table'

class DataTable extends Component{

    columns = [];

    getHeaders = () => {
        let headers = [];
        this.props.data.forEach(dataItem => {
            let keys = Object.keys(dataItem);
            keys.forEach(key => {
                if (headers.indexOf(key) === -1) {
                    headers.push(key);
                }
            });
        });
        return headers;
    };

    arrangeHeaders = () => {
        let columns = [];
        let headers = this.getHeaders();
        headers.forEach(element => {

            let header =  {
                'Header': element,
                'accessor': element
            };
            columns.push(header);
        });
        return columns;
    };


    render() {
        return(
            <div>
            <ReactTable classname="table"
                        data={this.props.data}
                        columns={this.arrangeHeaders()}
                        getTrProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: (e) => {
                                    console.log('A Td Element was clicked!');
                                    console.log('it produced this event:', e);
                                    console.log('It was in this column:', column);
                                    console.log('It was in this row:', rowInfo);
                                    console.log('It was in this table instance:', instance);

                                    // IMPORTANT! React-Table uses onClick internally to trigger
                                    // events like expanding SubComponents and pivots.
                                    // By default a custom 'onClick' handler will override this functionality.
                                    // If you want to fire the original onClick handler, call the
                                    // 'handleOriginal' function.
                                }
                            }
                        }}/>
            </div>
        );
    }
}

export default DataTable;