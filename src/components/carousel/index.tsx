import React, { useCallback, useState, useEffect } from "react";
import classNames from "classnames";

import { ArrowLeftIcon } from "@/assets/react-svgs";
import { useWindowSize } from "@/hooks/use-window-size";

import "./styles.scss";

const ANIMATION_DURATION = 200;

export type CarouselPageBreakpoint = {
  minWidth: number;
  itemsToShow: number;
};

type CarouselProps = {
  children: React.ReactNode[];
  pageBreakpoints: CarouselPageBreakpoint[];
  className?: string;
};

enum AnimationTypes {
  PLUS = "plus",
  MINUS = "minus",
  SELECT = "select",
}

export const Carousel = ({
  className,
  children,
  pageBreakpoints,
}: CarouselProps) => {
  const { width } = useWindowSize();

  const [itemsByPage, setItemsByPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [animationType, setAnimationType] = useState<AnimationTypes>(
    AnimationTypes.SELECT
  );
  const [hideAnimation, setHideAnimation] = useState(false);
  const [paginatedData, setPaginatedData] = useState<React.ReactNode[]>([]);

  const isOnFirstPage = currentPage === 0;
  const isOnLastPage = currentPage === paginatedData.length - 1;
  const pageNavigationIndexes = [...Array(paginatedData.length).keys()];

  const setPage = (chosenAnimation: AnimationTypes, pageIndex?: number) => {
    setHideAnimation(true);
    setAnimationType(chosenAnimation);

    const newPageStateByAnimationType = {
      [AnimationTypes.SELECT]: pageIndex!,
      [AnimationTypes.PLUS]: (prevState: number) => prevState + 1,
      [AnimationTypes.MINUS]: (prevState: number) => prevState - 1,
    };

    const timer = setTimeout(() => {
      setHideAnimation(false);
      setCurrentPage(newPageStateByAnimationType[chosenAnimation]);
    }, ANIMATION_DURATION);
    return () => clearTimeout(timer);
  };

  const setPageByIndex = (pageIndex: number) => {
    setPage(AnimationTypes.SELECT, pageIndex);
  };

  const setNextPage = () => {
    if (isOnLastPage) {
      return;
    }
    setPage(AnimationTypes.PLUS);
  };

  const setPreviousPage = () => {
    if (isOnFirstPage) {
      return;
    }
    setPage(AnimationTypes.MINUS);
  };

  const paginateData = useCallback(() => {
    const paginatedItems = [];
    let pageItems: React.ReactNode[] = [];
    let index = 0;

    children.forEach((item) => {
      pageItems.push(item);
      index += 1;
      if (index === itemsByPage) {
        paginatedItems.push(pageItems);
        pageItems = [];
        index = 0;
      }
    });

    if (pageItems.length) {
      paginatedItems.push(pageItems);
    }
    return paginatedItems;
  }, [children, itemsByPage]);

  useEffect(() => {
    for (let i = pageBreakpoints.length - 1; i >= 0; i -= 1) {
      const { minWidth, itemsToShow } = pageBreakpoints[i];
      if (width > minWidth) {
        setItemsByPage(itemsToShow);
        break;
      }
    }
  }, [width, pageBreakpoints]);

  useEffect(() => {
    setCurrentPage(0);
    setPaginatedData(paginateData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsByPage, children]);

  return (
    <div className={classNames("z-carousel", className)}>
      <div className={"z-carousel__items-container"}>
        <button
          className={classNames(
            "z-carousel__page-control",
            "z-carousel__page-control--left"
          )}
          onClick={setPreviousPage}
          disabled={isOnFirstPage || hideAnimation}
          type="button"
        >
          <ArrowLeftIcon className="z-carousel__icon" />
        </button>
        <div className="z-carousel__items">
          <ul
            className={classNames(
              "z-carousel__content-page",
              hideAnimation && "z-carousel__content-page--hide",
              `z-carousel__content-page--${animationType}`
            )}
          >
            {paginatedData[currentPage]}
          </ul>
        </div>
        <button
          className={classNames(
            "z-carousel__page-control",
            "z-carousel__page-control--right"
          )}
          type="button"
          onClick={setNextPage}
          disabled={isOnLastPage || hideAnimation}
        >
          <ArrowLeftIcon className="z-carousel__icon" />
        </button>
      </div>
      <div className={"z-carousel__page-navigation"}>
        {pageNavigationIndexes.map((pageNavigationIndex) => (
          <button
            aria-label="Select Page"
            type="button"
            key={pageNavigationIndex}
            onClick={() => setPageByIndex(pageNavigationIndex)}
            className={classNames(
              "z-carousel__circle",
              currentPage === pageNavigationIndex &&
                "z-carousel__circle--selected"
            )}
          />
        ))}
      </div>
    </div>
  );
};
