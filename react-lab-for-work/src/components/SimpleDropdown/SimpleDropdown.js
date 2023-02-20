import React, { useCallback, useEffect, useRef, useState } from "react";
import { Menu, Item } from "./styles";
import PropTypes from "prop-types";
import { noop } from "lodash";

function SimpleDropdown({ text, buttonStyle, data, handleSelectItem }) {
  const btnRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleCloseDropdown = useCallback(
    (e) => {
      if (isOpen === true && e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  const handleClickItem = useCallback(
    (e) => {
      handleSelectItem(e.target.value);
      setIsOpen(false);
    },
    [handleSelectItem],
  );

  useEffect(() => {
    document.body.addEventListener("click", handleCloseDropdown);
    return () => {
      document.body.removeEventListener("click", handleCloseDropdown);
    };
  }, [handleCloseDropdown]);

  return (
    <div style={{ marginTop: "50px" }}>
      <button ref={btnRef} onClick={handleClickDropdown} {...buttonStyle}>
        {text}
      </button>
      {isOpen && (
        <Menu>
          {data.map((point) => (
            <Item
              key={point.value}
              value={point.value}
              onClick={handleClickItem}
            >
              {point.label}
            </Item>
          ))}
        </Menu>
      )}
    </div>
  );
}

export default SimpleDropdown;

SimpleDropdown.defaultProps = {
  buttonStyle: {},
  data: [],
  text: "",
  handleSelectItem: noop,
};

SimpleDropdown.propTypes = {
  buttonStyle: PropTypes.object,
  data: PropTypes.array,
  handleSelectItem: PropTypes.func,
  text: PropTypes.string,
};
