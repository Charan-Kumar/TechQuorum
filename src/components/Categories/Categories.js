import React from 'react'
import { Typography, Row, Col, Space, Card, Image } from 'antd';
import Icon, { FolderFilled } from '@ant-design/icons';
import ReactSvg from '../../assets/images/react.svg';
import LensSvg from '../../assets/images/lens.svg';
import Web3Svg from '../../assets/images/web3.svg';
import SoliditySvg from '../../assets/images/solidity.svg'


export default function Categories() {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', marginTop: '30px' }}>
      <Row gutter={[16, 24]}>
        <Col flex={1} className="gutter-row">
          <Typography.Title  type={"primary"} level={3}><FolderFilled /> Categories</Typography.Title>
        </Col>
        <Col flex={3} className="gutter-row">
        </Col>
        <Col flex={1} className="gutter-row" style={{ alignSelf: 'center', display: 'flex', justifyContent: 'flex-end'}}>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={4}>
          <Card bordered={true} hoverable={true}>
            <Space direction="vertical" size="middle" style={{ display: 'flex', textAlign: 'center', marginTop: '30px' }}>
              <Image src={ReactSvg} style={{ height: '36px', color: '#08c' }} />
              <Typography.Title  type={"primary"} level={3}>React</Typography.Title>
            </Space>
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true} hoverable={true}>
            <Space direction="vertical" size="middle" style={{ display: 'flex', textAlign: 'center', marginTop: '30px' }}>
              <Image src={Web3Svg}  style={{ height: '36px', color: '#08c' }} />
              <Typography.Title  type={"primary"} level={3}>Web 3</Typography.Title>
            </Space>
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true} hoverable={true}>
            <Space direction="vertical" size="middle" style={{ display: 'flex', textAlign: 'center', marginTop: '30px' }}>
              <Image src={LensSvg} style={{ height: '36px', color: '#08c' }} />
              <Typography.Title  type={"primary"} level={3}>Lens</Typography.Title>
            </Space>
          </Card>
        </Col>
        <Col span={4}>
          <Card bordered={true} hoverable={true}>
            <Space direction="vertical" size="middle" style={{ display: 'flex', textAlign: 'center', marginTop: '30px' }}>
              <Image src={SoliditySvg} style={{ height: '36px', color: '#08c' }} />
              <Typography.Title  type={"primary"} level={3}>Solidity</Typography.Title>
            </Space>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}