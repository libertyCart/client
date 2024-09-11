/* eslint-disable react/prop-types */
import { Button } from "antd/es/radio";

function ViewBtn({ text, className }) {
   return <Button className={`bg-red-500 text-white hover:text-white font-bold text-center ${className}`}>{text}</Button>;
}

export default ViewBtn;
