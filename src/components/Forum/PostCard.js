import React from 'react'
import { Badge, Card, Typography, Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function PostCard({post}) {
  const { Paragraph } = Typography;
  return (
    <Badge.Ribbon text={post.category} color="orange" >
      <Card className='post-card' style={{ background: `url(${post.url})`}} >
        <Typography.Title className="post-title" level={4}>{ post.title }</Typography.Title>
        <Row justify="start" align="middle" className="post-user">
          <Col span={5}>
            <Avatar size={54} style={{ backgroundColor: "#f56a00", verticalAlign: 'middle' }} shape="square" icon={<UserOutlined />} />
          </Col>
          <Col span={7} align="middle" justify="start">
            <Typography.Title level={5}>{ post.userName }</Typography.Title>
            <Paragraph level={5}>{ "7 hours ago" }</Paragraph>
          </Col>
        </Row>
      </Card>
    </Badge.Ribbon>
  )
}
