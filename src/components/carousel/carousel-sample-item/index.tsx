import React from "react";

import { Button } from "@/components/button";

import "./styles.scss";

type CarouselSampleItemProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export const CarouselSampleItem = ({
  title,
  description,
  onClick,
}: CarouselSampleItemProps) => {
  return (
    <div className="z-carousel-sample-item">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Button onClick={onClick}>Click</Button>
    </div>
  );
};
