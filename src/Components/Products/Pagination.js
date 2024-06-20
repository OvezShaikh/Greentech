import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export function Pagination({ currentPage, totalPages, onPageChange }) {
  // const [active, setActive] = React.useState(1);
 
  // const getItemProps = (index) =>
  //   ({
  //     variant: active === index ? "filled" : "text",
  //     color: "gray",
  //     onClick: () => setActive(index),
  //     className: "rounded-full",
  //   } );
 
  const next = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
 
  const prev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
 
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <IconButton
            key={index + 1}
            variant={currentPage === index + 1 ? "filled" : "text"}
            color="gray"
            onClick={() => onPageChange(index + 1)}
            className="rounded-full"
          >
            {index + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}