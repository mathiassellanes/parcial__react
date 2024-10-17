import { FC, useState } from "react";
import Button from "../Button";
import Input from "../Input";

import './styles.scss'

interface SelectProps {
  label: string;
  options: string[];
  onChange: (value: string[]) => void;
}

const PropertyAdder: FC<SelectProps> = ({
  label,
  options,
  onChange
}) => {
  const [newCharValue, setNewCharValue] = useState('')

  const handleAddOption = () => {
    onChange([...options, newCharValue])

    setNewCharValue('')
  }

  const handleRemoveOption = (removedOption: string) => {
    onChange(options.filter((option) => option !== removedOption))
  }

  return (
    <label className="property-adder">
      {label}

      <div className="chip__container">
        {options.map((option) => (
          <div className="chip" key={option}>
            {option}
            <span className="chip__remove" onClick={() => handleRemoveOption(option)}>x</span>
          </div>
        ))}

        {
          options.length < 3 && (
            <div className="chip">
              <Input
                onChange={(e) => setNewCharValue(e.target.value)}
                placeholder="Característica"
                title="characterystic"
                value={newCharValue}
              />
              <Button
                text="+"
                className="button--primary"
                onClick={handleAddOption}
              />
            </div>
          )
        }
      </div>
    </label >
  );
}

export default PropertyAdder;
