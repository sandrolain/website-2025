import {
  Card,
  CardBody,
  CardHeader,
  commonColors,
  Divider,
} from "@heroui/react";
import { tiltProps } from "./data";
import Tilt from "react-parallax-tilt";

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  reflexColor: string;
  glareColor?: string; // Optional prop for glare color
  tiltEnable?: boolean; // Optional prop to enable tilt
}

export const Section = (props: SectionProps) => (
  <div className="min-h-[100vh]">
    <div className="sticky top-10 mt-40 z-10">
      <Tilt
        {...{
          ...tiltProps,
          tiltEnable: props.tiltEnable ?? true,
          glareColor:
            props.glareColor ?? props.reflexColor ?? commonColors.white[500],
        }}
      >
        <Card
          className="glass"
          style={
            {
              "--reflex-color": props.reflexColor || commonColors.white[500],
            } as React.CSSProperties
          }
        >
          <CardHeader className="px-8 py-4">
            <h2 className="text-2xl font-light">{props.title}</h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-8">{props.children}</CardBody>
        </Card>
      </Tilt>
    </div>
  </div>
);
