import React, { useEffect, useState } from "react";
import { Radio } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import { ReactComponent as MeatSvg } from "./meat.svg";
import { ReactComponent as ChickenSvg } from "./chicken.svg";
import { ReactComponent as VegetablesSvg } from "./vegetables.svg";
import "./mealsOfWeek.css";

export function MealsOfWeek({ form, label, name, tooltipTitle }) {
  const [selectedOnMonday, setSelectedOnMonday] = useState();
  const [selectedOnTuesday, setSelectedOnTuesday] = useState();
  const [selectedOnWednesday, setSelectedOnWednesday] = useState();
  const [selectedOnThursday, setSelectedOnThursday] = useState();
  const [selectedOnFriday, setSelectedOnFriday] = useState();

  useEffect(() => {
    triggerChange();
  }, [
    selectedOnMonday,
    selectedOnTuesday,
    selectedOnWednesday,
    selectedOnThursday,
    selectedOnFriday,
  ]);

  const triggerChange = () => {
    form.setFieldsValue({
      [name]: {
        monday: selectedOnMonday,
        tuesday: selectedOnTuesday,
        wednesday: selectedOnWednesday,
        thursday: selectedOnThursday,
        friday: selectedOnFriday,
      },
    });
  };

  const checkMeals = () => {
    const mealsOfWeek = form.getFieldValue(name);
    if (Object.values(mealsOfWeek).includes(undefined)) {
      return Promise.reject(tooltipTitle);
    }
    return Promise.resolve();
  };

  return (
    <FormItem
      label={label}
      name={name}
      tooltipTitle={tooltipTitle}
      rules={[
        {
          validator: checkMeals,
        },
      ]}
    >
      <table>
        <tr>
          <td />
          <td>Lun</td>
          <td>Mar</td>
          <td>Mer</td>
          <td>Jeu</td>
          <td>Ven</td>
        </tr>
        <tr>
          <td>
            <MeatSvg />
          </td>
          <td>
            <Radio
              type="radio"
              name="monday"
              data-label="monday-meat"
              checked={selectedOnMonday === "meat"}
              onChange={() => setSelectedOnMonday("meat")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="tuesday"
              data-label="tuesday-meat"
              checked={selectedOnTuesday === "meat"}
              onChange={() => setSelectedOnTuesday("meat")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="wednesday"
              data-label="wednesday-meat"
              checked={selectedOnWednesday === "meat"}
              onChange={() => setSelectedOnWednesday("meat")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="thursday"
              data-label="thursday-meat"
              checked={selectedOnThursday === "meat"}
              onChange={() => setSelectedOnThursday("meat")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="friday"
              data-label="friday-meat"
              checked={selectedOnFriday === "meat"}
              onChange={() => setSelectedOnFriday("meat")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <ChickenSvg />
          </td>
          <td>
            <Radio
              type="radio"
              name="monday"
              data-label="monday-chicken"
              checked={selectedOnMonday === "chicken"}
              onChange={() => setSelectedOnMonday("chicken")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="tuesday"
              data-label="tuesday-chicken"
              checked={selectedOnTuesday === "chicken"}
              onChange={() => setSelectedOnTuesday("chicken")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="wednesday"
              data-label="wednesday-chicken"
              checked={selectedOnWednesday === "chicken"}
              onChange={() => setSelectedOnWednesday("chicken")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="thursday"
              data-label="thursday-chicken"
              checked={selectedOnThursday === "chicken"}
              onChange={() => setSelectedOnThursday("chicken")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="friday"
              data-label="friday-chicken"
              checked={selectedOnFriday === "chicken"}
              onChange={() => setSelectedOnFriday("chicken")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <VegetablesSvg />
          </td>
          <td>
            <Radio
              type="radio"
              name="monday"
              data-label="monday-vegetables"
              checked={selectedOnMonday === "vegetables"}
              onChange={() => setSelectedOnMonday("vegetables")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="tuesday"
              data-label="tuesday-vegetables"
              checked={selectedOnTuesday === "vegetables"}
              onChange={() => setSelectedOnTuesday("vegetables")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="wednesday"
              data-label="wednesday-vegetables"
              checked={selectedOnWednesday === "vegetables"}
              onChange={() => setSelectedOnWednesday("vegetables")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="thursday"
              data-label="thursday-vegetables"
              checked={selectedOnThursday === "vegetables"}
              onChange={() => setSelectedOnThursday("vegetables")}
            />
          </td>
          <td>
            <Radio
              type="radio"
              name="friday"
              data-label="friday-vegetables"
              checked={selectedOnFriday === "vegetables"}
              onChange={() => setSelectedOnFriday("vegetables")}
            />
          </td>
        </tr>
      </table>
    </FormItem>
  );
}
