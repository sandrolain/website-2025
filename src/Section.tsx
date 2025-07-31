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
  icon?: string;
  title: string;
  children: React.ReactNode;
  reflexColor: string;
  glareColor?: string; // Optional prop for glare color
  tiltEnable?: boolean; // Optional prop to enable tilt
}

export const Section = (props: SectionProps) => (
  <div className="min-h-[150vh]">
    <div className="sticky top-0 mt-40 z-10 flex min-h-[100vh] items-center justify-center">
      <Tilt
        {...{
          ...tiltProps,
          tiltEnable: props.tiltEnable ?? true,
          glareColor:
            props.glareColor ?? props.reflexColor ?? commonColors.white[500],
        }}
        className="w-full"
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
            <h2 className="text-2xl font-light title-font">
              {props.icon && <i className={`mr-2 ${props.icon}`} />}{" "}
              {props.title}
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="p-8">{props.children}</CardBody>
        </Card>
      </Tilt>
    </div>
  </div>
);
