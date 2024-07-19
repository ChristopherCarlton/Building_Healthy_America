import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface CollapseItemProps {
  title: string;
  children: React.ReactNode;
}

const CollapseItem: React.FC<CollapseItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 py-2">
      <div 
        className={`flex justify-between items-center cursor-pointer bg-[#1D568B] text-white p-4 rounded-md ${isOpen ? 'rounded-b-none' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-2xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out bg-[#1D568B] text-white rounded-b-md"
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const Collapse: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <CollapseItem title="We are more than a diagnosis">
        <p>A child's diagnosis is merely part of a family's journey.</p>
      </CollapseItem>
      <CollapseItem title="Families deserve to be served">
        <p>On a local level, and to connect on a national level.</p>
      </CollapseItem>
      <CollapseItem title="Our families are the experts">
        <p>And will continue to drive and shape the work that we do.</p>
      </CollapseItem>
      <CollapseItem title="There is strength in numbers">
        <p>The more families and partners that are mission-aligned that can get involved, the better served our children will be.</p>
      </CollapseItem>
    </div>
  );
};

export default Collapse;
