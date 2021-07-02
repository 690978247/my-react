import React, { Component } from 'react' 
import './iot.scss'
import { Table, Input, Button, Modal } from 'antd'

class IOT extends Component  {
  constructor(props){
    super(props)
    this.state = {
      popup: false, 
      cloums: [
        {
          title: '序号',
          dataIndex: 'num',
        },
        {
          title: '变量名',
          dataIndex: 'name',
        },
        {
          title: '变量描述',
          dataIndex: 'describe',
        },
        {
          title: '数据类型',
          dataIndex: 'dataType',
        },
        {
          title: '变量地址',
          dataIndex: 'address',
          render: address => (
            <div className="address-text">
              <Input className="address-input" />
              <Button className="address-btn" onClick={() => {this.poenPop()}} >. . .</Button>
            </div>
          )
        },
        {
          title: '字符长度',
          dataIndex: 'codeLen',
          render: (codeLen) => (
            <div className="address-text">
              <Input className="address-input" value={codeLen} />
            </div>
          )
        },
        {
          title: '缩放比',
          dataIndex: 'zoom',
        },
        {
          title: '数据归档',
          dataIndex: 'dataFile',
        },
        
      ],
      tableData: [
        {
          key: '1',
          num: '1',
          name: '',
          describe: '',
          dataType: '二进制变量',
          address: '',
          codeLen: '4',
          zoom: '',
          dataFile: ''
        },
      ]
    }
  }

  poenPop() {
    this.setState({
      popup: true
    })
  }

  confirmPop() {
    this.setState({
      popup: false
    })
  }

  cancelPop() {
    this.setState({
      popup: false
    })
  }

  render() {
    return (
      <>
        <Table 
          columns={this.state.cloums}
          dataSource={this.state.tableData}
          pagination={false}
          bordered
        />
        <Modal 
          title="选择OPC变量"
          visible={this.state.popup}
          onOk={() => {this.confirmPop()}}
          onCancel={() => {this.cancelPop()}}
        />
      </>
    )
  }
}

export default IOT