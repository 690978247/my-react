import React, { Component } from 'react' 
import './iot.scss'
import { Table, Input, Button, Modal, Tree } from 'antd'

class IOT extends Component  {
  constructor(props){
    super(props)
    this.state = {
      popup: false, 
      cloums: [
        {
          title: '序号',
          dataIndex: 'num',
          className: 'table-thead'
        },
        {
          title: '变量名',
          dataIndex: 'name',
          className: 'table-thead'
        },
        {
          title: '变量描述',
          dataIndex: 'describe',
          className: 'table-thead'
        },
        {
          title: '数据类型',
          dataIndex: 'dataType',
          className: 'table-thead'
        },
        {
          title: '变量地址',
          dataIndex: 'address',
          className: 'table-thead',
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
          className: 'table-thead',
          render: (codeLen) => (
            <div className="address-text">
              <Input className="address-input" value={codeLen} />
            </div>
          )
        },
        {
          title: '缩放比',
          dataIndex: 'zoom',
          className: 'table-thead'
        },
        {
          title: '数据归档',
          dataIndex: 'dataFile',
          className: 'table-thead'
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
      ],
      opcCloums: [
        {
          title: '',
          dataIndex: 'num',
          width: 50,
          align: 'center',
          className: 'opc-th',
          key: 'num'
        },
        {
          title: '变量名',
          dataIndex: 'name',
          align: 'center',
          className: 'opc-th',
          key: 'name'
        },
        {
          title: '数据类型',
          dataIndex: 'dataType',
          align: 'center',
          className: 'opc-th',
          key: 'dataType'
        }
      ],
      opcTableData: [
        {
          num: '1',
          key: '1',
          name: 'Tag_1',
          dataType: '二进制变量'
        },
        {
          num: '2',
          key: '2',
          name: 'Tag_2',
          dataType: '有符号8位整型'
        },
        {
          num: '3',
          key: '3',
          name: 'Tag_3',
          dataType: '文本变量8位字符集'
        },
        {
          num: '4',
          key: '4',
          name: 'Tag_4',
          dataType: '字符串'
        }
      ],
      treeData: [
        {
          title: '组1',
          key: '1',
          children: [
            {
              title: '组1-1',
              key: '1-1'
            },
            {
              title: '组1-2',
              key: '1-2'
            }
          ]
        },
        {
          title: '组2',
          key: '2',
          children: [
            {
              title: '组2-1',
              key: '2-1'
            }
          ]
        },
        {
          title: '组3',
          key: '3',
          children: [
            {
              title: '组3-1',
              key: '3-1'
            }
          ]
        },
        {
          title: '组4',
          key: '4',
        },
        {
          title: '组5',
          key: '5',
        }
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
          className="popup"
          width="760px"
          visible={this.state.popup}
          onOk={() => {this.confirmPop()}}
          onCancel={() => {this.cancelPop()}}
          okText="确认"
          cancelText="取消"
        >
          <div className="popup-wrap" >
            <div className="pw-left" >
              <div className="group-title" >组列表</div>
              <div className="group-tree" >
                <Tree 
                  blockNode
                  treeData={this.state.treeData}
                />
              </div>
            </div>
            <div className="pw-right" >
              <Table
                columns={this.state.opcCloums}
                scroll={{ y: 420 }}
                dataSource={this.state.opcTableData}
                pagination={false}
                bordered
              />
            </div>
          </div>
        </Modal>
      </>
    )
  }
}

export default IOT