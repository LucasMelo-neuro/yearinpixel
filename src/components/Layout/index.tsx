import React, { ReactNode } from "react";
import {
  ExperimentOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Icon from "./icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useYear } from "contexts/useYear";
import { usePathname } from "next/navigation";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: `/`,
    icon: React.createElement(AppstoreOutlined),
    label: <Link href="/">Ano</Link>,
  },
  {
    key: `/habitos`,
    icon: React.createElement(ExperimentOutlined),
    label: <Link href="/habitos">Hábitos</Link>,
  },
];

interface CustomLayoutI {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutI> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG, colorBgMask },
  } = theme.useToken();

  const pathname = usePathname()

  const { user, setVertical } = useYear();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          height: "auto",
          paddingTop: 16,
          paddingBottom: 16,
          background: "#0E0E0E",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image src={Icon} alt="icon" />
          <p style={{ lineHeight: 'initial'}}>year in pixel</p>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
          <p style={{ lineHeight: "initial" }}>{user.name}</p>
          <UserOutlined />
        </div>
      </Header>
      <Layout>
        <Sider
          width={180}
          style={{ background: colorBgContainer }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => setVertical(broken)}
        >
          <Menu
            mode="inline"
            selectedKeys={[pathname]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: "8px" }}>
          <Content
            style={{
              padding: 24,
              margin: 12,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
