import { ReactNode } from "react";

const Button = ({
   disabled,
   children,
   onClick,
}: {
   disabled: boolean;
   children: ReactNode;
   onClick: () => void;
}) => {
   return (
      <button
         onClick={onClick}
         style={{
            backgroundColor: disabled ? "red" : "blue",
            color: "white",
            padding: 10,
            border: 0,
            borderRadius: 8,
            cursor: "pointer",
         }}
      >
         {children}
      </button>
   );
};

export default Button;
