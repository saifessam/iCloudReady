"use client";

import { Col, Typography } from 'antd';

type Props = {
  params: {
    title: string;
  };
};

export default function Cards({ params }: Props) {
  return (
    <Col style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", textAlign: "center" }}>
      <Typography.Title style={{ margin: 0 }}>{params.title.replace(/%20/g, " ")}</Typography.Title>
    </Col>
  );
}
