import { useState, useEffect } from "react";

import { Container } from "./Top.styles";
import { IoChevronUpOutline } from "react-icons/io5";

export default function Top() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    showButton && (
      <Container onClick={scrollToTop}>
        <IoChevronUpOutline size={24} />
        <p>TOP</p>
      </Container>
    )
  );
}
