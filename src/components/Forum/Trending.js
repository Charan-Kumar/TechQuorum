import React from 'react'
import { Typography, Row, Col, Space } from 'antd';
import PostCard from './PostCard';
import {
  BarChartOutlined,
} from '@ant-design/icons';


export default function Trending() {
  const posts = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      userName: "Charan",
      timestamp: "",
      avatar: "",
      category: "React"
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      userName: "Prayag",
      timestamp: "",
      avatar: "",
      category: "Web3"
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      userName: "Vikas",
      timestamp: "",
      avatar: "",
      category: "Smart Contracts"
    }
  ]
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Row gutter={[16, 24]}>
        <Col flex={1} className="gutter-row">
          <Typography.Title  type={"primary"} level={3}><BarChartOutlined /> Top Trending Now</Typography.Title>
        </Col>
        <Col flex={3} className="gutter-row">
        </Col>
        <Col flex={1} className="gutter-row" style={{ alignSelf: 'center', display: 'flex', justifyContent: 'flex-end'}}>
        </Col>
      </Row>
      <Row gutter={16}>
        { posts.map((a) => (
          <Col span={8}>
            <PostCard post={a} />
          </Col>
        ))}
        
      </Row>
    </Space>

  )
}
